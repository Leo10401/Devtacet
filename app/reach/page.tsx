'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe,
  Users,
  MapPin,
  Compass,
  RefreshCw,
  Send,
  CheckCircle2,
  AlertCircle,
  Search,
  Laptop,
  Shield,
  Activity,
  ArrowUpRight,
  Database,
  Navigation,
  Crosshair,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

interface ReachLog {
  _id: string
  ip: string
  city: string
  region: string
  country: string
  countryCode: string
  lat: number
  lon: number
  exactLat?: number
  exactLon?: number
  accuracy?: number
  address?: string
  suburb?: string
  postcode?: string
  isPrecise?: boolean
  isp: string
  userAgent: string
  path: string
  createdAt: string
}

interface ReachStats {
  totalVisits: number
  uniqueVisitors: number
  topCountries: Array<{ country: string; countryCode: string; count: number }>
  topCities: Array<{ city: string; country: string; count: number }>
}

function getFlagEmoji(countryCode: string) {
  if (!countryCode || countryCode === 'UN' || countryCode.length !== 2) return '🌐'
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

function formatTimeAgo(dateString: string) {
  try {
    const date = new Date(dateString)
    const now = new Date()
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffSec < 10) return 'Just now'
    if (diffSec < 60) return `${diffSec}s ago`
    const diffMin = Math.floor(diffSec / 60)
    if (diffMin < 60) return `${diffMin}m ago`
    const diffHour = Math.floor(diffMin / 60)
    if (diffHour < 24) return `${diffHour}h ago`
    const diffDays = Math.floor(diffHour / 24)
    return `${diffDays}d ago`
  } catch {
    return 'Recently'
  }
}

