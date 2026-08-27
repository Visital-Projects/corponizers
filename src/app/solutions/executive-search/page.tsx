import React from 'react';
import Link from 'next/link';
import { constructMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ChallengeStatement } from '@/components/shared/ChallengeStatement';
import { ProcessSteps } from '@/components/shared/ProcessSteps';
import { SolutionBenefits } from '@/components/shared/SolutionBenefits';
import { SolutionCTABanner } from '@/components/shared/SolutionCTABanner';
import { SolutionIndustries } from '@/components/shared/SolutionIndustries';
import { FAQSection } from '@/components/shared/FAQSection';
import { SolutionEnquiryForm } from '@/components/shared/SolutionEnquiryForm';
import { ContactStrip } from '@/components/shared/ContactStrip';
import {
  Search, Map, Lock, ClipboardCheck, Presentation, Handshake,
  ShieldCheck, Clock, Award, Globe2, Trophy,
} from 'lucide-react';

const executiveSearchFaqs = [
  { question: 'How is candidate confidentiality maintained during an executive search?', answer: 'All mandates operate under strict non-attribution protocols. Your organization\'s identity and the nature of the search are not disclosed to any candidate until both parties explicitly consent to proceed. Initial candidate approaches are made without revealing who is conducting the search or on whose behalf.' },
  { question: 'Can Corponizers handle searches for roles outside India?', answer: 'Yes. While India represents the majority of mandates, Corponizers supports cross-border executive searches for GCC leadership roles, APAC placements, and Indian diaspora professionals returning to senior positions in Indian organizations.' },
  { question: 'What does the 90-day placement warranty cover?', answer: 'If a placed executive is terminated for performance reasons or voluntarily exits within 90 days, Corponizers initiates a priority replacement search at no additional professional fee. The warranty excludes organizational restructuring, role elimination, or mutually agreed separations.' },
  { question: 'How long does a C-Suite search typically take from mandate to placement?', answer: 'From mandate signing to shortlist presentation is typically 14 business days. Full placement including interview rounds, offer negotiation, and joining typically takes 8–14 weeks for C-Suite roles, depending on notice periods and candidate availability.' },
  { question: 'Can Corponizers handle Board Director or independent director appointments?', answer: 'Yes. Board-level and independent director searches operate under enhanced confidentiality and corporate governance advisory protocols as a specialized practice area within the Executive Search function.' },
];

export const metadata = constructMetadata({
  title: 'Executive Search & Leadership Acquisition | Corponizers',
  description:
    'Confidential C-Suite, VP, and Board Director acquisition through structured mandate briefing, discreet market mapping, and a 90-day placement warranty. Serving Indian enterprise and global markets.',
});

