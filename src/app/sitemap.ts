import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corponizers.com';

  const highPriorityRoutes = [
    '',
    '/about',
    '/solutions',
    '/solutions/executive-search',
    '/solutions/permanent-hiring',
    '/solutions/contract-staffing',
    '/solutions/campus-hiring',
    '/solutions/tech-hiring',
    '/solutions/rpo',
    '/solutions/global-mobility',
    '/solutions/recruitment-consulting',
    '/industries',
    '/industries/finance',
    '/industries/healthcare',
    '/industries/manufacturing',
    '/industries/steel',
    '/industries/mining',
    '/industries/it',
    '/industries/retail',
    '/industries/logistics',
    '/industries/education',
    '/industries/energy',
    '/process',
    '/technology',
    '/careers',
    '/insights',
    '/contact',
  ];

  const secondaryRoutes = [
    '/privacy-policy',
    '/terms',
    '/refund-policy',
  ];

  const mainSitemapEntries: MetadataRoute.Sitemap = highPriorityRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions') || route.startsWith('/industries') ? 0.9 : 0.8,
  }));

  const secondarySitemapEntries: MetadataRoute.Sitemap = secondaryRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.3,
  }));

  return [...mainSitemapEntries, ...secondarySitemapEntries];
}
