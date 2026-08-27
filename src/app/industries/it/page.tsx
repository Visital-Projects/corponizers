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

import { Search, ClipboardCheck, Map, FileCheck, Users, Code2, Cpu } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'IT & Technology Recruitment India | Corponizers',
  description: 'Specialist hiring for software engineers, AI/ML researchers, cloud architects, and technology leaders across India\'s IT services, SaaS, and product technology sector.',
});

export default function ITIndustryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-1">

        <PageHero
          eyebrow="Information Technology Practice"
          title="IT & Technology Talent Acquisition"
          description="Specialist sourcing for software engineers, AI/ML researchers, cloud architects, and engineering leaders across India's IT services companies, SaaS startups, and product technology organisations."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: 'Information Technology' },
          ]}
          variant="brand"
          ctaText="Build Your Technology Team"
          ctaHref="/contact?type=it"
          imageSrc="/images/industries/it.webp"
          imageAlt="IT and technology engineering team hiring strategy session"
        />

        <ChallengeStatement
          eyebrow="THE IT HIRING CHALLENGE"
          headline="Why Technology Talent Is the Hardest Problem in Indian Recruiting"
          positioning="India has one of the world's largest software engineering talent pools — and one of the most competitive hiring environments for the top 10% of that pool. The engineers, architects, and AI researchers who can genuinely move the needle are passive, well-compensated, and unresponsive to generic outreach. Corponizers' Technology Practice reaches this segment through community-level sourcing, technical pre-screening that earns credibility, and a deep understanding of what strong engineering candidates actually want to see in a career conversation."
          differentiator="The best engineers do not apply — they evaluate. We approach them as peers, not job-fillers."
          challenges={[
            {
              title: 'AI/ML and emerging tech talent is a genuinely constrained pool',
              description: "India's AI/ML researchers, LLM engineers, and platform architects represent a small, highly connected talent community. They evaluate opportunities through peer reputation and company technical credibility — not compensation packages alone. Generic sourcing reaches only the least differentiated candidates in this pool.",
            },
            {
              title: 'Engineering hiring cycles are too long for fast-moving product roadmaps',
              description: 'A 6-week hiring cycle for a principal engineer working on a critical product milestone is not a hiring inconvenience — it is a business risk. Technology hiring speed requires pre-screened talent access, not a process that begins from scratch at each requisition.',
            },
            {
              title: 'Technical pre-screening quality determines interview pipeline quality',
              description: "When non-technical recruiters screen engineering CVs, the quality of the client interview pipeline reflects it. Engineers who pass keyword screening but lack the depth the role requires waste your engineering team's interview time and damage your employer brand within the tech community.",
            },
          ]}
        />

        <IndustryRoleMap
          badge="IT ROLE TAXONOMY"
          headline="Roles We Place Across the Technology Stack"
          description="From senior individual contributors to engineering leadership — across full-stack, AI/ML, cloud, data, and platform engineering."
          columns={[
            {
              header: 'Engineering Leadership',
              roles: [
                { title: 'CTO / VP Engineering', function: 'Technology strategy and org leadership' },
                { title: 'Principal / Staff Engineer', function: 'Technical architecture and IC excellence' },
                { title: 'Engineering Manager', function: 'Team delivery and technical direction' },
                { title: 'Head — Platform Engineering', function: 'Infrastructure, SRE, and DevOps' },
              ],
            },
            {
              header: 'AI / Data / Cloud',
              roles: [
                { title: 'AI / ML Engineer', function: 'Model development, LLMs, MLOps' },
                { title: 'Data Engineer / Architect', function: 'Pipelines, warehouses, and data platforms' },
                { title: 'Cloud Architect (AWS/GCP/Azure)', function: 'Cloud-native architecture and migration' },
                { title: 'Data Scientist', function: 'Analytics, forecasting, and decision models' },
              ],
            },
            {
              header: 'Product & Specialist',
              roles: [
                { title: 'Senior Software Engineer', function: 'Backend, frontend, or full-stack development' },
                { title: 'Product Manager (Technical)', function: 'Product roadmap and engineering alignment' },
                { title: 'Security Engineer / CISO', function: 'AppSec, cloud security, and governance' },
                { title: 'DevOps / SRE Engineer', function: 'CI/CD, observability, and reliability' },
              ],
            },
          ]}
        />

        <SectorInsightCards
          badge="SECTOR INTELLIGENCE"
          sectionHeadline="Hiring Realities in India's Technology Market"
          cards={[
            {
              headline: "The top 10% of India's engineering talent is passive and community-embedded",
              body: "Senior engineers and AI researchers with strong track records are not responding to job board applications or LinkedIn InMails. They are active in open-source communities, engineering conferences, and technical networks. Reaching them requires community-level credibility, a compelling technical narrative, and an approach that demonstrates the recruiter understands their work.",
            },
            {
              headline: "India's Tier 2 tech cities are growing but face different talent dynamics",
              body: "Engineering talent is rapidly expanding beyond Bengaluru, Hyderabad, and Pune — into Jaipur, Coimbatore, Bhubaneswar, and Kochi. These markets have different compensation expectations, mobility patterns, and employer brand dynamics than the major hubs. A single national approach misses these nuances.",
            },
            {
              headline: "GCC engineering team builds in India require a different sourcing strategy",
              body: "Global Capability Centres building engineering teams in India compete with the best Indian product companies for the same talent. Success requires a clear technology charter narrative, competitive compensation benchmarking, and sourcing through the professional networks where GCC-interested talent is actually evaluating opportunities.",
            },
          ]}
        />

        <ProcessSteps
          badge="IT HIRING PROCESS"
          headline="How Corponizers Delivers Technology Mandates"
          description="Community-level sourcing combined with technical pre-screening — designed to earn the respect of strong engineers before asking for a conversation."
          steps={[
            { step: 1, title: 'Technical Role & Stack Briefing', description: 'Deep-dive with CTO or engineering lead on the technology stack, system architecture, team velocity, technical challenges, and the engineering impact the hire must deliver.', iconNode: <Code2 className="w-5 h-5" /> },
            { step: 2, title: 'Community-Level Sourcing', description: 'Passive talent outreach through GitHub, open-source community engagement, engineering networks, and professional communities — not LinkedIn keyword filtering alone.', iconNode: <Search className="w-5 h-5" /> },
            { step: 3, title: 'Technical Domain Pre-Screening', description: 'Domain-relevant technical screening covering stack proficiency, architecture thinking, system design awareness, and practical problem-solving — conducted before any candidate is presented to the client.', iconNode: <Cpu className="w-5 h-5" /> },
            { step: 4, title: 'Engineering Culture & Team Fit', description: 'Assessment of candidate adaptability to the engineering team\'s culture, sprint discipline, code review practices, documentation standards, and remote or hybrid working model.', iconNode: <ClipboardCheck className="w-5 h-5" /> },
            { step: 5, title: 'Shortlist with Technical Summaries', description: 'A vetted shortlist with technical pre-screening outcomes, GitHub or portfolio links, career trajectory analysis, and compensation benchmarks — enabling faster, higher-quality client interviews.', iconNode: <FileCheck className="w-5 h-5" /> },
            { step: 6, title: 'Offer Advisory & Team Integration', description: 'Compensation negotiation, competing offer advisory, and 30-day post-joining follow-up to confirm engineering team integration is tracking well.', iconNode: <Users className="w-5 h-5" /> },
          ]}
        />

        <SolutionCTABanner
          headline="Building an Engineering Team or Filling a Critical Tech Role?"
          subtext="A Technology Practice Lead will respond within 2 business hours with the sourcing approach and expected timeline for your specific technical requirement."
          ctaText="Build Your Technology Team"
          ctaHref="/contact?type=it"
          secondaryText="Discuss a Tech Mandate"
          secondaryHref="/contact?type=it"
        />

        <SolutionCrossLinks
          headline="Relevant Corponizers Solutions for Technology Organisations"
          links={[
            { label: 'Tech Hiring', description: 'Niche engineering sourcing with technical pre-screening built in.', href: '/solutions/tech-hiring', iconNode: <Code2 className="w-4 h-4" /> },
            { label: 'Executive Search', description: 'CTO, VP Engineering, and technology leadership mandates.', href: '/solutions/executive-search', iconNode: <Search className="w-4 h-4" /> },
            { label: 'RPO', description: 'Embedded TA for high-growth engineering team builds.', href: '/solutions/rpo', iconNode: <Users className="w-4 h-4" /> },
            { label: 'Campus Hiring', description: 'Structured graduate intake from IITs and top engineering colleges.', href: '/solutions/campus-hiring', iconNode: <ClipboardCheck className="w-4 h-4" /> },
          ]}
        />

        <FAQSection
          title="IT Sector Recruitment — Frequently Asked Questions"
          description="Common questions from CTOs and Engineering Managers before engaging a technology recruitment mandate."
          items={[
            { question: 'How does Corponizers reach senior engineers who are not looking for jobs?', answer: "Passive senior engineering talent is reached through community-level engagement — GitHub contribution analysis, open-source project participation tracking, engineering conference networks, and direct outreach channels where experienced engineers are actually active. The outreach is technically credible, not keyword-matched — which is why senior engineers respond." },
            { question: 'Does Corponizers cover AI/ML, LLM, and emerging technology roles?', answer: 'Yes. AI/ML engineers, LLM fine-tuning specialists, MLOps engineers, computer vision researchers, and reinforcement learning specialists are active sourcing categories. These are passive-talent-first mandates sourced through research community networks and open-source contributor databases.' },
            { question: 'How is technical pre-screening conducted?', answer: 'Technical pre-screening is conducted by domain-familiar specialists — covering programming language proficiency, relevant system design patterns, architecture knowledge, and practical experience relevant to the specific role. Results are summarised in the candidate dossier presented to the client engineering team — enabling them to calibrate interview depth based on the pre-screening outcome.' },
            { question: 'Can Corponizers support GCC engineering team builds in India?', answer: "Yes. Global Capability Centre engineering team builds are a specific practice area — involving talent mapping of available engineering profiles in target Indian cities, GCC employer brand positioning advisory, compensation benchmarking against the Indian product market, and structured batch hiring processes for simultaneous multi-role fills." },
            { question: 'What technology hubs does the IT Practice cover?', answer: "All major Indian technology hubs — Bengaluru, Hyderabad, Pune, Chennai, NCR, and Mumbai — are primary practice geographies. Emerging Tier 2 tech markets including Jaipur, Coimbatore, Kochi, and Bhubaneswar are also covered with hub-specific sourcing networks." },
          ]}
        />

        <SolutionEnquiryForm
          serviceType="IT & Technology Recruitment"
          headline="Share Your Engineering Requirement"
          subtext="A Technology Practice Lead will respond within 2 business hours."
          ctaLabel="Submit Tech Hiring Mandate"
          serviceFields={[
            { id: 'techStack', label: 'Technology Stack / Domain', type: 'text', required: true, placeholder: 'e.g. Python, React, AWS, AI/ML, Cloud-native, DevOps' },
            { id: 'roleLevel', label: 'Role Level', type: 'select', required: true, options: ['Senior Engineer (3–6 yrs)', 'Staff / Principal Engineer', 'Engineering Manager', 'VP / Head of Engineering', 'CTO / Technical Co-Founder'] },
            { id: 'orgType', label: 'Organisation Type', type: 'select', options: ['Product / SaaS Company', 'IT Services / Consulting', 'FinTech', 'HealthTech', 'E-commerce', 'AI / Deep Tech Startup', 'GCC / Captive Centre', 'Other'] },
            { id: 'locations', label: 'Location / Remote Policy', type: 'text', placeholder: 'e.g. Bengaluru, Hybrid, Remote-first' },
          ]}
        />

        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
