import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Technical SEO & Generative Engine Optimization (GEO): The 2026 Playbook',
  description:
    'How to rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews using structured data, llms.txt, Schema.org JSON-LD, and entity-first content strategy.',
  keywords: [
    'technical SEO',
    'generative engine optimization',
    'GEO',
    'AI SEO',
    'llms.txt',
    'Schema.org',
    'JSON-LD',
    'Google rankings',
    'ChatGPT search',
    'Perplexity SEO',
    'AI Overviews',
    'structured data',
  ],
  openGraph: {
    title: 'Technical SEO & GEO: The 2026 Playbook | Devtacet',
    description:
      'Rank on Google and get cited by AI search engines with structured data, GEO, and entity-first content strategy.',
    type: 'article',
    publishedTime: '2026-08-15T00:00:00Z',
  },
  alternates: { canonical: '/blog/seo' },
}

function ArticleJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Technical SEO & Generative Engine Optimization (GEO): The 2026 Playbook',
    description:
      'How to rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews using structured data, llms.txt, and entity-first content strategy.',
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
    mainEntityOfPage: 'https://devtacet.me/blog/seo',
    keywords: 'technical SEO, GEO, generative engine optimization, AI search, llms.txt, Schema.org',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default function SeoPage() {
  return (
    <>
      <ArticleJsonLd />
      <article className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Technical SEO & GEO' },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <span className="mb-3 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
            SEO &amp; GEO
          </span>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Technical SEO &amp; Generative Engine Optimization (GEO): The 2026 Playbook
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Published by <span className="text-foreground font-medium">Devtacet Engineering Team</span> · 11 min read · Updated August 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            SEO in 2026 is a two-front war. You need to rank on Google&apos;s traditional SERPs <em>and</em> get
            cited by AI search engines like ChatGPT, Perplexity, SearchGPT, and Google AI Overviews. This
            playbook covers both — technical SEO fundamentals and the emerging field of Generative Engine
            Optimization (GEO) practiced at <Link href="/" className="text-primary hover:underline">Devtacet</Link>.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            What Is Technical SEO?
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Technical SEO is the engineering foundation that makes your content crawlable, indexable, and
            rankable. Without it, even the best content stays invisible. It covers site speed, mobile
            responsiveness, crawl budget management, canonical URLs, structured data, and XML sitemaps. Check out our <Link href="/services/seo" className="text-primary hover:underline">Technical SEO & GEO Services</Link> for direct engineering support.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            The Technical SEO Checklist
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Core Web Vitals</strong>: LCP &lt; 2.5s, INP &lt; 200ms, CLS &lt; 0.1</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Dynamic XML Sitemap</strong>: Auto-generated with priority and changeFrequency</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">robots.txt</strong>: Allowing Googlebot, Bingbot, and AI crawlers explicitly</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Canonical URLs</strong>: Preventing duplicate content penalties and enforcing single hostname</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Semantic HTML</strong>: Proper heading hierarchy (h1 → h2 → h3), landmark elements</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Schema.org JSON-LD</strong>: Organization, WebSite, Service, FAQPage, Article schemas</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">OpenGraph &amp; Twitter Cards</strong>: Rich previews on social sharing</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Mobile-First Design</strong>: Google indexes mobile versions first</li>
          </ul>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            What Is Generative Engine Optimization (GEO)?
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            GEO is the practice of optimizing your website to be cited, quoted, and recommended by AI
            search engines and large language models. When someone asks ChatGPT &ldquo;What&apos;s the best digital
            solutions company in Lucknow?&rdquo; — GEO determines whether your brand appears in that answer.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">How AI Search Engines Find Information</h3>
          <p className="leading-relaxed text-muted-foreground">
            AI search engines crawl the web using specialized bots (GPTBot, PerplexityBot, ClaudeBot) and
            index content into retrieval-augmented generation (RAG) systems. They prioritize content that
            is: factually structured, entity-rich, clearly attributed, and machine-readable. Vague
            marketing copy gets ignored; direct factual statements get cited.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            The GEO Implementation Stack
          </h2>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">1. The llms.txt Standard</h3>
          <p className="leading-relaxed text-muted-foreground">
            Place a <code className="rounded bg-secondary px-1.5 py-0.5 text-sm text-foreground">/llms.txt</code> file
            at your domain root. This markdown file tells AI crawlers who you are, what you do, and where
            to find detailed context. Think of it as a README for AI agents. Pair it
            with <code className="rounded bg-secondary px-1.5 py-0.5 text-sm text-foreground">/llms-full.txt</code> for
            comprehensive documentation.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">2. robots.txt for AI Bots</h3>
          <p className="leading-relaxed text-muted-foreground">
            Explicitly allow AI crawlers in your robots.txt: GPTBot, OAI-SearchBot, ChatGPT-User,
            PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, and Applebot-Extended. Many sites
            accidentally block these bots, losing AI search visibility entirely.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">3. Entity-First Content</h3>
          <p className="leading-relaxed text-muted-foreground">
            Write content that makes direct factual claims. For example: &ldquo;Devtacet is a software engineering studio based in Lucknow, India, helping startups and businesses build Next.js web applications, React Native mobile apps, custom MIS platforms, and real-time data analytics systems.&rdquo; LLMs extract and cite specific entities and facts.
          </p>

          <h3 className="mt-8 mb-3 font-display text-xl font-semibold">4. FAQ Schema for Direct Answers</h3>
          <p className="leading-relaxed text-muted-foreground">
            FAQPage structured data enables Google AI Overviews and SearchGPT to render your answers as
            direct-answer cards. Every question-answer pair becomes a potential citation in AI-generated
            search results.
          </p>

          <h2 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Measuring SEO &amp; GEO Success
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Google Search Console</strong>: Impressions, clicks, and position tracking</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Rich Results Testing</strong>: Validate JSON-LD with Google&apos;s testing tool</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">AI Citation Monitoring</strong>: Search your brand on ChatGPT, Perplexity, and Gemini</li>
            <li className="flex gap-2"><span className="text-amber-400 font-bold">•</span> <strong className="text-foreground">Core Web Vitals</strong>: Monitor via Lighthouse CI in your deployment pipeline</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-amber-500/30 bg-amber-500/5 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold text-white">Want your site to rank on Google and AI search?</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Devtacet implements full Technical SEO + GEO directly into production Next.js codebases.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span>Get an SEO Audit</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services/seo"
              className="rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-primary"
            >
              Explore SEO Services
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="mb-4 font-display text-lg font-semibold text-white">Related Resources</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            <Link href="/services/seo" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-amber-400 font-mono">// Service</span>
              <p className="mt-1 font-semibold text-white">Technical SEO & GEO Services →</p>
            </Link>
            <Link href="/web-development-company-lucknow" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-emerald-400 font-mono">// Local</span>
              <p className="mt-1 font-semibold text-white">Web Development in Lucknow →</p>
            </Link>
            <Link href="/blog/web-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-cyan-400 font-mono">// Blog</span>
              <p className="mt-1 font-semibold text-white">Modern Web Development Guide →</p>
            </Link>
            <Link href="/services/web-development" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-primary">
              <span className="text-xs text-primary font-mono">// Service</span>
              <p className="mt-1 font-semibold text-white">Website Development Services →</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
