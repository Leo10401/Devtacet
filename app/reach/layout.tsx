import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Reach — Internal Analytics',
  description: 'Hidden internal IP and visitor reach analytics page.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ReachLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
