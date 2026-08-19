import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  LineChart,
  PieChart,
  Activity,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Data Analytics Systems & Dashboard Development | Devtacet',
  description:
    'Devtacet builds real-time data analytics tools, automated ETL pipelines, and executive dashboards turning business metrics into actionable decisions.',
  alternates: {
    canonical: '/services/analytics',
  },
  openGraph: {
    title: 'Data Analytics Systems & Dashboard Development | Devtacet',
    description:
      'Real-time data analytics tools, automated data pipelines, and executive dashboards.',
    url: 'https://devtacet.me/services/analytics',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What types of data analytics systems does Devtacet build?',
    a: 'We build real-time executive KPI dashboards, automated financial/operational reporting systems, customer lifecycle analytics portals, and continuous ETL pipelines that pull metrics from production databases, APIs, and payment gateways into clear visualizations.',
  },
  {
    q: 'Can Devtacet connect analytics to our existing databases?',
    a: 'Yes. We build optimized aggregation queries and background indexing on MongoDB, PostgreSQL, MySQL, and third-party data lakes to query millions of rows with sub-millisecond response times.',
  },
  {
    q: 'Are dashboards mobile-responsive and secure?',
    a: 'Every analytics portal we engineer is fully responsive across desktops, tablets, and smartphones, protected by multi-factor authentication, granular user permissions, and encrypted data streams.',
  },
  {
    q: 'Can we schedule automated PDF or email reports?',
    a: 'Yes. We engineer cron-based scheduled reporting pipelines that generate daily, weekly, or monthly executive summaries delivered straight to email or Slack.',
  },
]

export default function AnalyticsServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Data Analytics Systems',
    serviceType: 'Data Engineering & Business Intelligence',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'Real-time data analytics tools, automated data aggregation pipelines, and interactive executive dashboards.',
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
              { label: 'Data Analytics Systems' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <BarChart3 className="size-3.5" />
              Data Engineering & BI
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Complex Data into Real-Time Decision Support
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, engineering custom data analytics tools, automated ETL pipelines, and executive dashboards that provide immediate visibility into business performance.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-purple-400">&lt; 50ms</p>
              <p className="mt-1 text-xs text-zinc-400">Query Aggregation Latency</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">Live</p>
              <p className="mt-1 text-xs text-zinc-400">Real-Time Data Streaming</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">100%</p>
              <p className="mt-1 text-xs text-zinc-400">Custom KPI Alignment</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Analytics Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Executive KPI Dashboards</h3>
                  <p className="mt-1 text-xs text-zinc-400">Live operational command centers with drill-down charting, revenue metrics, conversion funnels, and retention curves.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Automated ETL & Pipelines</h3>
                  <p className="mt-1 text-xs text-zinc-400">Scheduled data extract, transform, and load (ETL) jobs reconciling logs, transaction records, and marketing channels.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Custom Analytics APIs</h3>
                  <p className="mt-1 text-xs text-zinc-400">Fast internal reporting endpoints delivering pre-aggregated metrics to client applications and mobile dashboards.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Audit & Export Engines</h3>
                  <p className="mt-1 text-xs text-zinc-400">Automated CSV, Excel, and PDF report generation for compliance, board presentations, and team retrospectives.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Data Silos:</strong> We unify disparate databases, CRM systems, and third-party APIs into one synchronized analytics interface.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Delayed Operational Insights:</strong> Real-time streaming and cached aggregations provide instant data instead of waiting for end-of-month manual reports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Slow Database Queries:</strong> We design indexing strategies and materialized views that prevent analytics queries from degrading production databases.</span>
                </li>
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Analytics Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {['Next.js', 'React 19', 'TypeScript', 'Node.js', 'MongoDB Aggregation Pipeline', 'Chart.js & Recharts', 'Tailwind CSS', 'Redis Caching'].map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Case Study Callout */}
            <section className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Related Case Study</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Atlas Redesign — Enterprise Analytics Platform</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Explore how Devtacet architected a real-time stream processing analytics console with custom visualization charts and sub-millisecond query response times.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/case-studies/atlas-redesign" className="inline-flex items-center gap-1 text-purple-400 hover:underline">
                  Read Case Study <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/blog/mis" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Read Guide to MIS & Analytics →
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
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Gain real-time clarity over your business data</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Talk to Devtacet’s analytics engineers. We’ll evaluate your data architecture and build intuitive dashboards for your team.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start Analytics Project
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
