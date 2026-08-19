'use client'

import { motion } from 'framer-motion'
import {
  Smartphone,
  Globe,
  BarChart3,
  TrendingUp,
  LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'
import SpotlightCard from './SpotlightCard'

const services = [
  {
    icon: Smartphone,
    number: '01',
    label: 'Mobile App Development',
    title: 'Apps people keep on their home screen',
    description:
      'iOS and Android apps that feel fast, look sharp, and survive the app store review on the first try.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    tags: ['iOS & Android', 'React Native', 'Flutter'],
    href: '/services/mobile-app-development',
  },
  {
    icon: Globe,
    number: '02',
    label: 'Website Development',
    title: 'Websites that load fast and sell faster',
    description:
      'Marketing sites, e-commerce, and full web apps engineered for speed — every second of load time costs you customers.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    tags: ['Next.js', 'E-commerce', 'Web Apps'],
    href: '/services/web-development',
  },
  {
    icon: BarChart3,
    number: '03',
    label: 'Data Analytics Tools',
    title: 'Turn your messy data into decisions',
    description:
      'Custom dashboards and pipelines that answer the questions you actually have — no more exporting to spreadsheets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Dashboards', 'Pipelines', 'Reporting'],
    href: '/services/analytics',
  },
  {
    icon: TrendingUp,
    number: '04',
    label: 'SEO Marketing',
    title: 'Get found by people ready to buy',
    description:
      'Technical SEO and content strategy that climbs the rankings and stays there — traffic that compounds month over month.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Technical SEO', 'Content', 'Growth'],
    href: '/services/seo',
  },
  {
    icon: LayoutDashboard,
    number: '05',
    label: 'MIS & Systems Software',
    title: 'Software that runs your back office',
    description:
      'Internal tools, ERP-lite systems, and automated reporting that replace spreadsheets, manual handoffs, and end-of-day chaos.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    tags: ['MIS', 'ERP', 'Automation'],
    href: '/services/custom-software',
  },
]

type Service = (typeof services)[number]

function ServiceCard({
  service,
  index,
  featured = false,
}: {
  service: Service
  index: number
  featured?: boolean
}) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={service.href} className="block h-full">
        <SpotlightCard
          spotlightColor="rgba(168, 85, 247, 0.2)"
          className={`group flex h-full ${
            featured ? 'flex-col md:flex-row' : 'flex-col'
          } justify-between overflow-hidden !p-0`}
        >
          {/* Card Image Banner */}
          {service.image && (
            <div
              className={`relative overflow-hidden bg-black/50 ${
                featured
                  ? 'h-36 sm:h-44 md:h-auto md:w-44 lg:w-48 shrink-0'
                  : 'h-32 sm:h-36 w-full'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 ${
                  featured
                    ? 'bg-gradient-to-t from-[#161620] via-transparent to-black/30 md:bg-gradient-to-r md:from-transparent md:to-[#161620]'
                    : 'bg-gradient-to-t from-[#161620] via-transparent to-black/30'
                }`}
              />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
            {/* Header: Icon & Number */}
            <div className="flex items-start justify-between">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary backdrop-blur-sm transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">//</span> {service.number}
              </span>
            </div>

            {/* Label, Title & Description */}
            <div className="mt-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/90">
                {service.label}
              </span>
              <h3 className="mt-1 font-display text-sm sm:text-base font-bold leading-snug tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1">
                {service.title}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>

            {/* Footer: Tags & Arrow */}
            <div className="mt-3.5 flex items-end justify-between gap-2 pt-2.5 border-t border-white/5">
              <div className="flex flex-wrap gap-1">
                {(featured ? service.tags : service.tags.slice(0, 2)).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </div>
          </div>
        </SpotlightCard>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  const primaryThree = services.slice(0, 3)
  const remainingTwo = services.slice(3)

  return (
    <section
      id="services"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-10 md:py-14 xl:px-16"
    >
      {/* faint grid backdrop, echoing the hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2 font-mono text-xs text-primary"
            >
              $ ls ./services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-balance text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              We build things
              <br />
              <span className="text-primary">people actually use</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-pretty text-xs sm:text-sm leading-relaxed text-muted-foreground"
          >
            Five disciplines, one team. Everything you need to ship a digital
            product, run the business behind it, and make sure the world
            finds it.
          </motion.p>
        </div>

        <div className="grid gap-3.5 sm:gap-4 md:grid-cols-3">
          {primaryThree.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <div className="mt-3.5 sm:mt-4 grid gap-3.5 sm:gap-4 md:grid-cols-2">
          {remainingTwo.map((service, i) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={i + 3}
              featured
            />
          ))}
        </div>
      </div>
    </section>
  )
}