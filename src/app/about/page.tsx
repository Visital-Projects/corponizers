import React from 'react';
import { constructMetadata, generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BrandStory } from '@/components/visualizations/BrandStory';
import { FirmJourney } from '@/components/visualizations/FirmJourney';
import { SectorMasonry } from '@/components/visualizations/SectorMasonry';

import { EnterpriseEcosystem } from '@/components/visualizations/EnterpriseEcosystem';

export const metadata = constructMetadata({
  title: 'Firm Profile | Corponizers — Executive Search',
  description: 'Learn how Corponizers connects enterprise organizations with qualified professionals through structured recruitment, executive search, and long-term hiring partnerships.',
});

export default function AboutPage() {
  const organizationLd = generateOrganizationSchema();
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About the Firm', item: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="min-w-full min-h-screen bg-white flex flex-col font-sans selection:bg-sky-200">
      <Header />

      <main className="flex-1 text-blue-950">
        
        {/* SECTION 1: EDITORIAL OPENING */}
        <section className="pt-48 pb-24 bg-white relative overflow-hidden">
          {/* Subtle Homepage-style Radial Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-sky-100/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-blue-950 tracking-tighter leading-[0.95]">
              Executive Search,<br/>
              <span className="text-corponizers-blue">Redefined.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-900/70 font-light max-w-3xl mx-auto leading-relaxed">
              We do not just fill vacancies. We architect leadership teams capable of navigating complexity, driving growth, and securing enterprise legacies.
            </p>
          </div>
        </section>
        
        {/* SECTION 2: THE CORPONIZERS THESIS */}
        <section className="py-24 bg-sky-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl shadow-sky-900/10">
                <Image
                  src="/images/contact/meeting.webp"
                  alt="Corponizers Boardroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
              <div className="space-y-8 md:pl-12">
                <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Our Thesis</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-blue-950">
                  Talent is the ultimate enterprise differentiator.
                </h3>
                <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                <p className="text-lg text-blue-900/70 font-light leading-relaxed">
                  In an era of rapid technological disruption, market volatility, and shifting consumer expectations, business strategy alone is insufficient. Strategy requires execution. Execution requires exceptional human capital. 
                </p>
                <p className="text-lg text-blue-900/70 font-light leading-relaxed">
                  Corponizers exists to bridge the gap between organizational ambition and executive capability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION 3: THE BRAND STORY */}
        <BrandStory />

        {/* SECTION 4: HERITAGE & TRAJECTORY */}
        <FirmJourney />
        
        {/* SECTION 5: SECTOR EXPERTISE */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Sector Practice Groups</h2>
              <h3 className="text-4xl font-black tracking-tight text-blue-950">Deep Industry Immersion</h3>
            </div>
             
             <SectorMasonry />
          </div>
        </section>
        


        {/* SECTION 7: ENTERPRISE ECOSYSTEM (Metrics & Trust) */}
        <EnterpriseEcosystem />
        
        {/* SECTION 8: CLOSING */}
        <section className="relative py-48 flex items-center justify-center overflow-hidden">
           <Image
             src="/images/home/cta.webp"
             alt="Exceptional People"
             fill
             className="object-cover"
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
           
           <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-12">
             <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">
               Secure your firm&apos;s future.
             </h2>
             
             <div>
               <Link href="/contact" className="inline-flex items-center gap-2 bg-corponizers-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-sky-500 transition-colors duration-300 shadow-xl shadow-sky-600/30">
                 Engage Corponizers <ArrowRight className="w-4 h-4" />
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
