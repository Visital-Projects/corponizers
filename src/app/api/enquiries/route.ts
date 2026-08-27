import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { EnquiryModel } from '@/models/Enquiry';
import { ContactEnquirySchema, JobApplicationSchema } from '@/lib/zod-schemas';
import { sendContactNotification } from '@/lib/brevo';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Check submission type
    let validatedData;
    if (body.type === 'Job Application') {
      validatedData = JobApplicationSchema.parse(body);
    } else {
      validatedData = ContactEnquirySchema.parse(body);
    }

    const db = await connectToDatabase();
    if (db) {
      const enquiry = await EnquiryModel.create(validatedData);
      
      // Dispatch transactional email asynchronously (do not block the user's response heavily)
      // Note: We await it here so we know it fired, but we swallow errors inside the utility
      await sendContactNotification(validatedData);

      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received. An Enterprise Talent Director will reach out within 24 hours.',
        data: enquiry,
      }, { status: 201 });
    }

    // Graceful response if DB is offline during static export
    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully (Preview Mode).',
      data: validatedData,
    }, { status: 201 });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.errors ? error.errors[0].message : error.message,
    }, { status: 400 });
  }
}
