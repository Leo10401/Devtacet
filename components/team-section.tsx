'use client'

import { motion } from 'framer-motion'
import ChromaGrid from './ChromaGrid'

const teamMembers = [
  {
    image: '/Ayush_Kumar_Yadav.png',
    title: 'Ayush Kumar Yadav',
    subtitle: 'Founder & Lead Engineer',
    handle: '@ayush',
    borderColor: 'rgba(168, 85, 247, 0.5)',
    gradient: 'linear-gradient(145deg, rgba(168, 85, 247, 0.18), transparent)',
    accentColor: '#a855f7',
    socials: {
      linkedin: 'https://linkedin.com/in/ayush-kumar-yadav',
      github: 'https://github.com/ayush',
      portfolio: 'https://devtacet.com',
      email: 'mailto:ayush@devtacet.com',
    },
  },
  {
    image: '/Aditya_Mukerji.png',
    title: 'Aditya Mukerji',
    subtitle: 'Technical Architect',
    handle: '@aditya',
    borderColor: 'rgba(6, 182, 212, 0.5)',
    gradient: 'linear-gradient(210deg, rgba(6, 182, 212, 0.18), transparent)',
    accentColor: '#06b6d4',
    socials: {
      linkedin: 'https://linkedin.com/in/aditya-mukerji',
      github: 'https://github.com/aditya',
      portfolio: 'https://devtacet.com',
      email: 'mailto:aditya@devtacet.com',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    title: 'Aniket Chakraborty',
    subtitle: 'Frontend & UI/UX Lead',
    handle: '@aniket',
    borderColor: 'rgba(16, 185, 129, 0.5)',
    gradient: 'linear-gradient(165deg, rgba(16, 185, 129, 0.18), transparent)',
    accentColor: '#10b981',
    socials: {
      linkedin: 'https://linkedin.com/in/aniket-chakraborty',
      github: 'https://github.com/aniket',
      portfolio: 'https://devtacet.com',
      email: 'mailto:aniket@devtacet.com',
    },
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    title: 'Arpan Ganguly',
    subtitle: 'Backend & Cloud Engineer',
    handle: '@arpan',
    borderColor: 'rgba(245, 158, 11, 0.5)',
    gradient: 'linear-gradient(195deg, rgba(245, 158, 11, 0.18), transparent)',
    accentColor: '#f59e0b',
    socials: {
      linkedin: 'https://linkedin.com/in/arpan-ganguly',
      github: 'https://github.com/arpan',
      portfolio: 'https://devtacet.com',
      email: 'mailto:arpan@devtacet.com',
    },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-8 xl:px-16">
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
        className="relative mx-auto w-full max-w-7xl px-8 xl:px-16"
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