export default function ReachPage() {
  const [visits, setVisits] = useState<ReachLog[]>([])
  const [stats, setStats] = useState<ReachStats>({
    totalVisits: 0,
    uniqueVisitors: 0,
    topCountries: [],
    topCities: [],
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [logging, setLogging] = useState<boolean>(false)
  const [lastLoggedVisit, setLastLoggedVisit] = useState<ReachLog | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const fetchReachData = useCallback(async () => {
    setLoading(true)
    setErrorMsg(null)
    try {
      const res = await fetch('/api/reach', { cache: 'no-store' })
      const json = await res.json()
      if (json.success) {
        setVisits(json.visits || [])
        setStats(
          json.stats || {
            totalVisits: 0,
            uniqueVisitors: 0,
            topCountries: [],
            topCities: [],
          }
        )
      } else {
        setErrorMsg(json.error || 'Could not load reach analytics.')
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to connect to reach API endpoint.')
    } finally {
      setLoading(false)
    }
  }, [])

  const logCurrentVisit = useCallback(async () => {
    setLogging(true)
    setErrorMsg(null)
    try {
      const res = await fetch('/api/reach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: '/reach', force: true }),
      })
      const json = await res.json()
      if (json.success && json.data) {
        setLastLoggedVisit(json.data)
        await fetchReachData()
      } else {
        setErrorMsg(json.error || 'Failed to log visit.')
      }
    } catch (err) {
      console.error('Failed to log current visit:', err)
      setErrorMsg('Failed to log current visit.')
    } finally {
      setLogging(false)
    }
  }, [fetchReachData])

  const logPreciseVisit = useCallback(async () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.')
      return
    }
    setLogging(true)
    setErrorMsg(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude, accuracy } = position.coords

        let addressData = {
          city: '',
          region: '',
          country: '',
          countryCode: '',
          address: '',
          suburb: '',
          postcode: '',
        }

        // Reverse geocoding via OpenStreetMap Nominatim
        try {
          const revRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          if (revRes.ok) {
            const revJson = await revRes.json()
            const a = revJson.address || {}
            addressData = {
              city: a.city || a.town || a.village || a.suburb || '',
              region: a.state || a.county || '',
              country: a.country || '',
              countryCode: a.country_code ? a.country_code.toUpperCase() : '',
              address: revJson.display_name || '',
              suburb: a.suburb || a.neighbourhood || a.residential || '',
              postcode: a.postcode || '',
            }
          }
        } catch (err) {
          console.warn('Reverse geocoding fetch failed:', err)
        }

        try {
          const res = await fetch('/api/reach', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              path: '/reach',
              force: true,
              isPrecise: true,
              exactLat: latitude,
              exactLon: longitude,
              accuracy: Math.round(accuracy),
              ...addressData,
            }),
          })
          const json = await res.json()
          if (json.success && json.data) {
            setLastLoggedVisit(json.data)
            await fetchReachData()
          } else {
            setErrorMsg(json.error || 'Failed to log precise location.')
          }
        } catch (err: any) {
          setErrorMsg('Failed to log precise location.')
        } finally {
          setLogging(false)
        }
      },
      (geoErr) => {
        setLogging(false)
        if (geoErr.code === geoErr.PERMISSION_DENIED) {
          setErrorMsg(
            'Location permission denied. Please allow location access in your browser settings to get precise GPS coordinates.'
          )
        } else {
          setErrorMsg(`Location error: ${geoErr.message}`)
        }
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    )
  }, [fetchReachData])

  // Fetch reach analytics data on page mount
  useEffect(() => {
    fetchReachData()
  }, [fetchReachData])

  const filteredVisits = visits.filter((v) => {
    const query = searchTerm.toLowerCase().trim()
    if (!query) return true
    return (
      v.ip.toLowerCase().includes(query) ||
      v.city.toLowerCase().includes(query) ||
      v.country.toLowerCase().includes(query) ||
      v.isp.toLowerCase().includes(query) ||
      (v.address && v.address.toLowerCase().includes(query)) ||
      (v.suburb && v.suburb.toLowerCase().includes(query))
    )
  })

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <SiteHeader />

      <main id="main" className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 pt-24 pb-16">
        {/* Top Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>MongoDB Atlas Connected</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
              Global Reach & Visitor Insights
            </h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl">
              Real-time IP geolocation and high-precision browser GPS tracking stored directly in your MongoDB database.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={logPreciseVisit}
              disabled={logging}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 shadow-lg shadow-emerald-500/20"
              title="Request high-accuracy GPS coordinates & street address"
            >
              {logging ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Crosshair className="w-4 h-4 text-emerald-100 animate-pulse" />
              )}
              <span>{logging ? 'Locating...' : 'Log Precise GPS Location'}</span>
            </button>

            <button
              onClick={logCurrentVisit}
              disabled={logging}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 shadow-lg shadow-primary/20"
            >
              {logging ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span>Log IP Location</span>
            </button>

            <button
              onClick={fetchReachData}
              disabled={loading}
              className="inline-flex items-center justify-center p-2.5 rounded-xl border border-border bg-card/60 hover:bg-card text-foreground transition-all"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Current User Logged Alert */}
        <AnimatePresence>
          {lastLoggedVisit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                    <span>Visit Recorded to MongoDB</span>
                    {lastLoggedVisit.isPrecise && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono border border-emerald-500/30">
                        🎯 Precise GPS (±{lastLoggedVisit.accuracy}m)
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    IP: <span className="font-mono">{lastLoggedVisit.ip}</span> • Location:{' '}
                    {getFlagEmoji(lastLoggedVisit.countryCode)}{' '}
                    {lastLoggedVisit.suburb ? `${lastLoggedVisit.suburb}, ` : ''}
                    {lastLoggedVisit.city}, {lastLoggedVisit.country}
                    {lastLoggedVisit.address && (
                      <span className="block text-[11px] text-emerald-300/90 mt-0.5 font-mono truncate max-w-xl">
                        📍 {lastLoggedVisit.address}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono bg-emerald-950/60 px-2.5 py-1 rounded-md text-emerald-400 border border-emerald-800 shrink-0">
                200 OK
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {errorMsg && (
          <div className="mb-8 p-4 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center gap-3 text-destructive">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm">{errorMsg}</p>
          </div>
        )}

        {/* Analytics Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Total Reach Visits
              </span>
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">
                {stats.totalVisits.toLocaleString()}
              </span>
              <span className="text-xs text-emerald-400 font-medium flex items-center">
                <ArrowUpRight className="w-3 h-3" /> Live
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total impressions logged</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Unique IP Addresses
              </span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold font-display">
                {stats.uniqueVisitors.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground font-medium">Distinct IPs</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Unique devices tracked</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Top Country
              </span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl font-bold font-display truncate">
                {stats.topCountries[0]
                  ? `${getFlagEmoji(stats.topCountries[0].countryCode)} ${stats.topCountries[0].country}`
                  : 'N/A'}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.topCountries[0] ? `${stats.topCountries[0].count} visits recorded` : 'No logs yet'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm relative overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Most Active City
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Compass className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-2xl font-bold font-display truncate">
                {stats.topCities[0] ? stats.topCities[0].city : 'N/A'}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.topCities[0] ? `${stats.topCities[0].country}` : 'No location data'}
            </p>
          </motion.div>
        </div>

        {/* Middle Section: Top Countries Breakdown & City Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl border border-border bg-card/80">
            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Top Countries Breakdown
            </h3>
            {stats.topCountries.length === 0 ? (
              <p className="text-sm text-muted-foreground">No country stats available yet.</p>
            ) : (
              <div className="space-y-3">
                {stats.topCountries.slice(0, 5).map((c, i) => {
                  const pct = Math.round((c.count / (stats.totalVisits || 1)) * 100)
                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium">
                          <span className="text-base">{getFlagEmoji(c.countryCode)}</span>
                          {c.country}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {c.count} ({pct}%)
                        </span>
                      </div>
                      <div className="h-2 w-full bg-secondary/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(pct, 4)}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/80">
            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Top Cities Distribution
            </h3>
            {stats.topCities.length === 0 ? (
              <p className="text-sm text-muted-foreground">No city stats recorded yet.</p>
            ) : (
              <div className="space-y-3">
                {stats.topCities.slice(0, 5).map((c, i) => {
                  return (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                          #{i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{c.city}</p>
                          <p className="text-xs text-muted-foreground">{c.country}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-background text-xs font-mono text-muted-foreground border border-border">
                        {c.count} visits
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Visitor Reach Logs Table Header & Filter */}
        <div className="rounded-2xl border border-border bg-card/80 overflow-hidden">
          <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold font-display">Recent Visitor Logs</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Displaying latest visits with IP address, precise GPS coordinates, address, and network details
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search IP, City, Address, ISP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 text-xs font-semibold uppercase text-muted-foreground border-b border-border">
                <tr>
                  <th className="px-6 py-3.5">IP & Accuracy</th>
                  <th className="px-6 py-3.5">Location & Address</th>
                  <th className="px-6 py-3.5">ISP / Network</th>
                  <th className="px-6 py-3.5">Coordinates</th>
                  <th className="px-6 py-3.5 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {loading && visits.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                      <div className="inline-flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-primary" />
                        <span>Loading visitor reach logs from MongoDB...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredVisits.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                      No matching reach logs found in database.
                    </td>
                  </tr>
                ) : (
                  filteredVisits.map((v) => (
                    <tr key={v._id} className="hover:bg-secondary/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-foreground">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 font-medium">
                            <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{v.ip}</span>
                          </div>
                          {v.isPrecise ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] w-fit border border-emerald-500/30">
                              <Crosshair className="w-2.5 h-2.5" />
                              GPS Precise (±{v.accuracy || 10}m)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-muted-foreground text-[10px] w-fit border border-border">
                              🌐 IP Approx
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2">
                          <span className="text-lg mt-0.5">{getFlagEmoji(v.countryCode)}</span>
                          <div>
                            <p className="font-semibold text-xs">
                              {v.suburb ? `${v.suburb}, ` : ''}
                              {v.city}, {v.region}
                            </p>
                            <p className="text-[11px] text-muted-foreground">{v.country}</p>
                            {v.address && (
                              <p className="text-[11px] text-emerald-400/90 font-mono mt-0.5 truncate max-w-xs" title={v.address}>
                                📍 {v.address}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Laptop className="w-3.5 h-3.5 shrink-0 opacity-60" />
                          <span className="truncate max-w-[160px]">{v.isp}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                        {v.exactLat && v.exactLon ? (
                          <a
                            href={`https://www.google.com/maps?q=${v.exactLat},${v.exactLon}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:underline"
                            title="Open in Google Maps"
                          >
                            <Navigation className="w-3 h-3 text-emerald-400" />
                            <span>{v.exactLat.toFixed(4)}, {v.exactLon.toFixed(4)}</span>
                          </a>
                        ) : v.lat && v.lon ? (
                          <a
                            href={`https://www.google.com/maps?q=${v.lat},${v.lon}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary/80 border border-border hover:underline"
                            title="Open City Region in Google Maps"
                          >
                            <span>{v.lat.toFixed(2)}, {v.lon.toFixed(2)}</span>
                          </a>
                        ) : (
                          <span className="text-muted-foreground/60">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right text-xs text-muted-foreground font-mono">
                        {formatTimeAgo(v.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
