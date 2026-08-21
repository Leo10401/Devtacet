'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Smartphone,
  TrendingUp,
  Activity,
  Sparkles,
  Zap,
  Star,
  Gauge,
} from 'lucide-react'

const line1 = ['We', 'build', 'digital']
const line2 = ['products', 'that']
const line3 = ['perform.']

const marqueeItems = [
  'Mobile Apps',
  'Websites',
  'Data Analytics',
  'SEO Marketing',
]

// Six safe slots in left/right margins × top/middle/bottom rows.
// The positions stay fixed so cards never overlap the center headline,
// the subtitle/CTA, or each other. Only the card *contents* are
// shuffled into random slots on every mount.

interface SlotConfig {
  className: string
  width: string
  delay: number
  float: { y: [number, number, number]; rotate: [number, number, number] }
  floatDuration: number
}

const SLOTS: SlotConfig[] = [
  // top-left
  {
    className: 'absolute left-6 top-28 xl:left-14 2xl:left-20',
    width: 'w-48 sm:w-52',
    delay: 0.5,
    float: { y: [0, 8, 0], rotate: [0.5, -1.5, 0.5] },
    floatDuration: 6.2,
  },
  // top-right
  {
    className: 'absolute right-6 top-28 xl:right-14 2xl:right-20',
    width: 'w-52 sm:w-56',
    delay: 0.6,
    float: { y: [0, -8, 0], rotate: [-1.5, 0.5, -1.5] },
    floatDuration: 6,
  },
  // middle-left (xl+ only)
  {
    className: 'absolute left-6 top-1/2 hidden -translate-y-1/2 xl:block 2xl:left-20',
    width: 'w-48 sm:w-52',
    delay: 0.7,
    float: { y: [0, -7, 0], rotate: [-1, 1, -1] },
    floatDuration: 5.6,
  },
  // middle-right (xl+ only)
  {
    className: 'absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block 2xl:right-20',
    width: 'w-52 sm:w-56',
    delay: 0.8,
    float: { y: [0, -7, 0], rotate: [1, -1, 1] },
    floatDuration: 6.8,
  },
  // bottom-left
  {
    className: 'absolute bottom-28 left-6 xl:left-14 2xl:left-20',
    width: 'w-48 sm:w-52',
    delay: 0.9,
    float: { y: [0, 8, 0], rotate: [1.5, -0.5, 1.5] },
    floatDuration: 7,
  },
  // bottom-right
  {
    className: 'absolute bottom-28 right-6 xl:right-14 2xl:right-20',
    width: 'w-52 sm:w-56',
    delay: 1.0,
    float: { y: [0, -7, 0], rotate: [-0.5, 1.5, -0.5] },
    floatDuration: 6.5,
  },
]

// Each card renderer returns just the inner card content (no positioning wrapper).
const CARDS: ((widthClass: string) => React.ReactNode)[] = [
  // 4.9★ Play Store
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-500/40 hover:shadow-emerald-500/10`}>
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 shadow-inner">
          <Smartphone className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-sm font-bold text-white">4.9</span>
            <div className="flex text-amber-400 text-xs">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className={i === 4 ? 'opacity-50' : ''}>{s}</span>
              ))}
            </div>
          </div>
          <p className="text-[11px] font-medium text-zinc-400">iOS & Play Store</p>
        </div>
      </div>
    </div>
  ),

  // Build status / Live Deploy
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/40 hover:shadow-cyan-500/10`}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-rose-500/80" />
          <span className="size-2 rounded-full bg-amber-500/80" />
          <span className="size-2 rounded-full bg-emerald-500/80" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 text-[9px] font-mono text-emerald-400 font-medium">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          PROD
        </span>
      </div>
      <p className="font-mono text-[11px] text-zinc-300">
        <span className="text-primary font-bold">$</span> deploy --edge
      </p>
      <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-medium">
        <CheckCircle2 className="size-3.5 shrink-0" />
        Build succeeded &middot; 98ms
      </p>
    </div>
  ),

  // Data Analytics with gradient equalizer
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-purple-500/40 hover:shadow-purple-500/10`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Activity className="size-3.5" />
          </div>
          <p className="font-display text-xs font-bold text-white">Live Analytics</p>
        </div>
        <span className="rounded bg-purple-500/15 border border-purple-500/25 px-1.5 py-0.5 font-mono text-[10px] font-bold text-purple-300">
          +38.4%
        </span>
      </div>
      <div className="mt-3 flex h-7 items-end gap-1.5 px-0.5">
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-600/30 to-purple-400/50" style={{ height: '40%' }} />
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-600/40 to-purple-400/70" style={{ height: '65%' }} />
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-600/30 to-purple-400/60" style={{ height: '50%' }} />
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-500 to-fuchsia-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" style={{ height: '100%' }} />
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-600/40 to-purple-400/80" style={{ height: '75%' }} />
        <span className="w-2.5 rounded-t bg-gradient-to-t from-purple-600/50 to-purple-400" style={{ height: '88%' }} />
      </div>
    </div>
  ),

  // MIS Automation
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-amber-500/40 hover:shadow-amber-500/10`}>
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/15 text-amber-400 shadow-inner">
          <Zap className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-xs font-bold text-white">MIS Automation</p>
          <p className="mt-0.5 inline-flex items-center gap-1 font-mono text-[11px] text-amber-300">
            <Sparkles className="size-3 text-amber-400" />
            32 hrs saved/wk
          </p>
        </div>
      </div>
    </div>
  ),

  // Performance score
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-500/40 hover:shadow-emerald-500/10`}>
      <div className="flex items-center gap-3">
        <div className="relative flex size-11 shrink-0 items-center justify-center">
          <svg className="size-11 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-zinc-800"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="94.2"
              strokeDashoffset="1.88"
              strokeLinecap="round"
              className="text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]"
            />
          </svg>
          <span className="absolute font-display text-xs font-extrabold text-emerald-400">
            98
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-display text-xs font-bold text-white">Performance</p>
          <p className="text-[11px] font-mono text-zinc-400">0.2s FCP &middot; 100 SEO</p>
        </div>
      </div>
    </div>
  ),

  // Organic Traffic / Growth stat
  (w) => (
    <div className={`${w} group pointer-events-auto rounded-2xl border border-white/[0.12] bg-[#0d0e15]/85 p-3.5 shadow-[0_10px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/40 hover:shadow-cyan-500/10`}>
      <div className="flex items-center gap-2.5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/15 text-cyan-400">
          <TrendingUp className="size-4.5" />
        </div>
        <div>
          <p className="font-display text-xs font-bold text-white">+142% Growth</p>
          <p className="text-[10px] font-mono text-zinc-400">Organic traffic, 6mo</p>
        </div>
      </div>
      {/* Mini Sparkline Curve */}
      <div className="mt-2 h-3.5 w-full overflow-hidden">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0,18 Q25,14 45,10 T80,4 T100,2"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,18 Q25,14 45,10 T80,4 T100,2 L100,20 L0,20 Z"
            fill="url(#cyan-spark-grad)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="cyan-spark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  ),
]

