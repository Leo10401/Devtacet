import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Contact Us — Devtacet Digital Studio',
  description:
    'Need project help? Contact Devtacet for full-stack mobile apps, websites, data analytics, and SEO marketing engineering.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-16 flex flex-col justify-center">
        <ContactSection />
      </main>
      <div className="border-t border-border bg-card">
        <SiteFooter />
      </div>
    </>
  )
}
