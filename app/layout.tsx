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
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: 'E-P-2wOtDXwNu6MQCf9EMuztuaeEO-TP3bCv-cugbAc',
  },
  title: {
    default: 'Devtacet | Digital Solutions Company in Lucknow, India',
    template: '%s | Devtacet',
  },
  description:
    'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
  applicationName: 'Devtacet',
  authors: [{ name: 'Devtacet Team', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Devtacet',
    'digital solutions company',
    'web development company Lucknow',
    'website development company',
    'mobile app development company',
    'custom software development',
    'software company Lucknow',
    'analytics systems',
    'data analytics tools',
    'SEO company Lucknow',
    'SEO services India',
    'social media marketing agency Lucknow',
    'Generative Engine Optimization',
    'GEO',
    'Next.js development',
    'React Native apps',
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
    title: 'Devtacet | Digital Solutions Company in Lucknow, India',
    description:
      'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
    url: siteUrl,
    siteName: 'Devtacet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Devtacet - Digital Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devtacet | Digital Solutions Company in Lucknow, India',
    description:
      'Digital solutions company based in Lucknow, India building websites, mobile apps, custom software, analytics systems, and SEO.',
    images: ['/og-image.png'],
    creator: '@devtacet',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    shortcut: '/icon.svg',
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
