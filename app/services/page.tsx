import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  TrendingUp,
  Share2,
  ArrowRight,
  CheckCircle2,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Digital Solutions & Software Engineering Services | Devtacet',
  description:
    'Explore Devtacet’s core services: website development, mobile apps, custom software & MIS, data analytics, technical SEO, and social media marketing.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Digital Solutions & Software Engineering Services | Devtacet',
    description:
      'Explore Devtacet’s core services: website development, mobile apps, custom software & MIS, data analytics, technical SEO, and social media marketing.',
    url: 'https://devtacet.me/services',
    type: 'website',
  },
}

const servicesList = [
  {
    slug: 'web-development',
    icon: Globe,
    title: 'Website Development',
    subtitle: 'Next.js, React 19 & Full-Stack Web Apps',
    description:
      'High-performance marketing sites, SaaS platforms, and e-commerce applications engineered with Next.js, React 19, TypeScript, and Tailwind CSS. Built for sub-second load times and high conversions.',
    deliverables: [
      'Next.js (App Router) SSR / SSG / ISR Architecture',
      'React 19 & TypeScript Production Codebases',
      'Sub-Second Core Web Vitals & Performance Tuning',
      'REST & GraphQL API Integrations',
    ],
    href: '/services/web-development',
    color: '#06b6d4',
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS & Android with React Native & Flutter',
    description:
      'Cross-platform mobile applications engineered for native performance, offline synchronization, biometric security, and streamlined App Store / Google Play Store compliance.',
    deliverables: [
      'Cross-Platform iOS & Android Codebases',
      'React Native & Flutter Native Performance',
      'Offline-First Sync & Local Storage',
      'App Store & Play Store Publishing & Reviews',
    ],
    href: '/services/mobile-app-development',
    color: '#10b981',
  },
  {
    slug: 'custom-software',
    icon: Cpu,
    title: 'Custom Software & MIS',
    subtitle: 'Business Automation & Enterprise Systems',
    description:
      'Tailor-made internal business software, Management Information Systems (MIS), ERP-lite platforms, and automated workflow backends engineered to eliminate manual spreadsheets.',
    deliverables: [
      'Custom Internal Web Portals & Workflow Tools',
      'MIS Architecture & Executive Reporting',
      'Role-Based Access Control (RBAC) & Security',
      'Node.js & MongoDB Backend Services',
    ],
    href: '/services/custom-software',
    color: '#d946ef',
  },
  {
    slug: 'analytics',
    icon: BarChart3,
    title: 'Data Analytics Systems',
    subtitle: 'Dashboards, ETL Pipelines & Decision Support',
    description:
      'Custom data analytics tools, automated data aggregation pipelines, and interactive executive dashboards turning messy operational numbers into strategic clarity.',
    deliverables: [
      'Real-Time Interactive KPI Dashboards',
      'Automated ETL & Database Aggregations',
      'Scheduled Business Intelligence Reports',
      'Data Visualization with Precision Charting',
    ],
    href: '/services/analytics',
    color: '#8b5cf6',
  },
  {
    slug: 'seo',
    icon: TrendingUp,
    title: 'Technical SEO & GEO',
    subtitle: 'Google Search & AI Engine Optimization',
    description:
      'Technical SEO and Generative Engine Optimization (GEO) engineered into your code to maximize rankings on Google and citations across AI search engines (ChatGPT, Perplexity, Claude).',
    deliverables: [
      'JSON-LD Knowledge Graph & Schema.org Markup',
      'Generative Engine Optimization (GEO) & llms.txt',
      'Core Web Vitals & Crawl Budget Optimization',
      'Entity-First Keyword & Content Architecture',
    ],
    href: '/services/seo',
    color: '#f59e0b',
  },
  {
    slug: 'social-media-marketing',
    icon: Share2,
    title: 'Social Media Marketing',
    subtitle: 'Audience Growth & Product Distribution',
    description:
      'Strategic social media marketing tailored for digital products, technology brands, and startups. Combining content calendars, developer engagement loops, and revenue-tied analytics.',
    deliverables: [
      'Multi-Channel Content Strategy & Calendars',
      'Brand Narrative & High-Conversion Copy',
      'Community Engagement & Developer Advocacy',
      'Attribution Tracking & Growth Analytics',
    ],
    href: '/services/social-media-marketing',
    color: '#ec4899',
  },
]

const processSteps = [
  { step: '01', name: 'Discovery & Requirements', desc: 'Understanding business goals, target users, constraints, and architecture roadmap.' },
  { step: '02', name: 'Technical Architecture', desc: 'Schema modeling, API contract definition, component breakdown, and security modeling.' },
  { step: '03', name: 'UI/UX Design Systems', desc: 'High-fidelity responsive layouts, accessible typography, and interactive prototypes.' },
  { step: '04', name: 'Full-Stack Engineering', desc: 'Clean, type-safe Next.js, React, Node.js, and mobile development by senior engineers.' },
  { step: '05', name: 'QA & Performance Testing', desc: 'Rigorous cross-device QA, security audits, and sub-second speed optimization.' },
  { step: '06', name: 'Deployment & Launch', desc: 'Zero-downtime CI/CD deployment on Vercel and AWS with DNS & SSL configuration.' },
  { step: '07', name: 'SEO, GEO & Maintenance', desc: 'Ongoing technical SEO audits, AI search monitoring, and proactive feature enhancements.' },
]

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servicesList.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `https://devtacet.me${service.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-16">
          <Breadcrumbs items={[{ label: 'Services' }]} className="mb-8" />

          {/* Hero Header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Code2 className="size-3.5" />
              Devtacet Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering & Digital Solutions Built to Perform
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400">
              Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0d0e15] p-7 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-105"
                        style={{ color: service.color }}
                      >
                        <Icon className="size-6" />
                      </span>
                      <span className="font-mono text-xs text-zinc-500">
                        {service.subtitle.split(' ')[0]}
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-xl font-bold text-white transition-colors group-hover:text-primary">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-zinc-400">
                      {service.subtitle}
                    </p>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-zinc-800/80 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Key Capabilities:
                      </p>
                      <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-300">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary transition-all group-hover:translate-x-1"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 7-Stage Process Section */}
          <div className="mt-24 rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Engineering Lifecycle
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                Our 7-Stage Development Process
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Every project at Devtacet follows a structured lifecycle to ensure predictable delivery, enterprise code quality, and measurable business impact.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <span className="font-mono text-sm font-bold text-primary">{step.step}</span>
                  <h3 className="mt-2 font-display text-sm font-bold text-white">{step.name}</h3>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent p-8 text-center sm:p-12 lg:flex-row lg:text-left">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
                Speak directly with Devtacet’s senior engineers to get an honest architectural assessment, timeline, and execution plan.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
