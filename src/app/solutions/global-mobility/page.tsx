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
import { GlobalMobilityIllustration } from '@/components/solutions/SolutionIllustrations';
import {
  Globe2, FileCheck, ShieldCheck, Map, Users, Plane,
  Building2, ClipboardCheck, Handshake, Zap,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Global Mobility & Cross-Border Talent | Corponizers',
  description:
    'Cross-border talent acquisition for GCC placements, NRI return mandates, APAC builds, and multinationals hiring in India. Visa support, EOR coordination, and relocation management handled.',
});

export default function GlobalMobilityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Cross-Border Talent Practice"
          title="Global Mobility & Cross-Border Recruitment"
          description="Placing talent across borders — from India to GCC, APAC to global headquarters — with full compliance support, EOR coordination, and relocation advisory for each mandate."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Global Mobility' },
          ]}
          variant="brand"
          ctaText="Discuss a Cross-Border Hire"
          ctaHref="/contact?type=global-mobility"
        >
          <GlobalMobilityIllustration />
        </PageHero>

        <ChallengeStatement
          eyebrow="THE CROSS-BORDER HIRING CHALLENGE"
          headline="Why Global Talent Moves Are Complex"
          positioning="Cross-border recruitment is not simply recruitment with a flight involved. It requires simultaneous management of immigration compliance, employment law across jurisdictions, candidate relocation psychology, compensation normalization across currencies, and EOR or entity establishment decisions. Corponizers' Global Mobility practice is built to manage this complexity — so your leadership team can focus on the business case, not the administrative burden."
          differentiator="We navigate the compliance, immigration, and relocation complexity — you focus on the hire."
          challenges={[
            {
              title: 'Cross-border compliance is a legal and financial risk',
              description: 'Employment law, immigration requirements, tax treaties, and EOR obligations differ significantly across India, GCC, APAC, and Europe. Mismanagement creates material legal and financial exposure for the hiring organization.',
            },
            {
              title: 'The talent pool for cross-border roles is poorly mapped',
              description: 'Indian diaspora professionals open to returning, GCC-resident talent available for India mandates, and globally mobile senior professionals are all underserved by domestic recruitment channels.',
            },
            {
              title: 'Relocation failures are expensive and preventable',
              description: 'A significant proportion of international placements fail within 12 months due to relocation challenges, family integration difficulties, and misaligned expectations — not professional performance.',
            },
          ]}
        />

        <ProcessSteps
          headline="The Cross-Border Placement Process"
          description="Six integrated stages from mandate assessment to post-placement integration — managing talent, compliance, and relocation simultaneously."
          badge="GLOBAL MOBILITY PROCESS"
          steps={[
            { step: 1, title: 'Cross-Border Mandate Assessment', description: 'Evaluating the source and destination market, candidate profile requirements, visa eligibility, and employment structure — before any sourcing begins.', iconNode: <Map className="w-5 h-5" /> },
            { step: 2, title: 'Diaspora & Passive Global Sourcing', description: 'Targeted outreach to Indian diaspora professionals, globally mobile senior candidates, and professionals in GCC, APAC, and European markets relevant to the mandate.', iconNode: <Globe2 className="w-5 h-5" /> },
            { step: 3, title: 'Compliance & Visa Pathway Review', description: 'Pre-placement assessment of visa categories, employment authorization pathways, and EOR vs direct employment decisions — with expert advisory where required.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 4, title: 'Candidate Readiness Assessment', description: 'Cross-border candidate profiling covering relocation readiness, family situation, financial expectations, and cultural adaptation requirements — before any client introduction.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Offer Structuring & Relocation Advisory', description: 'Compensation normalization across currencies, relocation package structuring, and pre-joining advisory to set realistic expectations for the transition.', iconNode: <Handshake className="w-5 h-5" /> },
            { step: 6, title: 'Post-Placement Integration Support', description: '90-day post-placement check-in covering candidate integration, accommodation settlement, and early-stage performance indicators — reducing relocation failure risk.', iconNode: <Building2 className="w-5 h-5" /> },
          ]}
        />

        <SolutionBenefits
          headline="What Your Organisation Receives"
          description="Cross-border talent acquisition with the compliance, relocation, and integration expertise that domestic firms cannot provide."
          badge="GLOBAL MOBILITY OUTCOMES"
          benefits={[
            { title: 'India-GCC Corridor Specialisation', description: 'Deep sourcing networks for India-to-GCC placements and GCC-to-India leadership mandates — the highest-volume cross-border movement in our target markets.', iconNode: <Plane className="w-5 h-5" /> },
            { title: 'NRI Return Mandate Capability', description: 'Structured engagement of Indian diaspora professionals considering senior leadership roles in India — a valuable, underserved talent pool for Indian enterprise organizations.', iconNode: <Globe2 className="w-5 h-5" /> },
            { title: 'EOR & Compliance Advisory', description: 'Guidance on Employer of Record (EOR) options, employment structure decisions, and jurisdiction-specific compliance requirements — included in each cross-border mandate.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { title: 'Relocation Risk Management', description: 'Candidate relocation readiness assessment, family situation review, and post-joining integration support to materially reduce the risk of early placement attrition.', iconNode: <Building2 className="w-5 h-5" /> },
            { title: 'Compensation Cross-Border Normalization', description: 'Currency adjustment, cost-of-living benchmarking, and tax implications advisory to structure competitive, legally compliant offers across geographies.', iconNode: <FileCheck className="w-5 h-5" /> },
            { title: 'GCC, APAC & European Mandate Support', description: 'Active practice coverage across Saudi Arabia, UAE, Singapore, Malaysia, UK, and European markets for Indian organizations with global hiring requirements.', iconNode: <Map className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Planning a Cross-Border Leadership Move?"
          subtext="Speak with a Global Mobility Practice Lead about the source market, destination compliance requirements, and your target candidate profile."
          ctaText="Discuss a Cross-Border Hire"
          ctaHref="/contact?type=global-mobility"
          secondaryText="Submit a Global Mandate"
          secondaryHref="/contact?type=global-mobility"
        />

        {/* Partnership framing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-corponizers-blue uppercase tracking-widest">Why Global Mobility Fails</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  The Hidden Costs of Getting It Wrong
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Cross-border placements that fail in the first 12 months are almost always traced back to the same root causes: inadequate relocation readiness assessment, compliance gaps identified post-placement, and compensation structures that did not account for cross-border realities.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Corponizers&apos; Global Mobility practice integrates compliance review and relocation readiness assessment into the mandate process — before any offer is made — to significantly reduce the risk and cost of cross-border placement failure.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Diaspora talent network', corponizers: 'Active NRI outreach program', standard: 'Limited to domestic channels' },
                  { label: 'Compliance advisory', corponizers: 'EOR & visa pathway review', standard: 'Referred externally' },
                  { label: 'Relocation readiness', corponizers: 'Pre-placement assessment', standard: 'Not assessed' },
                  { label: 'Currency normalization', corponizers: 'Included in offer advisory', standard: 'Client managed independently' },
                  { label: 'Post-placement integration', corponizers: '90-day check-in program', standard: 'Not provided' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <span className="font-bold text-slate-700">{row.label}</span>
                    <span className="text-brand-blue-dark font-bold">{row.corponizers}</span>
                    <span className="text-slate-400">{row.standard}</span>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-3 px-3 text-[10px] font-black text-slate-400 uppercase tracking-wide">
                  <span /><span className="text-corponizers-blue">Corponizers</span><span>Standard Recruiter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SolutionIndustries
          industries={['GCC Enterprises', 'Indian IT & Consulting', 'Multinationals (India HQ)', 'Healthcare & Pharma', 'Aviation & Logistics', 'BFSI', 'Engineering & EPC']}
          headline="Global Mobility Practice Sectors"
          note="Highest mandate volume in GCC-India corridor placements, NRI executive returns, and multinational India-entry leadership builds."
        />

        <FAQSection
          title="Global Mobility — Questions from International Hiring Leaders"
          description="Common questions from HR Directors and boards managing cross-border talent acquisition."
          items={[
            { question: 'What geographies does Corponizers cover for cross-border placements?', answer: 'Primary coverage includes the India-GCC corridor (UAE, Saudi Arabia, Qatar, Bahrain, Oman), APAC markets (Singapore, Malaysia, Australia), and European markets including UK and Germany. India-bound placements from all geographies are supported.' },
            { question: 'How does Corponizers handle visa and immigration support?', answer: 'Corponizers provides pre-placement visa pathway assessment and compliance advisory. For specific jurisdictions, we coordinate with approved immigration legal partners. We do not file immigration documents directly but ensure all compliance pathways are mapped before an offer is extended.' },
            { question: 'What is the NRI return mandate program?', answer: 'The NRI return mandate is a dedicated sourcing initiative targeting Indian diaspora professionals in GCC, UK, US, and APAC markets who are considering or actively evaluating senior leadership roles in India. This is a passive-talent-first program operated through professional network outreach and community presence.' },
            { question: 'Can Corponizers manage the full relocation process for placed candidates?', answer: 'Corponizers manages relocation advisory — covering accommodation identification, schooling research, cost-of-living guidance, and pre-joining orientation for candidates and their families. Physical relocation execution (moving companies, lease management) is coordinated alongside approved vendor partners.' },
            { question: 'What is an EOR and when should an organization use one?', answer: 'An Employer of Record (EOR) is a legal structure where a third party employs the candidate in the destination country on behalf of your organization — removing the need for entity establishment. Corponizers provides EOR assessment guidance for cross-border mandates where a full subsidiary is not operationally justified.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Global Mobility"
          headline="Discuss a Cross-Border Hiring Requirement"
          subtext="A Global Mobility Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Global Mandate"
          serviceFields={[
            { id: 'sourceLocation', label: 'Candidate Source Location', type: 'text', required: true, placeholder: 'e.g. UAE, UK, Singapore, India' },
            { id: 'destinationLocation', label: 'Destination / Work Location', type: 'text', required: true, placeholder: 'e.g. Mumbai, Riyadh, Bengaluru' },
            { id: 'visaCategory', label: 'Visa / Employment Type', type: 'select', options: ['Work Visa Required', 'Permanent Residency / PR', 'Intra-Company Transfer', 'EOR Arrangement', 'NRI Return (OCI/PIO)', 'Not Yet Assessed'] },
            { id: 'timeline', label: 'Expected Start Date', type: 'text', placeholder: 'e.g. Q3 2026, Within 90 days' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
