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

import { Search, ClipboardCheck, Map, FileCheck, Users, GraduationCap, BookOpen } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Education & EdTech Recruitment India | Corponizers',
  description: 'Specialist hiring for academic leaders, university administrators, EdTech executives, and campus operations heads across India\'s education institutions and EdTech organisations.',
});

export default function EducationIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Education & EdTech Practice"
          title="Education & EdTech Recruitment"
          description="Placing Chancellors, academic directors, campus COOs, and EdTech product leaders across India's universities, K-12 institutions, skills development organisations, and education technology companies."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Education & EdTech' },
          ]}
          variant="brand"
          ctaText="Hire for Education & EdTech"
          ctaHref="/contact?type=education"
          imageSrc="/images/industries/education.webp"
          imageAlt="University and education sector faculty recruitment strategy meeting"
        />

        <ChallengeStatement
          eyebrow="THE EDUCATION HIRING CHALLENGE"
          headline="When Academic Credibility and Operational Leadership Must Coexist"
          positioning="Education institutions in India face a distinctive hiring challenge: the same leadership role often requires both academic credibility — the research record, the faculty trust, the regulatory familiarity — and modern operational management capability. These two profiles have historically come from entirely different career paths. As India's education sector professionalises and EdTech companies scale, the demand for leaders who bridge this gap is outpacing supply. Corponizers' Education Practice is built to identify, assess, and deliver exactly this combination."
          differentiator="We understand the AICTE and UGC regulatory environment — and the operational leadership demands that sit alongside it."
          challenges={[
            {
              title: 'Academic leadership succession is an underprepared risk for most institutions',
              description: "Most Indian universities and autonomous institutions do not have a structured succession pipeline for Vice Chancellor, Principal, and Registrar roles. When a vacancy arises, institutions face an urgent, confidential search under AICTE and UGC compliance constraints — a combination that requires a specialist approach, not a general executive search.",
            },
            {
              title: 'EdTech scaling demands product and growth leadership that academic networks cannot supply',
              description: "EdTech companies scaling from seed to Series B face a specific talent gap: the product managers, growth marketers, and learning experience designers who can scale digital education products with academic rigour. This profile sits at an intersection that neither traditional education hiring nor pure technology hiring naturally reaches.",
            },
            {
              title: 'Government and private institution hiring operates under entirely different constraints',
              description: 'Government-funded universities operate under UGC service conditions, reservation requirements, and competitive selection processes. Private institutions and EdTech companies operate on market-competitive compensation with board governance. Recruiters who treat these as the same market consistently miss on both.',
            },
          ]}
        />

        <IndustryRoleMap
          badge="EDUCATION ROLE TAXONOMY"
          headline="Roles We Place Across Education & EdTech"
          description="Academic leadership to operations management and EdTech product sourcing across all segments of Indian education."
          columns={[
            {
              header: 'Academic Leadership',
              roles: [
                { title: 'Vice Chancellor / Chancellor', function: 'University governance and academic vision' },
                { title: 'Principal / Dean', function: 'College / faculty academic leadership' },
                { title: 'Director — Academic Affairs', function: 'Curriculum, quality, and faculty management' },
                { title: 'Head — Research & Innovation', function: 'Research output and industry linkages' },
              ],
            },
            {
              header: 'Operations & Admin',
              roles: [
                { title: 'Registrar', function: 'Academic administration and compliance' },
                { title: 'COO / Director — Operations', function: 'Campus infrastructure and administration' },
                { title: 'Head — Admissions', function: 'Student recruitment and enrolment' },
                { title: 'Head — Placements', function: 'Industry relations and career services' },
              ],
            },
            {
              header: 'EdTech & Specialist',
              roles: [
                { title: 'EdTech CEO / Product Head', function: 'Learning platform leadership and roadmap' },
                { title: 'Head — Curriculum & Pedagogy', function: 'Learning design and content strategy' },
                { title: 'Head — Sales (EdTech B2B)', function: 'Institution and enterprise sales' },
                { title: 'LMS / Technology Manager', function: 'Learning management system and ops' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in Indian Education"
          cards={[
            {
              headline: "Academic leadership succession is structurally underprepared in most Indian institutions",
              body: "When a Vice Chancellor or Principal role becomes vacant, institutions typically have weeks — not months — to identify and appoint a qualified successor under AICTE / UGC compliance constraints. Institutions without a pre-built succession pipeline or a recruitment partner who understands the regulatory context face a significantly compressed, high-risk hiring process.",
            },
            {
              headline: "EdTech product-market fit is creating hybrid leadership roles that no standard search addresses",
              body: "As EdTech companies mature beyond content creation into adaptive learning platforms and enterprise LMS products, they need leaders who combine pedagogy expertise with product management capability. This intersection is not covered by academic hiring networks or standard technology recruiters — it requires a practice that operates across both.",
            },
          ]}
        />

        <ProcessSteps
          badge="EDUCATION HIRING PROCESS"
          headline="How Corponizers Delivers Education Mandates"
          description="Academic credibility assessment combined with operational leadership evaluation — structured for the unique compliance context of Indian education institutions."
          steps={[
            { step: 1, title: 'Institution Context & Regulatory Briefing', description: "Understanding institution type (deemed university / autonomous college / EdTech / K-12), regulatory affiliation (AICTE / UGC / CBSE / State Board), governance structure, and the specific leadership gap being addressed.", iconNode: <BookOpen className="w-5 h-5" /> },
            { step: 2, title: 'Academic & EdTech Network Outreach', description: "Targeted outreach across academic leaders, administrators, and EdTech executives through academic conference networks, institutional governance bodies, and EdTech industry communities.", iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Regulatory Eligibility & Academic Credential Verification', description: "For academic leadership roles — verification of UGC/AICTE qualification eligibility, PhD and research output review, and regulatory compliance standing. For EdTech roles — academic background and product credential assessment.", iconNode: <GraduationCap className="w-5 h-5" /> },
            { step: 4, title: 'Institutional Fit & Leadership Style Assessment', description: "Assessment of candidate fit with the institution's academic culture, governance expectations, faculty relations style, and — for private institutions — board and investor alignment.", iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Verified Shortlist Delivery', description: "A 3–5 candidate shortlist with academic credential verification, eligibility confirmation, and compensation benchmarks — within the agreed mandate timeline.", iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Appointment Advisory & Onboarding Support', description: "Compensation structuring within institutional governance parameters, regulatory appointment documentation support, and 30-day post-appointment check-in.", iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Hiring for an Academic Leadership or EdTech Role?"
          subtext="An Education Practice Lead will respond within 2 business hours — including mandates with AICTE / UGC regulatory constraints."
          ctaText="Hire for Education & EdTech"
          ctaHref="/contact?type=education"
          secondaryText="Speak to a Practice Lead"
          secondaryHref="/contact?type=education"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Education Organisations"
          links={[
            { label: 'Executive Search', description: 'Vice Chancellor, CEO, and academic director mandate delivery.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'Permanent Hiring', description: 'Verified placement for academic, operations, and EdTech roles.', href: '/solutions/permanent-hiring', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Campus Hiring', description: 'Institution-partnership programs for graduate talent pipelines.', href: '/solutions/campus-hiring', iconNode: <GraduationCap className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="Education Sector Recruitment — Frequently Asked Questions"
          description="Common questions from Trustees and HR heads before engaging an education recruitment mandate."
          items={[
            { question: 'Does Corponizers recruit for both academic leadership and EdTech organisations?', answer: 'Yes. The Education Practice covers traditional higher education institutions (deemed universities, engineering and management colleges, autonomous institutions), K-12 school chains, skills development organisations, and EdTech companies across B2C, B2B, and government-partnership models.' },
            { question: 'How does Corponizers handle AICTE and UGC qualification eligibility requirements?', answer: 'For academic leadership roles governed by AICTE and UGC norms, Corponizers verifies UGC/AICTE minimum qualification eligibility, PhD completion and research output, and service condition compliance before any candidate is presented to the institution. This prevents the significant delays and governance risk that arise when an ineligible candidate is identified late in the appointment process.' },
            { question: 'Can Corponizers maintain confidentiality for Vice Chancellor and Principal searches?', answer: 'Yes. Academic leadership searches — particularly at Vice Chancellor, Principal, and Dean level — are conducted under strict non-attribution protocols. The institution identity and search nature are not disclosed until explicit mutual consent is provided.' },
            { question: 'Does Corponizers recruit for EdTech roles specifically?', answer: 'Yes. EdTech mandates cover academic leadership (curriculum heads, pedagogical directors), product management (learning platform product managers, UX leads), growth and sales (B2B education sales, institutional partnerships), and technology (LMS engineers, data scientists for adaptive learning). The practice spans the full EdTech organisation structure.' },
            { question: 'What is the typical timeline for an academic leadership mandate?', answer: 'Academic leadership mandates are delivered within 18–21 business days of mandate confirmation — reflecting the additional time required for UGC/AICTE eligibility verification and academic credential review. For EdTech and operational roles, the standard 14-business-day shortlist timeline applies.' },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="Education & EdTech Recruitment"
          headline="Submit an Education Hiring Mandate"
          subtext="An Education Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Education Mandate"
          serviceFields={[
            { id: 'institutionType', label: 'Institution / Org Type', type: 'select', required: true, options: ['Deemed / Central University', 'Autonomous Engineering / Management College', 'K-12 School Chain', 'Skills Development Organisation', 'EdTech B2C Company', 'EdTech B2B Company', 'Study Abroad / Test Prep', 'Government Education Body'] },
            { id: 'function', label: 'Hiring Function', type: 'select', required: true, options: ['Academic Leadership (VC / Principal / Dean)', 'Academic Administration (Registrar / COO)', 'EdTech Product / Tech', 'EdTech Growth / Sales', 'Admissions & Student Recruitment', 'Placements & Industry Relations', 'Curriculum & Pedagogy'] },
            { id: 'ugcRequired', label: 'AICTE / UGC Eligibility Required?', type: 'select', options: ['Yes — strict UGC norms apply', 'Yes — AICTE applicable', 'No regulatory constraint', 'Not applicable (EdTech)'] },
            { id: 'confidential', label: 'Confidential Search Required?', type: 'select', options: ['Yes — non-attribution required', 'Partially confidential', 'Open search'] },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
