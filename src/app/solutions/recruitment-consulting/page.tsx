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
import { RecruitmentConsultingIllustration } from '@/components/solutions/SolutionIllustrations';
import {
  BarChart3, Target, Award, Lightbulb, TrendingUp, ShieldCheck,
  Search, Building2, Users, ClipboardCheck, FileText, Settings,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Recruitment Advisory & TA Consulting | Corponizers',
  description:
    'TA maturity audits, employer brand diagnostics, compensation benchmarking, and recruitment process redesign. Independent advisory grounded in live Indian talent market intelligence.',
});

export default function RecruitmentConsultingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Strategic Talent Advisory"
          title="Recruitment Advisory & TA Consulting"
          description="Independent advisory to transform your talent acquisition function — TA maturity audits, employer brand diagnostics, compensation benchmarking, and process redesign grounded in live Indian market intelligence."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Recruitment Advisory' },
          ]}
          variant="brand"
          ctaText="Request a TA Maturity Review"
          ctaHref="/contact?type=advisory"
        >
          <RecruitmentConsultingIllustration />
        </PageHero>

        <ChallengeStatement
          eyebrow="THE TALENT ACQUISITION ADVISORY CHALLENGE"
          headline="When the Problem Is the Hiring Process Itself"
          positioning="Many organisations struggle with hiring not because strong candidates do not exist, but because their internal processes, employer brand, or compensation structures work against them. These are systemic problems that adding more recruiter headcount or increasing job board spend will not solve. Corponizers' Advisory practice addresses root causes — with objective, expert-led analysis and structured recommendations, grounded in live Indian market data, not generic consulting frameworks."
          differentiator="We diagnose the systemic problem — not the symptom — and provide market-grounded recommendations."
          challenges={[
            {
              title: 'Internal teams cannot objectively audit their own TA processes',
              description: 'Self-assessment produces self-confirming results. Without an external benchmark and independent evaluation, recruitment inefficiencies persist, compound, and become embedded in HR operating models.',
            },
            {
              title: 'Employer brand perception gaps are invisible from the inside',
              description: 'How your organisation is perceived by the talent market is often significantly different from how HR believes it is perceived. This gap — invisible internally — directly affects candidate quality, application rates, and offer acceptance.',
            },
            {
              title: 'Compensation benchmarks go stale faster than annual salary surveys',
              description: "India's talent market moves quickly. Last year's compensation survey is frequently irrelevant by the time it informs this year's offer strategy — resulting in counter-offer losses and retention gaps that feel unexplained.",
            },
          ]}
        />

        <ProcessSteps
          headline="The Advisory Engagement Process"
          description="Six structured stages from diagnostic to outcome verification — transforming recruitment function effectiveness with measurable milestones."
          badge="ADVISORY PROCESS"
          steps={[
            { step: 1, title: 'TA Maturity Audit', description: 'Independent assessment of your current talent acquisition function across five dimensions: sourcing strategy, recruiter workflow, ATS utilisation, candidate experience quality, and hiring metrics maturity.', iconNode: <BarChart3 className="w-5 h-5" /> },
            { step: 2, title: 'Employer Brand Diagnostic', description: 'External market perception analysis covering candidate sentiment, online presence quality, EVP clarity, and positioning relative to your direct talent market competitors.', iconNode: <Target className="w-5 h-5" /> },
            { step: 3, title: 'Compensation Benchmarking', description: 'Role-specific compensation analysis against current Indian market data — informed by live sourcing intelligence, not annual survey data published 8 months ago.', iconNode: <Award className="w-5 h-5" /> },
            { step: 4, title: 'Process Blueprint', description: 'Structured recommendations for hiring process redesign, ATS optimisation, recruiter workflow improvement, and candidate engagement — prioritised by impact and implementation complexity.', iconNode: <FileText className="w-5 h-5" /> },
            { step: 5, title: 'Implementation Advisory', description: 'Hands-on advisory during recommendation implementation — working alongside your HR team to apply changes with defined milestones and accountability checkpoints.', iconNode: <Settings className="w-5 h-5" /> },
            { step: 6, title: '60 / 90-Day Outcome Review', description: 'Structured measurement of impact against baseline metrics at 60 and 90 days — confirming improvement, identifying gaps, and calibrating further optimisation.', iconNode: <TrendingUp className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Receives"
          description="Independent, market-grounded advisory that transforms how your organisation attracts, selects, and retains talent."
          badge="ADVISORY OUTCOMES"
          benefits={[
            { title: 'Independent TA Process Assessment', description: 'An objective external audit of your current recruitment function — with an honest assessment of what is working, what is not, and what is costing you talent.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { title: 'Employer Brand Clarity', description: 'A clear, authentic, and differentiated employer value proposition — built on actual market perception data, not internal communications team assumptions.', iconNode: <Target className="w-5 h-5" /> },
            { title: 'Live Compensation Intelligence', description: 'Current, role-specific compensation benchmarks for the Indian market — informing offer strategy, retention planning, and budget forecasting with data that is accurate today, not nine months ago.', iconNode: <BarChart3 className="w-5 h-5" /> },
            { title: 'Recruiter Enablement Frameworks', description: 'Structured playbooks, interview frameworks, and sourcing strategy guides that make your internal recruitment team measurably more effective — without increasing headcount.', iconNode: <Users className="w-5 h-5" /> },
            { title: 'ATS Optimisation Guidance', description: 'Assessment of your current ATS configuration, utilisation gaps, and workflow improvement opportunities — including unbiased technology procurement guidance where needed.', iconNode: <Settings className="w-5 h-5" /> },
            { title: 'Ongoing Talent Market Advisory', description: 'Continuous advisory on India salary movements, competitor hiring patterns, talent availability shifts, and emerging workforce trends relevant to your industry and function.', iconNode: <Lightbulb className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Is Your TA Function Performing at Its Potential?"
          subtext="Request a TA Maturity Review. An Advisory Lead will contact you within 2 business hours to discuss your current hiring challenges and whether advisory is the right engagement."
          ctaText="Request a TA Maturity Review"
          ctaHref="/contact?type=advisory"
          secondaryText="Speak to an Advisory Lead"
          secondaryHref="/contact?type=advisory"
        />

        {/* Partnership framing — what makes this advisory different */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">Why This Advisory Is Different</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Practitioner Intelligence, Not Consultant Frameworks
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Generic HR consulting firms bring frameworks developed from global client databases and standard industry models. Corponizers brings live practitioner intelligence — grounded in active sourcing data, current salary negotiations, and real-time market patterns from mandate execution happening right now across your industry.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The compensation benchmark we provide is not from a published survey. It reflects what candidates in your target roles are actually being offered today — because we are negotiating those offers in parallel with advising you.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Compensation data', corponizers: 'Live sourcing intelligence', standard: 'Annual survey — 8 months old' },
                  { label: 'Employer brand assessment', corponizers: 'External market perception audit', standard: 'Internal self-assessment' },
                  { label: 'TA process evaluation', corponizers: 'Independent structured audit', standard: 'Consultant framework overlay' },
                  { label: 'Recommendation basis', corponizers: 'Live Indian market data', standard: 'Generic consulting models' },
                  { label: 'Outcome measurement', corponizers: '60/90-day impact review', standard: 'Report delivery only' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Generic HR Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['All Sectors', 'IT & Product Companies', 'Manufacturing', 'BFSI', 'Healthcare', 'FMCG', 'Logistics', 'Infrastructure']}
          headline="Advisory Engagement Coverage"
          note="Recruitment advisory is a horizontal practice delivered across all industries. The most common engagement triggers are rapid growth phases, post-merger integration, and employer brand challenges."
        />

        <FAQSection
          title="Recruitment Advisory — Frequently Asked Questions"
          description="Common questions from CHROs and Talent Acquisition Leaders evaluating an advisory engagement."
          items={[
            { question: 'What is the difference between this and just using a recruitment agency?', answer: 'A recruitment agency fills specific roles. Recruitment advisory evaluates and improves how your organisation fills all roles — the process, the tools, the brand, and the compensation structures. The two are complementary: advisory improves the foundation, active recruitment builds on it. They can run concurrently.' },
            { question: 'What does a TA maturity audit measure?', answer: 'The TA maturity audit assesses five dimensions: sourcing strategy and channel effectiveness, recruiter workflow and role clarity, ATS utilisation and configuration quality, candidate experience from application to offer, and hiring metrics tracking and reporting maturity. Output is a scored assessment with prioritised recommendations.' },
            { question: 'How current is the compensation benchmarking data?', answer: "Compensation benchmarks are drawn from live sourcing and active offer negotiations happening in parallel with your advisory engagement — not from annual published surveys. For rapidly moving talent markets like technology, this currency advantage is significant. Benchmarks are role, level, and geography specific." },
            { question: 'How long does an advisory engagement typically take?', answer: 'A focused TA maturity audit with recommendations completes in 3–4 weeks. A full advisory engagement covering audit, employer brand diagnostics, compensation benchmarking, and process blueprint typically runs 8–12 weeks. Implementation advisory is scoped based on the breadth of recommendations being applied.' },
            { question: 'Can advisory help with ATS selection or HR technology decisions?', answer: 'Yes. As part of TA process advisory, Corponizers provides guidance on ATS evaluation criteria, configuration gaps in current systems, and technology stack optimisation — including unbiased assessment of available platforms. We do not partner with ATS vendors, so recommendations are independent.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Recruitment Advisory"
          headline="Request a TA Maturity Review"
          subtext="An Advisory Lead will respond within 2 business hours to discuss your current TA challenges."
          ctaLabel="Request Advisory Engagement"
          serviceFields={[
            { id: 'primaryChallenge', label: 'Primary TA Challenge', type: 'select', required: true, options: ['High time-to-fill', 'Poor candidate quality', 'Offer acceptance declining', 'High early attrition', 'Employer brand unclear', 'Compensation not competitive', 'TA function scaling challenges', 'Post-merger TA integration'] },
            { id: 'orgSize', label: 'Organisation Size', type: 'select', required: true, options: ['100–500 employees', '500–2,000 employees', '2,000–10,000 employees', '10,000+ employees'] },
            { id: 'hrTeamSize', label: 'Internal HR / TA Team Size', type: 'select', options: ['1–5 people', '6–15 people', '16–30 people', '30+ people'] },
            { id: 'atsSystem', label: 'Current ATS / HRMS (if any)', type: 'text', placeholder: 'e.g. Darwinbox, Keka, SAP SuccessFactors, None' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
