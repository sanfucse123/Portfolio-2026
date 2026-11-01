// Email utility using Resend API
// Handles contact form submissions

import { Resend } from 'resend';

// Created on first send, so builds and pages work without RESEND_API_KEY set.
let resendClient: Resend | null = null;
function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not set');
  }
  resendClient ??= new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

// Resend's shared test sender works without a verified domain; set CONTACT_FROM_EMAIL once yours is verified.
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

export interface ContactEmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Sends contact form submission email
 * @param data Contact form data
 * @returns Promise with email result
 */
export async function sendContactEmail(data: ContactEmailData, targetEmail?: string) {
  const { name, email, subject, message } = data;

  try {
    const result = await getResend().emails.send({
      from: FROM_ADDRESS,
      to: targetEmail || process.env.CONTACT_EMAIL || 'sanfucse007@gmail.com',
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            ${subject ? `<p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
