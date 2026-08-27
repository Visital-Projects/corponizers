import React from 'react';
import { constructMetadata, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactStrip } from '@/components/shared/ContactStrip';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { InteractiveProcess } from '@/components/shared/InteractiveProcess';
import { MetricsCounter } from '@/components/shared/MetricsCounter';
import { ClientLogos } from '@/components/shared/ClientLogos';
import Image from 'next/image';
import { TieMotif } from '@/components/ui/TieMotif';
import { 
  ShieldCheck, 
  ArrowRight, 
  UserCheck, 
  Briefcase, 
  Globe2, 
  Cpu, 
  CheckCircle2, 
  Building2,
  Lock,
  Zap,
  Award,
  BarChart3,
  Users2,
  BookOpen,
  ArrowUpRight,
  User,
  Handshake
} from 'lucide-react';
import Link from 'next/link';

export const metadata = constructMetadata({
  title: 'Corponizers | Enterprise Recruitment & Executive Search Partner',
  description: 'Corponizers helps global organizations build better companies through structured talent acquisition, C-Suite search, and scaled RPO solutions.',
});

export default function HomePage() {
  const organizationLd = generateOrganizationSchema();
  const websiteLd = generateWebSiteSchema();

  const industriesPreview = [
    { name: 'Banking & Finance', href: '/industries/finance', icon: Building2, description: 'Executive and specialist hiring for RBI-regulated institutions, NBFCs, and FinTech companies.' },
    { name: 'Healthcare & Pharma', href: '/industries/healthcare', icon: ShieldCheck, description: 'Clinical leadership to pharma regulatory and MedTech commercial hiring across life sciences.' },
    { name: 'Manufacturing 4.0', href: '/industries/manufacturing', icon: Zap, description: 'Lean, Six Sigma, and smart factory leadership for production and operations-driven organisations.' },
    { name: 'IT & Cloud Systems', href: '/industries/it', icon: Cpu, description: 'Community-level sourcing for passive engineering talent across SaaS, GCC, and IT services.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <div className="min-w-full min-h-screen bg-white flex flex-col font-sans">
        <Header />

        <main className="flex-1">
          
          {/* HERO SECTION */}
          <section className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 brand-hero-bg border-b border-slate-100 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
              <div className="absolute top-10 left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
              <div className="absolute top-24 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6 text-left pr-0 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-extrabold tracking-wide border border-sky-200/80 shadow-xs">
                    <TieMotif size="sm" />
                    <span>STRUCTURED TALENT ACQUISITION PARTNER</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                    Building Better Companies Through <span className="text-corponizers-blue">Structured Talent</span>
                  </h1>

                  <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                    Corponizers is an India-headquartered enterprise recruitment firm. We specialize in executive search, contract staffing, technology hiring, and recruitment process outsourcing (RPO) for Fortune 500 companies and high-growth organizations across domestic and global markets.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto shadow-brand hover:shadow-brand-hover">
                      Book Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button href="/solutions" variant="secondary" size="lg" className="w-full sm:w-auto">
                      Explore Solutions
                    </Button>
                  </div>

                  <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-bold text-slate-500 border-t border-slate-200/60 max-w-xl">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-corponizers-blue" /> Confidential Search
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-corponizers-blue" /> Structured Vetting
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-corponizers-blue" /> Cross-Border Mobility
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-slate-200/50">
                    <Image
                      src="/images/home/hero.webp"
                      alt="Executive strategy meeting"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* TRUSTED ORGANIZATIONS SECTION */}
          <ClientLogos />

          {/* REFACTORED BRAND STORY SECTION: WHY CORPONIZERS? */}
          <section className="py-32 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center pb-24">
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 text-slate-600 text-xs font-extrabold tracking-widest border border-slate-200 shadow-xs uppercase">
                <span>Why Corponizers</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Connecting Business Ambition with Exceptional Talent
              </h2>

              <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed">
                The name <strong className="text-slate-900">Corponizers</strong> combines <em className="not-italic text-corponizers-blue font-semibold">Corporate</em> and <em className="not-italic text-corponizers-blue font-semibold">Organizers</em>. We deliver end-to-end talent acquisition and RPO services to transform organizational hiring capabilities.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/about" variant="primary" size="lg">
                  Read Our Full Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Book Consultation
                </Button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-[32px] overflow-hidden shadow-sm border border-slate-200/50 mb-20">
                <Image
                  src="/images/home/strategy.webp"
                  alt="Hiring planning discussion"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Supporting Highlights: 3 Columns, Borderless typography layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-4 border-t border-slate-100">
                <div className="space-y-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Helping Employers</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Connecting enterprise organizations with vetted leadership, technical talent, and scaled workforce solutions.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Helping Job Seekers</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Matching experienced professionals with career-defining roles under confidential hiring protections.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center border border-slate-200">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Long-Term Partnerships</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Building multi-year talent pipelines and embedded recruitment frameworks aligned with business growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ECOSYSTEM */}
          <section className="py-32 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <SectionHeading
                badge="RECRUITMENT ECOSYSTEM"
                title="Structured Practice Solutions"
                description="From single executive search briefs to embedded multi-region workforce scaling."
              />

              <div className="relative w-full aspect-video sm:aspect-[2/1] lg:aspect-[21/9] rounded-[24px] overflow-hidden shadow-sm border border-sky-100">
                <Image
                  src="/images/home/practice-solutions.webp"
                  alt="Candidate review session"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Value stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { stat: '8', label: 'Practice Areas' },
                  { stat: '14-Day', label: 'Shortlist SLA' },
                  { stat: '90-Day', label: 'Placement Warranty' },
                  { stat: 'Pan-India', label: 'Coverage + Global' },
                ].map(({ stat, label }) => (
                  <div key={label} className="bg-white border border-sky-100 rounded-2xl p-5 text-center space-y-1 shadow-xs">
                    <p className="text-xl font-black text-corponizers-blue">{stat}</p>
                    <p className="text-xs text-slate-600 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Button href="/solutions" variant="primary" size="lg">
                  Explore All Practice Areas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* SECTOR SPECIALIZATION PREVIEW */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <SectionHeading
                badge="SECTOR SPECIALIZATION"
                title="Tailored Industry Taxonomies"
                description="Dedicated talent teams with deep candidate networks across major Indian and global sectors."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industriesPreview.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Card key={ind.name} className="bg-slate-50/50 hover:bg-white hover:border-corponizers-blue transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 text-corponizers-blue flex items-center justify-center mb-4 group-hover:bg-corponizers-blue group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-corponizers-blue transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3">
                        {ind.description}
                      </p>
                      <Link href={ind.href} className="text-xs font-bold text-corponizers-blue flex items-center gap-1.5 pt-2 border-t border-slate-100">
                        <span>Explore Sector</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center pt-2">
                <Button href="/industries" variant="secondary" size="md">
                  View All 10 Industry Verticals →
                </Button>
              </div>
            </div>
          </section>

          {/* INTERACTIVE 4-STEP PROCESS */}
          <section className="py-32 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                badge="SEARCH METHODOLOGY"
                title="The 4-Step Enterprise Framework"
                description="Every candidate introduction follows a double-blind vetting framework engineered to eliminate placement risk."
              />

              <InteractiveProcess />
            </div>
          </section>

          {/* METRICS COUNTER */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <MetricsCounter />
            </div>
          </section>

          {/* PREMIUM CTA */}
          <section className="py-32 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-slate-200/50">
                  <Image
                    src="/images/home/cta.webp"
                    alt="Successful business discussion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Ready to Transform Your Talent Strategy?
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-normal">
                    Partner with Corponizers to build high-performing teams, fill critical leadership gaps, and scale your workforce with predictability.
                  </p>
                  <div className="pt-4">
                    <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                      Schedule a Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT STRIP */}
          <ContactStrip />

        </main>

        <Footer />
      </div>
    </>
  );
}
