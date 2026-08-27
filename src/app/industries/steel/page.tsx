import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ChallengeStatement } from '@/components/shared/ChallengeStatement';
import { IndustryRoleMap } from '@/components/shared/IndustryRoleMap';
import { SectorInsightCards } from '@/components/shared/SectorInsightCards';
import { ProcessSteps } from '@/components/shared/ProcessSteps';
import { SolutionCTABanner } from '@/components/shared/SolutionCTABanner';
import { SolutionCrossLinks } from '@/components/shared/SolutionCrossLinks';
import { FAQSection } from '@/components/shared/FAQSection';
import { SolutionEnquiryForm } from '@/components/shared/SolutionEnquiryForm';
import { ContactStrip } from '@/components/shared/ContactStrip';

import { Search, ClipboardCheck, ShieldCheck, Map, FileCheck, Users } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Steel & Metallurgy Recruitment India | Corponizers',
  description: 'Executive search and permanent hiring for plant directors, metallurgy engineers, and safety leaders across India\'s steel and heavy industry sector. Sector-specialist talent acquisition.',
});

export default function SteelIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Steel & Heavy Industry Practice"
          title="Steel & Metallurgy Recruitment"
          description="Placing plant directors, process metallurgists, safety leaders, and rolling mill engineers across India's integrated steel plants, mini-mills, and metallurgy technology providers."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Steel & Metallurgy' },
          ]}
          variant="brand"
          ctaText="Discuss a Steel Hiring Mandate"
          ctaHref="/contact?type=steel"
          imageSrc="/images/industries/steel.webp"
          imageAlt="Steel and metallurgy recruitment strategy discussion"
        />

        <ChallengeStatement
          eyebrow="THE STEEL HIRING CHALLENGE"
          headline="Why Metallurgy Talent Is Among India's Most Difficult to Source"
          positioning="The senior talent pool for BF, EAF, and rolling mill leadership in India is concentrated, experienced, and rarely looking to move. These professionals have spent careers building deep plant-floor expertise — and they do not respond to generic outreach from recruiters who cannot speak their language. Corponizers' Steel practice is built on sector fluency, plant-level network relationships, and a candidate approach that demonstrates technical credibility before asking for a conversation."
          differentiator="We speak metallurgy before we talk recruitment — that is why senior engineers take our calls."
          challenges={[
            {
              title: 'The senior metallurgy talent pool is geographically concentrated and limited',
              description: 'Experienced BF, EAF, and process metallurgy leaders are concentrated in Jharkhand, Odisha, and Chhattisgarh. The pool is finite, inter-company movement is visible, and the best professionals are rarely openly looking.',
            },
            {
              title: 'Safety-critical roles require verified compliance backgrounds',
              description: 'Plant safety leadership roles cannot be filled on CV quality alone. Background verification of safety compliance records, incident history, and regulatory standing is essential — and most recruitment firms do not have the process to do it.',
            },
            {
              title: 'Industry 4.0 transformation is creating hybrid leadership requirements',
              description: 'Steel plants investing in automation, digital twins, and predictive maintenance need leaders who can operate at the intersection of metallurgy expertise and technology integration — a rare combination that conventional job boards do not surface.',
            },
          ]}
        />

        <IndustryRoleMap
          badge="STEEL ROLE TAXONOMY"
          headline="Roles We Place Across the Steel Value Chain"
          description="Executive to specialist sourcing across integrated plants, mini-mills, EPC providers, and metallurgy technology companies."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'Plant Director / CEO', function: 'Integrated plant P&L and operations' },
                { title: 'VP Manufacturing', function: 'Production strategy and capacity' },
                { title: 'Chief Safety Officer', function: 'HSE compliance and governance' },
                { title: 'VP Projects (EPC)', function: 'Capital project delivery' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'General Manager — Blast Furnace', function: 'BF operations and throughput' },
                { title: 'GM — Rolling Mills', function: 'Hot / cold rolling operations' },
                { title: 'Head — Quality & Metallurgy', function: 'Process quality and standards' },
                { title: 'Maintenance Manager', function: 'Plant reliability and uptime' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'Process Metallurgist', function: 'BF / EAF / DRI process engineering' },
                { title: 'Automation Engineer', function: 'SCADA, PLC, digital controls' },
                { title: 'Environment & ESG Manager', function: 'Regulatory compliance and ESG' },
                { title: 'R&D Metallurgist', function: 'Alloy development and testing' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Steel"
          cards={[
            {
              headline: 'Senior metallurgy talent is concentrated in three states',
              body: "The majority of India's senior BF and EAF process engineers are employed by integrated plants in Jharkhand, Odisha, and Chhattisgarh. Attracting them requires a compelling business case, a credible approach, and compensation benchmarks built on current inter-company movement data — not published surveys.",
            },
            {
              headline: 'Industry 4.0 adoption is reshaping the leadership profile',
              body: 'Steel organisations transitioning to digital monitoring, predictive maintenance, and automated quality control need operations leaders who combine floor-level metallurgy expertise with comfort in technology-led process management. This hybrid profile is in short supply across the industry.',
            },
            {
              headline: 'Safety-critical roles carry elevated compliance risk in hiring',
              body: 'Plant safety leadership hires require documented verification of safety compliance records, incident history, and regulatory standing — not just CV review. This is a pre-placement requirement, not a post-offer formality, and it materially changes the hiring process.',
            },
          ]}
        />

        <ProcessSteps
          badge="STEEL HIRING PROCESS"
          headline="How Corponizers Delivers Steel Sector Mandates"
          description="A 6-stage process structured around the specific compliance, confidentiality, and technical requirements of steel industry hiring."
          steps={[
            { step: 1, title: 'Plant & Role Context Briefing', description: 'Deep-dive with the hiring manager covering plant configuration, production targets, team structure, and the technical requirements of the role in operational context.', iconNode: <Map className="w-5 h-5" /> },
            { step: 2, title: 'Steel Sector Market Mapping', description: 'Systematic identification of target professionals across integrated plants, mini-mills, and EPC companies — including professionals not visible on any job board.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Technical & Safety Background Screening', description: 'Pre-placement screening covering metallurgy domain competency, safety compliance record, and regulatory standing — completed before any candidate is presented.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 4, title: 'Psychometric & Leadership Assessment', description: "Assessment of leadership style, team management approach, and adaptability to the organisation's operational culture and transformation agenda.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Presentation', description: 'A 3–5 candidate shortlist with technical assessment summaries, safety background findings, and compensation benchmarks — presented within the agreed delivery timeline.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Onboarding Support', description: 'Compensation negotiation, relocation coordination where applicable, and 30-day post-joining follow-up to confirm integration is on track.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Steel or Metallurgy Role?"
          subtext="A Steel Practice Lead will respond within 2 business hours to discuss your mandate — including roles that require safety compliance verification and confidential outreach."
          ctaText="Discuss a Steel Hiring Mandate"
          ctaHref="/contact?type=steel"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=steel"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Steel Organisations"
          links={[
            { label: 'Executive Search', description: 'C-Suite and VP mandate delivery for plant leadership and board directors.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: '4-layer verified placement for mid-senior metallurgy and operations professionals.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Contract Staffing', description: 'Pre-vetted specialist contractors for EPC projects and interim plant management.', href: '/solutions/contract-staffing', iconNode: <ClipboardCheck className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Steel Sector Recruitment — Frequently Asked Questions"
          description="Common questions from HR Directors and Plant Heads before engaging a steel industry recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit for both integrated steel plants and mini-mills?', answer: 'Yes. Corponizers recruits across the full steel production spectrum — integrated blast furnace and BOF plants, EAF-based mini-mills, sponge iron and DRI producers, rolling mill operations, and downstream specialty steel manufacturers.' },
            { question: 'How does Corponizers handle safety-critical role hiring?', answer: 'For plant safety leadership roles, Corponizers conducts a pre-placement safety background review — covering documented incident history, safety compliance certifications, and regulatory standing. This is completed before the candidate is presented to the client, not after offer acceptance.' },
            { question: 'Can Corponizers source metallurgy professionals outside the major steel clusters?', answer: 'Yes. While the largest networks are in Jharkhand, Odisha, and Chhattisgarh, Corponizers maintains connections with steel professionals in Gujarat, Karnataka, Andhra Pradesh, and Tamil Nadu — including those working in international steel operations and considering India-based roles.' },
            { question: 'What is the typical timeline for a senior steel leadership mandate?', answer: 'A verified shortlist for a VP or GM-level steel mandate is typically delivered within 14–18 business days of mandate confirmation. Plant Director and C-Suite mandates follow the Executive Search process with a 14-business-day shortlist target from mandate signing.' },
            { question: 'Can Corponizers recruit for Industry 4.0 and automation roles in steel?', answer: 'Yes. Corponizers specifically sources for hybrid roles at the intersection of metallurgy expertise and automation capability — covering SCADA integration managers, digital manufacturing leads, predictive maintenance engineers, and digital transformation project heads within steel organisations.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Steel & Metallurgy Recruitment"
          headline="Submit a Steel Sector Hiring Mandate"
          subtext="A Steel Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Steel Mandate"
          serviceFields={[
            { id: 'plantType', label: 'Plant / Organisation Type', type: 'select', required: true, options: ['Integrated Steel Plant (BF/BOF)', 'EAF Mini-Mill', 'DRI / Sponge Iron', 'Rolling Mill', 'Specialty Steel', 'Steel EPC Company', 'Other'] },
            { id: 'roleLevel', label: 'Role Level', type: 'select', required: true, options: ['C-Suite / Plant Director', 'VP / Senior VP', 'General Manager', 'Manager / Senior Engineer', 'Specialist / Individual Contributor'] },
            { id: 'safetyRole', label: 'Is this a safety-critical role?', type: 'select', options: ['Yes — safety compliance verification required', 'No', 'Partially'] },
            { id: 'location', label: 'Plant / Work Location', type: 'text', placeholder: 'e.g. Jharkhand, Odisha, Chhattisgarh' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
