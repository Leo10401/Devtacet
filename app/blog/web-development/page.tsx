import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Complete Guide to Modern Web Development in 2026',
  description:
    'Learn how to build fast, scalable web applications using Next.js, React 19, TypeScript, and modern full-stack architecture. A comprehensive guide by Devtacet.',
  keywords: [
    'web development',
    'Next.js',
    'React 19',
    'TypeScript',
    'full-stack development',
    'frontend development',
    'backend development',
    'web application',
    'server components',
    'edge computing',
  ],
  openGraph: {
    title: 'The Complete Guide to Modern Web Development in 2026 | Devtacet',
    description:
      'Everything you need to know about building fast, scalable web applications with Next.js, React, and TypeScript.',
    type: 'article',
    publishedTime: '2026-08-15T00:00:00Z',
  },
  alternates: { canonical: '/blog/web-development' },
}

function ArticleJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Complete Guide to Modern Web Development in 2026',
    description:
      'Learn how to build fast, scalable web applications using Next.js, React 19, TypeScript, and modern full-stack architecture.',
    author: { '@type': 'Organization', name: 'Devtacet', url: 'https://devtacet.me' },
    publisher: { '@type': 'Organization', name: 'Devtacet', url: 'https://devtacet.me', logo: { '@type': 'ImageObject', url: 'https://devtacet.me/icon.svg' } },
    datePublished: '2026-08-15',
    dateModified: '2026-08-15',
    mainEntityOfPage: 'https://devtacet.me/blog/web-development',
    keywords: 'web development, Next.js, React, TypeScript, full-stack',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function WebDevelopmentPage() {
  return (
    <>
      <ArticleJsonLd />
      <article className="mx-auto max-w-3xl px-4 md:px-6">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        <header className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
            Web Development
          </span>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight md:text-5xl">
            The Complete Guide to Modern Web Development in 2026
          </h1>
          <p className="mt-4 text-muted-foreground">
            Published by <span className="text-foreground font-medium">Devtacet</span> · 10 min read
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Web development has fundamentally transformed. The gap between &ldquo;a website&rdquo; and &ldquo;a web application&rdquo;
            has narrowed to the point where every business needs a fast, interactive, and search-engine-optimized
            digital presence. This guide covers the full modern web development stack as we build it at Devtacet.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Why Modern Web Development Matters
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Google&apos;s Core Web Vitals now directly impact search rankings. Users abandon pages that take longer
            than 3 seconds to load. Meanwhile, AI search engines like ChatGPT and Perplexity are scraping
            structured web content to generate answers. The bar for &ldquo;good enough&rdquo; has risen dramatically —
            you need sub-second performance, semantic HTML, and machine-readable metadata out of the box.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            The Modern Frontend Stack
          </h2>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">Next.js &amp; React 19</h3>
          <p className="leading-relaxed text-muted-foreground">
            Next.js (App Router) with React 19 is the gold standard for production web applications. Server
            Components reduce client-side JavaScript by rendering on the server, while Suspense boundaries
            and streaming SSR deliver instant perceived performance. At Devtacet, every web project starts
            with Next.js because it gives us SSR, SSG, ISR, and API Routes in a single framework.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">TypeScript for Type Safety</h3>
          <p className="leading-relaxed text-muted-foreground">
            TypeScript eliminates entire categories of runtime bugs. Strict typing across components,
            API payloads, and database schemas means fewer production incidents and faster development
            velocity. We enforce strict TypeScript across every codebase.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">Tailwind CSS for Design Systems</h3>
          <p className="leading-relaxed text-muted-foreground">
            Tailwind CSS lets us build custom design tokens — colors, spacing, typography, and animations —
            that compile to minimal CSS. Combined with component-level scoping, we achieve pixel-perfect
            designs without stylesheet bloat. Our sites consistently score 95+ on Lighthouse performance audits.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Backend Architecture
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Modern backends are API-first. We use Node.js with Express or Next.js API Routes for server
            logic, MongoDB with Mongoose for flexible document databases, and PostgreSQL for relational
            data requirements. REST and GraphQL APIs serve both web and mobile clients from a single
            backend, reducing duplication and maintenance costs.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Performance Optimization
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Server Components: Zero client JS for static UI sections</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Edge Functions: Logic running at CDN edge nodes globally</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Image Optimization: Automatic WebP/AVIF with lazy loading</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Code Splitting: Route-level chunks loaded on demand</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> Caching Strategies: ISR, stale-while-revalidate, and CDN caching</li>
          </ul>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            SEO for Web Applications
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Server-rendered Next.js pages are inherently SEO-friendly. But ranking requires more than
            renderable HTML. We implement Schema.org JSON-LD structured data, dynamic sitemaps, optimized
            meta tags, canonical URLs, and <code className="rounded bg-secondary px-1.5 py-0.5 text-sm text-foreground">llms.txt</code> files
            for AI search engine indexing. Every page ships with OpenGraph and Twitter Card metadata for
            social sharing optimization.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Deployment &amp; Infrastructure
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We deploy to Vercel for zero-config edge infrastructure with automatic preview deployments
            on every pull request. For enterprise clients requiring custom infrastructure, we provision
            AWS with CloudFront CDN, Lambda@Edge, and containerized services. Every deployment is
            zero-downtime with automatic rollback capability.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            How Devtacet Builds Web Products
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Our 7-stage process ensures nothing is missed: Discovery → Architecture → Design → Engineering →
            QA → Launch → Growth. Clients work directly with the engineers writing the code — no account
            managers, no telephone games. We ship fast, iterate faster, and optimize for long-term SEO
            compounding after launch.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <h3 className="font-display text-2xl font-bold tracking-tight">Ready to build your web product?</h3>
          <p className="mt-2 text-muted-foreground">
            Let&apos;s talk about your project — from architecture to launch.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Related posts */}
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 font-display text-lg font-semibold">Related articles</h3>
          <div className="flex flex-col gap-3">
            <Link href="/blog/seo" className="text-muted-foreground transition-colors hover:text-primary">
              → Technical SEO & Generative Engine Optimization (GEO): The 2026 Playbook
            </Link>
            <Link href="/blog/android-development" className="text-muted-foreground transition-colors hover:text-primary">
              → Android App Development: From Idea to Play Store Launch
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
