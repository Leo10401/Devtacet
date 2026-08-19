export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devtacet.me'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${baseUrl}/#organization`,
    name: 'Devtacet',
    legalName: 'Devtacet',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    image: `${baseUrl}/og-image.png`,
    description:
      'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
    email: 'mailto:hello@devtacet.me',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Lucknow',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Worldwide',
      },
    ],
    sameAs: [
      'https://github.com/Leo10401/Devtacet',
      'https://twitter.com/devtacet',
      'https://linkedin.com/company/devtacet',
    ],
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'Custom Software Development',
      'Data Analytics Systems',
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Social Media Marketing',
      'Next.js',
      'React 19',
      'React Native',
      'Flutter',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Solutions Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            url: `${baseUrl}/services/web-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            url: `${baseUrl}/services/mobile-app-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            url: `${baseUrl}/services/custom-software`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Analytics Systems',
            url: `${baseUrl}/services/analytics`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Generative Engine Optimization',
            url: `${baseUrl}/services/seo`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Marketing',
            url: `${baseUrl}/services/social-media-marketing`,
          },
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Devtacet',
    alternateName: ['Devtacet Digital Solutions', 'Devtacet Lucknow'],
    description:
      'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
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
          name: 'Website Development',
          description:
            'High-performance websites, web applications, and e-commerce platforms engineered with Next.js, React 19, and TypeScript for speed and conversion.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/web-development`,
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description:
            'Cross-platform iOS and Android mobile applications built with React Native and Flutter for optimal performance and native user experience.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/mobile-app-development`,
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description:
            'Tailored internal tools, MIS reporting architectures, ERP-lite platforms, and automated workflow backends engineered to scale business operations.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/custom-software`,
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Data Analytics Systems',
          description:
            'Interactive executive dashboards, automated ETL data pipelines, and decision-support analytics transforming operational metrics into strategic clarity.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/analytics`,
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'SEO & Generative Engine Optimization',
          description:
            'Technical SEO, Schema.org knowledge graph engineering, and Generative Engine Optimization (GEO) ensuring top visibility across Google and AI engines.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/seo`,
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'Social Media Marketing',
          description:
            'Data-driven social media growth strategies, content distribution loops, and brand positioning tailored for digital products and startups.',
          provider: { '@id': `${baseUrl}/#organization` },
          url: `${baseUrl}/services/social-media-marketing`,
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
        name: 'What does Devtacet do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Devtacet is a digital solutions company based in Lucknow, India, helping startups and businesses build websites, mobile applications, custom software and analytics systems, while also providing SEO and social media marketing services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Devtacet based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Devtacet is headquartered in Lucknow, Uttar Pradesh, India, serving local businesses in Lucknow as well as startups and enterprises globally across India, North America, Europe, and Asia-Pacific.',
        },
      },
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
        name: 'Does Devtacet develop cross-platform mobile apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Devtacet builds iOS and Android mobile apps using React Native and Flutter with native performance, offline-first data synchronization, seamless app store compliance, and smooth UI animations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Devtacet optimize for AI Search & LLMs (GEO)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We combine traditional technical SEO with Generative Engine Optimization (GEO). This includes Schema.org JSON-LD knowledge graphs, llms.txt integration, entity-rich factual structuring, and direct-answer formatting for engines like ChatGPT, Perplexity, Claude, and Google AI Overviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'What tech stack does Devtacet use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Next.js (App Router), React 19, TypeScript, Tailwind CSS, Node.js, Express, MongoDB/Mongoose, React Native, Flutter, and Vercel cloud infrastructure.',
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
