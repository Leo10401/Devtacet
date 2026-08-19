import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'

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
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Modern Web Development' },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            Web Development
          </span>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight md:text-5xl">
            The Complete Guide to Modern Web Development in 2026
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Published by <span className="text-foreground font-medium">Devtacet Engineering Team</span> · 10 min read · Updated August 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Web development has fundamentally transformed. The gap between &ldquo;a website&rdquo; and &ldquo;a web application&rdquo;
            has narrowed to the point where every business needs a fast, interactive, and search-engine-optimized
            digital presence. This guide covers the full modern web development stack as we build it at <Link href="/" className="text-primary hover:underline">Devtacet</Link>.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Why Modern Web Development Matters
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Google&apos;s Core Web Vitals now directly impact search rankings. Users abandon pages that take longer
            than 3 seconds to load. Meanwhile, AI search engines like ChatGPT, Claude, and Perplexity are scraping
            structured web content to generate answers. The bar for &ldquo;good enough&rdquo; has risen dramatically —
            you need sub-second performance, semantic HTML, and machine-readable metadata out of the box. Explore our dedicated <Link href="/services/web-development" className="text-primary hover:underline">Website Development Services</Link> to see our production architecture.
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
            backend, reducing duplication and maintenance costs. For complex internal portals, check out our <Link href="/services/custom-software" className="text-primary hover:underline">Custom Software & MIS Development</Link>.
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
            SEO & GEO for Web Applications
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Server-rendered Next.js pages are inherently SEO-friendly. But ranking requires more than
            renderable HTML. We implement Schema.org JSON-LD structured data, dynamic sitemaps, optimized
            meta tags, canonical URLs, and <code className="rounded bg-secondary px-1.5 py-0.5 text-sm text-foreground">llms.txt</code> files
            for AI search engine indexing. Learn more in our <Link href="/services/seo" className="text-primary hover:underline">Technical SEO & GEO Services</Link>.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            How Devtacet Builds Web Products
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Our 7-stage process ensures nothing is missed: Discovery → Architecture → Design → Engineering →
            QA → Launch → Growth. Clients work directly with the senior engineers writing the code. See our real case study on <Link href="/case-studies/edge-deploy-ui" className="text-primary hover:underline">Edge Deploy UI Platform</Link> to examine our full-stack workflow.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-cyan-500/5 to-transparent p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-white">Ready to build your web application?</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Devtacet builds high-performance Next.js and React web applications for startups and businesses.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span>Start Web Project</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services/web-development"
              className="rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-primary"
            >
              Explore Web Services
            </Link>
          </div>
        </div>

        {/* Related posts & Case Studies */}
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Related Resources</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            <Link href="/services/web-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-primary font-mono">// Service</span>
              <p className="mt-1 font-semibold text-white">Website Development Services →</p>
            </Link>
            <Link href="/case-studies/edge-deploy-ui" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-cyan-400 font-mono">// Case Study</span>
              <p className="mt-1 font-semibold text-white">Edge Deploy UI Platform →</p>
            </Link>
            <Link href="/blog/seo" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-amber-400 font-mono">// Blog</span>
              <p className="mt-1 font-semibold text-white">Technical SEO & GEO Guide →</p>
            </Link>
            <Link href="/web-development-company-lucknow" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-emerald-400 font-mono">// Local</span>
              <p className="mt-1 font-semibold text-white">Web Development in Lucknow →</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
