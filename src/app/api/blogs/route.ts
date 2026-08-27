import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { BlogModel } from '@/models/Blog';
import { BlogFormSchema } from '@/lib/zod-schemas';
import { getAdminSession } from '@/lib/auth';

const SEED_BLOGS = [
  {
    title: 'The 2026 Executive Search Playbook: Navigating Leadership Scarcity in AI Era',
    slug: 'executive-search-playbook-2026',
    category: 'Executive Leadership',
    readTime: '6 min read',
    author: {
      name: 'Alexander Sterling',
      role: 'Managing Partner, Executive Practice',
      avatar: '/authors/alexander.jpg',
    },
    summary: 'A strategic framework for Fortune 500 boards and CHROs on assessing technical competence alongside strategic vision when appointing C-suite leaders.',
    content: `
# Navigating C-Suite Talent Acquisition in a Transforming Market

Enterprise organizations are undergoing unprecedented transformation. The convergence of generative AI, geopolitical shifts, and evolving workforce dynamics requires a new breed of executive leadership.

### Key Executive Competency Shifts for 2026:
1. **Algorithmic Visionary**: Ability to evaluate enterprise AI investments against ROI and ethical risk frameworks.
2. **Adaptive Governance**: Leading cross-functional matrixed organizations across international jurisdictions.
3. **Talent Retention Engineering**: Establishing organizational culture that retains tier-one engineering talent in hyper-competitive markets.

---

### The Confidential Executive Sourcing Methodology

Traditional recruitment avenues fall short when identifying high-performing C-Suite executives. Over 85% of successful VP and Board placements originate from passive talent mapping.

> "True executive search is not about reviewing active resumes; it is about building relationship capital with leaders who are currently driving market dominance elsewhere."

Our double-blind assessment protocol guarantees 100% confidentiality while providing rigorous psychometric and operational capability verification before client introductions.
    `,
    tags: ['Executive Search', 'C-Suite', 'AI Leadership', 'Enterprise Strategy'],
    status: 'Published',
    publishedAt: new Date(),
  },
  {
    title: 'RPO vs In-House Talent Acquisition: SLA and Cost Performance Benchmark',
    slug: 'rpo-vs-in-house-ta-benchmark',
    category: 'Workforce Strategy',
    readTime: '8 min read',
    author: {
      name: 'Victoria Vance',
      role: 'Head of Global RPO Solutions',
      avatar: '/authors/victoria.jpg',
    },
    summary: 'Comprehensive financial and operational analysis comparing enterprise Recruitment Process Outsourcing against internal recruitment expansion.',
    content: `
# Executive Decision Guide: Scaling Enterprise Talent Delivery

As enterprises scale past 1,000 headcount, talent acquisition bottlenecks directly impact time-to-market for critical business units. 

### Key Findings from 2025-2026 Benchmark Data:
- **Cost Per Hire Reduction**: Enterprise RPO delivery cuts direct recruitment cost per hire by **34.2%**.
- **Time-to-Fill SLA**: Average time-to-fill drops from 48 days (internal) to **16 days** under dedicated RPO SLAs.
- **Offer Acceptance Rate**: Exceeds **94.8%** due to dedicated employer brand positioning and candidate concierge protocols.

---

### Implementing a Hybrid RPO Framework

Organizations do not need to replace internal HR. The most successful global models utilize an **Embedded RPO** strategy where Corponizers talent partners integrate directly into client ATS and communication platforms during expansion sprints.
    `,
    tags: ['RPO', 'Talent Acquisition', 'Cost Optimization', 'SLA Framework'],
    status: 'Published',
    publishedAt: new Date(),
  },
  {
    title: 'Cross-Border Talent Mobility: Navigating Compliance & Global Visa Frameworks',
    slug: 'cross-border-talent-mobility-compliance',
    category: 'Global Mobility',
    readTime: '5 min read',
    author: {
      name: 'David Chen',
      role: 'Director of International Compliance',
      avatar: '/authors/david.jpg',
    },
    summary: 'Essential legal considerations, tax residency rules, and visa strategies for hiring specialist talent across North America, EMEA, and APAC.',
    content: `
# Global Hiring Without Compliance Friction

Acquiring tier-one engineering talent often requires looking beyond geographic borders. However, international hiring introduces complex regulatory, tax, and visa requirements.

### Critical Compliance Pillars:
1. **Permanent Establishment Risk**: Preventing unexpected corporate tax liabilities when employing international remote executives.
2. **IP Assignment Verification**: Ensuring cross-border intellectual property contracts comply with local labor courts.
3. **Fast-Track Work Permits**: Utilizing specialized regional employer-of-record (EOR) and direct visa sponsorship tracks.
    `,
    tags: ['Global Mobility', 'Visa Compliance', 'International Hiring', 'EOR'],
    status: 'Published',
    publishedAt: new Date(),
  }
];

export async function GET(request: Request) {
  try {
    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ success: true, data: SEED_BLOGS, source: 'fallback' });
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { status: 'Published' };

    if (category && category !== 'All') {
      query.category = category;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const blogs = await BlogModel.find(query).sort({ publishedAt: -1 });

    return NextResponse.json({ success: true, data: blogs });
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
    const validated = BlogFormSchema.parse(body);

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
    }

    const slug = validated.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const newBlog = await BlogModel.create({
      ...validated,
      slug,
      author: {
        name: validated.authorName,
        role: validated.authorRole,
      },
    });

    return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
