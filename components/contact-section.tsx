'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <div id="contact" className="mx-auto flex max-w-6xl flex-1 flex-col justify-center gap-8 px-4 py-6 md:px-6 md:py-8">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <span className="inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
        Taking on new projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Got an idea?
        <br />
        <span className="text-primary">Let&apos;s build it.</span>
      </motion.h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          href="mailto:hello@devtacet.dev"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-5" aria-hidden="true" />
          hello@devtacet.dev
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm text-muted-foreground"
        >
          We usually reply within one business day.
        </motion.p>
      </div>
    </div>
  )
}
