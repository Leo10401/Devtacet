import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code2,
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  ExternalLink,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Engineering Case Studies & Client Projects | Devtacet',
  description:
    'Explore Devtacet’s real engineering case studies: enterprise analytics platforms, edge API infrastructure, developer deployment tools, and cross-platform mobile apps.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Projects | Devtacet',
    description:
      'Real engineering case studies across web applications, mobile apps, custom software, and analytics.',
    url: 'https://devtacet.me/case-studies',
    type: 'website',
  },
}

export const caseStudies = [
  {
    slug: 'atlas-redesign',
    title: 'Atlas Analytics Platform',
    category: 'Enterprise SaaS & Data Analytics',
    tagline: 'Real-time stream processing and high-performance KPI dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85',
    description:
      'Next-generation analytics SaaS platform engineered with real-time stream processing, custom visualization charting, and sub-millisecond metrics queries.',
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Node.js', 'MongoDB Aggregations', 'Tailwind CSS'],
    role: 'Full-Stack Architecture & Data Engineering',
    serviceSlug: 'analytics',
    serviceName: 'Data Analytics Systems',
  },
  {
    slug: 'relay-cloud-api',
    title: 'Relay Cloud API',
    category: 'Backend & Cloud Infrastructure',
    tagline: 'High-throughput edge routing engine and distributed microservices',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85',
    description:
      'Distributed edge routing microservices architecture engineered with rate-limiting, global multi-region caching, and resilient database clustering.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Docker', 'Redis'],
    role: 'Backend Infrastructure & API Architecture',
    serviceSlug: 'custom-software',
    serviceName: 'Custom Software & MIS',
  },
  {
    slug: 'edge-deploy-ui',
    title: 'Edge Deploy UI',
    category: 'Developer Tools & Web Applications',
    tagline: 'Autonomous deployment orchestration and preview branch management',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=85',
    description:
      'Modern developer platform UI providing preview branch orchestration, build telemetry inspection, and zero-downtime deployment pipelines.',
    technologies: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    role: 'Frontend Engineering & UI/UX Design System',
    serviceSlug: 'web-development',
    serviceName: 'Website Development',
  },
  {
    slug: 'pulseframe-mobile',
    title: 'Pulseframe Mobile',
    category: 'iOS & Android Mobile App',
    tagline: 'Cross-platform mobile collaboration workspace with native performance',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1000&q=85',
    description:
      'Ultra-fast cross-platform design and collaboration mobile application built with React Native, offline-first SQLite synchronization, and fluid 60fps animations.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    role: 'Mobile Engineering & Cross-Platform Architecture',
    serviceSlug: 'mobile-app-development',
    serviceName: 'Mobile App Development',
  },
]

export default function CaseStudiesIndexPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: caseStudies.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: cs.title,
      description: cs.description,
      url: `https://devtacet.me/case-studies/${cs.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-16">
          <Breadcrumbs items={[{ label: 'Case Studies' }]} className="mb-8" />

          {/* Hero */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Code2 className="size-3.5" />
              Engineering Portfolio
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Software We’ve Architected & Shipped
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400">
              Explore Devtacet’s production engineering work spanning enterprise analytics dashboards, distributed cloud backend APIs, developer platforms, and cross-platform mobile apps.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d0e15] shadow-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl"
              >
                <div>
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/50">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-7">
                    <h2 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-primary">
                      {cs.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-primary">
                      {cs.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {cs.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {cs.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800/80 px-7 py-4">
                  <span className="text-xs text-zinc-500 font-mono">
                    Service: {cs.serviceName}
                  </span>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary transition-all group-hover:translate-x-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Have a similar engineering challenge?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Discuss your product architecture, database design, and technical milestones with Devtacet.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Schedule Architecture Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
