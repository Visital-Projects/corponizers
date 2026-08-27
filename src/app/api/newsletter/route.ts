import { NextResponse } from 'next/server';
import { sendNewsletterNotification } from '@/lib/brevo';
import { z } from 'zod';

const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    const validatedData = NewsletterSchema.parse(body);

    // Dispatch transactional email asynchronously
    // In a real application, you might save to DB here first.
    // For now, we immediately notify via Brevo.
    await sendNewsletterNotification(validatedData.email);

    return NextResponse.json({
      success: true,
      message: "You're subscribed successfully.",
    }, { status: 201 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.errors ? error.errors[0].message : 'Invalid request',
    }, { status: 400 });
  }
}
