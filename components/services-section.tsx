'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, BarChart3, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    number: '01',
    label: 'Mobile App Development',
    title: 'Apps people keep on their home screen',
    description:
      'iOS and Android apps that feel fast, look sharp, and survive the app store review on the first try.',
    tags: ['iOS & Android', 'React Native', 'Flutter'],
  },
  {
    icon: Globe,
    number: '02',
    label: 'Website Development',
    title: 'Websites that load fast and sell faster',
    description:
      'Marketing sites, e-commerce, and full web apps engineered for speed — because every second of load time costs you customers.',
    tags: ['Next.js', 'E-commerce', 'Web Apps'],
  },
  {
    icon: BarChart3,
    number: '03',
    label: 'Data Analytics Tools',
    title: 'Turn your messy data into decisions',
    description:
      'Custom dashboards and pipelines that answer the questions you actually have — no more exporting to spreadsheets.',
    tags: ['Dashboards', 'Pipelines', 'Reporting'],
  },
  {
    icon: TrendingUp,
    number: '04',
    label: 'SEO Marketing',
    title: 'Get found by people ready to buy',
    description:
      'Technical SEO and content strategy that climbs the rankings and stays there — traffic that compounds month over month.',
    tags: ['Technical SEO', 'Content', 'Growth'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-4xl font-bold tracking-tight md:text-5xl"
        >
          We build things
          <br />
          <span className="text-primary">people actually use</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-sm text-pretty leading-relaxed text-muted-foreground"
        >
          Four disciplines, one team. Everything you need to ship a digital
          product — and make sure the world finds it.
        </motion.p>
      </div>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.a
            key={service.number}
            href="#contact"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors last:border-b hover:bg-card md:grid-cols-12 md:items-center md:gap-6 md:px-4 md:py-10"
          >
            <div className="flex items-center gap-4 md:col-span-1">
              <span className="font-display text-sm text-muted-foreground transition-colors group-hover:text-primary">
                {service.number}
              </span>
            </div>

            <div className="flex items-start gap-4 md:col-span-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {service.label}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="leading-relaxed text-muted-foreground md:col-span-3">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 md:col-span-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hidden justify-end md:col-span-1 md:flex">
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
