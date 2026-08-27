import { Metadata } from 'next';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://corponizers.com';

export function constructMetadata({
  title = 'Corponizers | Enterprise Recruitment & Executive Search Partner',
  description = 'Corponizers provides world-class executive search, recruitment process outsourcing (RPO), specialized IT & non-IT talent acquisition for Fortune 500 enterprises and high-growth organizations.',
  image = '/og-image.jpg',
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'Executive Search',
      'Enterprise Recruitment',
      'RPO Solutions',
      'Talent Acquisition',
      'IT Staffing',
      'Leadership Hiring',
      'Global Talent Placement',
      'Corponizers',
    ],
    authors: [{ name: 'Corponizers Enterprise Solutions' }],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonical || BASE_URL,
    },
    openGraph: {
      title,
      description,
      url: canonical || BASE_URL,
      siteName: 'Corponizers Enterprise Recruitment',
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RecruitmentAgency',
    '@id': `${BASE_URL}/#organization`,
    name: 'Corponizers',
    legalName: 'Inclusive Commerce Pvt Ltd',
    alternateName: ['Corponizers Recruitment Agency', 'Corponizers Executive Search'],
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og-image.jpg`,
    description: 'Corponizers is an India-headquartered enterprise recruitment agency specializing in executive search, contract staffing, technology hiring, leadership acquisition, and recruitment process outsourcing (RPO).',
    knowsAbout: [
      'Executive Search',
      'Leadership Acquisition',
      'Recruitment Process Outsourcing',
      'Contract Staffing',
      'Technology Hiring',
      'Global Mobility',
      'Campus Recruitment',
      'Talent Acquisition Strategy'
    ],
    sameAs: [
      'https://www.linkedin.com/company/corponizers/',
      'https://www.instagram.com/corponizers/',
      'https://www.facebook.com/corponizers/'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5th Floor A- Zone, Fortune Tower, Maitri Vihar, Rail Vihar, Chandrasekharpur',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      postalCode: '751023',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 7008934524',
        contactType: 'Enterprise Talent Advisory',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91 7008681808',
        contactType: 'Enterprise Talent Advisory',
        availableLanguage: ['English', 'Hindi'],
      }
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Corponizers',
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${BASE_URL}${crumb.item}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
