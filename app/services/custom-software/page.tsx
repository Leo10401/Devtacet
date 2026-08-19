import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Database,
  Terminal,
  Settings,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Custom Software & MIS Development Services | Devtacet',
  description:
    'Devtacet engineers bespoke business software, Management Information Systems (MIS), ERP-lite tools, and automated backend infrastructure for modern operations.',
  alternates: {
    canonical: '/services/custom-software',
  },
  openGraph: {
    title: 'Custom Software & MIS Development Services | Devtacet',
    description:
      'Bespoke business software, internal portals, MIS platforms, and backend infrastructure.',
    url: 'https://devtacet.me/services/custom-software',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What is custom software development at Devtacet?',
    a: 'Custom software development refers to building tailored internal tools, workflow automation engines, Management Information Systems (MIS), and API services specifically designed around your company’s unique business processes, rather than forcing you into rigid off-the-shelf software.',
  },
  {
    q: 'How does an MIS platform help business leadership?',
    a: 'An MIS integrates disparate data sources (inventory, sales, finance, operations) into a centralized, automated dashboard with role-based access. This eliminates human error, cuts manual reporting time, and provides real-time operational clarity for decision makers.',
  },
  {
    q: 'Can Devtacet integrate with our existing databases and legacy systems?',
    a: 'Yes. We build custom API connectors, webhooks, and ETL pipelines that bridge modern Next.js/Node.js web portals with existing SQL/NoSQL databases, third-party ERPs, and cloud storage.',
  },
  {
    q: 'How is data security and access control managed?',
    a: 'We implement enterprise-grade Role-Based Access Control (RBAC), bcrypt password hashing, encrypted JWT session tokens, HTTPS/TLS data in transit, and database level encryption at rest.',
  },
]

export default function CustomSoftwareServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development',
    serviceType: 'Enterprise Software & MIS Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'Bespoke business software, Management Information Systems (MIS), ERP-lite platforms, and backend automation infrastructure.',
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
              { label: 'Custom Software & MIS' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-400">
              <Cpu className="size-3.5" />
              Systems Engineering & Automation
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Custom Software & MIS Built Around Your Business Operations
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, engineering custom software, MIS architectures, ERP-lite systems, and backend automation pipelines that streamline operations and replace messy spreadsheets.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-fuchsia-400">30+ hrs</p>
              <p className="mt-1 text-xs text-zinc-400">Saved Weekly in Manual Reporting</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">Zero</p>
              <p className="mt-1 text-xs text-zinc-400">Monthly Per-Seat Licensing Fees</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">100%</p>
              <p className="mt-1 text-xs text-zinc-400">Codebase & Data Ownership</p>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Software Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Management Information Systems (MIS)</h3>
                  <p className="mt-1 text-xs text-zinc-400">Custom business intelligence engines aggregating operational, financial, and inventory data into executive dashboards.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Internal Workflow Portals</h3>
                  <p className="mt-1 text-xs text-zinc-400">Secure staff portals for project tracking, approvals, document management, and team task orchestration.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Backend Microservices & APIs</h3>
                  <p className="mt-1 text-xs text-zinc-400">High-throughput Node.js & Express microservices with rate limiting, caching, and robust database indexing.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Database & Migration Architecture</h3>
                  <p className="mt-1 text-xs text-zinc-400">Schema design, automated indexing, data sanitization, and seamless legacy spreadsheet data migration.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span><strong>Spreadsheet Chaos:</strong> We replace disconnected Excel/Sheets with a single source of truth database and automated validation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span><strong>Skyrocketing SaaS Subscription Costs:</strong> Custom software eliminates recurring per-user monthly SaaS fees and gives you full IP ownership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-fuchsia-400 shrink-0 mt-0.5" />
                  <span><strong>Security & Compliance Vulnerabilities:</strong> Role-based permissions ensure employees only access data strictly needed for their role.</span>
                </li>
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Engineering Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {['Node.js', 'Express', 'TypeScript', 'MongoDB / Mongoose', 'Next.js', 'Tailwind CSS', 'Docker', 'REST & Webhooks', 'Bcrypt & JWT Security'].map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-fuchsia-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Case Study Callout */}
            <section className="rounded-3xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400">Related Case Study</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Relay Cloud API — High-Throughput Edge Infrastructure</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Discover how Devtacet engineered high-throughput edge routing microservices with distributed caching and multi-region resilience.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/case-studies/relay-cloud-api" className="inline-flex items-center gap-1 text-fuchsia-400 hover:underline">
                  Read Case Study <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/blog/mis" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Read Guide to MIS Systems →
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
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-fuchsia-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Automate your business workflows with custom software</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Discuss your business processes with Devtacet’s software architects. We’ll design an efficient system that grows with your organization.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Architecture Consultation
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
