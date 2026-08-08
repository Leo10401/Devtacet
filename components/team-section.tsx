'use client'

import { motion } from 'framer-motion'
import ChromaGrid from './ChromaGrid'

const teamMembers = [
  {
    image: 'https://i.pravatar.cc/300?img=12',
    title: 'Kanha',
    subtitle: 'Founder & Lead Developer',
    handle: '@kanha',
    borderColor: 'rgba(6, 182, 212, 0.4)',
    gradient: 'linear-gradient(145deg, rgba(6, 182, 212, 0.15), transparent)',
    url: '#',
  },
  {
    image: 'https://i.pravatar.cc/300?img=33',
    title: 'Arjun Mehta',
    subtitle: 'Backend Engineer',
    handle: '@arjun',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    gradient: 'linear-gradient(210deg, rgba(139, 92, 246, 0.15), transparent)',
    url: '#',
  },
  {
    image: 'https://i.pravatar.cc/300?img=47',
    title: 'Priya Sharma',
    subtitle: 'UI/UX Designer',
    handle: '@priya',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    gradient: 'linear-gradient(165deg, rgba(245, 158, 11, 0.15), transparent)',
    url: '#',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl"
          >
            Meet the
            <br />
            <span className="text-primary">team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-pretty leading-relaxed text-muted-foreground"
          >
            A small, sharp crew that ships fast and cares deeply about
            every pixel and every line of code.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto max-w-5xl px-4 md:px-6"
      >
        <ChromaGrid
          items={teamMembers}
          radius={280}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </motion.div>
    </section>
  )
}
