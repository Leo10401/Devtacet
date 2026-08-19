import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Web Development Company in Lucknow | Website & Custom Software | Devtacet',
  description:
    'Devtacet is a leading web development and digital solutions company in Lucknow, Uttar Pradesh, India. We build high-performance websites, mobile apps, custom software, and SEO for local businesses and global startups.',
  alternates: {
    canonical: '/web-development-company-lucknow',
  },
  openGraph: {
    title: 'Web Development Company in Lucknow | Devtacet',
    description:
      'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems.',
    url: 'https://devtacet.me/web-development-company-lucknow',
    type: 'website',
  },
}

const localFaqs = [
  {
    q: 'Where is Devtacet located in Lucknow?',
    a: 'Devtacet is headquartered in Lucknow, Uttar Pradesh, India. We work closely with local enterprises, retail businesses, educational institutions, and healthcare providers in Lucknow, while also delivering software for clients across India and internationally.',
  },
  {
    q: 'What web development services does Devtacet provide in Lucknow?',
    a: 'We provide full-stack web engineering including responsive business websites, custom web applications, e-commerce portals, Management Information Systems (MIS), mobile app development (iOS/Android), and technical SEO.',
  },
  {
    q: 'Can Devtacet meet with clients in person in Lucknow?',
    a: 'Yes. We are happy to coordinate in-person architectural consultations, requirements gathering sessions, and project milestone presentations for clients based in Lucknow and the wider NCR/UP region.',
  },
  {
    q: 'Does Devtacet only work with Lucknow-based businesses?',
    a: 'No. While Lucknow is our home base and engineering headquarters, we collaborate with startups and enterprises across Delhi NCR, Mumbai, Bengaluru, and international markets including North America and Europe.',
  },
  {
    q: 'How much does website development cost in Lucknow with Devtacet?',
    a: 'Project costs depend entirely on scope, feature requirements, third-party integrations, and design complexity. We provide transparent, milestone-based scopes with direct senior engineer access and zero hidden fees.',
  },
]

export default function LucknowWebDevelopmentPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://devtacet.me/#localbusiness',
    name: 'Devtacet - Web Development Company Lucknow',
    image: 'https://devtacet.me/og-image.png',
    url: 'https://devtacet.me/web-development-company-lucknow',
    telephone: '+91',
    email: 'hello@devtacet.me',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'Country', name: 'India' },
    ],
    description:
      'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Breadcrumbs
            items={[{ label: 'Web Development Company in Lucknow' }]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <MapPin className="size-3.5" />
              Lucknow, Uttar Pradesh, India
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Web Development Company in Lucknow
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">Local Roots</p>
              <p className="mt-1 text-xs text-zinc-400">Headquartered in Lucknow, UP</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">Next.js & React 19</p>
              <p className="mt-1 text-xs text-zinc-400">Modern Engineering Stacks</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-emerald-400">Direct Contact</p>
              <p className="mt-1 text-xs text-zinc-400">Direct Senior Engineer Access</p>
            </div>
          </div>

          {/* Services Available in Lucknow */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">
                Web & Software Solutions for Lucknow Businesses
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Whether you are a growing retail business in Hazratganj, a healthcare group in Gomti Nagar, or an ambitious technology startup in Lucknow, Devtacet provides production-ready digital engineering:
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2.5 text-primary">
                    <Globe className="size-5" />
                    <h3 className="font-display text-base font-bold text-white">Custom Website Development</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Fast, responsive Next.js websites tailored to your brand, optimized for mobile devices and search engines.
                  </p>
                  <Link href="/services/web-development" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                    Learn more →
                  </Link>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <Smartphone className="size-5" />
                    <h3 className="font-display text-base font-bold text-white">Mobile Application Engineering</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Cross-platform iOS and Android mobile apps engineered with React Native and Flutter for consumer and enterprise use.
                  </p>
                  <Link href="/services/mobile-app-development" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline">
                    Learn more →
                  </Link>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2.5 text-fuchsia-400">
                    <Cpu className="size-5" />
                    <h3 className="font-display text-base font-bold text-white">Custom Business Software & MIS</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Custom operational tools, inventory trackers, and Management Information Systems that replace manual spreadsheet entry.
                  </p>
                  <Link href="/services/custom-software" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-400 hover:underline">
                    Learn more →
                  </Link>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2.5 text-amber-400">
                    <TrendingUp className="size-5" />
                    <h3 className="font-display text-base font-bold text-white">Local SEO & Digital Marketing</h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Technical SEO, Google Business Profile integration, and local search optimization so customers in Lucknow find you first.
                  </p>
                  <Link href="/services/seo" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            </section>

            {/* Why Choose Devtacet */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Why Lucknow Businesses Work with Devtacet</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>No Middlemen:</strong> You collaborate directly with our founding engineers and technical architects without account managers playing telephone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Modern Technology:</strong> We do not build slow, bloated template sites. We engineer fast Next.js codebases designed to last years.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Full Ownership:</strong> You retain complete intellectual property, code repository access, and hosting control.</span>
                </li>
              </ul>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {localFaqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-6">
                    <h3 className="font-display text-base font-semibold text-white">{faq.q}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Looking for a web development partner in Lucknow?</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Reach out to Devtacet today. Let’s discuss your project requirements and build software that drives real business growth.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Contact Devtacet in Lucknow
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-zinc-700 bg-zinc-800/80 px-7 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-primary"
                >
                  View All Services
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
