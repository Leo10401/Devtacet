'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const manifesto = [
  { text: 'We', highlight: false },
  { text: 'started', highlight: false },
  { text: 'as', highlight: false },
  { text: 'mates', highlight: true },
  { text: 'building', highlight: false },
  { text: 'side', highlight: false },
  { text: 'projects', highlight: false },
  { text: 'at', highlight: false },
  { text: 'midnight.', highlight: false },
  { text: 'Now', highlight: false },
  { text: 'we', highlight: false },
  { text: 'ship', highlight: true },
  { text: 'products', highlight: false },
  { text: 'for', highlight: false },
  { text: 'people', highlight: false },
  { text: 'who', highlight: false },
  { text: 'bet', highlight: false },
  { text: 'their', highlight: false },
  { text: 'business', highlight: true },
  { text: 'on', highlight: false },
  { text: 'them.', highlight: false },
]

const weDo = [
  'Work directly with you — the people you meet are the people who build',
  'Give honest timelines, and tell you first when something slips',
  'Say no to work we cannot do well',
]

const weDont = [
  'Account managers playing telephone',
  'Jargon-filled decks that say nothing',
  'Disappearing after launch day',
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-8 py-10 md:py-14 xl:px-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="mb-4 text-xs uppercase tracking-widest text-muted-foreground"
      >
        About Devtacet
      </motion.p>

      <h2 className="mb-8 max-w-4xl font-display text-balance text-3xl font-bold leading-tight tracking-tight md:mb-12 md:text-5xl md:leading-tight">
        {manifesto.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className={
              word.highlight
                ? 'inline-block text-primary italic'
                : 'inline-block'
            }
          >
            {word.text}
            {'\u00A0'}
          </motion.span>
        ))}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-primary/30 bg-primary/5 p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold tracking-tight text-primary">
            What working with us looks like
          </h3>
          <ul className="flex flex-col gap-4">
            {weDo.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-foreground">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold tracking-tight text-muted-foreground">
            What it never looks like
          </h3>
          <ul className="flex flex-col gap-4">
            {weDont.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                  <X className="size-3" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground line-through decoration-muted-foreground/40">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
