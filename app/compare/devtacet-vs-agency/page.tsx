import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building,
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
  title: 'Devtacet vs Traditional Agency | Engineering-First Model Comparison',
  description:
    'Compare Devtacet’s direct senior engineering studio model with traditional digital agencies. Direct builder communication, modern Next.js tech stacks, and zero bureaucracy.',
  alternates: {
    canonical: '/compare/devtacet-vs-agency',
  },
  openGraph: {
    title: 'Devtacet vs Traditional Agency | Comparison | Devtacet',
    description:
      'Compare communication, engineering seniority, tech stack modernism, and pricing between Devtacet and legacy agencies.',
    url: 'https://devtacet.me/compare/devtacet-vs-agency',
    type: 'website',
  },
}

const comparisonRows = [
  {
    factor: 'Team Composition & Seniority',
    devtacet: 'Direct access to senior staff engineers (L5–L7 tier experts) who architect and write the code themselves.',
    agency: 'Senior partners pitch the deal, but execution is handed off to junior (L1/L2) developers or offshore contractors.',
  },
  {
    factor: 'Communication Channels',
    devtacet: 'Zero account managers playing telephone. You speak directly with the engineers building your software.',
    agency: 'Multi-layer account managers and project coordinators filtering every technical question and request.',
  },
  {
    factor: 'Technology Architecture',
    devtacet: 'Custom Next.js (App Router), React 19, TypeScript, React Native, Node.js, and modern cloud primitives.',
    agency: 'Often relies on legacy PHP/WordPress page builders or proprietary agency templates with heavy technical debt.',
  },
  {
    factor: 'Performance & SEO Engineering',
    devtacet: 'Engineered for sub-second Core Web Vitals, custom Schema.org knowledge graphs, and Generative Engine Optimization (GEO).',
    agency: 'Generic plugin-based SEO checkboxes without source-code-level performance profiling.',
  },
  {
    factor: 'Overhead & Cost Structure',
    devtacet: 'Lean engineering unit with zero agency fluff—you pay purely for senior engineering and design output.',
    agency: 'High overhead factoring in account managers, office real estate, and bloated corporate sales teams.',
  },
  {
    factor: 'Speed & Agility',
    devtacet: 'Fast sprint cycles, weekly preview deployments, and rapid decision-making directly with founders.',
    agency: 'Rigid change-order bureaucracy and lengthy internal approval cycles before any code is modified.',
  },
]

export default function CompareAgencyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Breadcrumbs
            items={[
              { label: 'Compare', href: '/services' },
              { label: 'Devtacet vs Traditional Agency' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Scale className="size-3.5" />
              Engineering-First Model
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Devtacet vs Traditional Digital Agencies
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Traditional agencies are built around client servicing layers and markup margins. Devtacet is engineered around senior developers and direct technical ownership. Here is how the two approaches compare.
            </p>
          </div>

          {/* Table */}
          <div className="mt-14 overflow-x-auto rounded-3xl border border-zinc-800 bg-[#0c0d14]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-zinc-800 bg-zinc-900/60 font-display text-white">
                <tr>
                  <th className="p-5 font-bold">Comparison Factor</th>
                  <th className="p-5 font-bold text-primary">Devtacet Engineering Studio</th>
                  <th className="p-5 font-bold text-zinc-400">Traditional Digital Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="transition-colors hover:bg-zinc-900/30">
                    <td className="p-5 font-semibold text-white">{row.factor}</td>
                    <td className="p-5 text-zinc-300 leading-relaxed bg-primary/[0.02]">{row.devtacet}</td>
                    <td className="p-5 text-zinc-400 leading-relaxed">{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Cards */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8">
              <h2 className="font-display text-xl font-bold text-white">Why Founders Choose Devtacet</h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>You work directly with builders who understand technical nuance and architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Code is custom-built with Next.js, React 19, TypeScript, and modern Node backends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Fast, transparent iterations without agency bureaucracy or hidden change fees.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#0d0e15] p-8">
              <h2 className="font-display text-xl font-bold text-white">When a Big Agency Might Fit</h2>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>You need massive traditional media buying, TV commercials, and billboard placements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>Your enterprise procurement policy strictly requires a vendor with 500+ employees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>You prefer having a dedicated non-technical account manager for weekly check-ins.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white">Work directly with senior engineers</h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Experience the difference of an engineering-first studio. Contact Devtacet today to review your project.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
