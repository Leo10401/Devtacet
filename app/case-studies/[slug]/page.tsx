import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Layers,
  ArrowLeft,
  Sparkles,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

interface CaseStudyData {
  slug: string
  title: string
  category: string
  tagline: string
  image: string
  overview: string
  problem: string
  objective: string
  role: string
  solution: string
  features: string[]
  technologies: string[]
  architecture: string
  challenges: string
  results: string
  relatedServiceSlug: string
  relatedServiceName: string
}

const caseStudiesData: Record<string, CaseStudyData> = {
  'atlas-redesign': {
    slug: 'atlas-redesign',
    title: 'Atlas Analytics SaaS Platform',
    category: 'Enterprise SaaS & Data Analytics',
    tagline: 'Real-time stream processing and high-performance KPI dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85',
    overview:
      'Atlas is an enterprise analytics platform engineered to ingest streaming event telemetry and render interactive business intelligence dashboards with sub-millisecond query latencies.',
    problem:
      'The client was relying on legacy relational database aggregations that choked under high telemetry volume, leading to 10+ second dashboard load times and periodic database deadlocks.',
    objective:
      'Architect a scalable real-time stream ingestion pipeline and modern Next.js visualization frontend capable of handling millions of daily events without query degradation.',
    role: 'Full-Stack Technical Architecture, Database Optimization & Frontend Engineering',
    solution:
      'Devtacet re-architected the aggregation pipeline using MongoDB indexed aggregation streams and Redis caching layers. The frontend was rebuilt with Next.js (App Router), React 19, and Tailwind CSS to stream metric widgets progressively.',
    features: [
      'Real-Time Telemetry Streaming: Instant widget updates as events occur.',
      'Custom KPI Builder: Drag-and-drop metrics composition with live preview.',
      'Automated Executive Exports: Scheduled PDF and CSV report distribution.',
      'Role-Based Granular Access: Tenant-level permission isolation.',
    ],
    technologies: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Node.js', 'MongoDB Aggregations', 'Redis', 'Tailwind CSS'],
    architecture:
      'Events are ingested via rate-limited API endpoints into pre-aggregated time-bucket collections. Next.js server components render the cached state, and client widgets maintain real-time updates via streaming sockets.',
    challenges:
      'Eliminating compute bottlenecks during peak concurrent user query hours while keeping infrastructure hosting costs predictable.',
    results:
      'Dashboard initial render time dropped from over 10 seconds to under 450ms, while database query load reduced by 68% through materialized index caching.',
    relatedServiceSlug: 'analytics',
    relatedServiceName: 'Data Analytics Systems',
  },
  'relay-cloud-api': {
    slug: 'relay-cloud-api',
    title: 'Relay Cloud Infrastructure & API Engine',
    category: 'Backend & Cloud Infrastructure',
    tagline: 'High-throughput edge routing engine and distributed microservices',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85',
    overview:
      'Relay is a distributed backend API routing engine built to handle high-concurrency requests, automated webhook dispatching, and resilient service isolation.',
    problem:
      'A monolithic backend architecture struggled with API rate-limiting spikes, webhook retries exhausting database connection pools, and lack of regional caching.',
    objective:
      'Design and deploy a resilient Node.js microservices architecture with automated retry queues, rate-limiting guards, and global edge caching.',
    role: 'Distributed Systems Architecture, Backend Engineering & DevOps Infrastructure',
    solution:
      'Devtacet decomposed the monolith into lightweight, containerized Node.js and Express microservices backed by MongoDB replica sets and Redis message queues with exponential backoff handling.',
    features: [
      'Edge Request Routing: Sub-15ms edge routing and TLS termination.',
      'Reliable Webhook Delivery: Exponential backoff retries with dead-letter queues.',
      'Granular API Rate Limiting: Token-bucket algorithm preventing service abuse.',
      'End-to-End Encryption: TLS 1.3 in transit and AES-256 database encryption at rest.',
    ],
    technologies: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Docker', 'Redis Queue', 'AWS / Vercel Cloud'],
    architecture:
      'Stateless Node.js services deployed behind an edge gateway with Redis-backed session verification and idempotent webhook dispatch workers.',
    challenges:
      'Ensuring zero message loss during sudden traffic bursts without saturating backend MongoDB connection limits.',
    results:
      'Maintained 99.99% service uptime during high-volume webhook events, with average API response times reduced to under 35ms.',
    relatedServiceSlug: 'custom-software',
    relatedServiceName: 'Custom Software & MIS',
  },
  'edge-deploy-ui': {
    slug: 'edge-deploy-ui',
    title: 'Edge Deploy UI Developer Platform',
    category: 'Developer Tools & Web Applications',
    tagline: 'Autonomous deployment orchestration and preview branch management',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=85',
    overview:
      'Edge Deploy is a modern web application designed for developer teams to orchestrate cloud preview branches, monitor build telemetry, and manage zero-downtime production rollouts.',
    problem:
      'Engineering teams lacked clear visibility into build stages and preview environments, resulting in slow release cycles and undetected regression bugs.',
    objective:
      'Engineer an intuitive, lightning-fast developer console with real-time log streaming, branch status tracking, and automated deployment rollbacks.',
    role: 'Full-Stack Web Engineering, UI/UX Design System & Real-Time Telemetry',
    solution:
      'Devtacet built the entire web platform using Next.js, React 19, TypeScript, and Framer Motion, pairing a sleek dark-mode glassmorphism interface with high-throughput WebSocket log streams.',
    features: [
      'Live Build Log Streaming: Virtualized log viewer capable of rendering 10,000+ lines smoothly.',
      'Preview Branch Isolation: One-click ephemeral environment provisioning.',
      'Instant Rollbacks: One-click production traffic rerouting to healthy historical builds.',
      'Keyboard-First Command Palette: Rapid navigation for power developers.',
    ],
    technologies: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    architecture:
      'Modular React 19 component architecture utilizing Server Components for instant initial page loads and lightweight client-side islands for interactive terminal logs.',
    challenges:
      'Rendering high-frequency terminal log updates without causing browser thread lockup or frame drops.',
    results:
      'Delivered a 100/100 Google Lighthouse performance score and streamlined deployment verification times for developer teams.',
    relatedServiceSlug: 'web-development',
    relatedServiceName: 'Website Development',
  },
  'pulseframe-mobile': {
    slug: 'pulseframe-mobile',
    title: 'Pulseframe Mobile Application',
    category: 'iOS & Android Mobile App',
    tagline: 'Cross-platform mobile collaboration workspace with native performance',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1000&q=85',
    overview:
      'Pulseframe is a cross-platform mobile collaboration application engineered for creative teams to annotate assets, review design iterations, and sync project updates on the go.',
    problem:
      'The client needed a mobile solution that worked flawlessly on both iOS and Android with full offline support, without incurring the expense of building two separate native codebases.',
    objective:
      'Engineer a unified React Native mobile app with 60fps native feel, local SQLite offline caching, and instant cloud synchronization upon reconnecting.',
    role: 'Cross-Platform Mobile Architecture, UI/UX Implementation & Store Deployment',
    solution:
      'Devtacet engineered a high-performance React Native codebase using TypeScript, native gesture handlers, and an offline-first data replication engine.',
    features: [
      'Offline-First Local Storage: Full editing capability without network connection.',
      'Fluid Touch Canvas: Native gesture recognition for asset zooming and markup.',
      'Background Cloud Sync: Automatic conflict resolution and bi-directional replication.',
      'Biometric Security: Apple FaceID and Android Fingerprint authentication.',
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Apple TestFlight', 'Google Play Console'],
    architecture:
      'Client-side local database store with background synchronization workers connecting to a secure Node.js/Express API backend.',
    challenges:
      'Guaranteeing conflict-free data merges when users edit asset comments offline simultaneously.',
    results:
      'Achieved first-time review approval on both the Apple App Store and Google Play Store with a 4.8+ rating and zero crash reports during launch week.',
    relatedServiceSlug: 'mobile-app-development',
    relatedServiceName: 'Mobile App Development',
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudiesData[slug]

  if (!study) {
    return { title: 'Case Study Not Found | Devtacet' }
  }

  return {
    title: `${study.title} | Case Study | Devtacet`,
    description: study.description,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Devtacet Case Study`,
      description: study.description,
      url: `https://devtacet.me/case-studies/${study.slug}`,
      type: 'article',
      images: [{ url: study.image, alt: study.title }],
    },
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = caseStudiesData[slug]

  if (!study) {
    notFound()
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.overview,
    image: study.image,
    author: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
      logo: 'https://devtacet.me/icon.svg',
    },
    mainEntityOfPage: `https://devtacet.me/case-studies/${study.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <Breadcrumbs
            items={[
              { label: 'Case Studies', href: '/case-studies' },
              { label: study.title },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <header>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {study.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {study.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-zinc-300">
              {study.tagline}
            </p>
          </header>

          {/* Hero Image */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-[#0d0e15]">
            <img
              src={study.image}
              alt={study.title}
              className="h-72 sm:h-96 w-full object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-zinc-800 bg-[#0c0d14] p-6 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Devtacet Role</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-white">{study.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Related Service</p>
              <Link
                href={`/services/${study.relatedServiceSlug}`}
                className="mt-1 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
              >
                <span>{study.relatedServiceName}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Structured Sections */}
          <div className="mt-12 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="font-display text-2xl font-bold text-white">Project Overview</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">{study.overview}</p>
            </section>

            {/* Problem & Objective */}
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-6">
                <h3 className="font-display text-lg font-bold text-red-400">The Problem</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">{study.problem}</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-6">
                <h3 className="font-display text-lg font-bold text-emerald-400">The Objective</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">{study.objective}</p>
              </div>
            </section>

            {/* Solution */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8">
              <h2 className="font-display text-2xl font-bold text-white">The Devtacet Solution</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">{study.solution}</p>
              
              <div className="mt-6 border-t border-zinc-800 pt-6">
                <h3 className="font-display text-base font-bold text-white">Key Features Delivered</h3>
                <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  {study.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="font-display text-2xl font-bold text-white">Technical Architecture</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{study.architecture}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span key={tech} className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 font-mono text-xs text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <h2 className="font-display text-2xl font-bold text-emerald-400">Documented Results</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-200">{study.results}</p>
            </section>

            {/* CTA */}
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Ready to engineer your digital product?</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Reach out to Devtacet in Lucknow. We’ll review your technical objectives and design an enterprise-grade architecture.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start a Project
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-full border border-zinc-700 bg-zinc-800/80 px-7 py-3 text-xs sm:text-sm font-semibold text-white transition-colors hover:border-primary"
                >
                  All Case Studies
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
