import React from 'react';
import { constructMetadata } from '@/lib/seo';
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
  ClipboardCheck, Search, Brain, FileText, Users, ShieldCheck,
  Handshake, Timer, Target, TrendingDown, CheckCircle2,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Permanent Hiring & Talent Acquisition | Corponizers',
  description:
    'Four-layer verified permanent placement for mid-senior professional and specialist roles across India. Psychometric assessment, cultural alignment, and background verification before any shortlist.',
});

export default function PermanentHiringPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Mid-Senior Professional Placement"
          title="Permanent Hiring & Talent Acquisition"
          description="Four-layer verified permanent placement for mid-to-senior professionals. Domain expertise, psychometric assessment, cultural alignment, and background verification — before your team interviews anyone."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Permanent Hiring' },
          ]}
          variant="brand"
          ctaText="Request a Hiring Consultation"
          ctaHref="/contact?type=permanent-hiring"
          imageSrc="/images/solutions/permanent-hiring.webp"
          imageAlt="Professional interview"
        />

        <ChallengeStatement
          eyebrow="THE PERMANENT HIRING CHALLENGE"
          headline="Why Good Candidates Are Not Enough"
          positioning="A technically capable candidate who leaves in 8 months — because of cultural mismatch, unmet expectations, or a misaligned role brief — is not a hiring success. It is a hiring failure that costs the organization more than the recruitment fee. Corponizers' Permanent Hiring practice is built on one principle: a verified hire who stays and contributes is worth more than a fast hire who does not."
          differentiator="We optimize for retention, not just placement — because your ROI depends on it."
          challenges={[
            {
              title: 'Early attrition undermines hiring ROI',
              description: 'Industry data consistently shows that a significant proportion of permanent hires leave within 12 months. The direct cost of replacement, onboarding, and lost productivity far exceeds the original recruitment fee.',
            },
            {
              title: 'Generic CV screening misses cultural and motivational fit',
              description: 'Most recruiters screen for keywords and experience on paper. Cultural alignment, work style compatibility, and genuine career motivation are rarely assessed before a candidate enters the client interview process.',
            },
            {
              title: 'Role briefs are frequently incomplete',
              description: 'A poorly defined role brief generates candidates who meet the job description but not the actual business requirement. The hiring manager\'s time is wasted on structurally misaligned shortlists.',
            },
          ]}
        />

        <ProcessSteps
          headline="The Four-Layer Verification Process"
          description="A structured placement model designed to improve hiring quality, reduce early attrition, and respect your team's interview time."
          badge="HIRING PROCESS"
          steps={[
            { step: 1, title: 'Deep Role Brief', description: 'Structured intake session with the hiring manager — capturing functional requirements, team dynamics, leadership expectations, and the unstated business context that determines real fit.', iconNode: <FileText className="w-5 h-5" /> },
            { step: 2, title: 'Targeted Sourcing', description: 'Multi-channel sourcing combining active candidate outreach, passive market mapping, and structured referral networks — not bulk job board posting.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Domain Competency Audit', description: 'Functional knowledge assessment and structured competency interview conducted before any candidate is presented — ensuring verified domain capability, not just keyword relevance.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 4, title: 'Psychometric & Cultural Assessment', description: "Standardized psychometric profiling covering work style, leadership traits, collaboration preferences, and value alignment relative to your organization's culture.", iconNode: <Brain className="w-5 h-5" /> },
            { step: 5, title: 'Reference & Background Verification', description: 'Professional reference verification, employment history validation, and qualification confirmation completed before the shortlist is presented — not after offer acceptance.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Post-Joining Review', description: 'Compensation negotiation support, joining date management, and a structured 30-day post-joining check-in to confirm early integration is on track.', iconNode: <Handshake className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Receives"
          description="A hiring process structured around retention, not speed — with quality assurance built in before your team interviews anyone."
          badge="PLACEMENT OUTCOMES"
          benefits={[
            { title: 'Pre-Verified Shortlists Only', description: 'Every candidate presented has passed four verification layers: domain competency, psychometric assessment, cultural alignment evaluation, and background verification.', iconNode: <CheckCircle2 className="w-5 h-5" /> },
            { title: 'Reduced Early Attrition Risk', description: 'Cultural alignment and motivation assessment before placement significantly reduces the probability of the most common cause of 12-month attrition — expectation mismatch.', iconNode: <TrendingDown className="w-5 h-5" /> },
            { title: 'Hiring Manager Time Protection', description: 'Your team only interviews candidates who have been comprehensively pre-screened. No unqualified CVs, no keyword-matched profiles, no CV-first process.', iconNode: <Timer className="w-5 h-5" /> },
            { title: 'Structured Role Clarity', description: 'Structured role briefing sessions often reveal misalignments between the written job description and the actual business requirement — preventing a process built on a flawed brief.', iconNode: <Target className="w-5 h-5" /> },
            { title: 'Full Candidate Dossier', description: 'Each shortlisted candidate is presented with a comprehensive dossier: competency scores, psychometric profile, assessment notes, and reference feedback — all in one document.', iconNode: <FileText className="w-5 h-5" /> },
            { title: 'Mid-Senior Role Specialisation', description: 'Permanent hiring practice focused on mid-to-senior individual contributors and functional leaders — from specialist professionals to senior managers and department heads.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Looking for a Hire Who Stays and Delivers?"
          subtext="Submit your mandate brief and a Practice Lead will schedule a structured role briefing session within 2 business hours."
          ctaText="Submit a Permanent Hiring Mandate"
          ctaHref="/contact?type=permanent-hiring"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=permanent-hiring"
        />

        {/* Partnership framing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">The Corponizers Difference</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Quality Over Speed — Without Sacrificing Either
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The fastest recruitment is not the best recruitment. But neither is the slowest. Corponizers&apos; four-layer process is designed to be structurally rigorous without being unnecessarily slow — adding verification steps that happen in parallel, not in sequence.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The result is a shortlist that takes slightly longer to build but saves significantly more time in the interview process — and produces hires that remain in role and contribute meaningfully.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Shortlist verification', corponizers: '4-layer audit before client', standard: 'CV screening only' },
                  { label: 'Cultural fit assessment', corponizers: 'Psychometric profiling', standard: 'Informal interview judgment' },
                  { label: 'Background check timing', corponizers: 'Before shortlist presentation', standard: 'After offer acceptance' },
                  { label: 'Role brief quality', corponizers: 'Structured intake session', standard: 'Job description received' },
                  { label: 'Post-placement review', corponizers: '30-day integration check', standard: 'Not standard' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Typical Recruiter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['Manufacturing', 'BFSI & Insurance', 'Healthcare', 'Pharmaceuticals', 'IT Services', 'Retail & FMCG', 'Logistics', 'Infrastructure', 'Education']}
          headline="Sectors Served"
          note="Permanent hiring mandates delivered across all major Indian industries. Highest volumes in Manufacturing, BFSI, and Healthcare."
        />

        <FAQSection
          title="Permanent Hiring — Frequently Asked Questions"
          description="Common questions from hiring managers and HR Directors about our structured permanent placement model."
          items={[
            { question: 'What seniority levels does permanent hiring cover?', answer: 'The permanent hiring practice covers mid-to-senior professionals — typically from 4 years of experience through department head and senior manager levels. C-Suite and board roles are handled under the Executive Search practice. High-volume junior hiring is covered under RPO.' },
            { question: 'How does the psychometric assessment work?', answer: 'Standardized psychometric assessment is conducted by Corponizers as part of the candidate verification process — not outsourced to the candidate. Results are presented as a structured profile summary within each candidate dossier, covering work style, leadership traits, and value alignment indicators.' },
            { question: 'When does background verification happen?', answer: "Background verification is initiated after the initial competency assessment is cleared — before the shortlist is presented to the client. This ensures your organization's interview pipeline is not contaminated by candidates whose background verification would disqualify them at offer stage." },
            { question: 'What is the typical time-to-shortlist for permanent hiring?', answer: 'A verified shortlist of 3–5 candidates for a mid-to-senior permanent role is typically delivered within 10–15 business days of mandate receipt, depending on the seniority and specialization of the role.' },
            { question: 'Is there a replacement guarantee for permanent placements?', answer: 'Corponizers provides a structured replacement commitment for permanent placements — if a placed candidate exits within an agreed period for performance reasons or is let go within the guarantee window, a replacement search is initiated at no additional professional fee. Specific terms are confirmed in each engagement agreement.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Permanent Hiring"
          headline="Submit a Permanent Hiring Mandate"
          subtext="A Practice Lead will schedule a structured role briefing within 2 business hours."
          ctaLabel="Submit Hiring Mandate"
          serviceFields={[
            { id: 'roleLevel', label: 'Role Seniority', type: 'select', required: true, options: ['Mid-Level (4–8 years)', 'Senior Individual Contributor (8–12 years)', 'Manager / Team Lead', 'Senior Manager / AGM', 'GM / DGM / Department Head'] },
            { id: 'function', label: 'Function / Department', type: 'text', required: true, placeholder: 'e.g. Finance, Operations, HR, Engineering' },
            { id: 'location', label: 'Hiring Location', type: 'text', placeholder: 'e.g. Mumbai, Pan-India, Bengaluru' },
            { id: 'timeline', label: 'Expected Joining Timeline', type: 'select', options: ['Within 30 days', '30–60 days', '60–90 days', 'Flexible'] },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
