export const INDEXNOW_KEY = '532b6ff78ba841d7901d0d3bb5e02fe1'
export const DEFAULT_HOST = 'www.devtacet.me'
export const DEFAULT_KEY_LOCATION = `https://${DEFAULT_HOST}/${INDEXNOW_KEY}.txt`

export const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
]

export interface IndexNowPayload {
  host: string
  key: string
  keyLocation?: string
  urlList: string[]
}

export interface IndexNowResponse {
  endpoint: string
  status: number
  statusText: string
  ok: boolean
  message?: string
}

/**
 * Submit one or more URLs to IndexNow / Bing
 */
export async function submitToIndexNow(
  urls: string | string[],
  options?: {
    host?: string
    key?: string
    keyLocation?: string
  }
): Promise<IndexNowResponse[]> {
  const host = options?.host || process.env.NEXT_PUBLIC_SITE_HOST || DEFAULT_HOST
  const key = options?.key || process.env.INDEXNOW_KEY || INDEXNOW_KEY
  const keyLocation =
    options?.keyLocation || `https://${host}/${key}.txt`

  const urlList = Array.isArray(urls) ? urls : [urls]

  // Filter out any empty URLs and ensure they start with http
  const validUrlList = urlList
    .map((u) => u.trim())
    .filter((u) => u.startsWith('http://') || u.startsWith('https://'))

  if (validUrlList.length === 0) {
    throw new Error('No valid URLs provided for IndexNow submission.')
  }

  const payload: IndexNowPayload = {
    host,
    key,
    keyLocation,
    urlList: validUrlList,
  }

  const results: IndexNowResponse[] = []

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Devtacet-IndexNow-Client/1.0',
        },
        body: JSON.stringify(payload),
      })

      const isSuccess = response.status === 200 || response.status === 202

      results.push({
        endpoint,
        status: response.status,
        statusText: response.statusText,
        ok: isSuccess,
        message: isSuccess
          ? `Submitted ${validUrlList.length} URLs successfully (HTTP ${response.status})`
          : `Failed with HTTP ${response.status}: ${response.statusText}`,
      })
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      results.push({
        endpoint,
        status: 0,
        statusText: 'Fetch Error',
        ok: false,
        message: errorMsg,
      })
    }
  }

  return results
}
