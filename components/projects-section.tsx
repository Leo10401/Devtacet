'use client'

import { motion } from 'framer-motion'
import DriftWall from './DriftWall'

const projectItems = [
  { image: 'https://picsum.photos/id/1/600/400', title: 'Project Alpha', href: '#' },
  { image: 'https://picsum.photos/id/26/600/400', title: 'Dashboard UI', href: '#' },
  { image: 'https://picsum.photos/id/48/600/400', title: 'E-Commerce App', href: '#' },
  { image: 'https://picsum.photos/id/60/600/400', title: 'Analytics Platform', href: '#' },
  { image: 'https://picsum.photos/id/180/600/400', title: 'Social Network', href: '#' },
  { image: 'https://picsum.photos/id/160/600/400', title: 'Mobile Banking', href: '#' },
  { image: 'https://picsum.photos/id/119/600/400', title: 'Travel Booking', href: '#' },
  { image: 'https://picsum.photos/id/137/600/400', title: 'Health Tracker', href: '#' },
  { image: 'https://picsum.photos/id/142/600/400', title: 'Portfolio Site', href: '#' },
  { image: 'https://picsum.photos/id/106/600/400', title: 'SaaS Landing', href: '#' },
  { image: 'https://picsum.photos/id/175/600/400', title: 'Real Estate App', href: '#' },
  { image: 'https://picsum.photos/id/193/600/400', title: 'Music Player', href: '#' },
  { image: 'https://picsum.photos/id/200/600/400', title: 'Weather App', href: '#' },
  { image: 'https://picsum.photos/id/204/600/400', title: 'Task Manager', href: '#' },
  { image: 'https://picsum.photos/id/239/600/400', title: 'News Portal', href: '#' },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative flex h-[calc(100svh-4rem)] flex-col justify-between py-4">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-4 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl"
          >
            Our <span className="text-primary">work</span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 w-full min-h-[360px]"
      >
        <DriftWall
          items={projectItems}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#060010"
          radius={14}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
      </motion.div>
    </section>
  )
}
