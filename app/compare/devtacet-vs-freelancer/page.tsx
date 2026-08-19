import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Scale,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Devtacet vs Freelancers | Honest Software Engineering Comparison',
  description:
    'An objective comparison between hiring Devtacet’s dedicated engineering team versus individual freelancers for web and mobile development.',
  alternates: {
    canonical: '/compare/devtacet-vs-freelancer',
  },
  openGraph: {
    title: 'Devtacet vs Freelancers | Comparison | Devtacet',
    description:
      'Evaluate team continuity, technical breadth, code ownership, and communication between Devtacet and independent freelancers.',
    url: 'https://devtacet.me/compare/devtacet-vs-freelancer',
    type: 'website',
  },
}

const comparisonRows = [
  {
    factor: 'Team Continuity & Redundancy',
    devtacet: 'Multi-disciplinary team of senior engineers. Cross-coverage prevents project stall if an individual is unavailable.',
    freelancer: 'Single point of failure. If the freelancer is sick, takes time off, or takes on another job, work pauses.',
  },
  {
    factor: 'Technical Breadth',
    devtacet: 'Full-stack frontend (Next.js), backend (Node/Mongo), mobile (React Native/Flutter), and technical SEO specialists in-house.',
    freelancer: 'Typically strong in one specific domain (e.g., frontend only) and may struggle with backend security or SEO.',
  },
  {
    factor: 'Communication & Direct Access',
    devtacet: 'Direct communication with founding engineers via dedicated Slack / email with clear sprint updates.',
    freelancer: 'Direct communication, though responsiveness varies depending on client workload and time zone differences.',
  },
  {
    factor: 'Code Quality & Type Safety',
    devtacet: 'Strict TypeScript codebases, peer code reviews, standardized linting, and automated CI/CD builds.',
    freelancer: 'Varies widely; solo developers often skip peer reviews and documentation under tight deadlines.',
  },
  {
    factor: 'Post-Launch Maintenance',
    devtacet: 'Structured ongoing support agreements, security patches, performance monitoring, and SLA backing.',
    freelancer: 'Often unavailable for long-term maintenance after initial handoff due to shifting project commitments.',
  },
  {
    factor: 'Pricing & Budget Fit',
    devtacet: 'Milestone-based project fees best suited for startups and businesses building mission-critical products.',
    freelancer: 'Hourly or task-based rates, often more cost-effective for small one-off tasks or basic prototypes.',
  },
]

export default function CompareFreelancerPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Breadcrumbs
            items={[
              { label: 'Compare', href: '/services' },
              { label: 'Devtacet vs Freelancer' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Scale className="size-3.5" />
              Honest Decision Guide
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Devtacet vs Hiring an Individual Freelancer
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Choosing the right engineering model depends on your project’s scale, risk tolerance, and long-term roadmap. Here is an honest, factual breakdown of where each option excels.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-14 overflow-x-auto rounded-3xl border border-zinc-800 bg-[#0c0d14]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-zinc-800 bg-zinc-900/60 font-display text-white">
                <tr>
                  <th className="p-5 font-bold">Decision Factor</th>
                  <th className="p-5 font-bold text-primary">Devtacet Engineering Team</th>
                  <th className="p-5 font-bold text-zinc-400">Independent Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="transition-colors hover:bg-zinc-900/30">
                    <td className="p-5 font-semibold text-white">{row.factor}</td>
                    <td className="p-5 text-zinc-300 leading-relaxed bg-primary/[0.02]">{row.devtacet}</td>
                    <td className="p-5 text-zinc-400 leading-relaxed">{row.freelancer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* When to choose which */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8">
              <h2 className="font-display text-xl font-bold text-white">When to Choose Devtacet</h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>You are building a production product where uptime, speed, and architecture matter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>You need full-stack capability (web, mobile, backend, database, SEO) under one team.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>You require predictable sprint delivery and long-term maintenance assurance.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#0d0e15] p-8">
              <h2 className="font-display text-xl font-bold text-white">When to Choose a Freelancer</h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>You have very simple, isolated tasks (e.g. fixing CSS bugs or minor landing page edits).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>You have an in-house technical lead who can review code, write specs, and manage daily QA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>Your budget is extremely limited and you only need a quick disposable prototype.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white">Need a dependable team for your next product?</h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Get in touch with Devtacet to discuss your technical roadmap, milestones, and deliverables.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Schedule Architecture Call
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
