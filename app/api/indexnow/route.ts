import { NextRequest, NextResponse } from 'next/server'
import { submitToIndexNow, INDEXNOW_KEY, DEFAULT_HOST } from '@/lib/indexnow'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const urls = body.urls || body.urlList

    if (!urls || (Array.isArray(urls) && urls.length === 0)) {
      return NextResponse.json(
        { error: 'Missing `urls` or `urlList` array in request body' },
        { status: 400 }
      )
    }

    const host = body.host || DEFAULT_HOST
    const key = body.key || INDEXNOW_KEY
    const results = await submitToIndexNow(urls, { host, key })

    return NextResponse.json({
      success: true,
      results,
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'IndexNow endpoint is active',
    host: DEFAULT_HOST,
    keyLocation: `https://${DEFAULT_HOST}/${INDEXNOW_KEY}.txt`,
    endpoints: [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
    ],
  })
}
