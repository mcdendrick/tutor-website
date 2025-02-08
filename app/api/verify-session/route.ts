import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
});

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json({ verified: false }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verify the session is paid
    const verified = session.payment_status === 'paid';

    return NextResponse.json({ verified });
  } catch (error) {
    console.error('Error verifying session:', error);
    return NextResponse.json(
      { verified: false },
      { status: 500 }
    );
  }
} 