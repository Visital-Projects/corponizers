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
  title: 'Mining & Natural Resources Recruitment India | Corponizers',
  description: 'Executive search and specialist hiring for mine managers, geology leads, HSE directors, and ESG managers across India\'s mining and natural resources sector.',
});

export default function MiningIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Mining & Natural Resources Practice"
          title="Mining & Natural Resources Recruitment"
          description="Placing mine managers, geological specialists, HSE directors, and ESG leaders across India's coal, iron ore, bauxite, and limestone mining operations — from open-cast sites to underground mines."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Mining & Natural Resources' },
          ]}
          variant="brand"
          ctaText="Discuss a Mining Hiring Mandate"
          ctaHref="/contact?type=mining"
          imageSrc="/images/industries/mining.webp"
          imageAlt="Mining and natural resources executive recruitment discussion"
        />

        <ChallengeStatement
          eyebrow="THE MINING HIRING CHALLENGE"
          headline="When the Talent Is as Difficult to Extract as the Ore"
          positioning="Mining leadership roles present a unique set of hiring constraints: remote site locations, elevated safety and compliance requirements, a finite senior talent pool concentrated in India's mineral belt, and growing ESG-linked mandates that require a fundamentally different leadership profile than a decade ago. Corponizers' Mining practice combines deep sector network relationships with a structured approach that addresses all of these constraints before a shortlist is presented."
          differentiator="We understand site conditions, safety compliance, and ESG requirements — not just job titles."
          challenges={[
            {
              title: 'Remote site locations dramatically reduce candidate willingness to relocate',
              description: "The most qualified mining professionals often have family roots in major metros or existing roles in accessible locations. Convincing a senior geologist or mine manager to commit to a remote Odisha or Jharkhand site requires more than a competitive salary — it requires a credible relocation case built before the first conversation.",
            },
            {
              title: 'HSE compliance history is non-negotiable but rarely verified pre-hire',
              description: 'Safety incidents, regulatory violations, and compliance gaps in a candidate\'s history are rarely surfaced by CV review or standard interviews. For mine manager and HSE director roles specifically, these are disqualifying factors that must be identified before the client introduction, not after.',
            },
            {
              title: 'ESG mandates are creating new leadership requirements that the existing talent pool does not fully meet',
              description: 'Mining companies under SEBI ESG disclosure requirements and investor ESG commitments need leaders who can manage environmental compliance, community relations, and sustainability reporting alongside operational targets. This combination is genuinely scarce in the current talent market.',
            },
          ]}
        />

        <IndustryRoleMap
          badge="MINING ROLE TAXONOMY"
          headline="Roles We Place Across Mining Operations"
          description="Executive to specialist sourcing across coal, metals, industrial minerals, and mining services companies."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'Mine Director / CEO', function: 'Full mine P&L and operations governance' },
                { title: 'VP Operations', function: 'Multi-site production and safety oversight' },
                { title: 'Chief HSE Officer', function: 'Safety, health, and environmental governance' },
                { title: 'VP ESG & Sustainability', function: 'ESG strategy, disclosure, and compliance' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'Mine Manager (OC / UG)', function: 'Open-cast or underground operations' },
                { title: 'Head — Geology & Exploration', function: 'Resource estimation and site surveys' },
                { title: 'GM — Mineral Processing', function: 'Crushing, beneficiation, and recovery' },
                { title: 'Environment Manager', function: 'EIA compliance and mine closure' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'Senior Geologist', function: 'Core logging, sampling, and ore body modelling' },
                { title: 'Explosives / Blasting Engineer', function: 'Drill and blast optimization' },
                { title: 'Mine Planning Engineer', function: 'Pit shell, schedules, and resource planning' },
                { title: 'Community Relations Manager', function: 'CSR, land acquisition, and stakeholder engagement' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Mining"
          cards={[
            {
              headline: "India's senior mining talent is concentrated in the mineral belt — but not immovable",
              body: "The majority of experienced mine managers and geology specialists are based in or near Odisha, Jharkhand, Chhattisgarh, and Rajasthan. While site location presents a relocation challenge, structured relocation packages and long-term career positioning can move this talent effectively when the business case is compelling.",
            },
            {
              headline: 'ESG compliance is reshaping the mine leadership profile',
              body: 'Under SEBI Business Responsibility and Sustainability Reporting (BRSR) requirements, listed mining companies need leaders who can simultaneously deliver production targets and manage environmental and community reporting obligations. The operational-ESG hybrid profile is in short supply and rising demand.',
            },
            {
              headline: "Underground mining leadership is a specialist pool within a specialist pool",
              body: "Experienced underground mine managers — particularly for hard rock metalliferous mining — represent one of the most constrained talent categories in Indian mining. Cross-border sourcing from experienced Indian diaspora professionals in African and Australian underground operations is increasingly relevant for senior underground roles.",
            },
          ]}
        />

        <ProcessSteps
          badge="MINING HIRING PROCESS"
          headline="How Corponizers Delivers Mining Sector Mandates"
          description="A 6-stage process built around the safety, compliance, and relocation requirements unique to mining industry hiring."
          steps={[
            { step: 1, title: 'Site & Operational Context Briefing', description: 'Understanding mine type (OC / UG / mineral processing), production targets, site remoteness, existing team structure, and the specific safety or ESG challenge the hire must address.', iconNode: <Map className="w-5 h-5" /> },
            { step: 2, title: 'Mineral Belt Network Outreach', description: 'Targeted outreach to mining professionals in the relevant mineral belt — including passive candidates at competitor operations and diaspora professionals in overseas mining roles.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'HSE Background & Compliance Review', description: 'Pre-placement review of safety incident history, regulatory compliance record, and DGMS/statutory licensing status for operations and HSE leadership roles.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 4, title: 'Relocation Readiness Assessment', description: "Structured assessment of candidate's relocation willingness — covering family situation, expectations, and practical support requirements — before any client introduction.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Presentation', description: 'A 3–5 candidate shortlist with HSE background findings, relocation readiness assessment, and compensation benchmarks — delivered within the agreed mandate timeline.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer, Relocation Package Advisory & Onboarding', description: 'Relocation package structuring, offer negotiation, and post-joining 90-day check-in to confirm site integration is on track.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Mining or Mineral Resources Role?"
          subtext="A Mining Practice Lead will respond within 2 business hours — including mandates requiring HSE background review and remote site relocation advisory."
          ctaText="Discuss a Mining Mandate"
          ctaHref="/contact?type=mining"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=mining"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Mining Organisations"
          links={[
            { label: 'Executive Search', description: 'Mine Director and VP-level mandate with HSE compliance review.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: '4-layer verified placement for GM and specialist roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Contract Staffing', description: 'Pre-vetted engineers and specialists for project phases.', href: '/solutions/contract-staffing', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Global Mobility', description: 'Cross-border mining professionals and diaspora returns.', href: '/solutions/global-mobility', iconNode: <Map className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Mining Sector Recruitment — Frequently Asked Questions"
          description="Common questions from Mine Directors and HR heads before engaging a mining recruitment mandate."
          items={[
            { question: 'What types of mining operations does Corponizers recruit for?', answer: 'Corponizers recruits across coal mining, iron ore, bauxite, limestone, copper, and manganese operations — covering open-cast, underground, and mineral processing facilities. Mining services companies and EPC contractors working in the mining sector are also covered.' },
            { question: 'How does Corponizers handle HSE background verification for mine manager roles?', answer: 'For mine manager, HSE director, and safety-critical roles, Corponizers conducts a structured pre-placement HSE background review — covering documented incident history, DGMS compliance records, statutory certifications, and regulatory standing. This is completed before the candidate is presented to the client, not after offer acceptance.' },
            { question: 'Can Corponizers source mining professionals for remote site locations?', answer: 'Yes. Remote site sourcing requires a fundamentally different candidate approach — covering relocation package advisory, candidate readiness assessment, family situation evaluation, and a compelling site introduction narrative. Corponizers applies this approach as standard for any mining mandate where the worksite is in a remote or semi-urban location.' },
            { question: 'Can Corponizers recruit experienced mining professionals from international operations?', answer: 'Yes. For senior roles where the domestic talent pool is constrained — particularly underground mine management and specialist geology — Corponizers sources Indian mining professionals working in African, Australian, and Middle Eastern operations who are evaluating return to India.' },
            { question: 'How are ESG and sustainability roles within mining organisations handled?', answer: 'ESG and sustainability roles in mining are treated as specialist mandates requiring assessment of both environmental compliance expertise and stakeholder management capability — not generic sustainability CV matching. This includes BRSR reporting capability, EIA management experience, and community relations program leadership.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Mining & Natural Resources Recruitment"
          headline="Submit a Mining Sector Mandate"
          subtext="A Mining Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Mining Mandate"
          serviceFields={[
            { id: 'mineType', label: 'Mine / Operation Type', type: 'select', required: true, options: ['Open-Cast Mining', 'Underground Mining', 'Mineral Processing', 'Coal Mining', 'Iron Ore / Metals', 'Industrial Minerals', 'Mining EPC / Services', 'Other'] },
            { id: 'roleLevel', label: 'Role Level', type: 'select', required: true, options: ['Mine Director / CEO', 'VP / Chief Officer', 'General Manager', 'Manager / Senior Engineer', 'Specialist / Geologist'] },
            { id: 'hseRequired', label: 'HSE Background Verification Required?', type: 'select', options: ['Yes — DGMS compliance review required', 'Yes — General safety record review', 'No'] },
            { id: 'siteLocation', label: 'Site Location (if remote)', type: 'text', placeholder: 'e.g. Odisha, Jharkhand, Rajasthan' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
