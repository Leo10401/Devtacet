import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Android App Development: From Idea to Play Store Launch',
  description:
    'A practical guide to building production Android apps using Kotlin, React Native, and Flutter — covering architecture, UI/UX, testing, and Play Store submission.',
  keywords: [
    'android development',
    'mobile app development',
    'React Native',
    'Flutter',
    'Kotlin',
    'Play Store',
    'iOS and Android',
    'mobile app architecture',
    'cross-platform development',
  ],
  openGraph: {
    title: 'Android App Development: From Idea to Play Store Launch | Devtacet',
    description:
      'A practical roadmap for building and shipping production Android apps with modern cross-platform frameworks.',
    type: 'article',
    publishedTime: '2026-08-15T00:00:00Z',
  },
  alternates: { canonical: '/blog/android-development' },
}

function ArticleJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Android App Development: From Idea to Play Store Launch',
    description:
      'A practical guide to building production Android apps using Kotlin, React Native, and Flutter.',
    author: {
      '@type': 'Organization',
      name: 'Devtacet Engineering Team',
      url: 'https://devtacet.me/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
      logo: { '@type': 'ImageObject', url: 'https://devtacet.me/icon.svg' },
    },
    datePublished: '2026-08-15',
    dateModified: '2026-08-18',
    mainEntityOfPage: 'https://devtacet.me/blog/android-development',
    keywords: 'android development, React Native, Flutter, Kotlin, Play Store',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function AndroidDevelopmentPage() {
  return (
    <>
      <ArticleJsonLd />
      <article className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Android & Mobile App Development' },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Mobile Development
          </span>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Android App Development: From Idea to Play Store Launch
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Published by <span className="text-foreground font-medium">Devtacet Engineering Team</span> · 9 min read · Updated August 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Building an Android app that survives the Play Store review, retains users past day one, and
            scales without crashing requires more than writing Kotlin. This guide covers the full lifecycle
            — from choosing the right framework to optimizing for store rankings, as engineered at <Link href="/" className="text-primary hover:underline">Devtacet</Link>.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Native vs. Cross-Platform: Making the Right Choice
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            The native-vs-cross-platform debate has shifted. React Native and Flutter now deliver
            near-native performance with significantly faster development cycles. At Devtacet, we
            recommend cross-platform for 80% of projects because it lets you ship iOS and Android
            simultaneously from a single codebase, halving development time and maintenance burden. Learn more about our <Link href="/services/mobile-app-development" className="text-primary hover:underline">Mobile App Development Services</Link>.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">When to go Native (Kotlin/Swift)</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Heavy GPU workloads: 3D rendering, AR/VR, or complex animations</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Deep hardware integration: Bluetooth LE, custom camera pipelines, NFC</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Platform-specific UX that must feel indistinguishable from system apps</li>
          </ul>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">When Cross-Platform Wins (React Native / Flutter)</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Content-driven apps: e-commerce, social, productivity, dashboards</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Startups needing iOS + Android on a single budget and timeline</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Teams that want to share logic with an existing web app (React Native + Next.js)</li>
          </ul>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Architecture Patterns That Scale
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We structure every mobile app around clean architecture principles: a presentation layer
            (UI components and state management), a domain layer (business logic and use cases), and
            a data layer (API clients, local storage, and caching). This separation ensures testability,
            modularity, and the ability to swap implementations without rewriting the entire app. For back-office synchronization, see our <Link href="/services/custom-software" className="text-primary hover:underline">Custom Software Systems</Link>.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            UI/UX for Mobile: What Users Actually Expect
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Mobile UX is not &ldquo;responsive web design made smaller.&rdquo; Users expect gesture navigation,
            haptic feedback, smooth 60fps animations, and offline functionality. We design thumb-zone-first
            layouts, implement skeleton loading states, and optimize touch targets to at least 44×44 points.
            Every interaction must feel instant — perceived performance matters more than raw benchmarks.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Testing &amp; Quality Assurance
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Unit Tests: Jest / Dart tests for business logic isolation</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Integration Tests: API contract testing with mock servers</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> E2E Tests: Detox (React Native) / Integration Test (Flutter) for full user flows</li>
            <li className="flex gap-2"><span className="text-emerald-400 font-bold">•</span> Device Lab: Testing across screen sizes, OS versions, and OEM skins</li>
          </ul>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Navigating the Play Store Review
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Google Play&apos;s review process rejects apps for privacy policy violations, misleading metadata,
            and policy non-compliance more than technical bugs. We handle the full submission process:
            app signing, store listing optimization (ASO), screenshot generation, privacy policy
            compliance, content ratings, and data safety declarations. First-try approval is the standard.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Post-Launch Growth
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Shipping to the store is not the finish line — it&apos;s the starting gun. We integrate analytics
            (Firebase, Mixpanel), set up crash reporting (Sentry), implement push notification campaigns,
            and run A/B tests on onboarding flows. See how we engineered <Link href="/case-studies/pulseframe-mobile" className="text-primary hover:underline">Pulseframe Mobile</Link> for a complete real-world case study.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-white">Ready to build your mobile app?</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            From first wireframe to App Store and Play Store approval — Devtacet engineers cross-platform mobile apps for startups and enterprises.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span>Start Mobile Project</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services/mobile-app-development"
              className="rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-primary"
            >
              Mobile App Services
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Related Resources</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            <Link href="/services/mobile-app-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-emerald-400 font-mono">// Service</span>
              <p className="mt-1 font-semibold text-white">Mobile App Development Services →</p>
            </Link>
            <Link href="/case-studies/pulseframe-mobile" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-primary font-mono">// Case Study</span>
              <p className="mt-1 font-semibold text-white">Pulseframe Mobile App Case Study →</p>
            </Link>
            <Link href="/blog/web-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-cyan-400 font-mono">// Blog</span>
              <p className="mt-1 font-semibold text-white">Modern Web Development Guide →</p>
            </Link>
            <Link href="/services/web-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-purple-400 font-mono">// Service</span>
              <p className="mt-1 font-semibold text-white">Web Development Services →</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
