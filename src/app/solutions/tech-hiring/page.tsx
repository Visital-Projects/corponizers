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
  Code2, Map, ClipboardCheck, Users, ShieldCheck, Zap,
  Search, Globe2, BrainCircuit, Clock, GitBranch, Layers,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Technology & Engineering Talent Acquisition | Corponizers',
  description:
    'Specialist sourcing for software engineers, AI/ML researchers, cloud architects, and DevOps engineers across India\'s top technology hubs and globally. Niche technical assessment included.',
});

export default function TechHiringPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Specialized Technology Practice"
          title="Technology & Engineering Talent Acquisition"
          description="Niche sourcing for software engineers, AI/ML researchers, cloud architects, and platform engineers — with technical assessment built in and access to talent that does not apply to job boards."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Technology Hiring' },
          ]}
          variant="brand"
          ctaText="Build Your Engineering Team"
          ctaHref="/contact?type=tech-hiring"
          imageSrc="/images/solutions/technology-hiring.webp"
          imageAlt="Technical interview"
        />

        <ChallengeStatement
          eyebrow="THE TECHNOLOGY HIRING CHALLENGE"
          headline="Why Tech Talent Is the Hardest to Hire"
          positioning="Experienced software engineers, cloud architects, and AI/ML specialists are not on job boards — they are passive, well-compensated, and approached constantly. Generic recruiters cannot evaluate their profiles, craft compelling technical narratives, or access the communities where they actually exist. Corponizers' Technology Practice pairs deep technical market knowledge with structured sourcing and assessment that speaks the language of engineering."
          differentiator="Technical hiring requires technical credibility — we bring both to every mandate."
          challenges={[
            {
              title: 'Skill shortages are severe at senior and niche levels',
              description: 'AI/ML researchers, distributed systems architects, and senior full-stack engineers are a genuinely constrained talent pool. Standard sourcing channels surface only the 15% of candidates who are actively looking.',
            },
            {
              title: 'Generic recruiters cannot properly screen technology profiles',
              description: "Without technical domain knowledge, pre-screening is ineffective — wasting engineers' time with irrelevant interviews and damaging your employer brand in engineering communities.",
            },
            {
              title: 'Fast-moving projects cannot absorb long hiring cycles',
              description: 'A two-month hiring cycle for a critical platform role affects sprint velocity, product timelines, and team morale. Engineering teams need speed without compromising quality.',
            },
          ]}
        />

        <ProcessSteps
          headline="The Technology Hiring Process"
          description="A recruiter-plus-technical-assessment model designed for niche engineering and product roles."
          badge="TECH HIRING PROCESS"
          steps={[
            { step: 1, title: 'Technical Role Briefing', description: 'Deep-dive with your engineering lead or CTO on the stack, architecture context, team velocity, and the technical challenges the hire will solve.', iconNode: <Code2 className="w-5 h-5" /> },
            { step: 2, title: 'Targeted Community Sourcing', description: 'Passive talent outreach across GitHub, Stack Overflow, engineering communities, and niche professional networks — not just LinkedIn keyword searches.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Technical Pre-Screening', description: 'Domain-relevant technical screening conducted before any candidate is presented — covering stack knowledge, systems thinking, and architecture awareness.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 4, title: 'Culture & Velocity Alignment', description: 'Assessment of candidate adaptability to your team\'s development culture, sprint discipline, documentation practices, and code review expectations.', iconNode: <GitBranch className="w-5 h-5" /> },
            { step: 5, title: 'Shortlist Presentation', description: 'Vetted shortlist with technical assessment summaries, GitHub/portfolio links, and compensation calibration — enabling faster, higher-quality client interviews.', iconNode: <Layers className="w-5 h-5" /> },
            { step: 6, title: 'Offer & Onboarding Support', description: 'Compensation negotiation, competing offer advisory, and 30-day post-joining follow-up to confirm engineering team integration is on track.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Engineering Team Gains"
          description="Access to technical talent that generic recruiters cannot reach — with pre-screening that engineers respect."
          badge="TECH HIRING OUTCOMES"
          benefits={[
            { title: 'Niche & Emerging Tech Coverage', description: 'Active sourcing for AI/ML engineers, MLOps, cloud-native architects, blockchain developers, and emerging tech specialists — not just mainstream roles.', iconNode: <BrainCircuit className="w-5 h-5" /> },
            { title: 'Technical Assessment Pre-Screening', description: 'Domain-relevant pre-screening before candidate presentation eliminates unqualified CVs and reduces wasted engineering interview hours by a significant margin.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { title: "India Tech Hub Depth", description: "Deep networks across Bengaluru, Hyderabad, Pune, Chennai, and NCR's engineering talent communities with growing reach into Tier 2 tech cities.", iconNode: <Map className="w-5 h-5" /> },
            { title: 'Passive Talent Access', description: 'Sourcing from GitHub, open-source communities, and professional engineering networks where the best talent is active but not on job boards.', iconNode: <Search className="w-5 h-5" /> },
            { title: 'Speed Without Compromise', description: 'Vetted shortlists for senior individual contributor roles within 10–12 business days. Technical pre-screening ensures client interview time is never wasted.', iconNode: <Zap className="w-5 h-5" /> },
            { title: 'Cross-Border Engineering Capability', description: 'Support for GCC technology team builds, APAC product engineering roles, and Indian diaspora tech professionals considering senior roles in India.', iconNode: <Globe2 className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Building an Engineering Team or Filling a Critical Tech Role?"
          subtext="Share your technical requirement with a Technology Practice Lead. Shortlists for most senior engineering roles within 10 business days."
          ctaText="Build Your Engineering Team"
          ctaHref="/contact?type=tech-hiring"
          secondaryText="Discuss a Tech Mandate"
          secondaryHref="/contact?type=tech-hiring"
        />

        {/* Partnership framing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">Why Our Approach Works</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Technical Credibility First
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  The reason technology hiring fails through generic recruiters is not effort — it is credibility. Experienced engineers do not respond to templated outreach from people who cannot discuss their stack. Corponizers&apos; Technology Practice positions itself as a credible technical partner, not a placement intermediary.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our pre-screening process means your engineering team interviews candidates who have already been evaluated on technical fundamentals — a substantial reduction in wasted interview time and a material improvement in shortlist quality.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Passive talent access', corponizers: 'GitHub, community sourcing', standard: 'LinkedIn keyword search' },
                  { label: 'Technical pre-screening', corponizers: 'Domain-relevant assessment', standard: 'CV keyword matching' },
                  { label: 'Senior engineering shortlist', corponizers: '10–12 business days', standard: '3–6 weeks' },
                  { label: 'Niche tech coverage', corponizers: 'AI/ML, Cloud, DevOps, etc.', standard: 'Mainstream roles only' },
                  { label: 'Community knowledge', corponizers: 'Tech hub intelligence', standard: 'Generic market view' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Generic Recruiter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['Product & SaaS Companies', 'IT Services', 'Fintech', 'HealthTech', 'E-commerce', 'AI & Deep Tech', 'Gaming', 'Enterprise Software']}
          headline="Technology Practice Sectors"
          note="Highest tech hiring mandate volume in Product/SaaS, Fintech, and AI-focused organizations."
        />

        <FAQSection
          title="Technology Hiring — Frequently Asked Questions"
          description="Common questions from engineering leaders and CTOs about our technology talent acquisition practice."
          items={[
            { question: 'How does Corponizers screen candidates for technical roles?', answer: 'Technical pre-screening is conducted by specialists familiar with the relevant domain — covering programming language proficiency, systems architecture thinking, problem-solving approach, and relevant project experience. The pre-screening outcome is included in every candidate dossier presented to your engineering team.' },
            { question: 'Can Corponizers source for AI/ML and emerging technology roles?', answer: 'Yes. AI/ML engineers, MLOps specialists, LLM fine-tuning researchers, computer vision engineers, and data scientists are active sourcing categories within the Technology Practice. These are passive-talent-first mandates drawing from research communities and open-source contributor networks.' },
            { question: 'How do you reach engineers who are not actively looking for jobs?', answer: 'Passive engineering talent is reached through GitHub activity analysis, open-source contribution tracking, professional community engagement, peer referral activation, and direct outreach through channels engineers actually use — not generic job board postings.' },
            { question: 'Can you support hiring across multiple engineering locations simultaneously?', answer: 'Yes. Technology hiring mandates can be deployed across multiple Indian metro hubs simultaneously. Pan-India searches across Bengaluru, Hyderabad, Pune, Chennai, and NCR are a standard engagement type — not a premium add-on.' },
            { question: 'What experience levels does the Technology Practice cover?', answer: 'The Technology Practice covers the full seniority spectrum: from mid-level software engineers (3–6 years) to senior architects, principal engineers, tech leads, VP-Engineering, and CTO mandates. Junior bulk hiring for tech roles is typically handled under the RPO or Campus Hiring practice.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Technology Hiring"
          headline="Share Your Engineering Requirement"
          subtext="A Technology Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Tech Hiring Mandate"
          serviceFields={[
            { id: 'techStack', label: 'Technology Stack / Domain', type: 'text', required: true, placeholder: 'e.g. React, Python, AWS, AI/ML, DevOps' },
            { id: 'roleLevel', label: 'Experience Level Required', type: 'select', required: true, options: ['Mid-level (3–6 years)', 'Senior (6–10 years)', 'Staff / Principal Engineer', 'Engineering Manager / VP', 'CTO Level'] },
            { id: 'volume', label: 'Number of Positions', type: 'select', options: ['1–2 positions', '3–5 positions', '5–10 positions', '10+ positions (team build)'] },
            { id: 'location', label: 'Work Location / Remote Policy', type: 'text', placeholder: 'e.g. Bengaluru, Hybrid, Remote-First' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
