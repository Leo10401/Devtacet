import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/reach', '/api/reach'],
      },
      {
        userAgent: [
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
        disallow: ['/reach', '/api/reach'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
