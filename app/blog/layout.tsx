import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Devtacet Blog',
    default: 'Blog — Devtacet Digital Studio',
  },
  description:
    'Insights on web development, mobile apps, SEO, social media marketing, MIS, and system software from the Devtacet engineering team.',
  openGraph: {
    title: 'Blog — Devtacet Digital Studio',
    description:
      'Insights on web development, mobile apps, SEO, social media marketing, MIS, and system software from the Devtacet engineering team.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-svh pt-20 pb-16">
        {children}
      </main>
      <div className="border-t border-border bg-card">
        <SiteFooter />
      </div>
    </>
  )
}
