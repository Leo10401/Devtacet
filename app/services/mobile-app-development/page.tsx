import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Cpu,
  Download,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS & Android Apps | Devtacet',
  description:
    'Devtacet builds high-performance iOS and Android mobile applications using React Native and Flutter. Native speed, offline-first sync, and smooth app store approvals.',
  alternates: {
    canonical: '/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development Services | Devtacet',
    description:
      'Cross-platform iOS and Android mobile app engineering with React Native and Flutter.',
    url: 'https://devtacet.me/services/mobile-app-development',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Does Devtacet develop for both iOS and Android?',
    a: 'Yes. We build cross-platform mobile apps using React Native and Flutter that run natively on both Apple iOS (iPhones/iPads) and Android devices from a single clean codebase, significantly reducing engineering time and maintenance costs.',
  },
  {
    q: 'How does Devtacet ensure App Store and Play Store compliance?',
    a: 'We handle the complete release process: provisioning profiles, signing certificates, privacy manifests, in-app purchase compliance, and review guidelines for both Apple App Store and Google Play Store.',
  },
  {
    q: 'Can our mobile app function offline?',
    a: 'Yes. We engineer offline-first mobile applications with local encrypted SQLite / WatermelonDB storage and background data synchronization when internet connectivity is restored.',
  },
  {
    q: 'How long does mobile app development take?',
    a: 'A typical MVP mobile app takes between 6 to 12 weeks from initial UX wireframes to app store submission, depending on backend complexity and third-party integrations.',
  },
]

export default function MobileAppServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Development',
    serviceType: 'Mobile Application Engineering',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'Cross-platform iOS and Android mobile app engineering built with React Native and Flutter.',
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
              { label: 'Mobile App Development' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Smartphone className="size-3.5" />
              Cross-Platform Mobile Engineering
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              iOS & Android Mobile Apps Built for Retention and Performance
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, engineering production-ready mobile applications. We build cross-platform apps with React Native and Flutter that deliver 60fps native feel, rock-solid stability, and seamless app store approval.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-emerald-400">60 FPS</p>
              <p className="mt-1 text-xs text-zinc-400">Fluid Native Animation Fidelity</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">1 Codebase</p>
              <p className="mt-1 text-xs text-zinc-400">Shared iOS & Android Architecture</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-cyan-400">1st Try</p>
              <p className="mt-1 text-xs text-zinc-400">App Store & Play Store Approval</p>
            </div>
          </div>

          {/* What We Build */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Mobile Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Consumer & Startup Apps</h3>
                  <p className="mt-1 text-xs text-zinc-400">Social, marketplace, and fintech mobile apps with smooth onboarding, push notifications, and payment integrations.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Enterprise Field & Workforce Apps</h3>
                  <p className="mt-1 text-xs text-zinc-400">Internal operational mobile tools with offline sync, barcode scanning, location tracking, and role-based controls.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">React Native App Engineering</h3>
                  <p className="mt-1 text-xs text-zinc-400">JavaScript/TypeScript powered mobile apps sharing logic with your React web application for massive engineering efficiency.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Flutter Mobile Solutions</h3>
                  <p className="mt-1 text-xs text-zinc-400">High-fidelity pixel-perfect UI widgets, customizable graphics pipelines, and fast native compilation.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Costly Separate iOS and Android Teams:</strong> We engineer a single unified cross-platform codebase, cutting maintenance costs by over 40%.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Store Rejections:</strong> We audit all privacy policies, permissions, and native SDKs ahead of submission to guarantee fast approvals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Janky Performance:</strong> We profile memory leaks, optimize state management, and use native bridges for computationally heavy operations.</span>
                </li>
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Mobile Technology Stack</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {['React Native', 'Flutter', 'TypeScript', 'Node.js', 'Express API', 'MongoDB / Mongoose', 'Firebase Cloud Messaging', 'Apple TestFlight', 'Google Play Console'].map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Case Study Callout */}
            <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Related Case Study</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Pulseframe Mobile — Cross-Platform Collaboration App</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Discover how Devtacet engineered an ultra-fast cross-platform design and collaboration workspace built with React Native.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/case-studies/pulseframe-mobile" className="inline-flex items-center gap-1 text-emerald-400 hover:underline">
                  Read Case Study <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/blog/android-development" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Read Android App Roadmap →
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
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-emerald-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Ready to build and launch your mobile application?</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Consult with our senior mobile engineering team. We’ll help you choose between React Native and Flutter based on your exact app requirements.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start Mobile App Project
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
