import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { Reach } from '@/models/Reach'

// Helper to determine if an IP address is local / private
function isLocalIp(ip: string): boolean {
  if (!ip) return true
  const trimmed = ip.trim()
  return (
    trimmed === '127.0.0.1' ||
    trimmed === '::1' ||
    trimmed === 'localhost' ||
    trimmed.startsWith('::ffff:127.') ||
    trimmed.startsWith('10.') ||
    trimmed.startsWith('192.168.') ||
    trimmed.startsWith('172.16.')
  )
}

// Fetch public IP if running on localhost
async function getPublicIp(): Promise<string> {
  try {
    const res = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      if (data.ip) return data.ip
    }
  } catch (err) {
    console.warn('Could not fetch public IP fallback:', err)
  }
  return '8.8.8.8' // fallback DNS IP if offline
}

// Lookup location details for IP address
async function fetchIpLocation(ip: string) {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,regionName,city,lat,lon,isp,query`, {
      cache: 'no-store',
    })
    if (res.ok) {
      const data = await res.json()
      if (data.status === 'success') {
        return {
          ip: data.query || ip,
          city: data.city || 'Unknown City',
          region: data.regionName || 'Unknown Region',
          country: data.country || 'Unknown Country',
          countryCode: data.countryCode || 'UN',
          lat: typeof data.lat === 'number' ? data.lat : 0,
          lon: typeof data.lon === 'number' ? data.lon : 0,
          isp: data.isp || 'Unknown ISP',
        }
      }
    }
  } catch (err) {
    console.warn('ip-api.com request failed, trying ipapi.co fallback:', err)
  }

  // Backup location lookup using ipapi.co
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      if (!data.error) {
        return {
          ip: data.ip || ip,
          city: data.city || 'Unknown City',
          region: data.region || 'Unknown Region',
          country: data.country_name || 'Unknown Country',
          countryCode: data.country_code || 'UN',
          lat: typeof data.latitude === 'number' ? data.latitude : 0,
          lon: typeof data.longitude === 'number' ? data.longitude : 0,
          isp: data.org || data.asn || 'Unknown ISP',
        }
      }
    }
  } catch (err) {
    console.warn('Backup geolocation fetch failed:', err)
  }

  return {
    ip,
    city: 'Unknown City',
    region: 'Unknown Region',
    country: 'Unknown Country',
    countryCode: 'UN',
    lat: 0,
    lon: 0,
    isp: 'Unknown ISP',
  }
}

export async function POST(req: NextRequest) {
  try {
    let clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip')?.trim() ||
      req.headers.get('cf-connecting-ip')?.trim() ||
      req.headers.get('x-client-ip')?.trim() ||
      '127.0.0.1'

    const userAgent = req.headers.get('user-agent') || ''
    const body = await req.json().catch(() => ({}))
    const pagePath = body.path || '/reach'

    // If request originates from localhost during dev, resolve server/client's actual public IP
    if (isLocalIp(clientIp)) {
      clientIp = await getPublicIp()
    }

    await connectDB()

    // Deduplication check: ignore duplicate logs from same IP within last 15 minutes unless force is requested
    const isForce = body.force === true
    if (!isForce) {
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000)
      const existingRecent = await Reach.findOne({
        ip: clientIp,
        createdAt: { $gte: fifteenMinutesAgo },
      }).sort({ createdAt: -1 })

      if (existingRecent) {
        return NextResponse.json({
          success: true,
          data: existingRecent,
          deduplicated: true,
          message: 'Visit already recorded recently for this IP',
        })
      }
    }

    // Geolocation lookup
    const locData = await fetchIpLocation(clientIp)

    const isPrecise = body.isPrecise === true
    const exactLat = typeof body.exactLat === 'number' ? body.exactLat : undefined
    const exactLon = typeof body.exactLon === 'number' ? body.exactLon : undefined
    const accuracy = typeof body.accuracy === 'number' ? body.accuracy : undefined
    const address = body.address || ''
    const suburb = body.suburb || ''
    const postcode = body.postcode || ''

    const finalCity = (isPrecise && body.city) ? body.city : locData.city
    const finalRegion = (isPrecise && body.region) ? body.region : locData.region
    const finalCountry = (isPrecise && body.country) ? body.country : locData.country
    const finalCountryCode = (isPrecise && body.countryCode) ? body.countryCode : locData.countryCode

    const newVisit = await Reach.create({
      ip: locData.ip,
      city: finalCity,
      region: finalRegion,
      country: finalCountry,
      countryCode: finalCountryCode,
      lat: locData.lat,
      lon: locData.lon,
      exactLat,
      exactLon,
      accuracy,
      address,
      suburb,
      postcode,
      isPrecise,
      isp: locData.isp,
      userAgent,
      path: pagePath,
    })

    return NextResponse.json({
      success: true,
      data: newVisit,
      message: isPrecise ? 'Precise GPS location logged successfully to MongoDB' : 'Visit reach logged successfully to MongoDB',
    })
  } catch (error: any) {
    console.error('Error in POST /api/reach:', error)
    let msg = error.message || 'Failed to log visit reach'
    if (msg.includes('MongooseServerSelectionError') || msg.includes('Could not connect to any servers')) {
      msg = 'MongoDB Atlas Connection Error: Please whitelist your IP address (or 0.0.0.0/0) in MongoDB Atlas Network Access.'
    }
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()

    // Fetch latest 100 visits
    const visits = await Reach.find().sort({ createdAt: -1 }).limit(100).lean()

    const totalCount = await Reach.countDocuments()
    const uniqueIps = await Reach.distinct('ip')

    // Aggregate top countries
    const topCountries = await Reach.aggregate([
      { $group: { _id: { country: '$country', code: '$countryCode' }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ])

    // Aggregate top cities
    const topCities = await Reach.aggregate([
      { $group: { _id: { city: '$city', country: '$country' }, count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ])

    return NextResponse.json({
      success: true,
      visits,
      stats: {
        totalVisits: totalCount,
        uniqueVisitors: uniqueIps.length,
        topCountries: topCountries.map((c) => ({
          country: c._id.country || 'Unknown',
          countryCode: c._id.code || 'UN',
          count: c.count,
        })),
        topCities: topCities.map((c) => ({
          city: c._id.city || 'Unknown',
          country: c._id.country || 'Unknown',
          count: c.count,
        })),
      },
    })
  } catch (error: any) {
    console.error('Error in GET /api/reach:', error)
    let msg = error.message || 'Failed to fetch reach analytics'
    if (msg.includes('MongooseServerSelectionError') || msg.includes('Could not connect to any servers')) {
      msg = 'MongoDB Atlas Connection Error: Please whitelist your IP address (or 0.0.0.0/0) in MongoDB Atlas Network Access.'
    }
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    )
  }
}
