import React from 'react';

interface JobPostingSchemaProps {
  job: {
    title: string;
    summary: string;
    department: string;
    location: string;
    type: string;
    salaryRange?: string;
    createdAt?: string;
    slug: string;
  };
}

export function JobPostingSchema({ job }: JobPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.summary,
    identifier: {
      '@type': 'PropertyValue',
      name: 'Corponizers Enterprise',
      value: job.slug,
    },
    datePosted: job.createdAt || new Date().toISOString(),
    employmentType: job.type === 'Executive' ? 'FULL_TIME' : 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Corponizers Enterprise Recruitment',
      sameAs: 'https://corponizers.com',
      logo: 'https://corponizers.com/logo.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'IN',
      },
    },
    ...(job.salaryRange && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: {
          '@type': 'QuantitativeValue',
          unitText: 'YEAR',
          description: job.salaryRange,
        },
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
