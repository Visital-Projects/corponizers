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

import { Search, ClipboardCheck, ShieldCheck, Map, FileCheck, Users, Stethoscope } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Healthcare & Life Sciences Recruitment India | Corponizers',
  description: 'Executive search and specialist hiring for medical directors, clinical leaders, BioPharma heads, and MedTech executives across India\'s healthcare and life sciences sector.',
});

export default function HealthcareIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Healthcare & Life Sciences Practice"
          title="Healthcare & Life Sciences Recruitment"
          description="Placing medical directors, clinical leaders, regulatory affairs heads, and MedTech executives across India's hospital networks, pharmaceutical companies, and life sciences organisations."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Healthcare & Life Sciences' },
          ]}
          variant="brand"
          ctaText="Hire for Healthcare"
          ctaHref="/contact?type=healthcare"
          imageSrc="/images/industries/healthcare.webp"
          imageAlt="Healthcare and life sciences leadership recruitment meeting"
        />

        <ChallengeStatement
          eyebrow="THE HEALTHCARE HIRING CHALLENGE"
          headline="Why Clinical Leadership Is One of India's Most Complex Hiring Markets"
          positioning="Healthcare hiring in India operates at the intersection of clinical licensing requirements, regulatory compliance, urban-rural talent gradient, and a rapidly expanding private hospital sector competing for a finite pool of qualified senior professionals. Generic recruiters cannot navigate this. Corponizers' Healthcare practice understands the difference between NABH compliance and NABL accreditation, the licensing landscape for senior clinical roles, and the specific hiring challenges facing hospital networks, pharmaceutical companies, and MedTech organisations."
          differentiator="We know the difference between clinical and administrative leadership — and why that distinction changes everything in healthcare hiring."
          challenges={[
            {
              title: "India's senior clinical talent is concentrated in metros — and Tier 2 cities urgently need it",
              description: "The most experienced medical directors, clinical department heads, and senior consultants are concentrated in Mumbai, Delhi, Bengaluru, and Chennai. India's rapidly expanding Tier 2 hospital infrastructure needs this talent but cannot always compete on compensation alone — requiring a different sourcing and positioning approach.",
            },
            {
              title: 'Medical licensing and regulatory verification is a pre-hire requirement, not a formality',
              description: 'Clinical leadership hires require verification of MCI/NMC registration, specialist board certification, regulatory compliance history, and — for pharma roles — CDSCO and GCP compliance records. This verification must happen before, not after, any offer is extended.',
            },
            {
              title: 'The pharma-hospital-MedTech talent ecosystem has limited permeability',
              description: 'Senior professionals who can move effectively between clinical practice, pharmaceutical management, and MedTech commercial roles are rare. Most sector-specific recruiters only work within one of these three segments — missing the cross-sector opportunities that produce the strongest healthcare leadership profiles.',
            },
          ]}
        />

        <IndustryRoleMap
          badge="HEALTHCARE ROLE TAXONOMY"
          headline="Roles We Place Across Healthcare & Life Sciences"
          description="Clinical leadership to management and specialist sourcing across hospitals, pharma, and MedTech organisations."
          columns={[
            {
              header: 'Clinical Leadership',
              roles: [
                { title: 'Medical Director / CMO', function: 'Clinical governance and quality standards' },
                { title: 'Clinical Department Head', function: 'Specialty department leadership' },
                { title: 'Chief of Staff', function: 'Clinical operations and physician relations' },
                { title: 'Nursing Director / CNO', function: 'Nursing quality and workforce management' },
              ],
            },
            {
              header: 'Operations & Pharma',
              roles: [
                { title: 'Hospital COO / CEO', function: 'Hospital group P&L and operations' },
                { title: 'VP Regulatory Affairs', function: 'CDSCO, GCP, clinical trial compliance' },
                { title: 'Head — Clinical Research', function: 'Trial design and CRO management' },
                { title: 'Medical Affairs Director', function: 'KOL engagement and evidence generation' },
              ],
            },
            {
              header: 'MedTech & Specialist',
              roles: [
                { title: 'MedTech Sales Director', function: 'Device and diagnostics commercial' },
                { title: 'Biomedical Engineer', function: 'Equipment management and installation' },
                { title: 'Quality Manager (GMP)', function: 'Manufacturing and QMS compliance' },
                { title: 'Pharmacovigilance Manager', function: 'Drug safety and adverse event reporting' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Healthcare"
          cards={[
            {
              headline: "Tier 2 hospital expansion is outpacing available clinical leadership talent",
              body: "India's private hospital sector is expanding rapidly into Tier 2 and Tier 3 cities — but senior clinical leadership talent remains concentrated in metros. Hospital groups building new facilities outside the major metros face a structural hiring challenge that requires a different sourcing approach, not just a higher offer.",
            },
            {
              headline: 'Regulatory compliance verification is essential before any clinical hire',
              body: 'For senior clinical, regulatory affairs, and medical affairs roles, NMC/MCI registration status, specialist board certifications, and compliance history must be verified pre-placement. Discovering a compliance gap after an offer has been signed creates significant legal and operational risk for the organisation.',
            },
            {
              headline: "Pharma hiring is bifurcating between traditional and digital health profiles",
              body: "Pharmaceutical companies with digital health ambitions need leaders who combine deep regulatory and clinical affairs expertise with comfort in data-driven health technology. This profile is increasingly in demand but not well-represented in traditional pharmaceutical recruitment networks.",
            },
          ]}
        />

        <ProcessSteps
          badge="HEALTHCARE HIRING PROCESS"
          headline="How Corponizers Delivers Healthcare Mandates"
          description="A structured 6-stage process that integrates clinical licensing verification into the sourcing process — not the offer stage."
          steps={[
            { step: 1, title: 'Clinical Role & Org Context Briefing', description: 'Understanding the organisation type (hospital / pharma / MedTech), reporting structure, clinical department configuration, NABH accreditation status, and the specific leadership gap being addressed.', iconNode: <Stethoscope className="w-5 h-5" /> },
            { step: 2, title: 'Healthcare Sector Targeted Sourcing', description: 'Targeted outreach to clinical professionals, pharma leaders, and MedTech executives — segmented by organisation type and functional area, not a single healthcare talent pool.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Medical Licensing & Compliance Verification', description: 'Pre-placement verification of NMC/MCI registration, specialist board certification, GCP certification for clinical research roles, and CDSCO compliance history for regulatory affairs mandates.', iconNode: <ShieldCheck className="w-5 h-5" /> },
            { step: 4, title: 'Clinical & Leadership Assessment', description: 'Structured assessment of clinical domain expertise, administrative leadership capability, and cultural alignment with the organisation\'s patient care philosophy and service standards.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: 'A 3–5 candidate shortlist with licensing verification status, competency assessment summaries, and current compensation benchmarks — within the agreed delivery timeline.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Facilitation & Relocation Support', description: 'Compensation structuring, Tier 2 relocation advisory for non-metro placements, and 30-day post-joining follow-up to confirm clinical and team integration is on track.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for a Healthcare or Life Sciences Role?"
          subtext="A Healthcare Practice Lead will respond within 2 business hours — including mandates requiring medical licensing verification and Tier 2 location advisory."
          ctaText="Hire for Healthcare"
          ctaHref="/contact?type=healthcare"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=healthcare"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Healthcare Organisations"
          links={[
            { label: 'Executive Search', description: 'Medical Director and hospital CEO mandate delivery.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: '4-layer verified placement for clinical and pharma leadership.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Campus Hiring', description: 'Structured fresh clinical and pharma graduate intake programs.', href: '/solutions/campus-hiring', iconNode: <ClipboardCheck className="w-4 h-4" /> },
            { label: 'Global Mobility', description: 'Indian diaspora clinical professionals and cross-border placements.', href: '/solutions/global-mobility', iconNode: <Map className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Healthcare Sector Recruitment — Frequently Asked Questions"
          description="Common questions from Hospital CEOs and HR Directors before engaging a healthcare recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit across hospitals, pharmaceuticals, and MedTech?', answer: 'Yes. The Healthcare Practice covers all three segments — hospital groups and single-specialty hospitals, pharmaceutical manufacturers and biotech companies, and MedTech and medical device organisations. The practice also covers diagnostic chains, CROs, and health insurance companies.' },
            { question: 'How does Corponizers verify medical licensing for clinical hires?', answer: 'For senior clinical roles, Corponizers conducts pre-placement verification of NMC/MCI registration status, specialist board certification (e.g., DNB, MRCP, FRCS equivalents), and state medical council registration. For pharmaceutical regulatory roles, GCP certification and CDSCO compliance history are verified. All licensing verification is completed before the candidate is presented to the client.' },
            { question: 'Can Corponizers support hiring for Tier 2 and Tier 3 hospital locations?', answer: "Yes. Non-metro hospital placement is a specific practice area within Healthcare recruitment. Corponizers applies structured relocation advisory, compensation-for-location benchmarking, and candidate readiness assessment to all mandates for locations outside India's major metros." },
            { question: 'What regulatory compliance experience does Corponizers look for in pharma hires?', answer: "For pharmaceutical regulatory affairs, medical affairs, and clinical research roles, Corponizers screens specifically for CDSCO filing experience, GCP certification and trial conduct experience, pharmacovigilance program management, and — for export-oriented companies — FDA 21 CFR and EU GMP compliance familiarity." },
            { question: 'Does the Healthcare Practice cover Digital Health and HealthTech roles?', answer: "Yes. HealthTech and digital health roles — including Chief Digital Officer for hospital groups, Health Informatics leads, telehealth product managers, and clinical data scientists — are active categories within the Healthcare Practice, reflecting the increasing convergence of clinical and technology disciplines in Indian healthcare organisations." },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Healthcare & Life Sciences Recruitment"
          headline="Submit a Healthcare Hiring Mandate"
          subtext="A Healthcare Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Healthcare Mandate"
          serviceFields={[
            { id: 'orgType', label: 'Organisation Type', type: 'select', required: true, options: ['Hospital Group / Health System', 'Single Specialty Hospital', 'Pharmaceutical Company', 'Biotech / Life Sciences', 'MedTech / Medical Devices', 'Diagnostic Chain', 'CRO / Clinical Research', 'HealthTech / Digital Health'] },
            { id: 'function', label: 'Primary Hiring Function', type: 'select', required: true, options: ['Clinical Leadership', 'Hospital Operations', 'Regulatory Affairs', 'Medical Affairs', 'Clinical Research', 'Pharma Manufacturing', 'MedTech Commercial', 'Digital Health'] },
            { id: 'licensingReq', label: 'Medical Licensing Verification Required?', type: 'select', options: ['Yes — NMC/MCI registration check needed', 'Yes — Specialist certification required', 'Yes — GCP / CDSCO compliance check', 'No'] },
            { id: 'location', label: 'Hiring Location', type: 'text', placeholder: 'e.g. Mumbai, Tier 2 city, Pan-India' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
