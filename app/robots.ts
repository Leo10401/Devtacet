import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.me'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/samosa', '/samosa/*', '/reach', '/reach/*', '/api', '/api/*'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'Diffbot',
          'Cohere-ai',
          'Meta-ExternalAgent',
        ],
        allow: '/',
        disallow: ['/samosa', '/samosa/*', '/reach', '/reach/*', '/api', '/api/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