/** Fisher-Yates shuffle (pure — returns a new array) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function FloatingCards() {
  // Shuffle once per mount — each refresh yields a new arrangement
  const order = useMemo(() => shuffle([0, 1, 2, 3, 4, 5]), [])

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden="true"
    >
      {SLOTS.map((slot, slotIdx) => {
        const cardIdx = order[slotIdx]
        const render = CARDS[cardIdx]
        return (
          <motion.div
            key={slotIdx}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: slot.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={slot.className}
          >
            <motion.div
              animate={{ y: slot.float.y, rotate: slot.float.rotate }}
              transition={{
                duration: slot.floatDuration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {render(slot.width)}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden pt-16">
      {/* Ambient code-glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(55% 45% at 50% 35%, rgba(168,85,247,0.18) 0%, rgba(6,182,212,0.08) 45%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <FloatingCards />

      {/* Centered content — takes the remaining space above the marquee */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:py-12 md:px-6 md:py-0">
        <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-8xl lg:text-[6.5rem]">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6">
              {line1.map((w, idx) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-white"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6">
              {line2.map((w, idx) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-white"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          <span className="flex justify-center overflow-hidden">
            {line3.map((w) => (
              <span key={w} className="overflow-hidden">
                <motion.span
                  initial={{ y: '30%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]"
                >
                  {w}
                </motion.span>
              </span>
            ))}
            {/* Blinking terminal cursor */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1, 1] }}
              transition={{ duration: 1, delay: 0.6, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              className="ml-2 inline-block h-[0.85em] w-[0.4rem] translate-y-1.5 bg-primary sm:w-[0.6rem] sm:translate-y-2 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              aria-hidden="true"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-4 sm:mt-5 max-w-2xl text-pretty text-xs leading-relaxed text-zinc-400 sm:text-base"
        >
          Senior full-stack engineering studio in Lucknow, India. We partner with ambitious founders and businesses to build high-velocity Next.js web platforms, React Native mobile apps, custom MIS & ERP software, and real-time data analytics.
        </motion.p>

        {/* Dual Actions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:from-[#9333ea] hover:to-[#7c3aed] text-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all active:scale-[0.98]"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </Link>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/60 hover:border-purple-500/50 hover:bg-zinc-800 text-zinc-300 px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm font-medium transition-colors"
          >
            <span className="text-primary font-bold">$</span> explore --services
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Mobile-Only Social Proof Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6 flex lg:hidden flex-wrap items-center justify-center gap-2"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-300 backdrop-blur-sm">
            <Star className="size-3 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-white">4.9</span> Play Store
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-300 backdrop-blur-sm">
            <Gauge className="size-3 text-emerald-400" />
            <span className="font-semibold text-emerald-400">98</span> Performance
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-300 backdrop-blur-sm">
            <TrendingUp className="size-3 text-cyan-400" />
            <span className="font-semibold text-cyan-400">+142%</span> Growth
          </div>
        </motion.div>
      </div>

      {/* Service marquee — styled as a terminal window, pinned to the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="relative z-10 border-y border-border bg-card/90 backdrop-blur"
        aria-hidden="true"
      >
        <div className="flex overflow-hidden py-3.5 sm:py-4">
          <motion.div
            className="flex shrink-0 items-center gap-8 pr-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-lg font-medium text-muted-foreground">
                  {item}
                </span>
                <span className="font-mono text-primary">&rsaquo;</span>
              </span>
            ))}
          </motion.div>
          <motion.div
            className="flex shrink-0 items-center gap-8 pr-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-lg font-medium text-muted-foreground">
                  {item}
                </span>
                <span className="font-mono text-primary">&rsaquo;</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}