const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export interface BrevoPayload {
  sender: { name: string; email: string };
  to: { email: string }[];
  subject: string;
  htmlContent: string;
}

/**
 * Validates Brevo configuration and safely dispatches an email using the Brevo REST API.
 * This function should only be executed on the server.
 */
async function sendEmail(subject: string, htmlContent: string) {
  const API_KEY = process.env.BREVO_API_KEY;
  const FROM_EMAIL = process.env.BREVO_FROM_EMAIL || 'hello@visital.in';
  const TO_EMAIL = process.env.BREVO_TO_EMAIL || 'sambit@corponizers.com';

  if (!API_KEY) {
    console.error('[Brevo API] API key is missing. Transactional email aborted.');
    return false;
  }

  const payload: BrevoPayload = {
    sender: { name: 'Corponizers System', email: FROM_EMAIL },
    to: [{ email: TO_EMAIL }],
    subject,
    htmlContent,
  };

  try {
    const res = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // We only log safely to the server console, never leaking to the client
      const errorText = await res.text();
      console.error('[Brevo API] Email dispatch failed:', res.status, errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Brevo API] Request failed completely', error);
    return false;
  }
}

/**
 * Formats and sends the Contact Form enquiry email.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendContactNotification(data: any) {
  const subject = `New Corponizers Website Enquiry — ${data.type || 'General'}`;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; background-color: #ffffff; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="padding: 24px; background-color: #f8fafc; border-bottom: 2px solid #dc2626;">
        <h2 style="color: #396EEF; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 0.05em;">CORPONIZERS — NEW WEBSITE ENQUIRY</h2>
      </div>
      <div style="padding: 24px;">
        <p style="margin-top: 0;"><strong>Service Desk:</strong> ${data.type || 'N/A'}</p>
        <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Job Title:</strong> ${data.jobTitle || 'N/A'}</p>
        <div style="margin-top: 24px; padding: 16px; background-color: #f1f5f9; border-radius: 4px;">
          <strong>Requirement:</strong><br/>
          <p style="margin-bottom: 0; white-space: pre-wrap;">${data.message || 'N/A'}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #64748b; margin-bottom: 0;">
          <strong>Source:</strong> ${data.source || 'Corponizers Website'}<br/>
          <strong>Submitted:</strong> ${timestamp}
        </p>
      </div>
    </div>
  `;

  return sendEmail(subject, htmlContent);
}

/**
 * Formats and sends the Newsletter subscription email.
 */
export async function sendNewsletterNotification(email: string) {
  const subject = `New Corponizers Newsletter Subscription`;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; background-color: #ffffff; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="padding: 24px; background-color: #f8fafc; border-bottom: 2px solid #dc2626;">
        <h2 style="color: #396EEF; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 0.05em;">CORPONIZERS — NEWSLETTER SUBSCRIPTION</h2>
      </div>
      <div style="padding: 24px;">
        <p style="margin-top: 0; font-size: 16px;"><strong>Subscriber Email:</strong> ${email}</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 12px; color: #64748b; margin-bottom: 0;">
          <strong>Source:</strong> Corponizers Website<br/>
          <strong>Submitted:</strong> ${timestamp}
        </p>
      </div>
    </div>
  `;

  return sendEmail(subject, htmlContent);
}
