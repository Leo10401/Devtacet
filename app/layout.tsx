import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { DevtacetLoader } from '@/components/devtacet-loader'
import { VisitorTracker } from '@/components/visitor-tracker'
import { JsonLd } from '@/components/json-ld'
import './globals.css'

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Devtacet — Digital Studio | Mobile Apps, Websites, Analytics & SEO',
    template: '%s | Devtacet — Digital Studio',
  },
  description:
    'Devtacet is a full-service digital studio building mobile apps, high-performance websites, custom data analytics tools, and AI-driven SEO marketing solutions.',
  applicationName: 'Devtacet',
  authors: [{ name: 'Devtacet Team', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Digital Studio',
    'Mobile App Development',
    'Website Development',
    'Data Analytics Tools',
    'SEO Marketing',
    'Technical SEO',
    'Generative Engine Optimization',
    'GEO',
    'AI SEO',
    'React Native',
    'Flutter',
    'Next.js Studio',
    'Devtacet',
  ],
  creator: 'Devtacet',
  publisher: 'Devtacet',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Devtacet — Digital Studio | Mobile Apps, Websites, Analytics & SEO',
    description:
      'Devtacet builds mobile apps, websites, and data analytics tools with SEO marketing that gets you found across Google & AI search engines.',
    url: siteUrl,
    siteName: 'Devtacet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Devtacet — Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devtacet — Digital Studio | Mobile Apps, Websites, Analytics & SEO',
    description:
      'Devtacet builds mobile apps, websites, and data analytics tools backed by technical SEO & AI search optimization.',
    images: ['/placeholder-logo.png'],
    creator: '@devtacet',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#16141f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${heading.variable} ${body.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased font-sans">
        <DevtacetLoader />
        <VisitorTracker />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
