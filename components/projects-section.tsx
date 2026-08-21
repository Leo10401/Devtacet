'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Smooth3DSlideshow from './CoverflowGallery'

const defaultProjects = [
  {
    title: 'Atlas Redesign',
    category: 'Enterprise SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85',
    description:
      'Next-gen analytics platform with real-time stream processing, customizable charts, and sub-millisecond metrics queries.',
    href: '/case-studies/atlas-redesign',
  },
  {
    title: 'Relay Cloud API',
    category: 'Backend & Infrastructure',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85',
    description:
      'High-throughput edge routing engine and distributed microservices with global multi-region caching.',
    href: '/case-studies/relay-cloud-api',
  },
  {
    title: 'Edge Deploy UI',
    category: 'Developer Tools',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=85',
    description:
      'Autonomous deployment orchestration and preview branch management for global modern web applications.',
    href: '/case-studies/edge-deploy-ui',
  },
  {
    title: 'Pulseframe Mobile',
    category: 'iOS & Android App',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1000&q=85',
    description:
      'Ultra-fast cross-platform design system and collaboration workspace built with React Native and WebAssembly.',
    href: '/case-studies/pulseframe-mobile',
  },
]


export function ProjectsSection() {
  const [projects, setProjects] = useState(defaultProjects)

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch('/api/projects')
        const data = await res.json()
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const formatted = data.data.map((p: any) => ({
            title: p.title,
            category: p.category || 'Web Application',
            image: p.image,
            description:
              p.description ||
              'Full-stack engineering, cloud architecture, and modern product design.',
            href: p.href || '#',
          }))
          if (formatted.length < 3) {
            setProjects([
              ...formatted,
              ...defaultProjects.slice(formatted.length),
            ])
          } else {
            setProjects(formatted)
          }
        }
      } catch {
        // Fallback gracefully
      }
    }

    loadProjects()
  }, [])

  // Build slides for the Coverflow Gallery from project data
  const slides = projects.map((p) => ({
    image: { src: p.image, alt: p.title },
    title: `${p.title}\n${p.category}`,
  }))

  return (
    <section
      id="projects"
      className="relative flex min-h-[540px] lg:min-h-svh flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-16 xl:px-16"
    >
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        {/* Header row */}
        <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2 sm:mb-3 font-mono text-xs text-primary"
            >
              $ ls ./projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Our <span className="text-primary">work</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-sm text-pretty text-xs sm:text-sm leading-relaxed text-muted-foreground"
            >
              We architect and engineer production software — from
              high-throughput backend services to immersive web and mobile
              experiences.
            </motion.p>
            <Link
              href="/case-studies"
              className="text-xs font-semibold text-primary transition-colors hover:underline"
            >
              Explore All Case Studies &rarr;
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-h-[340px] w-full flex-1"
        >
          <Smooth3DSlideshow
            slides={slides}
            cardWidth={480}
            cardHeight={380}
            radius={4}
            tilt={12}
            sideTilt={6}
            gap={9}
            opacity={55}
            autoplay
            autoplayDirection="rightToLeft"
            showTitle
            titleFont={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: '1.15em',
            }}
            titleColor="#ffffff"
            titlePosition={{
              position: 'bottomLeft',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 24,
              paddingBottom: 28,
            }}
            transition={{
              type: 'tween',
              duration: 0.65,
              delay: 3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

      </div>
    </section>
  )
}
