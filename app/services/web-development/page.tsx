import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Code2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Server,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Website Development Company in Lucknow | Custom Web Apps | Devtacet',
  description:
    'Devtacet is a leading web development company in Lucknow, India. We engineer lightning-fast Next.js web applications, SaaS platforms, and responsive websites with sub-second speeds.',
  alternates: {
    canonical: '/services/web-development',
  },
  openGraph: {
    title: 'Website Development Company in Lucknow | Custom Web Apps | Devtacet',
    description:
      'Leading web development company in Lucknow engineering high-performance Next.js web applications, SaaS platforms, and custom responsive websites.',
    url: 'https://devtacet.me/services/web-development',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What types of websites and web applications does Devtacet build?',
    a: 'Devtacet develops marketing websites, SaaS platforms, high-conversion e-commerce systems, internal operational portals, and progressive web apps (PWAs). Every application is engineered for maximum performance, responsiveness, and search engine crawlability.',
  },
  {
    q: 'Why does Devtacet use Next.js and React 19?',
    a: 'Next.js (App Router) and React 19 enable Server Components, streaming server-side rendering (SSR), and static site generation (SSG). This architecture drastically reduces client-side JavaScript bundle sizes and delivers 95+ Core Web Vitals performance out of the box.',
  },
  {
    q: 'Does Devtacet provide post-launch support and technical SEO?',
    a: 'Yes. Every web development project includes structured Schema.org JSON-LD markup, dynamic XML sitemaps, automated Core Web Vitals checks, and ongoing security and maintenance support.',
  },
  {
    q: 'How long does a typical web development project take?',
    a: 'A focused production website or web MVP typically takes 4 to 8 weeks depending on feature complexity, API integrations, and database design. We follow our strict 30-60-90 onboarding cadence.',
  },
]

export default function WebDevelopmentServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development',
    serviceType: 'Web Application Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'High-performance websites, web applications, and e-commerce platforms engineered with Next.js, React 19, and TypeScript.',
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
              { label: 'Website Development' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Globe className="size-3.5" />
              Full-Stack Engineering
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Websites & Web Apps Engineered for Speed, Conversion, and Scale
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a web development company in Lucknow, India, helping startups, SMEs, and enterprises build modern, high-performance websites and web applications. We engineer every project with Next.js, React 19, TypeScript, and Tailwind CSS for sub-second speeds and maximum conversions.
            </p>
          </div>

          {/* Quick Metrics / Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">&lt; 1.0s</p>
              <p className="mt-1 text-xs text-zinc-400">Average First Contentful Paint</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 text-xs text-zinc-400">TypeScript Type-Safe Architecture</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-emerald-400">L5–L7</p>
              <p className="mt-1 text-xs text-zinc-400">Senior Staff Engineer Execution</p>
            </div>
          </div>

          {/* What This Service Is & Who It Is For */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">What We Build</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                We design and engineer bespoke web solutions tailored to business objectives:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">SaaS & Web Platforms</h3>
                  <p className="mt-1 text-xs text-zinc-400">Interactive web applications featuring user authentication, subscription billing, and real-time dashboard analytics.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Marketing & Brand Websites</h3>
                  <p className="mt-1 text-xs text-zinc-400">High-converting digital brand homes with smooth micro-animations, structured metadata, and sub-second load times.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">E-Commerce Experiences</h3>
                  <p className="mt-1 text-xs text-zinc-400">Custom storefronts and checkout workflows optimized for frictionless mobile buying and high catalog throughput.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Internal Business Portals</h3>
                  <p className="mt-1 text-xs text-zinc-400">Custom operational backends, admin portals, and MIS interfaces that replace fragile manual spreadsheets.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Slow, Bloated Codebases:</strong> We eliminate client-side JavaScript bloat with Next.js Server Components and modern build pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Poor Search Visibility:</strong> We embed Schema.org JSON-LD knowledge graphs and optimize HTML semantics so Google and AI search engines index your brand correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Fragile Architecture:</strong> We build with strict TypeScript typings, schema validation, and modular component patterns for maintainability.</span>
                </li>
              </ul>
            </section>

            {/* Tech Stack Actually Used */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Our Web Technology Stack</h2>
              <p className="mt-2 text-xs text-zinc-400">We stick to proven, battle-tested modern web technologies:</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB / Mongoose', 'Framer Motion', 'Vercel Edge Cloud'].map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Case Study & Internal Linking */}
            <section className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Related Case Study</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Edge Deploy UI — Developer Tooling Platform</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Learn how Devtacet engineered an autonomous deployment orchestration console with Next.js, real-time logging, and preview branch workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/case-studies/edge-deploy-ui" className="inline-flex items-center gap-1 text-cyan-400 hover:underline">
                  Read Case Study <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/blog/web-development" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Read Our Modern Web Dev Guide →
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
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Ready to build your next web application?</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Schedule an architecture consultation with our engineering team in Lucknow. We’ll review your requirements and provide an actionable scope.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start a Project
                </Link>
                <Link
                  href="/web-development-company-lucknow"
                  className="rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-primary"
                >
                  Web Dev Services in Lucknow
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
