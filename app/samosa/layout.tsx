import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Devtacet Samosa - Admin Portal',
  description: 'Internal administration dashboard for Devtacet management.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
}

export default function SamosaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
