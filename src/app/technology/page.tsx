import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQSection, FAQItem } from '@/components/shared/FAQSection';
import { SolutionCTABanner } from '@/components/shared/SolutionCTABanner';
import { NoSSR } from '@/components/shared/NoSSR';

// New Technology Components
import { TechnologyHero } from '@/components/technology/TechnologyHero';
import dynamic from 'next/dynamic';

const IntelligencePurpose = dynamic(() => import('@/components/technology/IntelligencePurpose').then(mod => mod.IntelligencePurpose));
const IntelligenceStack = dynamic(() => import('@/components/technology/IntelligenceStack').then(mod => mod.IntelligenceStack));
const HumanTechnology = dynamic(() => import('@/components/technology/HumanTechnology').then(mod => mod.HumanTechnology));
const DecisionJourney = dynamic(() => import('@/components/technology/DecisionJourney').then(mod => mod.DecisionJourney));
const TechnologyCapabilities = dynamic(() => import('@/components/technology/TechnologyCapabilities').then(mod => mod.TechnologyCapabilities));
const EnterpriseTrust = dynamic(() => import('@/components/technology/EnterpriseTrust').then(mod => mod.EnterpriseTrust));

export const metadata = constructMetadata({
  title: 'Recruitment Technology & Infrastructure | Corponizers Enterprise',
  description: 'Learn how Corponizers utilizes proprietary intelligence infrastructure and structured data to empower domain-expert recruiters to make better talent decisions.',
});

const techFaqs: FAQItem[] = [
  {
    question: 'Does Corponizers use AI to replace human recruiters?',
    answer: 'No. At Corponizers, experienced practice leads conduct all candidate evaluations, interviews, and employer consultations. Technology is used strictly as an intelligence infrastructure to organize pipelines, map markets, and track candidate communications.',
  },
  {
    question: 'How does Corponizers protect candidate and company data confidentiality?',
    answer: 'We enforce strict candidate PII protection protocols and offer double-blind recruitment frameworks where employer branding and candidate identities are disclosed only after mutual consent.',
  },
  {
    question: 'How do employers receive candidate profiles and interview feedback?',
    answer: 'Candidates are introduced via standardized 4-layer dossiers containing verified competency evaluations. Interview feedback is captured through structured scorecards shared securely with your HR team.',
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-sky-200">
      <Header />

      <main className="flex-1">
        
        {/* SECTION 1: EDITORIAL HERO */}
        <TechnologyHero />

        {/* SECTION 2: THE PURPOSE OF TECHNOLOGY */}
        <NoSSR>
          <IntelligencePurpose />
        </NoSSR>

        {/* SECTION 3: THE INTELLIGENCE STACK */}
        <NoSSR>
          <IntelligenceStack />
        </NoSSR>

        {/* SECTION 4: THE PHILOSOPHY (HUMAN + TECH) */}
        <NoSSR>
          <HumanTechnology />
        </NoSSR>

        {/* SECTION 5: THE PROCESS SEQUENCE */}
        <NoSSR>
          <DecisionJourney />
        </NoSSR>

        {/* SECTION 6: PRACTICAL CAPABILITIES */}
        <NoSSR>
          <TechnologyCapabilities />
        </NoSSR>

        {/* SECTION 7: SECURITY & CONFIDENTIALITY */}
        <NoSSR>
          <EnterpriseTrust />
        </NoSSR>

        {/* SECTION 8: FAQ */}
        <FAQSection
          title="Technology FAQ"
          description="Common employer questions regarding recruitment tools, data privacy, and intelligence infrastructure."
          items={techFaqs}
        />

        {/* SECTION 9: CTA */}
        <SolutionCTABanner
          headline="Ready to Experience Structured Recruitment?"
          subtext="Connect with a Practice Lead to see how our intelligence infrastructure supports your hiring goals."
          ctaText="Book a Consultation"
          ctaHref="/contact?type=technology"
          secondaryText="Explore Solutions"
          secondaryHref="/solutions"
        />

      </main>

      <Footer />
    </div>
  );
}
