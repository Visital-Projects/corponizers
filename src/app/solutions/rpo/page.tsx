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
  ClipboardList, Settings, Users, Zap, BarChart3, TrendingUp,
  ShieldCheck, RefreshCw, FileCheck, Cpu, DollarSign,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Recruitment Process Outsourcing (RPO) | Corponizers',
  description:
    'Embed a dedicated talent acquisition team inside your organisation. Corponizers RPO integrates with your ATS, deploys specialist recruiters, and manages end-to-end hiring with contractual SLA accountability.',
});

export default function RPOPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Embedded Talent Operations"
          title="Recruitment Process Outsourcing"
          description="An embedded recruitment team — integrated into your ATS, operating under agreed SLAs, scaling on demand — without the overhead of building one internally."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Recruitment Process Outsourcing' },
          ]}
          variant="brand"
          ctaText="Transform Your TA Function"
          ctaHref="/contact?type=rpo"
          imageSrc="/images/solutions/rpo.webp"
          imageAlt="Recruitment operations center"
        />

        <ChallengeStatement
          eyebrow="THE TALENT ACQUISITION CHALLENGE"
          headline="When Internal TA Cannot Keep Pace"
          positioning="Most organisations face a structural problem: their talent acquisition function is sized for steady-state hiring, not growth. When headcount requirements spike — through expansion, acquisition, or new product launches — internal teams stretch thin, agency costs explode, and hiring quality drops. Corponizers RPO provides a third option: an embedded, accountable, scalable TA function that operates as your own team."
          differentiator="RPO is not a vendor relationship — it is your talent acquisition team, embedded and accountable."
          challenges={[
            {
              title: 'Internal TA teams are built for steady state, not growth',
              description: 'Fixed internal headcount cannot flex to match hiring sprints. The gap is filled by expensive agencies with inconsistent sourcing quality and no accountability for outcomes.',
            },
            {
              title: 'Cost-per-hire escalates during high-volume periods',
              description: 'Multiple agencies, duplicate sourcing, unmanaged job boards, and reactive hiring decisions compound direct cost. Without a central ownership model, spend is uncontrolled.',
            },
            {
              title: 'Reporting visibility into TA performance is poor',
              description: 'Without embedded processes and shared ATS access, HR leadership cannot accurately track pipeline health, time-to-fill, or offer conversion rates in real time.',
            },
          ]}
        />

        <ProcessSteps
          headline="How RPO Deployment Works"
          description="From initial TA audit to elastic scaling — structured onboarding designed for enterprise HR environments."
          badge="RPO DEPLOYMENT"
          steps={[
            { step: 1, title: 'TA Maturity Audit', description: 'Assessment of your current hiring process, ATS configuration, cost-per-hire data, recruiter ratios, and pipeline health before engagement begins.', iconNode: <ClipboardList className="w-5 h-5" /> },
            { step: 2, title: 'ATS Integration', description: 'Corponizers recruiters onboard into your existing ATS within 5 business days — no parallel systems, no data migration, no disruption to live pipelines.', iconNode: <Settings className="w-5 h-5" /> },
            { step: 3, title: 'Team Embedding', description: 'Dedicated RPO recruiters deploy as named extensions of your HR team — attending your standups, following your employer brand guidelines, aligned to your business units.', iconNode: <Users className="w-5 h-5" /> },
            { step: 4, title: 'Hiring Sprint Execution', description: 'Volume hiring campaigns managed end-to-end: sourcing, screening, coordination, offer management, and pre-joining engagement — with weekly pipeline dashboards.', iconNode: <Zap className="w-5 h-5" /> },
            { step: 5, title: 'SLA Performance Reporting', description: 'Weekly reports track time-to-shortlist, offer acceptance ratios, pipeline fill rates, and diversity metrics — all measured against pre-agreed KPIs.', iconNode: <BarChart3 className="w-5 h-5" /> },
            { step: 6, title: 'Elastic Scale', description: 'Ramp recruiter capacity up for growth sprints, down during hiring pauses — without the overhead of hiring or managing internal TA headcount.', iconNode: <TrendingUp className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Gains"
          description="RPO is a talent acquisition transformation — not a staffing transaction."
          badge="RPO OUTCOMES"
          benefits={[
            { title: 'Consolidated Cost-Per-Hire', description: 'Replacing fragmented agency spend with a structured RPO model reduces direct placement cost through consolidated sourcing and eliminating reactive channels.', iconNode: <DollarSign className="w-5 h-5" /> },
            { title: 'ATS-Embedded Operations', description: 'Our recruiters work inside your existing ATS — full data ownership stays with you. No parallel tools, no shadow processes, no black-box reporting.', iconNode: <Settings className="w-5 h-5" /> },
            { title: 'Elastic Scale — Up or Down', description: 'Adjust RPO team capacity within days based on business cycles, acquisition activity, or organisational restructuring without long-term commitments.', iconNode: <RefreshCw className="w-5 h-5" /> },
            { title: 'Compliance & Documentation', description: 'Offer management, background verification coordination, and statutory compliance handled across all hiring geographies with zero additional overhead.', iconNode: <FileCheck className="w-5 h-5" /> },
            { title: 'Structured Sourcing Stack', description: 'Modern talent intelligence tools and AI-assisted sourcing protocols increase pipeline velocity and candidate quality — included in the RPO engagement.', iconNode: <Cpu className="w-5 h-5" /> },
            { title: 'KPI-Backed Accountability', description: 'Contractual delivery targets for time-to-fill, offer acceptance, and pipeline health — with weekly reporting and quarterly business reviews.', iconNode: <ShieldCheck className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Ready to Transform Your Talent Acquisition?"
          subtext="Talk to an RPO Practice Lead about your current hiring volume, ATS environment, and growth targets. No obligation."
          ctaText="Transform Your TA Function"
          ctaHref="/contact?type=rpo"
          secondaryText="Speak to an RPO Specialist"
          secondaryHref="/contact?type=rpo"
        />

        {/* Partnership framing — replaces SLA table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">The RPO Difference</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Not a Vendor. An Embedded Team.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Traditional agencies work outside your organisation — submitting candidates for a fee, then moving on. Corponizers RPO works inside your organisation — embedded in your ATS, following your employer brand, attending your team meetings, and accountable to your KPIs.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The output is not just filled positions — it is a transformed talent acquisition capability that improves as the partnership matures.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Recruiter onboarding', corponizers: '5 business days to ATS', standard: '4–8 weeks for internal hire' },
                  { label: 'Visibility into pipeline', corponizers: 'Real-time ATS dashboard', standard: 'Ad hoc HR reports' },
                  { label: 'Hiring capacity', corponizers: 'Elastic — scales on demand', standard: 'Fixed internal team' },
                  { label: 'Accountability model', corponizers: 'Contractual KPIs', standard: 'Best-effort internal targets' },
                  { label: 'Cost structure', corponizers: 'Managed delivery model', standard: 'High agency markups + boards' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers RPO</span><span>In-House / Agency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['IT Services', 'Banking & Insurance', 'Pharmaceuticals', 'FMCG', 'E-commerce', 'BPO / Shared Services', 'Infrastructure', 'Automotive']}
          headline="High-Volume RPO Sectors"
          note="RPO engagements are most common in IT, BFSI, and FMCG where volume hiring requirements fluctuate significantly across quarters."
        />

        <FAQSection
          title="RPO — Questions from CHROs and HR Directors"
          description="Common questions from HR leadership evaluating RPO as a strategic talent acquisition model."
          items={[
            { question: 'What is the difference between RPO and using a recruitment agency?', answer: 'A recruitment agency places candidates for individual roles and charges per placement, with no ongoing accountability. RPO is an embedded model where Corponizers acts as your talent acquisition team — integrated into your ATS, operating under contractual SLAs, and managing the full hiring process with measurable KPI accountability.' },
            { question: 'How quickly can Corponizers deploy an RPO team?', answer: 'ATS integration and initial team deployment complete within 5 business days of contract signature. First-wave shortlists for active roles are typically delivered within 10–14 business days of onboarding, depending on the complexity of requirements.' },
            { question: 'Can RPO be scoped for a single hiring sprint rather than a long-term contract?', answer: 'Yes. Corponizers offers both project-based RPO engagements (e.g., 50 hires in 90 days) and long-term embedded RPO partnerships. The engagement model is structured around your specific business requirement and hiring calendar.' },
            { question: 'Who owns the ATS data and candidate pipeline?', answer: 'Your organisation retains full ownership of all ATS data, candidate records, and pipeline history throughout the engagement. Corponizers operates as a user within your system — not a separate vendor with a separate database.' },
            { question: 'How is RPO performance reported and measured?', answer: 'Weekly SLA dashboards are provided covering time-to-shortlist, offer acceptance ratios, pipeline fill rates, and diversity metrics — all measured against pre-agreed KPIs defined at contract commencement. Quarterly business reviews assess strategic alignment.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="RPO Consultation"
          headline="Let's Redesign Your TA Function"
          subtext="An RPO Practice Lead will respond within 2 business hours to discuss your current hiring model."
          ctaLabel="Request RPO Consultation"
          serviceFields={[
            { id: 'hiringVolume', label: 'Monthly Hiring Volume', type: 'select', required: true, options: ['Less than 10 hires/month', '10–30 hires/month', '30–80 hires/month', '80+ hires/month'] },
            { id: 'hrTeamSize', label: 'Current Internal HR / TA Team Size', type: 'select', options: ['1–5 people', '6–15 people', '16–30 people', '30+ people', 'No dedicated TA team'] },
            { id: 'atsSystem', label: 'Current ATS / HRMS', type: 'text', placeholder: 'e.g. Darwinbox, Keka, SAP, None' },
            { id: 'locations', label: 'Primary Hiring Locations', type: 'text', placeholder: 'e.g. Bengaluru, Pune, Hyderabad' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
