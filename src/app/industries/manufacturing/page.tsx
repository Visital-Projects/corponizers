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

import { Search, ClipboardCheck, ShieldCheck, Map, FileCheck, Users, Settings } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Manufacturing & Industry 4.0 Recruitment India | Corponizers',
  description: 'Executive search and permanent hiring for plant directors, operations VPs, Lean/Six Sigma leaders, and automation engineers across India\'s manufacturing sector.',
});

export default function ManufacturingIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Manufacturing Industry Practice"
          title="Manufacturing & Industry 4.0 Recruitment"
          description="Placing plant directors, operations leaders, Lean/Six Sigma experts, and automation engineers across India's manufacturing conglomerates, EPC companies, and smart factory operations."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Manufacturing' },
          ]}
          variant="brand"
          ctaText="Hire for Manufacturing"
          ctaHref="/contact?type=manufacturing"
          imageSrc="/images/industries/manufacturing.webp"
          imageAlt="Manufacturing and Industry 4.0 leadership recruitment discussion"
        />

        <ChallengeStatement
          eyebrow="THE MANUFACTURING HIRING CHALLENGE"
          headline="Why Smart Factory Talent Is Harder to Find Than the Machinery"
          positioning="India's manufacturing sector is undergoing its most significant transformation in decades — from labour-intensive production to automated, digitally-monitored smart factories. The problem is that the talent required to lead this transition combines deep floor-level operations expertise with technology integration capability. That combination does not appear on job boards. Corponizers' Manufacturing practice is built to find it, assess it, and deliver it under confidential conditions."
          differentiator="Plant-floor credibility combined with digital transformation fluency — that is the new manufacturing leader we source."
          challenges={[
            {
              title: 'Industry 4.0 has created a leadership profile that barely exists yet',
              description: 'Smart factory transformation requires leaders who have lived on the production floor and can simultaneously drive automation adoption, data-led decision-making, and Lean continuous improvement. Finding this profile through conventional channels is structurally ineffective.',
            },
            {
              title: 'Lean and Six Sigma expertise at senior levels is more scarce than it appears',
              description: 'Many professionals claim Lean / Six Sigma experience on a CV. Far fewer have led measurable OEE improvement programs or driven plant-wide Kaizen implementation at scale. The difference between claimed and verified expertise is consequential at VP and GM level.',
            },
            {
              title: 'Pan-India plant leadership hiring requires local market intelligence',
              description: "Manufacturing hiring in India is not one market — it is Pune, Chennai, Ahmedabad, Bengaluru, NCR, and Coimbatore each with distinct talent availability, mobility patterns, and compensation expectations. Generic national searches miss this entirely.",
            },
          ]}
        />

        <IndustryRoleMap
          badge="MANUFACTURING ROLE TAXONOMY"
          headline="Roles We Place Across the Manufacturing Value Chain"
          description="Operations leadership to specialist sourcing across discrete, process, and smart manufacturing environments."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'Plant Director / CEO', function: 'Multi-plant P&L and operational strategy' },
                { title: 'VP Operations', function: 'Production, quality, and supply chain' },
                { title: 'VP Projects', function: 'Capital expansion and greenfield' },
                { title: 'Chief Manufacturing Officer', function: 'Enterprise production governance' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'General Manager — Production', function: 'Daily throughput and yield management' },
                { title: 'Head — Lean & Continuous Improvement', function: 'Kaizen, Six Sigma, OEE programs' },
                { title: 'GM — Automation & Digital Manufacturing', function: 'Smart factory transition leadership' },
                { title: 'Head — Supply Chain & Logistics', function: 'Inbound/outbound and vendor management' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'Automation / Robotics Engineer', function: 'PLC, SCADA, cobots, machine vision' },
                { title: 'Industrial IoT Engineer', function: 'OT/IT integration and sensor networks' },
                { title: 'Quality Manager (Six Sigma BB)', function: 'Defect elimination and SPC' },
                { title: 'EHS Manager', function: 'Environment, health, and safety compliance' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Manufacturing"
          cards={[
            {
              headline: 'Smart factory transformation is widening the leadership gap',
              body: "As Indian manufacturers accelerate Investment in automation and Industry 4.0 infrastructure, the gap between available leadership talent and what smart factories actually need is growing. The best plant directors from the previous decade are not automatically the right leaders for digitally-transformed operations.",
            },
            {
              headline: 'Manufacturing talent in India clusters by sub-sector and geography',
              body: 'Automotive talent concentrates around Pune and Chennai. Textile and apparel leadership around Surat, Tirupur, and Bengaluru. FMCG manufacturing around NCR, Mumbai, and Pune. A national manufacturing search that does not account for these sub-sector clusters will consistently surface lower-quality shortlists.',
            },
            {
              headline: 'Retention challenges are highest at the mid-senior layer',
              body: 'GM and senior manager-level manufacturing professionals in India face significant counter-offer frequency at the time of resignation. Competitive compensation benchmarking and early retention advisory are essential components of any placement — not post-offer afterthoughts.',
            },
          ]}
        />

        <ProcessSteps
          badge="MANUFACTURING HIRING PROCESS"
          headline="How Corponizers Delivers Manufacturing Mandates"
          description="A structured process designed for operations leadership hiring — from plant-context briefing to verified placement."
          steps={[
            { step: 1, title: 'Plant Context & Operations Briefing', description: 'Structured intake covering plant configuration, production technology, current OEE targets, workforce size, and the specific operational challenge the hire must address.', iconNode: <Map className="w-5 h-5" /> },
            { step: 2, title: 'Sub-Sector & Geography Targeted Sourcing', description: "Targeted outreach to manufacturing professionals in the relevant sub-sector cluster — automotive, FMCG, pharma, textiles — within the specific Indian geography where the plant operates.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Lean / Digital Competency Verification', description: 'For operations and improvement roles — structured competency screening covering Lean implementation history, OEE improvement outcomes, and digital / automation integration experience.', iconNode: <Settings className="w-5 h-5" /> },
            { step: 4, title: 'Multi-Layer Assessment', description: 'Domain expertise assessment, psychometric profiling, and cultural alignment evaluation — including leadership style fit for the specific manufacturing environment.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: 'A 3–5 candidate shortlist with competency summaries, assessment scores, and current compensation benchmarks — delivered within the agreed mandate timeline.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer, Relocation & Onboarding Support', description: 'Compensation negotiation, counter-offer management, relocation coordination, and 30-day post-joining follow-up.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Manufacturing or Smart Factory Role?"
          subtext="A Manufacturing Practice Lead will respond within 2 business hours to discuss your plant context, role requirements, and delivery timeline."
          ctaText="Hire for Manufacturing"
          ctaHref="/contact?type=manufacturing"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=manufacturing"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Manufacturing Organisations"
          links={[
            { label: 'Executive Search', description: 'Plant Director and VP-level mandate delivery with confidential outreach.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: '4-layer verified placement for GM and senior specialist roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'RPO', description: 'Embedded TA for high-volume manufacturing headcount growth.', href: '/solutions/rpo', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Contract Staffing', description: 'Pre-vetted engineers and project managers for EPC and greenfield builds.', href: '/solutions/contract-staffing', iconNode: <Settings className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Manufacturing Sector Recruitment — Frequently Asked Questions"
          description="Common questions from Plant Heads and HR Directors before engaging a manufacturing recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit across all manufacturing sub-sectors?', answer: 'Yes. Manufacturing mandates are delivered across automotive, FMCG, pharmaceuticals, textiles, chemicals, electronics, capital goods, and industrial machinery. The most active practice areas are automotive, FMCG, and pharmaceutical manufacturing — reflecting the highest hiring volumes in these sub-sectors.' },
            { question: 'How does Corponizers verify Lean and Six Sigma experience?', answer: 'For operations and continuous improvement mandates, Corponizers conducts structured competency screening covering documented Lean / Six Sigma project outcomes, OEE improvement metrics achieved, Kaizen program implementation scope, and belt certification verification — not just self-reported credentials.' },
            { question: 'Can Corponizers hire for Industry 4.0 and automation roles within manufacturing?', answer: 'Yes. Automation engineers, Industrial IoT specialists, SCADA/PLC engineers, digital manufacturing leads, and operations leaders with smart factory transformation experience are active sourcing categories within the Manufacturing Practice.' },
            { question: 'What geographies does the Manufacturing Practice cover?', answer: "All major Indian manufacturing clusters — Pune, Chennai, Ahmedabad, NCR, Bengaluru, Coimbatore, Ludhiana, and Surat. Pan-India searches are executed with geography-specific market mapping, not a single national talent pool approach." },
            { question: 'How does Corponizers handle counter-offers during manufacturing placements?', answer: 'Counter-offer risk is highest for GM and senior manager-level candidates in Indian manufacturing. Corponizers addresses this through early compensation benchmarking, candidate motivation assessment, and explicit counter-offer advisory as part of the offer facilitation process — reducing post-acceptance attrition risk.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Manufacturing Recruitment"
          headline="Submit a Manufacturing Hiring Mandate"
          subtext="A Manufacturing Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Manufacturing Mandate"
          serviceFields={[
            { id: 'subSector', label: 'Manufacturing Sub-Sector', type: 'select', required: true, options: ['Automotive & Auto-Ancillary', 'FMCG / Consumer Goods', 'Pharmaceuticals', 'Textiles & Apparel', 'Chemicals', 'Capital Goods / Industrial', 'Electronics / Semiconductor', 'Food & Beverage', 'Other'] },
            { id: 'roleLevel', label: 'Role Level', type: 'select', required: true, options: ['C-Suite / Plant Director', 'VP / Senior VP', 'General Manager', 'Manager / Senior Engineer', 'Specialist'] },
            { id: 'locations', label: 'Plant Location(s)', type: 'text', placeholder: 'e.g. Pune, Chennai, Ahmedabad' },
            { id: 'leanRequired', label: 'Lean / Six Sigma Experience Required?', type: 'select', options: ['Yes — essential', 'Preferred', 'Not required'] },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
