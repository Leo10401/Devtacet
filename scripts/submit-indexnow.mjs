/**
 * IndexNow Bing / Search Engines submission script for Devtacet
 * Usage: node scripts/submit-indexnow.mjs
 */

const HOST = 'www.devtacet.me'
const KEY = '532b6ff78ba841d7901d0d3bb5e02fe1'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
]

const URLS = [
  `https://${HOST}`,
  `https://${HOST}/services`,
  `https://${HOST}/web-development-company-lucknow`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/services/web-development`,
  `https://${HOST}/services/mobile-app-development`,
  `https://${HOST}/services/custom-software`,
  `https://${HOST}/services/analytics`,
  `https://${HOST}/services/seo`,
  `https://${HOST}/services/social-media-marketing`,
  `https://${HOST}/case-studies`,
  `https://${HOST}/case-studies/atlas-redesign`,
  `https://${HOST}/case-studies/relay-cloud-api`,
  `https://${HOST}/case-studies/edge-deploy-ui`,
  `https://${HOST}/case-studies/pulseframe-mobile`,
  `https://${HOST}/compare/devtacet-vs-agency`,
  `https://${HOST}/compare/devtacet-vs-freelancer`,
  `https://${HOST}/blog`,
  `https://${HOST}/blog/web-development`,
  `https://${HOST}/blog/android-development`,
  `https://${HOST}/blog/seo`,
  `https://${HOST}/blog/social-media-marketing`,
  `https://${HOST}/blog/mis`,
  `https://${HOST}/blog/system-software`,
]

async function submitIndexNow() {
  console.log(`\n🚀 Starting IndexNow submission for ${HOST}...`)
  console.log(`🔑 Key: ${KEY}`)
  console.log(`📄 Key Location: ${KEY_LOCATION}`)
  console.log(`📋 Total URLs: ${URLS.length}\n`)

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  }

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`📡 Pinging ${endpoint}...`)
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Devtacet-IndexNow-Script/1.0',
        },
        body: JSON.stringify(payload),
      })

      const statusMap = {
        200: 'OK - URLs submitted successfully',
        202: 'Accepted - URLs received, IndexNow key pending verification',
        400: 'Bad Request - Invalid format',
        403: 'Forbidden - In-valid key or key location mismatch',
        422: 'Unprocessable Entity - URLs do not belong to host',
        429: 'Too Many Requests - Rate limited',
      }

      const description = statusMap[res.status] || res.statusText || 'Unknown Status'
      const isSuccess = res.status === 200 || res.status === 202

      if (isSuccess) {
        console.log(`✅ [${res.status}] ${endpoint} -> ${description}`)
      } else {
        const text = await res.text().catch(() => '')
        console.error(`❌ [${res.status}] ${endpoint} -> ${description} ${text}`)
      }
    } catch (err) {
      console.error(`❌ Connection error submitting to ${endpoint}:`, err.message)
    }
  }

  console.log(`\n✨ IndexNow submission process completed!`)
}

submitIndexNow()