export default function ExecutiveSearchPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/solutions' },
    { name: 'Executive Search', item: '/solutions/executive-search' },
  ]);
  const faqLd = generateFAQSchema(executiveSearchFaqs);

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
      <main className="flex-1">

        <PageHero
          eyebrow="C-Suite & Board Practice"
          title="Executive Search & Leadership Acquisition"
          description="Identifying and placing the leaders your organization cannot find through conventional recruitment — through confidential outreach, deep market mapping, and structured mandate delivery."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Executive Search' },
          ]}
          variant="brand"
          ctaText="Submit a Leadership Mandate"
          ctaHref="/contact?type=executive-search"
          imageSrc="/images/solutions/executive-search.webp"
          imageAlt="Board interview"
        />

        <ChallengeStatement
          eyebrow="THE LEADERSHIP HIRING CHALLENGE"
          headline="Why Executive Hiring Is Different"
          positioning="The most impactful leaders — those who transform organizations — are almost never looking for jobs. They are performing well in their current roles, invisible to standard recruitment channels, and unreachable through job boards. Finding them requires a fundamentally different approach: discreet, structured, and built on trusted relationships. Corponizers' Executive Search practice is designed exclusively for this."
          differentiator="We reach leaders who are not looking — because the best ones rarely are."
          challenges={[
            {
              title: 'Leadership succession gaps are a strategic risk',
              description: 'When a CXO departs, the window to find a capable successor is short. Most internal pipelines are inadequate, and public searches damage board-level confidentiality.',
            },
            {
              title: 'The best candidates must be approached — not recruited',
              description: 'Senior leaders with proven track records do not apply for roles. They expect to be approached with context, discretion, and a compelling case — not a job posting.',
            },
            {
              title: 'Speed and quality are both non-negotiable at C-Suite',
              description: 'Every week a senior leadership role remains vacant affects strategy execution. Yet a poor leadership hire can cost the organization significantly more in lost momentum and attrition.',
            },
          ]}
        />

        <ProcessSteps
          headline="How a Leadership Mandate Is Delivered"
          description="Six structured stages — from mandate brief to placement warranty — designed for C-Suite and Board-level precision."
          badge="MANDATE PROCESS"
          steps={[
            { step: 1, title: 'Mandate Briefing', description: 'Deep-dive stakeholder session covering leadership profile, reporting structure, strategic mandate, cultural requirements, and compensation envelope.', iconNode: <Presentation className="w-5 h-5" /> },
            { step: 2, title: 'Market Mapping', description: 'Systematic identification of target talent pools across competitors, adjacent industries, and geographic markets relevant to the mandate.', iconNode: <Map className="w-5 h-5" /> },
            { step: 3, title: 'Discreet Outreach', description: 'Non-attributable, confidential approach to passive leaders — without disclosing the client organization until mutual consent is established.', iconNode: <Lock className="w-5 h-5" /> },
            { step: 4, title: 'Multi-Layer Candidate Audit', description: 'Domain competency verification, leadership psychometrics, cultural alignment assessment, and executive reference checks before any shortlist presentation.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Client Shortlist Presentation', description: 'A fully audited shortlist of 3–5 candidates with comprehensive dossiers within 14 business days of mandate signature.', iconNode: <Search className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Warranty', description: 'Compensation negotiation support, onboarding coordination, and a 90-day post-placement performance warranty.', iconNode: <Handshake className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Receives"
          description="Executive search structured around leadership quality, organizational fit, and long-term placement success."
          badge="MANDATE OUTCOMES"
          benefits={[
            { title: 'Confidential Mandate Handling', description: 'Your organization identity and leadership gap remain fully protected until both parties provide explicit consent to proceed to introductions.', iconNode: <Lock className="w-5 h-5" /> },
            { title: '14-Day Shortlist Commitment', description: 'A fully audited 3–5 candidate shortlist presented within 14 business days of mandate confirmation — not 60.', iconNode: <Clock className="w-5 h-5" /> },
            { title: '90-Day Placement Warranty', description: 'Priority replacement search at zero additional fee if a placed leader exits within 90 days for performance reasons.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { title: 'Passive Talent Access', description: 'Access to senior leaders not visible on job boards — sourced through discreet market outreach and trusted peer referral networks.', iconNode: <Search className="w-5 h-5" /> },
            { title: 'India & Cross-Border Reach', description: "Deep networks across India's top enterprise metros and growing reach into GCC, APAC, and global leadership markets.", iconNode: <Globe2 className="w-5 h-5" /> },
            { title: 'Executive Compensation Advisory', description: 'Full compensation benchmarking, counter-offer strategy, and notice buyout advisory included with every executive mandate.', iconNode: <Trophy className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Have a Leadership Role That Cannot Wait?"
          subtext="Submit a confidential mandate brief. A Senior Executive Search Lead will respond within 2 business hours to schedule a private consultation."
          ctaText="Speak to a Leadership Consultant"
          ctaHref="/contact?type=executive-search"
          secondaryText="Submit a Mandate Brief"
          secondaryHref="/contact?type=executive-search"
        />

        {/* Working With Corponizers — framed as partnership, not SLA table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">Working With Corponizers</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  A Different Kind of Search Partnership
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Most executive search firms operate as vendors — submitting CVs and charging placement fees. Corponizers operates as a retained search partner — deeply invested in the mandate, accountable for outcomes, and structured to protect your organizational interests throughout the process.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our mandate-based model means every search is exclusive, confidential, and resourced accordingly — not distributed across a transactional pipeline of open requisitions.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-4 border-t border-slate-100 pt-4">
                  Looking for volume scaling or specialized technology roles instead of leadership placement? Explore our <Link href="/solutions/rpo" className="text-corponizers-blue font-bold hover:underline">Recruitment Process Outsourcing (RPO)</Link> or <Link href="/solutions/tech-hiring" className="text-corponizers-blue font-bold hover:underline">Tech Hiring</Link> solutions.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Shortlist delivery', corponizers: '14 business days', standard: '30–60 days' },
                  { label: 'Candidate discretion', corponizers: 'Non-attribution protocol', standard: 'Standard disclosure' },
                  { label: 'Talent pool', corponizers: 'Passive leaders via outreach', standard: 'Active job seekers only' },
                  { label: 'Placement warranty', corponizers: '90-day performance cover', standard: 'None or 30 days' },
                  { label: 'Compensation advisory', corponizers: 'Included in mandate', standard: 'Not offered' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span />
                  <span className="text-corponizers-blue">Corponizers</span>
                  <span>Industry Average</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['Manufacturing', 'BFSI & Insurance', 'Healthcare & Pharma', 'Steel & Metals', 'Infrastructure', 'Energy & Power', 'Logistics', 'IT Services']}
          headline="Practice Sectors"
          note="Executive Search mandates across all verticals. Highest mandate volume in Manufacturing, BFSI, and Healthcare."
        />

        <FAQSection
          title="Executive Search — Questions from Hiring Leaders"
          description="Common questions from Boards, CEOs, and CHROs before engaging an executive search mandate."
          items={executiveSearchFaqs}
        />

        <SolutionEnquiryForm
          serviceType="Executive Search"
          headline="Submit a Confidential Mandate Brief"
          subtext="A Senior Executive Search Lead will contact you within 2 business hours."
          ctaLabel="Submit Leadership Mandate"
          serviceFields={[
            { id: 'roleLevel', label: 'Leadership Level', type: 'select', required: true, options: ['C-Suite (CEO/COO/CFO/CTO)', 'VP / Senior VP', 'Director / GM', 'Board Director', 'Independent Director'] },
            { id: 'timeline', label: 'Expected Joining Timeline', type: 'select', options: ['Within 30 days', '30–60 days', '60–90 days', 'Flexible'] },
            { id: 'confidential', label: 'Is This a Confidential Search?', type: 'select', options: ['Yes — Strict Non-Disclosure Required', 'Partially Confidential', 'Open Search'] },
            { id: 'geography', label: 'Target Geography', type: 'text', placeholder: 'e.g. Pan-India, Mumbai, GCC' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
    </>
  );
}
