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
  Building2, BookOpen, ClipboardCheck, Award, FileText, Handshake,
  GraduationCap, Users, Target, Calendar, Zap, TrendingDown,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Campus & Early Career Hiring | Corponizers Enterprise',
  description:
    "Structured university partnership programs, hackathon-led assessments, and batch placement drives for India's top engineering and management institutions. Offer dropout management included.",
});

export default function CampusHiringPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Early Career Talent Pipeline"
          title="Campus & Early Career Hiring"
          description="Structured university partnership programs, hackathon-led talent identification, and managed placement drives — building your early career pipeline from India's top institutions with measurable offer retention."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Campus Hiring' },
          ]}
          variant="brand"
          ctaText="Schedule Campus Briefing"
          ctaHref="/contact?type=campus-hiring"
          imageSrc="/images/solutions/campus-hiring.webp"
          imageAlt="University recruitment drive"
        />

        <ChallengeStatement
          eyebrow="THE CAMPUS HIRING CHALLENGE"
          headline="Why Campus Hiring Fails Most Organisations"
          positioning="Campus hiring is one of the highest-effort, lowest-certainty recruitment activities in the HR calendar. Organizations arrive on campus, invest significant time in assessment and interviews, extend offers — and then watch 20–40% of those offers walk away before the joining date. Corponizers' Campus Hiring practice addresses the root causes: inadequate pre-placement engagement, poor assessment infrastructure, and the absence of a structured pre-joining program."
          differentiator="Offer acceptance is only halfway — we manage the full pipeline through to joining."
          challenges={[
            {
              title: 'Offer dropout rates during the joining gap are significant',
              description: 'The 3–9 months between offer acceptance and joining date is the highest-risk period in campus hiring. Without structured pre-joining engagement, competing offers, and changing life plans erode the accepted cohort.',
            },
            {
              title: 'Assessment infrastructure is inadequate for large-volume screening',
              description: 'A panel interview process designed for 5 candidates cannot scale to 300 applicants. Without structured assessment tools, campus hiring quality degrades as volume increases — precisely when it should improve.',
            },
            {
              title: 'Institution access requires sustained relationship investment',
              description: "Placement offices at India's top institutions prioritize organizations that maintain year-round presence — not companies that appear only during placement season. Without relationship investment, access quality deteriorates annually.",
            },
          ]}
        />

        <ProcessSteps
          headline="The Campus Hiring Process"
          description="Six structured stages from institution partnerships to batch onboarding — designed to fill seats and keep them filled."
          badge="CAMPUS PROCESS"
          steps={[
            { step: 1, title: 'University Partnership Setup', description: 'Activating or establishing relationships with career services departments at target institutions based on your talent profile, hiring volume, and geographic preferences.', iconNode: <Building2 className="w-5 h-5" /> },
            { step: 2, title: 'Pre-Placement Brand Engagement', description: 'Campus talks, industry sessions, and employer brand activations that build your organisation\'s presence as a preferred employer — before placement season begins.', iconNode: <BookOpen className="w-5 h-5" /> },
            { step: 3, title: 'Custom Assessment Design', description: 'Aptitude, technical, and psychometric assessment design aligned to your entry-level role requirements — built to scale from 50 to 5,000 applicants without quality compromise.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 4, title: 'Placement Drive or Hackathon', description: 'Structured on-campus placement drives or company-specific hackathons filtering large applicant pools to high-potential shortlists through structured, measurable criteria.', iconNode: <Award className="w-5 h-5" /> },
            { step: 5, title: 'Offer Management', description: 'Offer letter coordination, acceptance tracking, and early pre-joining communication that signals commitment to the selected cohort from day one of offer extension.', iconNode: <FileText className="w-5 h-5" /> },
            { step: 6, title: 'Pre-Joining Engagement & Batch Onboarding', description: 'Structured pre-joining touchpoints — team introductions, orientation content, and milestone communications — reducing dropout rates and enabling smoother batch onboarding.', iconNode: <Handshake className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Receives"
          description="A campus hiring infrastructure built to attract, assess, and retain early career talent — not just extend offers."
          badge="CAMPUS OUTCOMES"
          benefits={[
            { title: "Tier-1 Institution Access", description: "Structured access to placement offices at IITs, NITs, IIMs, and leading private universities — including institutions where prior year presence gives placement season priority.", iconNode: <GraduationCap className="w-5 h-5" /> },
            { title: 'High-Volume Assessment Capability', description: 'Assessment infrastructure capable of screening thousands of applicants down to shortlists without losing quality — covering aptitude, technical, and psychometric dimensions.', iconNode: <Users className="w-5 h-5" /> },
            { title: 'Hackathon-Led Identification', description: 'Company-specific hackathons that identify practical problem-solving ability beyond academic scores — and simultaneously build employer brand within engineering student communities.', iconNode: <Award className="w-5 h-5" /> },
            { title: 'Employer Brand at Campus Level', description: "Year-round campus engagement that positions your organisation as a destination employer — building a preference advantage before the competition arrives on campus.", iconNode: <Target className="w-5 h-5" /> },
            { title: 'Structured Pre-Joining Engagement', description: 'The pre-joining dropout problem is a known, solvable challenge. Corponizers\' pre-joining engagement program materially reduces attrition between offer acceptance and day one.', iconNode: <TrendingDown className="w-5 h-5" /> },
            { title: 'Placement Calendar Management', description: 'Multi-institution placement drive scheduling, institution liaison coordination, and timeline management across a full campus hiring season — managed externally, not internally.', iconNode: <Calendar className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Planning Your Next Campus Hiring Season?"
          subtext="Speak with a Campus Hiring Specialist about your intake targets, target institutions, and assessment requirements. Planning conversations are most productive 3–4 months before placement season."
          ctaText="Plan Your Campus Season"
          ctaHref="/contact?type=campus-hiring"
          secondaryText="Speak to a Campus Specialist"
          secondaryHref="/contact?type=campus-hiring"
        />

        {/* Partnership framing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">The Pre-Joining Gap Problem</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Winning Campus Hiring Twice — At Offer and at Joining
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Most organisations measure campus hiring success at offer acceptance. Corponizers measures it at day-one joining. The period between these two events — sometimes 6–9 months — is where campus hiring ROI is most frequently destroyed.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our pre-joining engagement program maintains structured contact with accepted candidates through orientation communications, team introductions, and milestone recognition — keeping your offer accepted in mind as the joining date approaches and competing offers arrive.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Institution access', corponizers: 'Structured year-round presence', standard: 'Placement season only' },
                  { label: 'Assessment infrastructure', corponizers: 'Custom-designed, scalable', standard: 'Panel interview at scale' },
                  { label: 'Hackathon capability', corponizers: 'Company-specific design', standard: 'Not a standard offering' },
                  { label: 'Offer dropout management', corponizers: 'Pre-joining engagement program', standard: 'No structured intervention' },
                  { label: 'Batch onboarding support', corponizers: 'Structured transition management', standard: 'Internal HR coordination only' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Internal Campus Hiring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['IT Services', 'Banking & Financial Services', 'Management Consulting', 'FMCG', 'Manufacturing', 'Pharmaceuticals', 'Infrastructure', 'Energy']}
          headline="Campus Hiring Sectors"
          note="Highest campus hiring volume in IT Services, BFSI, and FMCG — industries with structured graduate intake programs. Campus mandates active across engineering and management disciplines."
        />

        <FAQSection
          title="Campus Hiring — Frequently Asked Questions"
          description="Common questions from HR Directors and Campus Recruitment Managers before planning a placement season."
          items={[
            { question: 'When should we start planning a campus hiring season with Corponizers?', answer: 'Ideally 3–4 months before your target placement season begins. Early engagement allows time for institution outreach, pre-placement talk scheduling, and assessment design — all of which require lead time to execute well. Campaigns planned in advance consistently outperform reactive placement season participation.' },
            { question: 'Which institutions does Corponizers have campus placement relationships with?', answer: 'Institution partnerships are maintained across IITs, NITs, IIMs, and leading private engineering and management universities across India. Specific institution availability and priority access depend on prior year presence and engagement quality — discussed during the mandate planning brief.' },
            { question: 'Can Corponizers design and run a company-specific hackathon?', answer: 'Yes. Company-specific hackathons are designed around your technical challenges or case requirements, executed on-campus or virtually, and managed end-to-end — including candidate registration, problem statement design, evaluation rubric, judging coordination, and results communication.' },
            { question: 'How does the pre-joining engagement program reduce offer dropout?', answer: 'The pre-joining engagement program maintains structured contact with accepted candidates between offer acceptance and joining date — covering orientation content, team introductions, milestone recognition, and regular touchpoints. This creates a sense of connection with the organisation before day one arrives, materially reducing the effectiveness of competing offers received during the gap period.' },
            { question: 'What batch sizes can the campus program support?', answer: "Campus hiring engagements are designed to scale — from small cohorts of 10–25 graduates at specialist institutions to large-volume intakes of 200+ across multiple institutions. Assessment infrastructure is designed specifically to maintain quality across the full intake volume, not optimised for small batches only." },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Campus Hiring"
          headline="Plan Your Campus Hiring Season"
          subtext="A Campus Hiring Specialist will respond within 2 business hours to discuss your requirements."
          ctaLabel="Start Campus Hiring Planning"
          serviceFields={[
            { id: 'targetInstitutions', label: 'Target Institutions / Disciplines', type: 'text', required: true, placeholder: 'e.g. IIT, NIT, IIM, Private Engg Colleges' },
            { id: 'expectedIntake', label: 'Expected Campus Intake Size', type: 'select', required: true, options: ['10–25 graduates', '25–75 graduates', '75–200 graduates', '200+ graduates'] },
            { id: 'graduationYear', label: 'Target Graduation Year', type: 'select', options: ['2026 Batch', '2027 Batch', '2028 Batch', 'Multiple Years'] },
            { id: 'placementSeason', label: 'Placement Season Target', type: 'text', placeholder: 'e.g. Nov–Jan 2025, Aug–Oct 2026' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
