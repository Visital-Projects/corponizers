import React from 'react';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, UserCheck, Briefcase, Cpu, Globe2, Users2, Clock, GraduationCap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ClientLogos } from '@/components/shared/ClientLogos';
import { SolutionsHero } from '@/components/visualizations/SolutionsHero';

export const metadata = constructMetadata({
  title: 'Enterprise Recruitment Solutions & Practice Areas | Corponizers',
  description:
    'Corponizers offers 8 specialized recruitment practice areas: Executive Search, RPO Solutions, Permanent Hiring, Contract Staffing, Campus Hiring, Technology Hiring, Global Mobility, and Recruitment Consulting.',
});

const flagshipSolutions = [
  {
    title: 'Executive Search & Leadership',
    description: 'Confidential C-Suite, VP, and Board Director acquisition with a 14-day shortlist commitment and 90-day placement warranty.',
    href: '/solutions/executive-search',
    badge: 'C-Suite & Board',
    image: '/images/solutions/executive-search.webp',
    colSpan: 'md:col-span-8',
    aspect: 'aspect-[16/9] md:aspect-auto',
  },
  {
    title: 'Recruitment Process Outsourcing',
    description: 'Embedded talent acquisition operations that scale on-demand, reducing direct cost-per-hire through structured RPO delivery.',
    href: '/solutions/rpo',
    badge: 'Scalable Operations',
    image: '/images/solutions/rpo.webp',
    colSpan: 'md:col-span-4',
    aspect: 'aspect-square md:aspect-[3/4]',
  },
  {
    title: 'Tech, AI & Engineering Hiring',
    description: 'Specialized sourcing for AI/ML researchers, Cloud Architects, and distributed systems engineers across India and global markets.',
    href: '/solutions/tech-hiring',
    badge: 'Specialized Tech',
    image: '/images/solutions/technology-hiring.webp',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-square md:aspect-[4/5]',
  },
  {
    title: 'Global Talent Mobility',
    description: 'Cross-border recruitment, EOR frameworks, visa compliance, and executive relocation support for India-in and India-out hiring.',
    href: '/solutions/global-mobility',
    badge: 'Cross-Border',
    image: '/images/solutions/global-mobility.webp',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-[16/9] md:aspect-auto',
  },
];

const supportingSolutions = [
  {
    title: 'Permanent Leadership Hiring',
    description: '4-layer competency audit for mid to senior enterprise management placements with full replacement warranties.',
    href: '/solutions/permanent-hiring',
    badge: 'Full-Time Placements',
  },
  {
    title: 'Contract & Elastic Staffing',
    description: 'Deploy-on-demand specialized contractors and project managers with 48-hour turnaround SLAs.',
    href: '/solutions/contract-staffing',
    badge: '48h SLA',
  },
  {
    title: 'Campus & Early Career Hiring',
    description: 'University relations networks and structured placement drives for tier-1 engineering and management pipelines.',
    href: '/solutions/campus-hiring',
    badge: 'University Pipeline',
  },
  {
    title: 'Recruitment Advisory & HR Consulting',
    description: 'Employer brand diagnostics, TA maturity audits, and compensation benchmarking for enterprise HR teams.',
    href: '/solutions/recruitment-consulting',
    badge: 'Strategic Advisory',
  },
];

export default function SolutionsHubPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/solutions' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />

        <main className="flex-1 relative">
          
          {/* THE HERO: Architecting Talent (Extracted to client component for motion) */}
          <SolutionsHero />

          {/* FLAGSHIP PRACTICES: Immersive Bento Grid */}
          <section className="py-24 md:py-32 bg-sky-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
                <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Flagship Practices</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950">
                  Specialized execution <br className="hidden md:block"/> at enterprise scale.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)] md:auto-rows-[450px]">
                {flagshipSolutions.map((solution, idx) => (
                  <Link 
                    key={idx} 
                    href={solution.href}
                    className={`${solution.colSpan} ${solution.aspect} group relative rounded-2xl overflow-hidden block bg-blue-950`}
                  >
                    {/* Background Image */}
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-overlay grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 mb-4 text-[9px] font-black tracking-widest uppercase text-sky-300 border border-sky-400/30 rounded-full backdrop-blur-md">
                          {solution.badge}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                          {solution.title}
                        </h4>
                        <p className="text-sky-100/70 text-sm md:text-base leading-relaxed max-w-lg mb-6 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                          {solution.description}
                        </p>
                        <div className="flex items-center text-xs font-bold text-white tracking-widest uppercase group-hover:text-sky-300 transition-colors">
                          Explore Capability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>

          {/* SUPPORTING PRACTICES: Editorial Interactive List */}
          <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3 space-y-6">
                  <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em]">Supporting Capabilities</h2>
                  <h3 className="text-4xl font-black tracking-tight text-blue-950 leading-[1.1]">
                    Comprehensive <br/> Talent Coverage.
                  </h3>
                  <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                  <p className="text-lg text-blue-900/60 font-light leading-relaxed">
                    Beyond our flagship operations, we provide targeted solutions to ensure complete talent lifecycle coverage across your enterprise.
                  </p>
                </div>

                <div className="lg:w-2/3 border-t border-sky-100">
                  {supportingSolutions.map((solution, idx) => (
                    <Link 
                      key={idx} 
                      href={solution.href}
                      className="group block py-10 border-b border-sky-100 hover:bg-sky-50/50 transition-colors duration-300 relative px-4 -mx-4 sm:px-8 sm:-mx-8"
                    >
                      {/* Hover Red Tie Indicator */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-600 group-hover:h-12 transition-all duration-300"></div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="space-y-3 max-w-xl">
                          <div className="flex items-center gap-4">
                            <h4 className="text-2xl font-bold text-blue-950 tracking-tight group-hover:text-blue-700 transition-colors">
                              {solution.title}
                            </h4>
                            <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-black tracking-widest uppercase text-corponizers-blue bg-sky-100 rounded-sm">
                              {solution.badge}
                            </span>
                          </div>
                          <p className="text-blue-900/60 font-light leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                        
                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-sky-200 text-sky-500 group-hover:bg-blue-950 group-hover:border-blue-950 group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* DIAGNOSTIC CTA: Brand Aligned (No dark slate) */}
          <section className="py-24 bg-sky-50/50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60"></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
              <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Enterprise Talent Diagnostic</h2>
              <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
                Not sure which solution <br className="hidden md:block"/> fits your hiring challenge?
              </h3>
              <p className="text-xl text-blue-900/60 font-light max-w-2xl mx-auto">
                Speak directly with a Corponizers Practice Director for a confidential, no-obligation capability assessment.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-blue-950 text-white px-8 py-5 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
                >
                  Book a Free Diagnostic
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
