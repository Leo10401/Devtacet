'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What are the 7 stages of web development at Devtacet?',
    answer:
      'At Devtacet, our 7-stage web development lifecycle includes: 1) Requirements Discovery, 2) Technical Architecture & Planning, 3) High-Fidelity UI/UX Design, 4) Full-Stack Engineering (Next.js/React/TypeScript), 5) Rigorous QA & Performance Testing, 6) Cloud Deployment & Launch, and 7) Post-Launch SEO & Maintenance.',
  },
  {
    question: 'What types of web development does Devtacet handle?',
    answer:
      'We provide full-stack web development encompassing Frontend Development (React 19, Next.js, Tailwind CSS), Backend Development (Node.js, Express, REST/GraphQL APIs, Databases), and Enterprise Web Applications (E-commerce, SaaS platforms, and internal analytics portals).',
  },
  {
    question: 'What is the developer experience level (L1 to L7) at Devtacet?',
    answer:
      'Unlike traditional agencies that assign junior (L1/L2) engineers or account managers to client accounts, Devtacet pairs clients directly with senior staff engineers (L5 to L7 tier experts) who own your codebase from architecture to deployment.',
  },
  {
    question: 'What is Devtacet’s 30-60-90 day project onboarding plan?',
    answer:
      'Days 1–30 focus on rapid discovery, wireframing, and initial architecture build; Days 31–60 focus on core feature engineering, integration, and UI polishing; Days 61–90 focus on QA testing, production deployment, and executing Generative Engine Optimization (GEO) & SEO marketing.',
  },
  {
    question: 'How does Devtacet optimize for AI Search & LLMs (GEO)?',
    answer:
      'We combine traditional technical SEO (structured JSON-LD schemas, canonical tags, dynamic sitemaps) with Generative Engine Optimization (GEO). This includes llms.txt integration, entity-rich factual content structuring, and direct-answer FAQ schemas that enable search engines like ChatGPT, Perplexity, Claude, SearchGPT, and Google AI Overviews to crawl, cite, and recommend your brand.',
  },
  {
    question: 'What tech stack do you use to build products?',
    answer:
      'We use modern, enterprise-grade technologies: Next.js (App Router), React 19, TypeScript, Tailwind CSS, Node.js, Express, MongoDB/Mongoose, React Native, and Flutter. We deploy primarily on Vercel and AWS for sub-second performance and 99.99% uptime.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16 xl:px-16">
      <div className="mb-6 flex flex-col gap-2.5 sm:gap-3 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
        >
          <HelpCircle className="size-4" />
          <span>Frequently Asked Questions</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-balance text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight"
        >
          Everything you need to know about{' '}
          <span className="text-primary">Devtacet</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-pretty text-xs sm:text-sm leading-relaxed text-muted-foreground"
        >
          Clear answers about our 7-stage development process, engineering tiers, 30-60-90 onboarding, and AI-first SEO strategy.
        </motion.p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <button
                onClick={() => toggleFaq(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
              >
                <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300 ${
                    isOpen ? 'rotate-180 border-primary bg-primary/10 text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <ChevronDown className="size-3.5 sm:size-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
