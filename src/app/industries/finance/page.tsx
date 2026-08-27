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

import { Search, ClipboardCheck, ShieldCheck, Map, FileCheck, Users, BarChart3 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Banking & Financial Services Recruitment India | Corponizers',
  description: 'Executive search and specialist hiring for CISOs, risk directors, FinTech leads, and compliance heads across India\'s banking, insurance, and financial services sector.',
});

export default function FinanceIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Banking & Financial Services Practice"
          title="Banking & Financial Services Recruitment"
          description="Placing risk directors, compliance leaders, FinTech executives, treasury heads, and CISOs across India's banks, NBFCs, insurance companies, and financial services organisations."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Banking & Financial Services' },
          ]}
          variant="brand"
          ctaText="Hire for Regulated Finance"
          ctaHref="/contact?type=finance"
          imageSrc="/images/industries/finance.webp"
          imageAlt="Banking and financial services recruitment strategy meeting"
        />

        <ChallengeStatement
          eyebrow="THE FINANCIAL SERVICES HIRING CHALLENGE"
          headline="When Regulatory Context Makes Every Hire a Compliance Decision"
          positioning="Hiring in banking and financial services is not simply talent acquisition — it is a regulatory compliance activity. Every senior hire in an RBI-regulated or SEBI-supervised organisation must be assessed against 'fit and proper' criteria, regulatory standing, and compliance history. Generic recruiters do not understand this. Corponizers' Financial Services Practice is built on deep knowledge of India's regulatory environment, the sector's specific leadership challenges, and the confidentiality requirements that govern senior financial services hiring."
          differentiator="We understand RBI fit-and-proper criteria, SEBI supervisory expectations, and the regulatory context that makes financial services hiring unique."
          challenges={[
            {
              title: "RBI 'fit and proper' criteria creates a compliance layer that most recruiters miss",
              description: "For senior roles in banks and NBFCs regulated by RBI, 'fit and proper' assessments — covering financial integrity, regulatory standing, and absence of adverse findings — are a mandatory pre-appointment requirement. Recruiters who do not build this into their process create regulatory risk for the hiring institution.",
            },
            {
              title: 'The FinTech talent war is pulling digital finance professionals away from traditional banking',
              description: 'Technology-fluent finance professionals — particularly in payments, lending technology, and wealth management platforms — are increasingly choosing FinTech companies over traditional banks. Traditional financial institutions competing for this talent need a different hiring narrative and sourcing approach.',
            },
            {
              title: 'Leadership opacity at senior levels in financial services is greater than in most sectors',
              description: "India's top risk directors, treasury heads, and compliance officers are rarely visible on professional networks. They operate in roles where public visibility is actively managed. Reaching them requires sector-specific network relationships, not digital sourcing.",
            },
          ]}
        />

        <IndustryRoleMap
          badge="FINANCE ROLE TAXONOMY"
          headline="Roles We Place Across Financial Services"
          description="Executive to specialist sourcing across banks, NBFCs, insurance, asset management, and FinTech organisations."
          columns={[
            {
              header: 'Leadership',
              roles: [
                { title: 'CEO / MD (Bank / NBFC)', function: 'Regulated institution overall leadership' },
                { title: 'Chief Risk Officer (CRO)', function: 'Credit, market, and operational risk' },
                { title: 'Chief Compliance Officer', function: 'RBI / SEBI regulatory compliance' },
                { title: 'Chief Investment Officer', function: 'Portfolio management and strategy' },
              ],
            },
            {
              header: 'Management',
              roles: [
                { title: 'Head — Credit Risk', function: 'Underwriting, credit models, and NPA' },
                { title: 'Head — Treasury & ALM', function: 'Liquidity, funding, and ALM strategy' },
                { title: 'Head — FinTech / Digital Banking', function: 'Digital products and platform banking' },
                { title: 'CISO (Financial Services)', function: 'Cyber security and IT risk governance' },
              ],
            },
            {
              header: 'Specialist',
              roles: [
                { title: 'Quantitative Risk Analyst', function: 'Basel III models, VaR, and stress testing' },
                { title: 'Regulatory Affairs Manager', function: 'SEBI/RBI filings and compliance ops' },
                { title: 'AML / KYC Specialist', function: 'Financial crime prevention and due diligence' },
                { title: 'FinTech Product Manager', function: 'Payments, lending, or wealth platforms' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Financial Services"
          cards={[
            {
              headline: "Regulatory compliance is a mandatory pre-hire filter, not a post-offer check",
              body: "For senior roles in RBI-regulated institutions, 'fit and proper' criteria require documented verification of financial integrity, regulatory standing, and absence of adverse findings before appointment. Conducting this post-offer creates regulatory risk for the institution and delays onboarding by weeks.",
            },
            {
              headline: "FinTech is pulling digital-native finance talent out of traditional banking",
              body: "Technology-fluent finance professionals in payments, lending, and wealth management are increasingly choosing FinTech companies. Traditional banks and NBFCs competing for this profile need a compelling employer narrative — not just a higher base compensation — to remain competitive in this specific talent segment.",
            },
          ]}
        />

        <ProcessSteps
          badge="FINANCE HIRING PROCESS"
          headline="How Corponizers Delivers Financial Services Mandates"
          description="A 6-stage process with regulatory compliance verification built in — not appended."
          steps={[
            { step: 1, title: 'Regulatory & Business Context Briefing', description: "Understanding the institution's regulatory category (Scheduled Bank / NBFC / Insurance / Investment Manager), RBI / SEBI supervisory obligations, and the business driver behind the hire.", iconNode: <BarChart3 className="w-5 h-5" /> },
            { step: 2, title: 'Confidential Network Outreach', description: "Targeted outreach to senior financial services professionals — including risk directors, compliance officers, and treasury heads — through sector-specific network channels, not public job boards.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: "Regulatory Standing & Fit-and-Proper Review", description: "Pre-placement review of the candidate's regulatory compliance history, adverse finding checks, financial integrity documentation, and RBI/SEBI 'fit and proper' compatibility — completed before any client introduction.", iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 4, title: "Domain Competency & Leadership Assessment", description: "Structured assessment covering regulatory domain knowledge, technical financial expertise (risk models, Basel III, ALM frameworks), and leadership capability within a regulated institutional environment.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: "Verified Shortlist Delivery", description: "A 3–5 candidate shortlist with regulatory standing findings, competency assessment summaries, and compensation benchmarks — delivered within the agreed mandate timeline.", iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: "Offer Facilitation & Regulatory Onboarding Support", description: "Compensation structuring within regulatory approval parameters, notice period management, and post-placement follow-up to support regulatory appointment processes where applicable.", iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Regulated Finance or FinTech Role?"
          subtext="A Financial Services Practice Lead will respond within 2 business hours — including roles requiring regulatory standing review and confidential market outreach."
          ctaText="Hire for Regulated Finance"
          ctaHref="/contact?type=finance"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=finance"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Financial Services Organisations"
          links={[
            { label: 'Executive Search', description: 'C-Suite mandate delivery with regulatory compliance review.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: '4-layer verified placement for risk, compliance, and FinTech roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Tech Hiring', description: 'FinTech engineers, data scientists, and platform architects.', href: '/solutions/tech-hiring', iconNode: <BarChart3 className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Financial Services Recruitment — Frequently Asked Questions"
          description="Common questions from CHROs and Board Committees before engaging a financial services recruitment mandate."
          items={[
            { question: "What does 'fit and proper' compliance review involve in the context of a recruitment mandate?", answer: "For senior roles in RBI-regulated banks and NBFCs, 'fit and proper' criteria require assessment of the candidate's financial integrity (absence of wilful default, insolvency proceedings), regulatory track record (no adverse regulatory findings), and in some cases, board-level declaration requirements. Corponizers conducts a structured pre-placement review covering these parameters before any candidate is introduced to the client institution." },
            { question: "Does Corponizers recruit across banks, NBFCs, insurance companies, and investment managers?", answer: "Yes. The Financial Services Practice covers scheduled commercial banks, small finance banks, NBFCs (including HFCs and MFIs), life and general insurance companies, asset management companies, stock brokers, and FinTech-regulated entities. Each has distinct regulatory requirements that are factored into the mandate process." },
            { question: "How does Corponizers reach senior risk and compliance professionals who are not visible publicly?", answer: "Senior risk directors, compliance officers, and treasury heads in Indian financial services maintain low public profiles by design. Corponizers reaches this segment through sector-specific network relationships, peer-referral activation within compliance and risk communities, and direct outreach through channels where these professionals are actually accessible — not LinkedIn mass-outreach." },
            { question: "Can Corponizers hire for FinTech and digital banking roles alongside traditional financial services?", answer: "Yes. FinTech product managers, payments technology engineers, digital lending architects, and wealth management platform leaders are active categories within the Financial Services Practice. Cross-sector candidates with both regulatory knowledge and digital capability are a specific sourcing focus." },
            { question: "How is candidate confidentiality managed for senior financial services mandates?", answer: "All senior financial services mandates operate under strict non-attribution protocols. The hiring institution's identity and the nature of the search are not disclosed until both parties provide explicit consent. This is particularly important for CRO, CCO, and CEO mandates where board-level confidentiality is required throughout the search process." },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Banking & Financial Services Recruitment"
          headline="Submit a Financial Services Mandate"
          subtext="A Financial Services Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Finance Mandate"
          serviceFields={[
            { id: 'institutionType', label: 'Institution Type', type: 'select', required: true, options: ['Scheduled Commercial Bank', 'Small Finance Bank / Payment Bank', 'NBFC (Lending)', 'Housing Finance Company', 'Life Insurance', 'General Insurance', 'Asset Management / Mutual Fund', 'Stock Broker / Wealth Manager', 'FinTech Company'] },
            { id: 'function', label: 'Hiring Function', type: 'select', required: true, options: ['Risk Management', 'Compliance & Regulatory', 'Treasury & ALM', 'Credit & Underwriting', 'FinTech / Digital', 'Cyber Security', 'Investment Management', 'General Leadership'] },
            { id: 'regulatoryCheck', label: 'Regulatory Standing Review Required?', type: 'select', options: ['Yes — RBI Fit and Proper (Bank)', 'Yes — SEBI Compliance Review', 'Yes — IRDAI Background Check', 'No specific requirement'] },
            { id: 'confidential', label: 'Confidential Search Required?', type: 'select', options: ['Yes — Non-attribution required', 'Partially confidential', 'Open search'] },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
