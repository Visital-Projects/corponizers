import React from 'react';
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FAQSection, FAQItem } from '@/components/shared/FAQSection';
import { NoSSR } from '@/components/shared/NoSSR';

// New Visualization Components
import { ProcessHero } from '@/components/visualizations/ProcessHero';
import dynamic from 'next/dynamic';

const ProcessStartingPoint = dynamic(() => import('@/components/visualizations/ProcessStartingPoint').then(mod => mod.ProcessStartingPoint));
const ProcessIntelligence = dynamic(() => import('@/components/visualizations/ProcessIntelligence').then(mod => mod.ProcessIntelligence));
const TalentMarketField = dynamic(() => import('@/components/visualizations/TalentMarketField').then(mod => mod.TalentMarketField));
const TalentAlignment = dynamic(() => import('@/components/visualizations/TalentAlignment').then(mod => mod.TalentAlignment));
const ProcessExecution = dynamic(() => import('@/components/visualizations/ProcessExecution').then(mod => mod.ProcessExecution));

export const metadata = constructMetadata({
  title: 'How Corponizers Recruitment Works | Step-by-Step Process',
  description: 'Understand exactly what happens when you engage Corponizers — from mandate briefing to post-placement follow-up. A complete 11-stage structured recruitment process for employers.',
});

// Original lifecycle stages (kept for semantic data / component passing)
export const lifecycleStages = [
  { step: '01', title: 'Mandate Briefing', description: 'Employer shares role context, team structure, must-have criteria, and hiring timelines.', owner: 'Joint Alignment' },
  { step: '02', title: 'Role Blueprint', description: 'Corponizers structures the role brief into a search-ready mandate document with target profiles.', owner: 'Corponizers' },
  { step: '03', title: 'Search Strategy', description: 'Market mapping, sourcing channel selection, and target candidate universe scoping.', owner: 'Corponizers' },
  { step: '04', title: 'Passive Outreach', description: 'Confidential outreach to qualified professionals not active on open job channels.', owner: 'Corponizers' },
  { step: '05', title: 'First-Round Screening', description: 'Domain competency assessment, background verification, and initial culture fit screening.', owner: 'Corponizers' },
  { step: '06', title: 'Employer Review', description: 'Employer reviews anonymised candidate dossiers and selects candidates for introduction.', owner: 'Employer' },
  { step: '07', title: 'Candidate Introduction', description: 'Full candidate profile released and formal interview introductions arranged.', owner: 'Joint Alignment' },
  { step: '08', title: 'Interview Coordination', description: 'Corponizers manages interview scheduling, feedback collection, and candidate debriefs.', owner: 'Corponizers' },
  { step: '09', title: 'Offer Management', description: 'Structured compensation negotiation, offer extension, and counter-offer advisory.', owner: 'Joint Alignment' },
  { step: '10', title: 'Onboarding Support', description: 'Notice period tracking, relocation coordination, and pre-joining candidate communication.', owner: 'Corponizers' },
  { step: '11', title: 'Post-Placement Audit', description: '30-day post-joining check-in with employer and candidate to ensure integration.', owner: 'Corponizers' },
];

const processFaqs: FAQItem[] = [
  {
    question: 'How long does the recruitment process typically take from briefing to shortlist?',
    answer: 'For standard Permanent Hiring and Specialist mandates, initial verified shortlists are delivered within 10 to 14 business days. Executive Search mandates follow a 14 to 21-day timeline depending on market complexity and confidentiality parameters.',
  },
  {
    question: 'What information do I need to provide during the Mandate Briefing?',
    answer: 'We need key role responsibilities, required technical/functional capabilities, reporting structure, team size, budget limits, location parameters, and any specific target or off-limit organisations.',
  },
  {
    question: 'How many candidates will Corponizers present in a shortlist?',
    answer: 'We typically present 3 to 5 highly qualified candidates per position. Every profile on the shortlist has been pre-screened and verified against your specific competency scorecard.',
  },
  {
    question: 'How is candidate confidentiality maintained during double-blind searches?',
    answer: 'In double-blind searches, your organisation branding and the candidate identity remain protected until both parties review anonymised summaries and grant explicit mutual consent to meet.',
  },
];

export default function ProcessPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Process', item: '/process' },
  ]);
  const faqLd = generateFAQSchema(processFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />

        <main className="flex-1 relative">
          
          {/* Section 1: Process Opening */}
          <ProcessHero />

          {/* Section 2: The Starting Point (Steps 01-02) */}
          <section className="py-24 md:py-32 bg-sky-50/30">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
               <h2 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Phase 01</h2>
               <h3 className="text-3xl md:text-5xl font-black tracking-tight text-blue-950 leading-[1.1]">
                 Defining the Mandate
               </h3>
            </div>
            <NoSSR>
              <ProcessStartingPoint stages={lifecycleStages.slice(0, 2)} />
            </NoSSR>
          </section>

          {/* Section 3: Understanding the Organization (Step 03) */}
          <section className="py-24 md:py-32 bg-white">
            <NoSSR>
              <ProcessIntelligence stage={lifecycleStages[2]} />
            </NoSSR>
          </section>

          {/* Section 4: Market / Talent Intelligence (Steps 04-05) */}
          <section className="py-24 md:py-40 bg-blue-950 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20 text-center">
               <h2 className="text-[10px] font-black text-sky-400 uppercase tracking-[0.2em] mb-4">Phase 02</h2>
               <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
                 Isolating the Signal
               </h3>
               <p className="text-sky-100/70 font-light max-w-2xl mx-auto mt-6">
                 Moving from a broad candidate universe to a highly concentrated, verified target profile.
               </p>
            </div>
            <NoSSR>
              <TalentMarketField stages={lifecycleStages.slice(3, 5)} />
            </NoSSR>
          </section>

          {/* Section 5: Evaluation / Alignment (Steps 06-07) */}
          <section className="py-24 md:py-32 bg-white">
            <NoSSR>
              <TalentAlignment stages={lifecycleStages.slice(5, 7)} />
            </NoSSR>
          </section>

          {/* Section 6 & 7: Execution & Outcome (Steps 08-11) */}
          <section className="bg-sky-50/50">
            <NoSSR>
              <ProcessExecution stages={lifecycleStages.slice(7, 11)} />
            </NoSSR>
          </section>

          {/* FAQ Section */}
          <div className="bg-white">
            <FAQSection
              title="Recruitment Process — Frequently Asked Questions"
              description="Answers to common questions regarding mandate timelines, candidate screening, privacy protocols, and warranties."
              items={processFaqs}
            />
          </div>

          {/* Section 8: Final CTA */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
              <h2 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">Initiate Search</h2>
              <h3 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-[1.1]">
                Ready to structure <br className="hidden md:block"/> your talent acquisition?
              </h3>
              <p className="text-xl text-blue-900/60 font-light max-w-2xl mx-auto">
                Engage our specialized practice teams to execute a predictable, verified search for your critical mandates.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-blue-950 text-white px-8 py-5 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-blue-900 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300"
                >
                  Brief Corponizers
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
