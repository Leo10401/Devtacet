'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Sparkles, Globe, TrendingUp, Share2, BarChart3, Cpu, Smartphone, Code } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    slug: 'web-development',
    title: 'Modern Web Development',
    subtitle: 'The Complete Guide for 2026',
    excerpt:
      'From Next.js and React 19 to edge computing and server components — everything you need to know about building fast, scalable web applications.',
    category: 'Web Development',
    readTime: '10 min read',
    gradient: 'from-sky-500/10',
    orb: 'bg-sky-500/10',
    accent: 'text-sky-300',
    accentBg: 'bg-sky-500/15',
    accentRing: 'ring-sky-400/30',
    icon: Code,
    tags: ['Next.js', 'React 19', 'TypeScript'],
    stats: [
      { label: 'Frontend', value: '92%', width: 'w-[92%]', bar: 'from-sky-400 to-blue-500' },
      { label: 'Backend', value: '78%', width: 'w-[78%]', bar: 'from-sky-400 to-indigo-500' },
    ],
  },
  {
    slug: 'android-development',
    title: 'Android App Development',
    subtitle: 'Idea to Play Store Launch',
    excerpt:
      'A practical roadmap covering Kotlin, React Native, Flutter, UI/UX principles, and the Play Store review process.',
    category: 'Mobile Development',
    readTime: '9 min read',
    gradient: 'from-emerald-500/10',
    orb: 'bg-emerald-500/10',
    accent: 'text-emerald-300',
    accentBg: 'bg-emerald-500/15',
    accentRing: 'ring-emerald-400/30',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'Kotlin'],
    stats: [
      { label: 'Cross-Platform', value: '85%', width: 'w-[85%]', bar: 'from-emerald-400 to-teal-500' },
      { label: 'Native Perf', value: '96%', width: 'w-[96%]', bar: 'from-emerald-400 to-green-500' },
    ],
  },
  {
    slug: 'seo',
    title: 'Technical SEO & GEO',
    subtitle: 'The 2026 Playbook',
    excerpt:
      'How to rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews using structured data and entity-first strategy.',
    category: 'SEO & GEO',
    readTime: '11 min read',
    gradient: 'from-amber-500/10',
    orb: 'bg-amber-500/10',
    accent: 'text-amber-300',
    accentBg: 'bg-amber-500/15',
    accentRing: 'ring-amber-400/30',
    icon: TrendingUp,
    tags: ['llms.txt', 'Schema.org', 'JSON-LD'],
    stats: [
      { label: 'Google SERP', value: '88%', width: 'w-[88%]', bar: 'from-amber-400 to-orange-500' },
      { label: 'AI Search', value: '72%', width: 'w-[72%]', bar: 'from-amber-400 to-yellow-500' },
    ],
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    subtitle: 'Strategy for Digital Products',
    excerpt:
      'Build a repeatable SMM playbook covering content calendars, engagement loops, paid amplification, and revenue-tied metrics.',
    category: 'Marketing',
    readTime: '8 min read',
    gradient: 'from-pink-500/10',
    orb: 'bg-pink-500/10',
    accent: 'text-pink-300',
    accentBg: 'bg-pink-500/15',
    accentRing: 'ring-pink-400/30',
    icon: Share2,
    tags: ['Content', 'Engagement', 'Paid Social'],
    stats: [
      { label: 'Engagement', value: '76%', width: 'w-[76%]', bar: 'from-pink-400 to-rose-500' },
      { label: 'Conversion', value: '64%', width: 'w-[64%]', bar: 'from-pink-400 to-fuchsia-500' },
    ],
  },
  {
    slug: 'mis',
    title: 'Management Information Systems',
    subtitle: 'Data‑Driven Business Decisions',
    excerpt:
      'How modern MIS architectures turn raw operational data into executive dashboards, automated reports, and competitive advantage.',
    category: 'Data & Analytics',
    readTime: '8 min read',
    gradient: 'from-cyan-500/10',
    orb: 'bg-cyan-500/10',
    accent: 'text-cyan-300',
    accentBg: 'bg-cyan-500/15',
    accentRing: 'ring-cyan-400/30',
    icon: BarChart3,
    tags: ['Dashboards', 'ETL', 'Reporting'],
    stats: [
      { label: 'Data Quality', value: '91%', width: 'w-[91%]', bar: 'from-cyan-400 to-sky-500' },
      { label: 'Automation', value: '68%', width: 'w-[68%]', bar: 'from-cyan-400 to-teal-500' },
    ],
  },
  {
    slug: 'system-software',
    title: 'Understanding System Software',
    subtitle: 'The Foundation Layer',
    excerpt:
      'Operating systems, middleware, drivers, and runtime environments — the invisible infrastructure that powers every digital product.',
    category: 'Engineering',
    readTime: '7 min read',
    gradient: 'from-fuchsia-500/10',
    orb: 'bg-fuchsia-500/10',
    accent: 'text-fuchsia-300',
    accentBg: 'bg-fuchsia-500/15',
    accentRing: 'ring-fuchsia-400/30',
    icon: Cpu,
    tags: ['OS', 'Middleware', 'Runtime'],
    stats: [
      { label: 'Kernel', value: '82%', width: 'w-[82%]', bar: 'from-fuchsia-400 to-purple-500' },
      { label: 'Drivers', value: '58%', width: 'w-[58%]', bar: 'from-fuchsia-400 to-violet-500' },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-28">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-6 text-center font-display text-4xl font-semibold tracking-tight md:text-6xl"
      >
        Deep Dives to Accelerate
        <span className="block text-primary">Your Product</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 max-w-2xl text-center text-base font-normal text-muted-foreground md:text-lg"
      >
        Practical guides on web development, mobile apps, SEO, marketing, data systems, and infrastructure — built to help teams ship faster.
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-1 gap-6 pb-16 md:gap-8 lg:grid-cols-2"
      >
        {posts.map((post) => {
          const Icon = post.icon
          return (
            <motion.div key={post.slug} variants={item}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <section
                  className="relative overflow-hidden rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:ring-white/20 hover:shadow-lg hover:shadow-primary/5 md:p-6"
                >
                  {/* Gradient overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${post.gradient} via-transparent to-transparent`}
                  />
                  {/* Blur orb */}
                  <div
                    className={`absolute -right-24 -top-24 h-72 w-72 rounded-full ${post.orb} blur-3xl`}
                  />

                  {/* Inset UI preview */}
                  <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                    {/* Preview header */}
                    <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
                      <Icon className={`size-4 ${post.accent}`} />
                      <span className="font-medium">{post.category}</span>
                    </div>

                    {/* Mock stat rows */}
                    <div className="space-y-3">
                      {post.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-white/90">{stat.label}</p>
                            <p className="text-xs text-white/60">{stat.value}</p>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                              initial={{ width: '0%' }}
                              whileInView={{ width: stat.value }}
                              viewport={{ once: true, margin: '-60px' }}
                              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Preview footer */}
                    <div className="mt-4 flex items-center justify-between">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full ${post.accentBg} px-3 py-1.5 text-xs ring-1 ${post.accentRing}`}
                      >
                        <Globe className={`size-3.5 ${post.accent}`} />
                        <span className={post.accent}>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-white/50 ring-1 ring-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title & description */}
                  <h2 className="relative mt-5 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="relative mt-1.5 flex items-center gap-2 text-sm text-white/70">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="relative mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Read article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </section>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
