import React from 'react';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { NoSSR } from '@/components/shared/NoSSR';

// Import new visualization components
import { IndustriesHero } from '@/components/visualizations/IndustriesHero';
import dynamic from 'next/dynamic';

const IndustryTaxonomy = dynamic(() => import('@/components/visualizations/IndustryTaxonomy').then(mod => mod.IndustryTaxonomy));
const HiringComplexityFramework = dynamic(() => import('@/components/visualizations/HiringComplexityFramework').then(mod => mod.HiringComplexityFramework));
const CapabilityMatrix = dynamic(() => import('@/components/visualizations/CapabilityMatrix').then(mod => mod.CapabilityMatrix));
const PremiumFootprintMap = dynamic(() => import('@/components/visualizations/PremiumFootprintMap').then(mod => mod.PremiumFootprintMap));

export const metadata = constructMetadata({
  title: 'Industry Sector Expertise | Corponizers Enterprise Recruitment',
  description: 'Dedicated recruitment practice groups with deep domain knowledge across Finance, Healthcare, Manufacturing, Steel, Mining, IT, Retail, Logistics, Education, and Energy.',
});

// Extracted data for components
export const industryData = [
  {
    title: 'Banking & Financial Services',
    slug: 'finance',
    eyebrow: 'Regulated Finance',
    roles: 'CRO · Compliance Head · FinTech Lead · Treasury Director',
    description: 'Executive and specialist hiring for RBI and SEBI-regulated institutions, NBFCs, insurance, and FinTech companies. We leverage deep networks within the Indian financial ecosystem to secure leaders who understand both aggressive growth and strict compliance.',
    image: '/images/industries/finance.webp',
  },
  {
    title: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    eyebrow: 'Clinical & Pharma',
    roles: 'Medical Director · CMO · Regulatory Head · MedTech VP',
    description: 'Clinical leadership to pharma regulatory and MedTech commercial hiring across hospital networks and life sciences organisations. Identifying leaders who balance patient care mandates with institutional profitability.',
    image: '/images/industries/healthcare.webp',
  },
  {
    title: 'Manufacturing & Industry 4.0',
    slug: 'manufacturing',
    eyebrow: 'Smart Factory',
    roles: 'Plant Director · VP Operations · Lean Lead · Automation Head',
    description: 'Lean, Six Sigma, and smart factory leadership for production and operations-driven organisations. Transitioning legacy manufacturing into IoT-enabled, predictive-maintenance powerhouses.',
    image: '/images/industries/manufacturing.webp',
  },
  {
    title: 'Steel & Metallurgy',
    slug: 'steel',
    eyebrow: 'Heavy Industry',
    roles: 'Plant Director · Process Metallurgist · BF/EAF GM · Safety Chief',
    description: 'Specialist recruitment across integrated steel plants, mini-mills, rolling mills, and metallurgy technology companies. Unearthing rare talent willing to lead in remote, heavy-industry locations.',
    image: '/images/industries/steel.webp',
  },
  {
    title: 'Mining & Natural Resources',
    slug: 'mining',
    eyebrow: 'Minerals & Resources',
    roles: 'Mine Manager · Geologist · HSE Director · ESG VP',
    description: 'Safety-critical and compliance-verified hiring for open-cast, underground, and mineral processing operations. Placing experts who prioritize zero-harm environments and sustainable extraction.',
    image: '/images/industries/mining.webp',
  },
  {
    title: 'Information Technology',
    slug: 'it',
    eyebrow: 'Technology & AI',
    roles: 'CTO · AI/ML Engineer · Cloud Architect · Engineering Manager',
    description: 'Community-level sourcing for passive engineering talent across SaaS, product, GCC, and IT services organisations. Bypassing active job boards to find developers building the digital infrastructure of tomorrow.',
    image: '/images/industries/it.webp',
  }
];

export default function IndustriesIndexPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Industries', item: '/industries' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />

        <main className="flex-1 relative text-blue-950">
          
          {/* 1. MARKET OPENING (Editorial Asymmetry) */}
          <IndustriesHero />

          {/* 2 & 3. INDUSTRY LANDSCAPE + SECTOR DEPTH (Interactive Typographic Taxonomy) */}
          <section className="py-24 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Sector Depth</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950 max-w-3xl leading-[1.1]">
                Intelligence across India&apos;s most critical economic sectors.
              </h3>
            </div>
            
            <NoSSR>
              <IndustryTaxonomy industries={industryData} />
            </NoSSR>
          </section>

          {/* 4. WHY INDUSTRIES ARE DIFFERENT (Complexity Framework) */}
          <section className="py-24 md:py-32 bg-sky-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
               <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Talent Complexity</h2>
               <h3 className="text-3xl md:text-4xl font-black tracking-tight text-blue-950 max-w-2xl leading-[1.1]">
                 Why generic recruitment fails in specialized sectors.
               </h3>
            </div>
            <NoSSR>
              <HiringComplexityFramework />
            </NoSSR>
          </section>

          {/* 5. INDUSTRY × CAPABILITY (Strategic Matrix) */}
          <section className="py-24 md:py-32 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
               <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Strategic Matrix</h2>
               <h3 className="text-4xl font-black tracking-tight text-blue-950 leading-[1.1]">
                 Intersecting expertise with execution.
               </h3>
               <p className="text-lg text-blue-900/60 font-light max-w-2xl mx-auto mt-6">
                 We deploy eight dedicated recruitment models across our six core practice groups to solve highly specific enterprise talent challenges.
               </p>
            </div>
            <NoSSR>
              <CapabilityMatrix />
            </NoSSR>
          </section>

          {/* 6. GEOGRAPHIC REACH */}
          <section className="py-24 md:py-32 bg-sky-50/50 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
               <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Delivery Footprint</h2>
               <h3 className="text-4xl font-black tracking-tight text-blue-950 leading-[1.1]">
                 Pan-India Sector Execution.
               </h3>
            </div>
            <NoSSR>
              <PremiumFootprintMap />
            </NoSSR>
          </section>

          {/* 7. FINAL CONVERSION */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
              <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Consultative Approach</h2>
              <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
                Tell us what talent challenge <br className="hidden md:block"/> you are solving.
              </h3>
              <p className="text-xl text-blue-900/60 font-light max-w-2xl mx-auto">
                Domain credibility before the first conversation. Speak directly with a Practice Director who understands your sector&apos;s specific regulatory, technical, and leadership nuances.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-blue-950 text-white px-8 py-5 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
                >
                  Book a Sector Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
          
        </main>

        <Footer />
      </div>
    </>
  );
}
