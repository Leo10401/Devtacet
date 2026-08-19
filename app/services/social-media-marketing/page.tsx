import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Share2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  MessageSquare,
  Users,
  Target,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Social Media Marketing Services for Tech & Startups | Devtacet',
  description:
    'Devtacet delivers data-driven social media marketing, content distribution loops, and brand positioning strategies built specifically for digital products and businesses.',
  alternates: {
    canonical: '/services/social-media-marketing',
  },
  openGraph: {
    title: 'Social Media Marketing Services | Devtacet',
    description:
      'Data-driven social media marketing, developer engagement loops, and revenue-tied growth.',
    url: 'https://devtacet.me/services/social-media-marketing',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How does Devtacet approach social media marketing for tech companies?',
    a: 'We focus on technical authenticity and product-led storytelling. Instead of generic engagement bait, we translate engineering capabilities, product updates, and industry insights into digestible content that earns the trust of founders, developers, and decision-makers.',
  },
  {
    q: 'Which social platforms does Devtacet manage?',
    a: 'We specialize in LinkedIn, Twitter / X, GitHub community positioning, and YouTube/Instagram for digital brands looking to build an authoritative presence in the technology space.',
  },
  {
    q: 'How do you measure ROI from social media marketing?',
    a: 'We track referral traffic, inbound lead attribution, brand search volume growth, content engagement rates, and demo/contact form submissions rather than vanity follower counts.',
  },
  {
    q: 'Do you create the content or do we need to provide it?',
    a: 'Devtacet handles full-funnel content creation: writing copy, creating technical infographics/visuals, establishing monthly content calendars, and scheduling posts.',
  },
]

export default function SocialMediaMarketingServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Marketing',
    serviceType: 'Digital Marketing & Brand Positioning',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'Data-driven social media marketing and brand growth strategies built for digital products and technology companies.',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Social Media Marketing' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400">
              <Share2 className="size-3.5" />
              Brand Positioning & Growth
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Social Media Strategy for Tech Products & Growing Businesses
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, helping brands grow their audience and attract qualified inbound leads through authentic, high-impact social media marketing.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-pink-400">Revenue</p>
              <p className="mt-1 text-xs text-zinc-400">Tied Directly to Lead Pipeline</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">Full-Funnel</p>
              <p className="mt-1 text-xs text-zinc-400">Strategy, Copy & Visual Assets</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">B2B & B2C</p>
              <p className="mt-1 text-xs text-zinc-400">LinkedIn & X Growth Engine</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Marketing Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Editorial Content Strategy</h3>
                  <p className="mt-1 text-xs text-zinc-400">Structured weekly content pillars addressing customer pain points, feature breakdowns, and industry trend commentary.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Executive & Founder Branding</h3>
                  <p className="mt-1 text-xs text-zinc-400">Positioning leadership teams as domain authorities on LinkedIn and Twitter with thoughtful, high-retention ghostwritten insights.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Product Launch Campaigns</h3>
                  <p className="mt-1 text-xs text-zinc-400">Coordinated multi-channel launch playbooks for major software releases, funding announcements, and new feature rollouts.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Community & Developer Advocacy</h3>
                  <p className="mt-1 text-xs text-zinc-400">Engaging technical communities across social channels to turn passive readers into passionate product advocates.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Low Engagement & Inconsistent Posting:</strong> We maintain a reliable editorial rhythm that builds compounding brand recall.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Generic Agency Jargon:</strong> We craft technical, nuanced messaging that resonates with sophisticated software buyers and founders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-pink-400 shrink-0 mt-0.5" />
                  <span><strong>Unattributed Marketing Spend:</strong> We configure end-to-end UTM parameters and analytics dashboards so you see exact traffic sources.</span>
                </li>
              </ul>
            </section>

            {/* Related Guide Callout */}
            <section className="rounded-3xl border border-pink-500/20 bg-pink-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">Featured Article</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Social Media Marketing Strategy for Digital Products</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Explore our strategic framework covering content loops, engagement funnels, and revenue-tied social metrics.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/blog/social-media-marketing" className="inline-flex items-center gap-1 text-pink-400 hover:underline">
                  Read SMM Playbook <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/services/seo" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Combine with Technical SEO →
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-6">
                    <h3 className="font-display text-base font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-pink-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Elevate your product’s social media presence</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Connect with Devtacet’s digital marketing team to build a tailored distribution roadmap that drives real customer acquisition.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start Marketing Engagement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
