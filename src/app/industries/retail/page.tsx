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

import { Search, ClipboardCheck, Map, FileCheck, Users, ShoppingCart, TrendingUp } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Retail & E-Commerce Recruitment India | Corponizers',
  description: 'Specialist hiring for category managers, omnichannel VPs, D2C growth leaders, and supply chain heads across India\'s retail and e-commerce sector.',
});

export default function RetailIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Retail & Consumer Commerce Practice"
          title="Retail & E-Commerce Recruitment"
          description="Placing category managers, omnichannel VPs, D2C growth leaders, and supply chain heads across India's retail chains, e-commerce platforms, and direct-to-consumer brands."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Retail & E-Commerce' },
          ]}
          variant="brand"
          ctaText="Hire for Retail & Commerce"
          ctaHref="/contact?type=retail"
          imageSrc="/images/industries/retail.webp"
          imageAlt="Retail and e-commerce executive recruitment strategy discussion"
        />

        <ChallengeStatement
          eyebrow="THE RETAIL HIRING CHALLENGE"
          headline="When Omnichannel Ambition Outpaces Available Talent"
          positioning="India's retail and e-commerce sector is navigating simultaneous transformation across physical retail, digital commerce, and direct-to-consumer channels — each requiring a fundamentally different leadership and operational capability. The talent that can lead omnichannel integration, build D2C channels from scratch, and manage category economics at scale is in short supply and high demand. Corponizers' Retail Practice understands the commercial language of retail — GMV, category contribution, conversion rate, and last-mile cost — and sources leaders who speak it fluently."
          differentiator="We speak retail — category contribution, GMV, fill rate, and conversion — not just job titles."
          challenges={[
            {
              title: 'Omnichannel leadership requires skills that no single retail background provides',
              description: 'Effective omnichannel leaders must understand physical retail operations, digital customer experience, fulfilment logistics, and data analytics simultaneously. Professionals who have mastered one of these domains are common. Professionals who have integrated all four are not.',
            },
            {
              title: 'D2C brand scaling requires a hybrid of growth marketing and operational rigour',
              description: 'D2C brands scaling from 100 Cr to 500 Cr need leaders who can simultaneously manage performance marketing efficiency, supply chain cost, and brand equity — an unusual combination that established retail executives and growth marketers rarely share.',
            },
            {
              title: 'Seasonal volume pressure compresses hiring timelines in ways most recruiters cannot accommodate',
              description: "Festival season hiring in Indian retail does not follow a standard recruitment calendar. A 6-week hiring process is structurally incompatible with the pre-Diwali hiring surge. Retailers need access to pre-vetted talent that can deploy on a compressed timeline.",
            },
          ]}
        />

        <IndustryRoleMap
          badge="RETAIL ROLE TAXONOMY"
          headline="Roles We Place Across Retail & Commerce"
          description="From category leadership to supply chain and digital commerce roles across retail chains, e-commerce, and D2C brands."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'CEO / Business Head', function: 'Retail P&L and growth strategy' },
                { title: 'VP — Omnichannel', function: 'Physical and digital channel integration' },
                { title: 'Chief Marketing Officer', function: 'Brand, growth, and customer acquisition' },
                { title: 'VP — Supply Chain', function: 'Sourcing, logistics, and fulfilment' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'Category Head / Buyer', function: 'Assortment, margin, and vendor management' },
                { title: 'Head — E-Commerce / D2C', function: 'Digital revenue and marketplace operations' },
                { title: 'Head — Growth Marketing', function: 'Performance marketing and CAC optimisation' },
                { title: 'Head — Operations / Retail Expansion', function: 'Store operations and new city rollout' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'E-Commerce Manager', function: 'Marketplace, website, and conversion rate' },
                { title: 'CRM & Loyalty Manager', function: 'Customer retention and LTV programs' },
                { title: 'Demand Planner', function: 'Inventory, forecast, and replenishment' },
                { title: 'Visual Merchandising Head', function: 'Store design and product placement' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Retail"
          cards={[
            {
              headline: "D2C scaling requires a leadership profile that traditional retail and growth marketing rarely produces alone",
              body: "The most effective D2C scaling leaders in India combine performance marketing fluency, supply chain cost management, and brand building capability. This combination does not sit neatly in traditional retail or pure digital marketing career paths — which is why finding it through conventional sourcing is structurally difficult.",
            },
            {
              headline: "Festival season hiring urgency is incompatible with standard recruitment timelines",
              body: "Pre-Diwali, pre-Navratri, and end-of-financial-year hiring surges in retail compress the available hiring window to weeks, not months. Retail organisations without access to a pre-vetted talent roster consistently fill these roles with suboptimal candidates or miss the seasonal window entirely.",
            },
          ]}
        />

        <ProcessSteps
          badge="RETAIL HIRING PROCESS"
          headline="How Corponizers Delivers Retail Mandates"
          description="Commercial understanding combined with structured sourcing — for leaders who can operate at the pace of Indian retail."
          steps={[
            { step: 1, title: 'Commercial Context Briefing', description: "Understanding the business model (offline retail / e-commerce / D2C / omnichannel), category structure, GMV targets, and the specific commercial challenge the hire must address.", iconNode: <ShoppingCart className="w-5 h-5" /> },
            { step: 2, title: 'Targeted Commercial Talent Sourcing', description: "Outreach to retail and commerce professionals with verified category, digital commerce, or supply chain experience — across relevant metro markets and sector sub-segments.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Commercial Competency Screening', description: "Pre-placement screening covering category management outcomes, digital revenue performance, P&L ownership experience, and vendor management scale — not just job title verification.", iconNode: <TrendingUp className="w-5 h-5" /> },
            { step: 4, title: 'Brand & Culture Alignment Assessment', description: "Assessment of candidate fit with the company's brand positioning, consumer segment, operational pace, and leadership style — ensuring commercial capability is accompanied by cultural alignment.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: "A 3–5 candidate shortlist with commercial outcome summaries and current compensation benchmarks within the agreed delivery timeline.", iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Onboarding', description: "Compensation benchmarking against current retail market, counter-offer advisory, and 30-day post-joining follow-up.", iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Retail or Commerce Leadership Role?"
          subtext="A Retail Practice Lead will respond within 2 business hours — including mandates with compressed seasonal timelines."
          ctaText="Hire for Retail & Commerce"
          ctaHref="/contact?type=retail"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=retail"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Retail Organisations"
          links={[
            { label: 'Permanent Hiring', description: 'Verified placement for category, operations, and digital commerce roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'RPO', description: 'Embedded TA for high-volume store operations and seasonal hiring.', href: '/solutions/rpo', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Executive Search', description: 'CEO and VP-level mandate for retail and e-commerce leadership.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Retail Sector Recruitment — Frequently Asked Questions"
          description="Common questions from HR Directors and Business Heads before engaging a retail recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit across offline retail, e-commerce, and D2C brands?', answer: 'Yes. The Retail Practice covers traditional brick-and-mortar retail chains, multi-brand retailers, e-commerce platforms, quick commerce operations, and D2C consumer brands across all stages of growth.' },
            { question: "How does Corponizers verify commercial experience claims in retail roles?", answer: "Category management, GMV ownership, and P&L responsibility claims are verified through structured competency screening — covering documented category contribution outcomes, digital revenue performance data, and vendor management scale. This replaces CV-level keyword matching with verified outcome assessment." },
            { question: 'Can Corponizers support hiring for compressed seasonal timelines?', answer: 'Yes. Pre-Diwali, festival season, and year-end hiring surges are accommodated through the pre-vetted talent roster — enabling significantly faster deployment for verified retail professionals than a standard search process allows.' },
            { question: 'What is the Corponizers approach to D2C brand hiring?', answer: 'D2C mandates are treated as commercial leadership searches — not marketing or operations searches in isolation. The sourcing approach targets professionals with documented experience in performance marketing efficiency, supply chain cost management, and brand equity building — reflecting the integrated nature of effective D2C leadership.' },
            { question: 'Can Corponizers recruit for quick commerce and last-mile operations roles?', answer: 'Yes. Quick commerce operations leadership, last-mile delivery head roles, dark store operations managers, and hyperlocal supply chain specialists are active categories within the Retail Practice — reflecting the rapid growth of instant delivery in Indian retail.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Retail & E-Commerce Recruitment"
          headline="Submit a Retail Hiring Mandate"
          subtext="A Retail Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Retail Mandate"
          serviceFields={[
            { id: 'retailType', label: 'Retail / Commerce Type', type: 'select', required: true, options: ['Offline Retail Chain', 'E-Commerce Platform', 'D2C Brand', 'Omnichannel Retailer', 'Quick Commerce', 'FMCG Distributor / Trade', 'Luxury / Premium Retail', 'Other'] },
            { id: 'function', label: 'Hiring Function', type: 'select', required: true, options: ['Category Management', 'E-Commerce / Digital', 'Growth Marketing', 'Supply Chain / Logistics', 'Store Operations', 'D2C / Brand Building', 'General Leadership'] },
            { id: 'timeline', label: 'Hiring Timeline', type: 'select', options: ['Urgent — within 2 weeks', 'Within 30 days', '30–60 days', 'Flexible'] },
            { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Mumbai, Bengaluru, Pan-India' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
