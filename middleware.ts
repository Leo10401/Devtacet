import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostname = req.headers.get('host') || ''

  // Strip port if present (e.g. "samosa.localhost:3000" -> "samosa.localhost")
  const hostWithoutPort = hostname.split(':')[0].toLowerCase()

  let subdomain: string | null = null

  // Check development localhost subdomain (e.g., samosa.localhost)
  if (hostWithoutPort.endsWith('.localhost')) {
    subdomain = hostWithoutPort.replace('.localhost', '')
  } else {
    // Check production custom domains (e.g., samosa.example.com)
    // You can set NEXT_PUBLIC_ROOT_DOMAIN in .env (e.g., example.com)
    const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || ''
    if (rootDomain && hostWithoutPort.endsWith(`.${rootDomain}`)) {
      subdomain = hostWithoutPort.replace(`.${rootDomain}`, '')
    } else {
      // Fallback: extract first part if multiple dots exist and not IP
      const parts = hostWithoutPort.split('.')
      if (parts.length > 2 && !/^\d+$/.test(parts[parts.length - 1])) {
        subdomain = parts[0]
      }
    }
  }

  // Redirect www to canonical non-www hostname
  if (hostWithoutPort === 'www.devtacet.me' || hostWithoutPort.startsWith('www.')) {
    const canonicalHost = hostWithoutPort.replace(/^www\./, '')
    const targetUrl = new URL(`${url.pathname}${url.search}`, `https://${canonicalHost}`)
    return NextResponse.redirect(targetUrl, 301)
  }

  // Ignore 'www' or empty subdomains
  if (subdomain && subdomain !== 'www' && subdomain !== '') {
    // Rewrite path internally to /[subdomain] or /[subdomain]/path
    const searchParams = url.searchParams.toString()
    const queryString = searchParams ? `?${searchParams}` : ''
    
    // Rewrite to `/${subdomain}${url.pathname}`
    const rewriteUrl = new URL(`/${subdomain}${url.pathname}${queryString}`, req.url)
    const response = NextResponse.rewrite(rewriteUrl)

    // Add X-Robots-Tag for admin subdomains (e.g. samosa)
    if (subdomain === 'samosa') {
      response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
    }

    return response
  }

  const response = NextResponse.next()

  // Add X-Robots-Tag if visiting /samosa path directly
  if (url.pathname.startsWith('/samosa')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals, static files, images)
     * 3. Static files (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .css, .js, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml)).*)',
  ],
}
