'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const steps = [
  {
    phase: 'Discover',
    number: '01',
    title: 'We get obsessed with your problem',
    description:
      'Before a single pixel or line of code, we dig into your goals, your users, and what winning actually looks like for you.',
    image: '/images/process-discover.png',
    alt: 'Hands sketching a product map with sticky notes during a strategy session',
  },
  {
    phase: 'Design',
    number: '02',
    title: 'You click it before we build it',
    description:
      'Interactive prototypes in days, not months. You shape the product with us while changes are still cheap.',
    image: '/images/process-design.png',
    alt: 'Wireframes and a mobile app prototype glowing on a designer screen',
  },
  {
    phase: 'Build',
    number: '03',
    title: 'Working software, every single week',
    description:
      'Short cycles, real demos, and a direct line to the people writing your code. No black boxes, no surprises.',
    image: '/images/process-build.png',
    alt: 'Glowing code editor on a monitor in a dark studio',
  },
  {
    phase: 'Grow',
    number: '04',
    title: 'Launch day is the starting line',
    description:
      'SEO, analytics, and relentless iteration after release. We stick around until the numbers move.',
    image: '/images/process-grow.png',
    alt: 'Rising line chart and dashboard metrics on a large screen',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl"
          >
            How we work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-pretty leading-relaxed text-muted-foreground"
          >
            Four phases. Zero guesswork. You see progress every week from
            kickoff to launch and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={step.image || '/placeholder.svg'}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute left-3.5 top-3.5 rounded-full border border-primary/50 bg-background/70 px-3 py-1 font-display text-xs font-medium text-primary backdrop-blur">
                  {step.phase}
                </span>
                <span className="absolute bottom-2.5 right-3.5 font-display text-4xl font-bold text-foreground/25 transition-colors duration-500 group-hover:text-primary/60">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
