import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Code2,
  ShieldCheck,
  Zap,
  Globe2,
  Award,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'About Devtacet | Engineering-First Software Studio in Lucknow, India',
  description:
    'Meet Devtacet — a dedicated team of senior software engineers and architects in Lucknow, India building resilient digital products, custom internal tools, and high-performance web systems.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Devtacet | Engineering-First Software Studio',
    description:
      'Senior software engineers and architects in Lucknow, India building resilient digital products, custom software, and mobile apps without agency bloat.',
    url: 'https://devtacet.me/about',
    type: 'website',
  },
}

const teamMembers = [
  {
    name: 'Ayush Kumar Yadav',
    role: 'Founder & Lead Engineer',
    bio: 'Leads architecture, full-stack Next.js systems, and engineering standards across all client codebases.',
    image: '/Ayush_Kumar_Yadav.png',
  },
  {
    name: 'Aditya Mukerji',
    role: 'Technical Architect',
    bio: 'Specializes in distributed systems, cloud backend infrastructure, API gateways, and database performance.',
    image: '/Aditya_Mukerji.png',
  },
  {
    name: 'Aniket Chakraborty',
    role: 'Frontend & UI/UX Lead',
    bio: 'Designs intuitive design systems, micro-animations, and responsive user experiences built with React.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Arpan Ganguly',
    role: 'Backend & Cloud Engineer',
    bio: 'Engineers robust Node.js microservices, database schemas, ETL pipelines, and cloud deployments.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
]

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
      logo: 'https://devtacet.me/icon.svg',
      description:
        'Devtacet is an engineering-first software studio based in Lucknow, India. We partner with ambitious founders and SMEs worldwide to engineer resilient web applications, mobile apps, custom MIS software, and data analytics systems.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <SiteHeader />
      <main className="min-h-svh pt-24 pb-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Breadcrumbs items={[{ label: 'About Devtacet' }]} className="mb-8" />

          {/* Header */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Building2 className="size-3.5" />
              Company Overview
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Digital Solutions with Craft & Ownership
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is an engineering-first digital studio based in Lucknow, India. Founded by senior software architects, we partner with ambitious founders and SMEs worldwide to build resilient software, automate internal operations, and accelerate digital growth.
            </p>
          </div>

          <div className="mt-16 space-y-14">
            {/* Who We Are & Geographic Scope */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Who We Are</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
                Devtacet was founded by engineers who believe that digital software should be built with technical excellence, transparency, and deep accountability. We operate as a dedicated engineering unit—pairing businesses directly with senior staff engineers who own projects from technical design to production deployment.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <MapPin className="size-4" />
                    <span>Headquarters</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    Based in Lucknow, Uttar Pradesh, India. We actively support businesses in the Lucknow regional market while managing distributed engineering workflows.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <Globe2 className="size-4" />
                    <span>Geographic Coverage</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    We partner with startups, SMEs, and growth-stage enterprises across India, North America, Europe, and Asia-Pacific.
                  </p>
                </div>
              </div>
            </section>

            {/* What Makes Us Different */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Our Engineering Philosophy</h2>
              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Direct Engineer Access:</strong> You communicate directly with the software engineers writing your code. No account managers or communication silos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Honest Scopes & Timelines:</strong> We give realistic milestones and communicate early if project parameters evolve. We say no to work we cannot execute well.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Clean, Maintainable Architecture:</strong> We write strict TypeScript, modular components, and comprehensive documentation so your internal team can scale the codebase.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Full Intellectual Property Ownership:</strong> You own 100% of your source code, database schemas, deployment pipelines, and brand assets.</span>
                </li>
              </ul>
            </section>

            {/* Core Team */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Meet the Team</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                A sharp engineering crew dedicated to craftsmanship, sub-second performance, and reliable delivery.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="size-16 rounded-xl object-cover border border-zinc-700 shrink-0"
                    />
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{member.name}</h3>
                      <p className="text-xs font-medium text-primary mt-0.5">{member.role}</p>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Capabilities */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Technology Stack & Disciplines</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Our technology choices are guided by reliability, developer velocity, and runtime performance:
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  'Next.js (App Router)',
                  'React 19',
                  'TypeScript',
                  'Node.js & Express',
                  'React Native',
                  'Flutter',
                  'MongoDB / Mongoose',
                  'Tailwind CSS',
                  'Framer Motion',
                  'Vercel & AWS Infrastructure',
                  'Schema.org & GEO',
                ].map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Case Studies Links */}
            <section className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <h2 className="font-display text-xl font-bold text-white">Explore What We’ve Built</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Review our real client and internal engineering case studies spanning analytics platforms, backend microservices, developer tooling, and mobile apps.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-primary hover:underline">
                  View Case Studies <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  View All Services →
                </Link>
              </div>
            </section>

            {/* CTA */}
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Let’s discuss your next digital product</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Reach out to Devtacet for an honest engineering assessment and a predictable roadmap.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Contact Devtacet
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
