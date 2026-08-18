'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, TrendingUp, Share2, BarChart3, Cpu, Smartphone, Code2 } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    slug: 'seo',
    title: 'Technical SEO & GEO',
    subtitle: 'The 2026 Playbook',
    excerpt:
      'How to rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews using structured data and entity-first strategy.',
    category: 'SEO & GEO',
    readTime: '11 min read',
    icon: TrendingUp,
    iconColor: '#f59e0b',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/20',
    badgeText: 'text-amber-300',
    tags: ['llms.txt', 'Schema.org', 'JSON-LD'],
    stats: [
      { label: 'Google SERP', value: '88%', bar: 'from-[#f97316] via-[#fb923c] to-[#fdba74]' },
      { label: 'AI Search', value: '72%', bar: 'from-[#eab308] via-[#facc15] to-[#fde047]' },
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
    icon: Share2,
    iconColor: '#ec4899',
    badgeBg: 'bg-pink-500/10',
    badgeBorder: 'border-pink-500/20',
    badgeText: 'text-pink-300',
    tags: ['Content', 'Engagement', 'Paid Social'],
    stats: [
      { label: 'Engagement', value: '78%', bar: 'from-[#f43f5e] via-[#fb7185] to-[#fda4af]' },
      { label: 'Conversion', value: '84%', bar: 'from-[#a855f7] via-[#c084fc] to-[#e879f9]' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Modern Web Development',
    subtitle: 'The Complete Guide for 2026',
    excerpt:
      'From Next.js and React 19 to edge computing and server components — everything you need to know about building fast, scalable web applications.',
    category: 'Web Engineering',
    readTime: '10 min read',
    icon: Code2,
    iconColor: '#06b6d4',
    badgeBg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-500/20',
    badgeText: 'text-cyan-300',
    tags: ['Next.js', 'React 19', 'TypeScript'],
    stats: [
      { label: 'Frontend Architecture', value: '94%', bar: 'from-[#06b6d4] via-[#38bdf8] to-[#60a5fa]' },
      { label: 'Core Web Vitals', value: '98%', bar: 'from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]' },
    ],
  },
  {
    slug: 'android-development',
    title: 'Android & Mobile Development',
    subtitle: 'Idea to Play Store Launch',
    excerpt:
      'A practical roadmap covering Kotlin, React Native, Flutter, UI/UX principles, and the Play Store review process.',
    category: 'Mobile Apps',
    readTime: '9 min read',
    icon: Smartphone,
    iconColor: '#10b981',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/20',
    badgeText: 'text-emerald-300',
    tags: ['React Native', 'Flutter', 'Kotlin'],
    stats: [
      { label: 'Native Performance', value: '96%', bar: 'from-[#10b981] via-[#34d399] to-[#6ee7b7]' },
      { label: 'Cross-Platform Reach', value: '88%', bar: 'from-[#14b8a6] via-[#2dd4bf] to-[#5eead4]' },
    ],
  },
  {
    slug: 'mis',
    title: 'Management Information Systems',
    subtitle: 'Data-Driven Business Decisions',
    excerpt:
      'How modern MIS architectures turn raw operational data into executive dashboards, automated reports, and competitive advantage.',
    category: 'Data & Analytics',
    readTime: '8 min read',
    icon: BarChart3,
    iconColor: '#8b5cf6',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/20',
    badgeText: 'text-purple-300',
    tags: ['Dashboards', 'ETL', 'Node.js'],
    stats: [
      { label: 'Data Quality & Flow', value: '92%', bar: 'from-[#8b5cf6] via-[#a855f7] to-[#c084fc]' },
      { label: 'Automated Dashboards', value: '85%', bar: 'from-[#6366f1] via-[#818cf8] to-[#a5b4fc]' },
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
    icon: Cpu,
    iconColor: '#d946ef',
    badgeBg: 'bg-fuchsia-500/10',
    badgeBorder: 'border-fuchsia-500/20',
    badgeText: 'text-fuchsia-300',
    tags: ['OS', 'Middleware', 'Runtime'],
    stats: [
      { label: 'Kernel Architecture', value: '90%', bar: 'from-[#d946ef] via-[#e879f9] to-[#f0abfc]' },
      { label: 'Hardware Drivers', value: '75%', bar: 'from-[#ec4899] via-[#f472b6] to-[#fbcfe8]' },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 md:pt-24 pb-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          Deep Dives to Accelerate
          <span className="block bg-gradient-to-r from-[#06b6d4] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent mt-1">
            Your Product
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Practical guides on web development, mobile apps, SEO, marketing, data systems, and infrastructure — built to help teams ship faster.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2"
      >
        {posts.map((post) => {
          const Icon = post.icon
          return (
            <motion.div key={post.slug} variants={item}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0b0c10] border border-zinc-800/90 p-6 sm:p-7 shadow-xl transition-all duration-300 group-hover:border-zinc-700 group-hover:shadow-2xl">
                  {/* Subtle top card glow on hover */}
                  <div className="absolute -top-24 -right-24 size-48 rounded-full bg-purple-500/5 blur-2xl pointer-events-none group-hover:bg-purple-500/10 transition-colors" />

                  <div>
                    {/* Inset Visual Preview Box */}
                    <div className="relative rounded-2xl bg-[#14151e]/90 border border-zinc-800/80 p-4 sm:p-5 shadow-inner">
                      {/* Header */}
                      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        <Icon className="size-3.5" style={{ color: post.iconColor }} />
                        <span>{post.category}</span>
                      </div>

                      {/* Stat Progress Rows */}
                      <div className="space-y-3.5">
                        {post.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                              <span className="text-zinc-300">{stat.label}</span>
                              <span className="text-zinc-400 font-mono text-xs">{stat.value}</span>
                            </div>
                            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-800/80">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                                initial={{ width: '0%' }}
                                whileInView={{ width: stat.value }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Middle Info Bar: Read-time & Tags */}
                    <div className="mt-5 flex items-center justify-between flex-wrap gap-2.5">
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border ${post.badgeBg} ${post.badgeBorder} ${post.badgeText}`}
                      >
                        <Clock className="size-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h2 className="mt-5 font-display text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Article Footer Link */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
                    <span>Read article</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
