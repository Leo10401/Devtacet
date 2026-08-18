'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  CheckCircle2,
  ClipboardList,
  Smartphone,
  TrendingUp,
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
    className: 'absolute left-8 top-32 xl:left-16',
    width: 'w-44',
    delay: 0.5,
    float: { y: [0, 10, 0], rotate: [1, -2, 1] },
    floatDuration: 6.2,
  },
  // top-right
  {
    className: 'absolute right-8 top-32 xl:right-16',
    width: 'w-52',
    delay: 0.6,
    float: { y: [0, -10, 0], rotate: [-2, 1, -2] },
    floatDuration: 6,
  },
  // middle-left (xl+ only)
  {
    className: 'absolute left-8 top-1/2 hidden -translate-y-1/2 xl:block 2xl:left-16',
    width: 'w-44',
    delay: 0.7,
    float: { y: [0, -9, 0], rotate: [-1, 1, -1] },
    floatDuration: 5.6,
  },
  // middle-right (xl+ only)
  {
    className: 'absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block 2xl:right-16',
    width: 'w-52',
    delay: 0.8,
    float: { y: [0, -8, 0], rotate: [1, -1, 1] },
    floatDuration: 6.8,
  },
  // bottom-left
  {
    className: 'absolute bottom-32 left-8 xl:left-16',
    width: 'w-44',
    delay: 0.9,
    float: { y: [0, 10, 0], rotate: [2, -1, 2] },
    floatDuration: 7,
  },
  // bottom-right
  {
    className: 'absolute bottom-32 right-8 xl:right-20',
    width: 'w-52',
    delay: 1.0,
    float: { y: [0, -8, 0], rotate: [-1, 2, -1] },
    floatDuration: 6.5,
  },
]

// Each card renderer returns just the inner card content (no positioning wrapper).
const CARDS: ((widthClass: string) => React.ReactNode)[] = [
  // 4.8★ Play Store
  (w) => (
    <div className={`flex ${w} items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
        <Smartphone className="size-4" />
      </span>
      <div>
        <p className="font-display text-sm font-semibold leading-tight text-foreground">
          4.8 &#9733;
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Play Store rating
        </p>
      </div>
    </div>
  ),
  // Build status
  (w) => (
    <div className={`${w} rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <div className="mb-2.5 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-red-500/70" />
        <span className="size-2 rounded-full bg-yellow-500/70" />
        <span className="size-2 rounded-full bg-green-500/70" />
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-green-400">$</span> deploy --prod
      </p>
      <p className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-green-400">
        <CheckCircle2 className="size-3.5 shrink-0" />
        Build succeeded &middot; 128ms
      </p>
    </div>
  ),
  // Data Analytics
  (w) => (
    <div className={`${w} rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <p className="font-display text-sm font-semibold leading-tight text-foreground">
        Data Analytics
      </p>
      <p className="mb-2.5 font-mono text-xs text-muted-foreground">
        Live dashboards
      </p>
      <div className="flex h-9 items-end gap-1.5">
        <span className="w-2 rounded-t bg-green-400/30" style={{ height: '35%' }} />
        <span className="w-2 rounded-t bg-green-400/45" style={{ height: '60%' }} />
        <span className="w-2 rounded-t bg-green-400/40" style={{ height: '45%' }} />
        <span className="w-2 rounded-t bg-green-400" style={{ height: '95%' }} />
        <span className="w-2 rounded-t bg-green-400/60" style={{ height: '70%' }} />
        <span className="w-2 rounded-t bg-green-400/80" style={{ height: '82%' }} />
      </div>
    </div>
  ),
  // MIS Reports
  (w) => (
    <div className={`flex ${w} items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
        <ClipboardList className="size-4" />
      </span>
      <div>
        <p className="font-display text-sm font-semibold leading-tight text-foreground">
          MIS Reports
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          32 hrs saved / week
        </p>
      </div>
    </div>
  ),
  // Performance score
  (w) => (
    <div className={`flex ${w} items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        <svg className="size-12 -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-border"
          />
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="97.4"
            strokeDashoffset="1.95"
            strokeLinecap="round"
            className="text-green-400"
          />
        </svg>
        <span className="absolute font-display text-xs font-bold text-green-400">
          98
        </span>
      </div>
      <div>
        <p className="font-display text-sm font-semibold leading-tight text-foreground">
          Performance
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Lighthouse score
        </p>
      </div>
    </div>
  ),
  // Growth stat
  (w) => (
    <div className={`flex ${w} items-center gap-3 rounded-xl border border-border bg-card/90 p-3 shadow-xl shadow-black/10 backdrop-blur-sm`}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
        <TrendingUp className="size-4" />
      </span>
      <div>
        <p className="font-display text-sm font-semibold leading-tight text-foreground">
          +142%
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Organic traffic, 6mo
        </p>
      </div>
    </div>
  ),
]

// Width is now defined per slot, not per card — see SlotConfig.width

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
            'radial-gradient(60% 50% at 50% 100%, rgba(62,207,142,0.14) 0%, rgba(62,207,142,0) 70%)',
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
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center md:px-6">
        <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem]">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
              {line1.map((w, idx) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
              {line2.map((w, idx) => (
                <span key={w} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
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
                  className="inline-block text-primary"
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
              className="ml-2 inline-block h-[0.85em] w-[0.5rem] translate-y-2 bg-primary sm:w-[0.6rem]"
              aria-hidden="true"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          From your first app store release to page one of Google — we design,
          develop, and market digital products end to end.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          href="#services"
          className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <span className="text-primary">$</span> explore --services
          <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </motion.a>
      </div>

      {/* Service marquee — styled as a terminal window, pinned to the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 border-y border-border bg-card"
        aria-hidden="true"
      >
        <div className="flex overflow-hidden py-4">
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