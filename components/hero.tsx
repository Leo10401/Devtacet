'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const line1 = ['We', 'build', 'digital']
const line2 = ['products', 'that']
const line3 = ['perform.']

const marqueeItems = [
  'Mobile Apps',
  'Websites',
  'Data Analytics',
  'SEO Marketing',
]

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-16">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-4 sm:gap-x-6">
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
            <span className="flex flex-wrap gap-x-4 sm:gap-x-6">
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
          <span className="block overflow-hidden">
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
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            From your first app store release to page one of Google - we design,
            develop, and market digital products end to end.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            href="#services"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Explore our services
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </motion.a>
        </div>
      </div>

      {/* Service marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-y border-border bg-card py-4"
        aria-hidden="true"
      >
        <div className="flex overflow-hidden">
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
                <span className="text-primary">?</span>
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
                <span className="text-primary">?</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
