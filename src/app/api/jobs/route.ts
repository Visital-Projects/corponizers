import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { JobModel } from '@/models/Job';
import { JobFormSchema } from '@/lib/zod-schemas';
import { getAdminSession } from '@/lib/auth';

const SEED_JOBS = [
  {
    title: 'Vice President of Artificial Intelligence & Engineering',
    slug: 'vp-ai-engineering',
    department: 'Technology & AI',
    location: 'Singapore (Hybrid)',
    type: 'Executive',
    experience: '12+ Years',
    salaryRange: '$280,000 - $350,000 USD',
    summary: 'Directing enterprise AI initiatives, LLM architecture integration, and a team of 45+ Machine Learning Engineers across global R&D hubs.',
    responsibilities: [
      'Define enterprise AI strategy and technical roadmaps.',
      'Lead cross-functional engineering teams in deploying enterprise LLMs.',
      'Manage $15M+ annual technology budgets and cloud infrastructure costs.'
    ],
    requirements: [
      '10+ years leading senior engineering teams.',
      'Proven record of delivering scalable AI/ML platforms in Fintech or SaaS.',
      'Master’s or Ph.D. in Computer Science, AI, or Quantitative discipline.'
    ],
    benefits: ['Executive Equity Pool', 'Global Health Coverage', 'Flexible Work Options'],
    status: 'Active',
  },
  {
    title: 'Director of Global Talent Acquisition & RPO Strategy',
    slug: 'director-global-ta-rpo',
    department: 'Human Resources',
    location: 'London, UK / Remote',
    type: 'Full-time',
    experience: '10+ Years',
    salaryRange: '£140,000 - £175,000 GBP',
    summary: 'Leading large-scale Recruitment Process Outsourcing (RPO) programs for multinational enterprise clients across EMEA and APAC.',
    responsibilities: [
      'Oversee strategic client recruitment SLAs and delivery metrics.',
      'Architect customized talent acquisition pipelines for high-growth sectors.',
      'Manage client relationships at CHRO and VP Human Resources level.'
    ],
    requirements: [
      'Demonstrated experience in RPO program management.',
      'Deep domain knowledge in enterprise staffing models.',
      'Strong financial acumen and P&L management experience.'
    ],
    benefits: ['Performance Bonus', 'Comprehensive Healthcare', 'Pension Contribution'],
    status: 'Active',
  },
  {
    title: 'Principal Cloud Solutions Architect (AWS / Azure)',
    slug: 'principal-cloud-solutions-architect',
    department: 'Cloud Infrastructure',
    location: 'New York, USA',
    type: 'Full-time',
    experience: '8+ Years',
    salaryRange: '$210,000 - $250,000 USD',
    summary: 'Architecting multi-region resilient cloud infrastructures for Fortune 500 financial institutions enforcing zero-trust security standards.',
    responsibilities: [
      'Design fault-tolerant Kubernetes and cloud container environments.',
      'Lead infrastructure security audits and compliance certifications.',
      'Collaborate with enterprise CISO and CTO teams.'
    ],
    requirements: [
      'AWS Certified Solutions Architect Professional or Azure Solutions Architect Expert.',
      'Extensive hands-on Terraform, Helm, and CI/CD automation expertise.'
    ],
    benefits: ['401(k) Match 6%', 'Stock Options', 'Wellness Allowance'],
    status: 'Active',
  },
  {
    title: 'Chief Financial Officer (CFO) - Enterprise SaaS',
    slug: 'cfo-enterprise-saas',
    department: 'Executive Leadership',
    location: 'Zurich, Switzerland',
    type: 'Executive',
    experience: '15+ Years',
    salaryRange: 'CHF 320,000 - CHF 400,000',
    summary: 'Steering financial operations, capital allocation, and M&A activities for a high-growth enterprise software provider preparing for Series C expansion.',
    responsibilities: [
      'Lead global financial planning, audit, and tax compliance.',
      'Direct investor relations and venture capital board reporting.',
      'Structure international corporate tax and treasury frameworks.'
    ],
    requirements: [
      'CPA / CFA qualification with proven CFO leadership track record.',
      'Demonstrated experience leading enterprise software capital raises or IPO.'
    ],
    benefits: ['Car Allowance', 'Executive Bonus Guarantee', 'Private Banking Perks'],
    status: 'Active',
  }
];

export async function GET(request: Request) {
  try {
    const db = await connectToDatabase();
    if (!db) {
      // Return static seed fallback data if DB is offline during build
      return NextResponse.json({ success: true, data: SEED_JOBS, source: 'fallback' });
    }

    const { searchParams } = new URL(request.url);
    const department = searchParams.get('department');
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { status: 'Active' };

    if (department && department !== 'All') {
      query.department = department;
    }
    if (type && type !== 'All') {
      query.type = type;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const jobs = await JobModel.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: jobs });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validated = JobFormSchema.parse(body);

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
    }

    const slug = validated.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newJob = await JobModel.create({ ...validated, slug });

    return NextResponse.json({ success: true, data: newJob }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
