import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Search,
  Sparkles,
  Bot,
  Globe2,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'SEO & Generative Engine Optimization (GEO) Services | Devtacet',
  description:
    'Devtacet delivers technical SEO and Generative Engine Optimization (GEO) services. Rank on Google and get cited by AI search engines like ChatGPT, Perplexity, and Claude.',
  alternates: {
    canonical: '/services/seo',
  },
  openGraph: {
    title: 'Technical SEO & GEO Services | Devtacet',
    description:
      'Rank on Google and get cited across AI search engines with technical SEO & Generative Engine Optimization.',
    url: 'https://devtacet.me/services/seo',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'GEO is the discipline of optimizing web content and technical codebases so Large Language Models (LLMs) and AI search engines—such as ChatGPT, Perplexity, Claude, SearchGPT, and Google AI Overviews—can reliably crawl, comprehend, and cite your brand as an authoritative answer.',
  },
  {
    q: 'How does Devtacet’s technical SEO differ from traditional marketing agencies?',
    a: 'We are engineers. Instead of just writing generic blog posts, we optimize server headers, structured Schema.org JSON-LD graphs, Core Web Vitals (LCP, INP, CLS), crawl budgets, llms.txt endpoints, and semantic HTML directly in your source code.',
  },
  {
    q: 'What is llms.txt and why does Devtacet implement it?',
    a: 'llms.txt is a standardized markdown file placed in the root of a domain that provides concise, structured, machine-readable facts about your organization, services, and documentation for AI crawlers like GPTBot, ClaudeBot, and PerplexityBot.',
  },
  {
    q: 'Does Devtacet help local businesses in Lucknow rank on Google?',
    a: 'Yes. We provide local SEO architecture for businesses in Lucknow and across India, including LocalBusiness Schema, local keyword intent optimization, Google Business Profile integration, and geo-targeted landing page engineering.',
  },
]

export default function SeoServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Technical SEO & Generative Engine Optimization (GEO)',
    serviceType: 'Search Engine Optimization & AI Visibility',
    provider: {
      '@type': 'Organization',
      name: 'Devtacet',
      url: 'https://devtacet.me',
    },
    areaServed: 'Worldwide',
    description:
      'Technical SEO and Generative Engine Optimization (GEO) engineered directly into your website source code.',
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
              { label: 'Technical SEO & GEO' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <TrendingUp className="size-3.5" />
              Search & AI Visibility
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Found on Google & Cited Across AI Search Engines
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              Devtacet is a digital solutions company based in Lucknow, India, helping businesses achieve organic dominance. We combine deep technical SEO engineering with Generative Engine Optimization (GEO) to win traditional SERP rankings and direct AI citations.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-amber-400">Google + AI</p>
              <p className="mt-1 text-xs text-zinc-400">Dual Search Engine Visibility</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-primary">100%</p>
              <p className="mt-1 text-xs text-zinc-400">Valid Schema.org Knowledge Graphs</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0e15] p-5 text-center">
              <p className="font-display text-3xl font-bold text-emerald-400">&gt; 95</p>
              <p className="mt-1 text-xs text-zinc-400">Core Web Vitals Performance</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16 space-y-12">
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">SEO & GEO Capabilities</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Generative Engine Optimization (GEO)</h3>
                  <p className="mt-1 text-xs text-zinc-400">Optimizing entity clarity, direct answer sections, and llms.txt integration so ChatGPT, Claude, and Perplexity cite your brand.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Technical SEO Code Audits</h3>
                  <p className="mt-1 text-xs text-zinc-400">Fixing canonicalization, 301 redirect chains, robots.txt bot rules, dynamic XML sitemaps, and server response headers.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Schema.org JSON-LD Architecture</h3>
                  <p className="mt-1 text-xs text-zinc-400">Structured markup for Organizations, Local Businesses, Services, Articles, Products, and FAQs to unlock rich snippets.</p>
                </div>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4">
                  <h3 className="font-display text-base font-semibold text-white">Commercial Content Strategy</h3>
                  <p className="mt-1 text-xs text-zinc-400">Intent-driven pillar pages and authoritative engineering guides that capture high-value buyer search queries.</p>
                </div>
              </div>
            </section>

            {/* Problems Solved */}
            <section className="rounded-3xl border border-zinc-800 bg-[#0c0d14] p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Problems We Solve</h2>
              <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>AI Search Invisibility:</strong> Traditional SEO alone fails when users ask AI tools. We structure your entity so LLMs understand exactly what you do.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Duplicate Content & Canonical Issues:</strong> We eliminate www/non-www duplicate versions, trailing slash conflicts, and missing canonical tags.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Poor Core Web Vitals:</strong> We resolve render-blocking scripts, layout shifts (CLS), and interaction lag (INP) directly in React code.</span>
                </li>
              </ul>
            </section>

            {/* Related Guide Callout */}
            <section className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Featured In-Depth Guide</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">Technical SEO & GEO: The 2026 Playbook</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">
                Read our complete blueprint on Schema.org, llms.txt, AI search engine indexing, and entity-first search strategy.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/blog/seo" className="inline-flex items-center gap-1 text-amber-400 hover:underline">
                  Read SEO & GEO Guide <ArrowRight className="size-3.5" />
                </Link>
                <Link href="/web-development-company-lucknow" className="inline-flex items-center gap-1 text-zinc-400 hover:text-white">
                  Local SEO in Lucknow →
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
            <div className="rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent p-8 text-center sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">Boost your organic rankings and AI search citations</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
                Request a comprehensive technical SEO and GEO audit from Devtacet. We’ll identify crawl blockers, schema errors, and ranking opportunities.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-7 py-3 text-xs sm:text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request SEO & GEO Audit
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
