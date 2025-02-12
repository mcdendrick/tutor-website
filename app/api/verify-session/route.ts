import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ verified: false }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verify the session is paid
    const verified = session.payment_status === 'paid';

    if (verified) {
      // Send confirmation email to customer
      await resend.emails.send({
        from: 'Writing Excellence <celestelehnardt@gmail.com>',
        to: session.customer_details?.email || '',
        subject: 'Thank You for Booking a Writing Session',
        html: `
          <h1>Thank You for Your Booking!</h1>
          <p>Dear ${session.customer_details?.name},</p>
          <p>Thank you for booking a writing tutoring session. I will contact you shortly to schedule your session(s).</p>
          <p>Best regards,<br>Celeste Lehnardt</p>
        `
      });
    }

    return NextResponse.json({ verified });
  } catch (error) {
    console.error('Error verifying session:', error);
    return NextResponse.json(
      { verified: false },
      { status: 500 }
    );
  }
} 