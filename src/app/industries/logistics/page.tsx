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

import { Search, ClipboardCheck, Map, FileCheck, Users, Truck, Route } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Logistics & Supply Chain Recruitment India | Corponizers',
  description: 'Specialist hiring for supply chain directors, 3PL operations heads, freight technology leaders, and WMS specialists across India\'s logistics and supply chain sector.',
});

export default function LogisticsIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Logistics & Supply Chain Practice"
          title="Logistics & Supply Chain Recruitment"
          description="Placing supply chain directors, 3PL operations heads, freight technology leaders, and WMS specialists across India's logistics companies, e-commerce fulfillment operations, and cold chain networks."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Logistics & Supply Chain' },
          ]}
          variant="brand"
          ctaText="Hire for Logistics & Supply Chain"
          ctaHref="/contact?type=logistics"
          imageSrc="/images/industries/logistics.webp"
          imageAlt="Logistics and supply chain executive recruitment planning session"
        />

        <ChallengeStatement
          eyebrow="THE LOGISTICS HIRING CHALLENGE"
          headline="When Infrastructure Grows Faster Than the People Who Can Run It"
          positioning="India's logistics sector is experiencing one of its most significant periods of infrastructure investment — warehousing expansion, last-mile network build-outs, and technology integration across the supply chain. The problem is that the operations leaders and technology-fluent logistics professionals needed to run this infrastructure are in significantly shorter supply than the infrastructure itself. Corponizers' Logistics Practice understands the operational language of supply chain — 3PL, WMS, last-mile cost, fill rate, cold chain integrity — and sources leaders who can deliver against it."
          differentiator="We understand the operational economics of supply chain — 3PL partnerships, WMS integration, and last-mile cost structures — not just logistics job titles."
          challenges={[
            {
              title: 'Technology integration is creating a leadership gap in traditional logistics organisations',
              description: 'Logistics companies adopting WMS, TMS, IoT tracking, and AI-driven route optimization need operations leaders who can bridge traditional logistics management with technology-led process design. This combination is materially different from what the industry was hiring for five years ago — and the talent pool has not yet caught up.',
            },
            {
              title: 'Last-mile operations leadership is constrained at scale',
              description: "Managing last-mile delivery at scale — across multiple cities, delivery service providers, and SLA tiers — requires a specific blend of operations discipline, data analytics capability, and vendor management strength. India's rapid growth in e-commerce and quick commerce has created demand for this profile that significantly exceeds current availability.",
            },
            {
              title: 'Cold chain leadership requires a specialist profile that most logistics recruiters cannot access',
              description: "Cold chain operations leadership requires specific expertise in refrigerated storage, temperature monitoring protocols, cold transport compliance, and pharmaceutical or food safety regulatory requirements. Generic logistics recruiters do not have the networks to source this profile at senior levels.",
            },
          ]}
        />

        <IndustryRoleMap
          badge="LOGISTICS ROLE TAXONOMY"
          headline="Roles We Place Across Logistics & Supply Chain"
          description="Operations leadership to technology and specialist sourcing across 3PL, e-commerce logistics, cold chain, and freight operations."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'CEO / COO (3PL / Logistics)', function: 'Logistics business P&L and strategy' },
                { title: 'VP Supply Chain', function: 'End-to-end supply chain oversight' },
                { title: 'VP Operations', function: 'Warehouse, last-mile, and transport network' },
                { title: 'Chief Technology Officer (LogTech)', function: 'WMS, TMS, and tech platform leadership' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'Head — Last-Mile Operations', function: 'City and zone-level last-mile management' },
                { title: 'Head — Freight / Linehaul', function: 'Surface and air freight network' },
                { title: 'Head — Cold Chain', function: 'Temperature-controlled storage and transport' },
                { title: 'Supply Chain Planning Manager', function: 'Demand, inventory, and network planning' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'WMS Implementation Manager', function: 'Warehouse management system rollout' },
                { title: 'Route Optimisation Analyst', function: 'AI-driven delivery scheduling and cost reduction' },
                { title: 'Customs & Compliance Manager', function: 'Import / export regulatory compliance' },
                { title: 'Vendor Management Specialist', function: '3PL and delivery partner governance' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Logistics"
          cards={[
            {
              headline: "WMS and TMS adoption is outpacing available implementation leadership",
              body: "As Indian logistics companies accelerate warehouse management and transportation management system deployments, the scarcity is not in the technology — it is in the operations leaders who can manage the transition from manual to technology-led logistics workflows without disrupting service levels during the changeover period.",
            },
            {
              headline: "Cold chain talent requires a regulatory compliance dimension most logistics recruiters miss",
              body: "Senior cold chain operations roles — particularly in pharmaceutical and food-grade cold logistics — require documented experience in temperature excursion management, regulatory inspection readiness, and cold transport SLA compliance. This is a distinct qualification requirement, not a general logistics credential.",
            },
          ]}
        />

        <ProcessSteps
          badge="LOGISTICS HIRING PROCESS"
          headline="How Corponizers Delivers Logistics Mandates"
          description="Operations-fluent sourcing combined with tech-capability assessment — structured for the specific demands of modern Indian logistics."
          steps={[
            { step: 1, title: 'Operations Context Briefing', description: "Understanding the logistics model (3PL / in-house / e-commerce fulfilment / cold chain), geographic footprint, SLA structure, technology stack, and the specific operational gap the hire must address.", iconNode: <Truck className="w-5 h-5" /> },
            { step: 2, title: 'Logistics Network Sourcing', description: "Targeted outreach across logistics professionals in relevant operational sub-segments — 3PL, e-commerce fulfilment, cold chain, freight, and LogTech — with geography-specific mapping.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Operational Competency Assessment', description: "Pre-placement screening covering WMS/TMS experience, last-mile cost management track record, 3PL governance capability, SLA adherence history, and — where applicable — cold chain compliance knowledge.", iconNode: <Route className="w-5 h-5" /> },
            { step: 4, title: 'Scale & Technology Readiness Evaluation', description: "Assessment of the candidate's readiness to manage operations at the required scale and comfort with the technology tools central to the role — WMS systems, route optimisation platforms, or real-time tracking infrastructure.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: "A 3–5 candidate shortlist with competency assessment outcomes and current compensation benchmarks — within the agreed mandate timeline.", iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Integration Support', description: "Compensation benchmarking, counter-offer advisory, and 30-day post-joining check-in to confirm operational team integration is progressing well.", iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Logistics or Supply Chain Role?"
          subtext="A Logistics Practice Lead will respond within 2 business hours — including cold chain, last-mile, and LogTech mandates."
          ctaText="Hire for Logistics & Supply Chain"
          ctaHref="/contact?type=logistics"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=logistics"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Logistics Organisations"
          links={[
            { label: 'Permanent Hiring', description: 'Verified placement for operations, planning, and specialist roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Contract Staffing', description: 'Pre-vetted operations specialists for peak volumes and project phases.', href: '/solutions/contract-staffing', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Executive Search', description: 'COO and VP Supply Chain mandate delivery.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Logistics Sector Recruitment — Frequently Asked Questions"
          description="Common questions from COOs and HR Directors before engaging a logistics recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit across 3PL, e-commerce logistics, and cold chain?', answer: 'Yes. The Logistics Practice covers third-party logistics companies, e-commerce fulfillment operations, express delivery networks, cold chain logistics, bulk freight and linehaul, and logistics technology (LogTech) companies.' },
            { question: 'How does Corponizers approach cold chain recruitment specifically?', answer: 'Cold chain logistics mandates are treated as specialist sourcing exercises — requiring verification of temperature-controlled storage management experience, cold transport SLA compliance history, and regulatory inspection readiness (FSSAI for food cold chain, Schedule Y compliance for pharmaceutical cold chain). Generic logistics experience does not substitute for these specific credentials.' },
            { question: 'Can Corponizers recruit for WMS implementation and LogTech roles?', answer: 'Yes. WMS implementation managers, TMS specialists, route optimisation analysts, and supply chain technology platform managers are active sourcing categories within the Logistics Practice — reflecting the accelerating technology adoption across Indian logistics operations.' },
            { question: 'What is the expected timeline for a logistics operations mandate?', answer: 'A verified shortlist for a Head of Operations or Last-Mile Operations Director mandate is typically delivered within 12–16 business days of mandate confirmation. VP and COO-level mandates follow the Executive Search timeline of 14 business days from mandate signing.' },
            { question: 'Can Corponizers support hiring for logistics startups and Series B+ scale-ups?', answer: 'Yes. High-growth logistics and quick commerce companies building operations leadership teams are a specific practice segment — with sourcing focused on candidates who combine operational discipline with the adaptability required in a fast-scaling environment.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Logistics & Supply Chain Recruitment"
          headline="Submit a Logistics Hiring Mandate"
          subtext="A Logistics Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Logistics Mandate"
          serviceFields={[
            { id: 'logisticsType', label: 'Operations Type', type: 'select', required: true, options: ['3PL / Logistics Company', 'E-Commerce Fulfilment', 'Quick Commerce / Last-Mile', 'Cold Chain Logistics', 'Freight / Linehaul', 'Logistics Technology (LogTech)', 'In-House Supply Chain', 'Other'] },
            { id: 'function', label: 'Hiring Function', type: 'select', required: true, options: ['Operations Leadership', 'Supply Chain Planning', 'Last-Mile Operations', 'Warehouse / WMS', 'Freight / Transport', 'Cold Chain', 'Technology / LogTech', 'General Management'] },
            { id: 'techRequired', label: 'WMS / TMS Experience Required?', type: 'select', options: ['Yes — WMS implementation experience needed', 'Yes — TMS or route optimisation', 'Preferred but not essential', 'No'] },
            { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Mumbai, NCR, Pan-India' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
