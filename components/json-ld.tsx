export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.me'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Devtacet',
    legalName: 'Devtacet Digital Studio',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    image: `${baseUrl}/og-image.png`,
    description:
      'Devtacet is a digital studio building mobile apps, websites, and data analytics tools, backed by SEO marketing that gets you found.',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://github.com/Leo10401/Devtacet',
      'https://twitter.com/devtacet',
    ],
    knowsAbout: [
      'Mobile App Development',
      'Website Development',
      'Data Analytics Tools',
      'Technical SEO',
      'Generative Engine Optimization',
      '7 Stages of Web Development',
      'Full-Stack Web Development',
      'Senior Engineering Team',
      '30-60-90 Project Plan',
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      highPrice: '50000',
      lowPrice: '2500',
      offerCount: '4',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Devtacet — Digital Studio',
    description:
      'Digital studio building mobile apps, websites, and data analytics tools with SEO & AI marketing.',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'en-US',
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description:
            'iOS and Android apps built with React Native & Flutter that feel fast, look sharp, and navigate app store reviews seamlessly.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}#services`,
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Website Development',
          description:
            'Marketing sites, e-commerce, and full web apps engineered with Next.js for sub-second performance and high conversion.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}#services`,
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Data Analytics Tools',
          description:
            'Custom dashboards, automated data pipelines, and reporting systems turning complex business data into clear decision support.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}#services`,
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'SEO & AI Marketing (GEO)',
          description:
            'Technical SEO, content strategy, and Generative Engine Optimization climbing traditional SERPs and AI search engines.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}#services`,
        },
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the 7 stages of web development at Devtacet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Devtacet, our 7-stage web development lifecycle includes: 1) Requirements Discovery, 2) Technical Architecture & Planning, 3) High-Fidelity UI/UX Design, 4) Full-Stack Engineering (Next.js/React/TypeScript), 5) Rigorous QA & Performance Testing, 6) Cloud Deployment & Launch, and 7) Post-Launch SEO & Maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of web development does Devtacet handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide full-stack web development encompassing Frontend Development (React 19, Next.js, Tailwind CSS), Backend Development (Node.js, Express, REST/GraphQL APIs, Databases), and Enterprise Web Applications (E-commerce, SaaS platforms, and internal analytics portals).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the developer experience level (L1 to L7) at Devtacet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike traditional agencies that assign junior (L1/L2) engineers or account managers to client accounts, Devtacet pairs clients directly with senior staff engineers (L5 to L7 tier experts) who own your codebase from architecture to deployment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Devtacet’s 30-60-90 day project onboarding plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Days 1–30 focus on rapid discovery, wireframing, and initial architecture build; Days 31–60 focus on core feature engineering, integration, and UI polishing; Days 61–90 focus on QA testing, production deployment, and executing Generative Engine Optimization (GEO) & SEO marketing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Devtacet optimize for AI Search & LLMs (GEO)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Devtacet optimizes sites using structured Schema.org JSON-LD knowledge graphs, dynamic XML sitemaps, customized robots.txt rules for AI bots (GPTBot, PerplexityBot, ClaudeBot), semantic HTML markup, and standardized llms.txt integration for direct LLM indexing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tech stack do you use to build products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Devtacet specializes in modern engineering stacks including Next.js, React 19, TypeScript, Tailwind CSS, Node.js, Mongoose/MongoDB, React Native, Flutter, and Vercel cloud infrastructure.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
