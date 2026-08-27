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

import { Search, ClipboardCheck, ShieldCheck, Map, FileCheck, Users, Zap } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Energy & Renewables Recruitment India | Corponizers',
  description: 'Executive search and specialist hiring for solar project directors, EPC heads, grid engineers, and HSE leaders across India\'s energy and clean technology sector.',
});

export default function EnergyIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Energy & Renewables Practice"
          title="Energy & Renewables Recruitment"
          description="Placing solar project directors, EPC heads, grid engineers, wind energy leads, and HSE specialists across India's renewable energy developers, traditional power companies, and clean technology organisations."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Energy & Renewables' },
          ]}
          variant="brand"
          ctaText="Hire for Energy & Renewables"
          ctaHref="/contact?type=energy"
          imageSrc="/images/industries/energy.webp"
          imageAlt="Energy and renewables executive recruitment infrastructure planning"
        />

        <ChallengeStatement
          eyebrow="THE ENERGY HIRING CHALLENGE"
          headline="When India's Renewable Energy Ambition Meets a Talent Reality"
          positioning="India's energy transition — from coal-heavy generation to a target of 500 GW renewable capacity — is one of the largest infrastructure programs in the world. The talent required to deliver it is not scaling at the same rate. Renewable energy project management, grid integration engineering, and HSE leadership for solar and wind assets require specific technical expertise that traditional power sector professionals do not automatically carry. Corponizers' Energy Practice bridges this transition — sourcing professionals who understand the grid, the project, and the regulatory environment simultaneously."
          differentiator="We understand EPC project cycles, CERC regulatory context, and the grid transition — not just energy job titles."
          challenges={[
            {
              title: 'Renewable energy skills in India are concentrated in project development — and scarce at commissioning scale',
              description: 'India has developed significant renewable energy project development expertise over the last decade. However, professionals who can manage the commissioning, O&M, and grid integration of large-scale solar and wind assets at GW-level — as opposed to MW-level — are materially fewer in number and not well-served by conventional energy sector hiring.',
            },
            {
              title: 'Grid transition requires engineers who understand both legacy infrastructure and new technology',
              description: "As India's power grid integrates increasing volumes of intermittent renewable generation, engineers who can work across traditional thermal and transmission infrastructure and new grid stability technologies — including energy storage, SCADA integration, and frequency response management — are in growing demand and short supply.",
            },
            {
              title: 'HSE-critical project roles in energy require verified safety compliance — not general HSE credentials',
              description: 'Renewable energy EPC projects and thermal power plants carry significant personnel safety risk. HSE leadership roles require verified electrical safety competency, height work certification, and specific EPC project safety management experience — qualifications that are not interchangeable with general industrial HSE credentials.',
            },
          ]}
        />

        <IndustryRoleMap
          badge="ENERGY ROLE TAXONOMY"
          headline="Roles We Place Across the Energy Sector"
          description="Project leadership to engineering and HSE specialist sourcing across renewables, traditional power, and clean technology organisations."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'CEO / MD (IPP / Developer)', function: 'Energy company P&L and business strategy' },
                { title: 'VP Projects', function: 'Capital project portfolio — Solar / Wind / Hybrid' },
                { title: 'Chief HSE Officer', function: 'Site safety governance across EPC and O&M' },
                { title: 'VP Regulatory & Grid Affairs', function: 'CERC / SERC licensing and grid compliance' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'Project Director (Solar EPC)', function: 'Utility-scale solar project delivery' },
                { title: 'Head — O&M (Solar / Wind)', function: 'Asset performance and maintenance' },
                { title: 'Grid Integration Manager', function: 'Interconnection, SCADA, and grid compliance' },
                { title: 'Environment & ESG Manager', function: 'EIA compliance and sustainability reporting' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'Solar / Wind Engineer', function: 'Design, commissioning, and yield assessment' },
                { title: 'Energy Storage Engineer', function: 'BESS design and integration' },
                { title: 'Electrical Site Engineer (EPC)', function: 'HV/MV site installation and testing' },
                { title: 'HSE / EHS Specialist', function: 'Permit-to-work and incident management' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in India's Energy Transition"
          cards={[
            {
              headline: "GW-scale renewable project management requires experience that MW-scale project delivery does not automatically produce",
              body: "India's 500 GW renewable target requires project directors who have managed the complexity of GW-scale asset development — multi-site coordination, grid evacuation planning, statutory approval management, and EPC contractor governance at scale. Professionals with MW-scale project experience are not automatically ready for this step change, and sourcing needs to account for this distinction.",
            },
            {
              headline: "Energy storage and hybrid project expertise is the most constrained skill set in Indian energy",
              body: "Battery Energy Storage System (BESS) commissioning engineers, hybrid solar-wind project managers, and grid stability specialists are among the most under-supplied talent categories in India's energy market — reflecting the recency of large-scale BESS deployment in the country. Cross-border sourcing from Australian and European energy professionals with relevant BESS and hybrid project experience is increasingly relevant for senior roles.",
            },
          ]}
        />

        <ProcessSteps
          badge="ENERGY HIRING PROCESS"
          headline="How Corponizers Delivers Energy Sector Mandates"
          description="A 6-stage process structured around the project-critical, HSE-sensitive, and regulatory-specific demands of energy industry hiring."
          steps={[
            { step: 1, title: 'Project & Regulatory Context Briefing', description: "Understanding the energy asset type (solar / wind / thermal / hybrid / storage), project stage (development / EPC / O&M), CERC / SERC regulatory context, and the specific technical or leadership gap being addressed.", iconNode: <Zap className="w-5 h-5" /> },
            { step: 2, title: 'Energy Sector Network Sourcing', description: "Targeted outreach to energy professionals across IPPs, EPC companies, O&M service providers, and clean technology organisations — including cross-border outreach for constrained specialisms such as BESS and grid integration.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Technical & HSE Background Review', description: "Pre-placement review of project-scale experience (MW vs GW), HSE certification and safety compliance history, electrical safety competency, and — for regulatory roles — CERC / SERC licensing and statutory filing experience.", iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 4, title: 'Project Complexity & Leadership Assessment', description: "Assessment of candidate experience at the project scale, complexity, and regulatory context required — distinguishing between MW-scale and GW-scale project management capability, and between development and commissioning experience.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: "A 3–5 candidate shortlist with technical background findings, project-scale verification, and compensation benchmarks — within the agreed mandate timeline.", iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Relocation Advisory', description: "Compensation structuring for project-site or Tier 2 locations, relocation advisory, and 30-day post-joining follow-up to confirm project team integration is on track.", iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Renewable Energy or Power Sector Role?"
          subtext="An Energy Practice Lead will respond within 2 business hours — including EPC, O&M, grid, and HSE mandates."
          ctaText="Hire for Energy & Renewables"
          ctaHref="/contact?type=energy"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=energy"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Energy Organisations"
          links={[
            { label: 'Executive Search', description: 'CEO, VP Projects, and energy leadership mandate delivery.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Contract Staffing', description: 'Pre-vetted EPC engineers and specialists for project phases.', href: '/solutions/contract-staffing', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: 'Verified placement for O&M, grid, and project management roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Global Mobility', description: 'Cross-border BESS and hybrid energy specialists.', href: '/solutions/global-mobility', iconNode: <Map className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Energy Sector Recruitment — Frequently Asked Questions"
          description="Common questions from Project Directors and HR heads before engaging an energy recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit across solar, wind, thermal, and energy storage?', answer: 'Yes. The Energy Practice covers solar EPC and O&M, onshore and offshore wind, thermal power plant operations, hybrid solar-wind projects, battery energy storage systems (BESS), grid infrastructure, and clean technology companies. The most active sub-sectors are utility-scale solar, hybrid projects, and BESS.' },
            { question: 'How does Corponizers verify project-scale experience for EPC mandates?', answer: 'For EPC project management roles, Corponizers conducts a structured project-scale verification — distinguishing between project development, EPC construction, and O&M experience, and between MW-scale and GW-scale project management track records. Project portfolio review, value delivered, and multi-site coordination experience are specifically assessed.' },
            { question: 'Can Corponizers recruit for BESS and energy storage roles?', answer: 'Yes. BESS commissioning engineers, energy storage integration specialists, and hybrid project managers are active sourcing categories. For roles where the domestic talent pool is constrained, cross-border outreach to experienced Indian energy professionals in Australian and European markets is a standard sourcing option within this category.' },
            { question: 'How are HSE roles within energy EPC handled?', answer: 'Energy EPC HSE mandates require verification of electrical safety competency, height and confined space work certification, permit-to-work system management experience, and EPC-specific incident management track record. These are verified before any candidate is presented — not after offer acceptance.' },
            { question: 'Does Corponizers recruit for regulatory and CERC / SERC roles in energy?', answer: 'Yes. Regulatory affairs, grid compliance, and statutory filing roles within the electricity sector — including positions requiring CERC / SERC regulatory engagement experience — are covered within the Energy Practice, reflecting the growing regulatory complexity of India\'s power sector transition.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Energy & Renewables Recruitment"
          headline="Submit an Energy Sector Mandate"
          subtext="An Energy Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Energy Mandate"
          serviceFields={[
            { id: 'energyType', label: 'Energy Segment', type: 'select', required: true, options: ['Solar EPC', 'Solar O&M', 'Wind Energy (Onshore)', 'Hybrid Solar-Wind', 'Battery Energy Storage (BESS)', 'Thermal / Gas Power', 'Grid / Transmission', 'Clean Technology / Energy Services', 'Other'] },
            { id: 'projectScale', label: 'Project Scale', type: 'select', options: ['< 50 MW', '50–500 MW', '500 MW – 1 GW', '> 1 GW Portfolio', 'Multiple Sites', 'Not Applicable'] },
            { id: 'hseRequired', label: 'HSE Background Verification Required?', type: 'select', options: ['Yes — electrical safety and EPC HSE required', 'Yes — general site safety record', 'No'] },
            { id: 'location', label: 'Project / Work Location', type: 'text', placeholder: 'e.g. Rajasthan, Gujarat, Remote sites' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
