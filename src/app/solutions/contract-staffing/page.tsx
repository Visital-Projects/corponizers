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
  FileText, Search, FileCheck, Zap, ClipboardCheck, RefreshCw,
  Clock, ShieldCheck, TrendingUp, Users, Globe2, ArrowLeftRight,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Contract & Elastic Staffing | Corponizers Enterprise',
  description:
    'Pre-vetted specialist contractors, project managers, and interim executives deployed within 48 hours. Full payroll, IP assignment, and compliance managed before day one.',
});

export default function ContractStaffingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Project & Contract Deployment"
          title="Contract & Elastic Staffing"
          description="Pre-vetted specialist contractors deployed within 48 hours. Full compliance, payroll structuring, and IP documentation handled before the contractor begins work — so your project starts without delay."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Contract Staffing' },
          ]}
          variant="brand"
          ctaText="Request Talent Availability"
          ctaHref="/contact?type=contract-staffing"
          imageSrc="/images/solutions/contract-staffing.webp"
          imageAlt="Project staffing meeting"
        />

        <ChallengeStatement
          eyebrow="THE CONTRACT STAFFING CHALLENGE"
          headline="When You Need Talent Now — Not in Six Weeks"
          positioning="Project mandates, client commitments, and technology sprints do not pause for long recruitment cycles. When a critical specialist role opens — through resignation, project expansion, or a board-approved initiative — the window to act is short. Corponizers' contract staffing practice maintains an active roster of pre-vetted contractors across functions and specialisations, deployable within 48 hours without compromising on compliance or quality."
          differentiator="Pre-vetted means ready to deploy — not ready to start being vetted."
          challenges={[
            {
              title: 'Standard recruitment timelines are incompatible with project urgency',
              description: 'A typical hiring process — JD finalization, advertising, screening, interviews — takes 3–6 weeks. Most project gaps cannot absorb that delay without cost, client impact, or missed delivery milestones.',
            },
            {
              title: 'Compliance complexity creates deployment risk',
              description: 'Contract staffing without properly structured payroll, TDS compliance, IP assignment, and NDA documentation creates statutory and intellectual property risk for the hiring organization — often discovered after work has begun.',
            },
            {
              title: 'Interim leadership gaps leave strategy and operations exposed',
              description: 'When a CFO, COO, or CTO exits mid-mandate — through resignation, health, or board decision — the gap cannot wait 90 days for a permanent executive search to complete. Interim deployment provides immediate continuity.',
            },
          ]}
        />

        <ProcessSteps
          headline="The 48-Hour Deployment Process"
          description="From requirement brief to compliant, on-site contractor — a structured rapid deployment with zero statutory shortcuts."
          badge="DEPLOYMENT PROCESS"
          steps={[
            { step: 1, title: 'Requirement Brief', description: 'Rapid intake of role specification, technical or functional requirements, contract duration, location, and deployment urgency — typically completed in a 30-minute call.', iconNode: <FileText className="w-5 h-5" /> },
            { step: 2, title: 'Pre-Vetted Roster Match', description: 'Direct matching against active contractor rosters of professionals already cleared, available, and ready for deployment — not a fresh sourcing exercise.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Compliance Documentation', description: 'Payroll structure, TDS applicability, GST compliance, intellectual property assignment clauses, and NDA documentation completed in parallel with candidate introduction.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 4, title: '48-Hour Deployment', description: 'Contractor confirmed, compliant, and on-site within 48 hours of requirement confirmation — for roles matched from the active pre-vetted roster.', iconNode: <Zap className="w-5 h-5" /> },
            { step: 5, title: 'Performance Check-Ins', description: 'Structured engagement reviews at week 2, month 1, and monthly thereafter — ensuring contractor performance, utilisation alignment, and project fit remain on track.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 6, title: 'Extension or Structured Exit', description: 'Managed contract extension with revised terms, conversion to permanent employment with structured buyout, or compliant exit management at project completion.', iconNode: <RefreshCw className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Project Gets"
          description="Speed and compliance are not a trade-off in contract staffing — Corponizers delivers both simultaneously."
          badge="CONTRACT OUTCOMES"
          benefits={[
            { title: '48-Hour Deployment SLA', description: 'From requirement confirmation to contractor on-site — 48 hours for roles matched from the active pre-vetted roster. Not 48 hours to start sourcing.', iconNode: <Clock className="w-5 h-5" /> },
            { title: 'Full Compliance Before Day One', description: 'Payroll structuring, statutory deductions, IP assignment, and NDA documentation completed before the contractor starts work. No retroactive compliance risk.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { title: 'Elastic Project Headcount', description: 'Scale contractor headcount up or down based on sprint phases, delivery milestones, or client requirements — without long-term employment commitments on your books.', iconNode: <TrendingUp className="w-5 h-5" /> },
            { title: 'Interim Executive Coverage', description: 'Access to experienced interim CFOs, COOs, CTOs, and project directors from an active executive interim network — for immediate leadership gap continuity.', iconNode: <Users className="w-5 h-5" /> },
            { title: 'India-Wide Deployment', description: 'Contract deployment across all major Indian metros with remote-first and hybrid arrangements where project infrastructure permits.', iconNode: <Globe2 className="w-5 h-5" /> },
            { title: 'Permanent Conversion Pathway', description: 'Structured contract-to-permanent conversion process for high-performing contractors — with clearly defined notice periods, conversion fees, and transition timelines.', iconNode: <ArrowLeftRight className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Project Gap That Cannot Wait?"
          subtext="Share your requirement now. A staffing specialist will respond within 2 business hours with availability from the pre-vetted contractor roster."
          ctaText="Deploy Specialist Talent in 48 Hours"
          ctaHref="/contact?type=contract-staffing"
          secondaryText="Speak to a Staffing Lead"
          secondaryHref="/contact?type=contract-staffing"
        />

        {/* Partnership framing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">Why Pre-Vetted Matters</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  The Roster Advantage
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Most staffing firms advertise speed but begin sourcing after you make the call. The 48-hour SLA is only achievable through a maintained, pre-vetted active contractor roster — professionals whose credentials, compliance documents, and availability are already confirmed.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Corponizers maintains this roster continuously — refreshing availability, updating compliance documentation, and expanding specialist categories — so when your requirement arrives, deployment is immediate, not aspirational.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Deployment speed', corponizers: '48 hours from confirmation', standard: '2–4 weeks sourcing first' },
                  { label: 'Compliance setup', corponizers: 'Before day one, always', standard: 'Retroactive or client-managed' },
                  { label: 'Talent pool', corponizers: 'Pre-vetted active roster', standard: 'Fresh search for each role' },
                  { label: 'Interim executive access', corponizers: 'Active C-Suite interim network', standard: 'Rare, not a core offering' },
                  { label: 'Permanent conversion', corponizers: 'Structured clause included', standard: 'Complex, ad hoc negotiation' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Standard Agency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['IT & Product Companies', 'Oil & Gas', 'Construction & EPC', 'Manufacturing', 'Management Consulting', 'Financial Services', 'Infrastructure', 'Healthcare']}
          headline="Contract Staffing Sectors"
          note="Highest contract deployment volume in IT, Oil & Gas, and Construction — where project-based workforce models are structurally embedded."
        />

        <FAQSection
          title="Contract Staffing — Frequently Asked Questions"
          description="Common questions from project managers and HR Directors before engaging contract deployment."
          items={[
            { question: 'What does 48-hour deployment actually mean?', answer: 'The 48-hour SLA applies to roles matched from the active pre-vetted contractor roster — professionals whose credentials, compliance documentation, and current availability are already confirmed. For highly specialised or unusual profiles not on the active roster, deployment typically takes 5–7 business days while compliance documentation is completed in parallel.' },
            { question: "Who manages the contractor's payroll and statutory compliance?", answer: 'Corponizers coordinates all payroll structuring, TDS applicability, GST compliance, PF/ESIC assessment, and statutory documentation. Compliance is fully completed before the contractor begins work — your organisation does not carry the statutory risk or administrative burden.' },
            { question: 'Can a contract engagement be converted to a permanent placement?', answer: 'Yes. Contract agreements can include a structured conversion clause enabling transition to permanent employment at the end of the contract period. Corponizers manages the conversion process, including notice period management and revised employment documentation.' },
            { question: 'What happens if a contractor does not perform as expected?', answer: 'Contract agreements include defined notice periods for performance-based early termination. For roles matched from the active pre-vetted roster, a replacement contractor is available within 48 hours — minimising project disruption.' },
            { question: 'What interim executive roles can Corponizers deploy rapidly?', answer: "The interim executive practice covers functional heads and operational leaders: interim CFO, COO, CTO, CHRO, CMO, and project delivery directors. Availability depends on the active interim network at the time of the requirement — confirmed during the initial brief." },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Contract Staffing"
          headline="Submit a Contract Deployment Requirement"
          subtext="A staffing specialist will respond within 2 business hours with roster availability."
          ctaLabel="Request Contract Deployment"
          serviceFields={[
            { id: 'roleType', label: 'Role Type', type: 'select', required: true, options: ['Specialist Contractor (Technical)', 'Specialist Contractor (Functional)', 'Project Manager / Delivery Lead', 'Interim Executive / Functional Head', 'Contract Team (Multiple Roles)'] },
            { id: 'duration', label: 'Contract Duration', type: 'select', options: ['30–60 days', '60–90 days', '3–6 months', '6–12 months', 'Ongoing — Review Based'] },
            { id: 'startDate', label: 'Required Start Date', type: 'text', placeholder: 'e.g. Immediate, Within 1 week, Specific date' },
            { id: 'location', label: 'Deployment Location', type: 'text', placeholder: 'e.g. Bengaluru, Remote, Pan-India' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
