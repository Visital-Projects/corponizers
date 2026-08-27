import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { EnquiryModel } from '@/models/Enquiry';
import { getAdminSession } from '@/lib/auth';

const SEED_ENQUIRIES = [
  {
    _id: 'enq-1',
    type: 'Executive Search',
    name: 'Marcus Vance',
    email: 'marcus.vance@apexglobal.com',
    phone: '+1 415 890 1200',
    company: 'Apex Global Logistics',
    jobTitle: 'Chief Operating Officer Search',
    serviceType: 'Executive Search',
    message: 'Seeking a seasoned Chief Operating Officer to lead our global supply chain expansion across 14 markets in APAC.',
    status: 'New',
    createdAt: new Date(),
  },
  {
    _id: 'enq-2',
    type: 'RPO Solution',
    name: 'Sarah Jenkins',
    email: 's.jenkins@nexusfintech.io',
    phone: '+44 20 7946 0912',
    company: 'Nexus Financial Technologies',
    serviceType: 'RPO Scaling',
    message: 'We need an embedded recruitment team to hire 65 Senior Software Engineers & DevOps Leads over the next 2 quarters.',
    status: 'Reviewed',
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    _id: 'enq-3',
    type: 'Job Application',
    name: 'Elena Rostova',
    email: 'elena.rostova@devmail.com',
    phone: '+1 650 432 9871',
    jobSlug: 'vp-ai-engineering',
    jobTitle: 'Vice President of Artificial Intelligence & Engineering',
    resumeUrl: 'https://linkedin.com/in/elenarostova',
    message: 'Enclosing my credentials for the VP of AI position. Over 12 years driving ML teams at scale.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 172800000),
  }
];

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json({ success: true, data: SEED_ENQUIRIES });
    }

    const enquiries = await EnquiryModel.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: enquiries });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
    }

    const db = await connectToDatabase();
    if (db) {
      await EnquiryModel.findByIdAndUpdate(id, { status });
    }

    return NextResponse.json({ success: true, message: 'Status updated' });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
