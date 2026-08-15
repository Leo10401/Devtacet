import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Devtacet — Digital Studio',
    short_name: 'Devtacet',
    description:
      'Devtacet is a digital studio building mobile apps, websites, and data analytics tools, backed by SEO marketing that gets you found.',
    start_url: '/',
    display: 'standalone',
    background_color: '#16141f',
    theme_color: '#16141f',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
