import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

if (!process.env.NEXT_PUBLIC_DOMAIN) {
  throw new Error('Missing NEXT_PUBLIC_DOMAIN environment variable');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
});

export async function POST(request: Request) {
  try {
    console.log('Starting checkout session creation...');
    
    const body = await request.json();
    const { priceId } = body;

    if (!priceId) {
      console.error('Missing priceId in request body');
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 });
    }

    // Log the configuration being used
    console.log({
      priceId,
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      stripeMode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'live' : 'test'
    });

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        submit: {
          message: 'We will contact you after your payment to schedule your session(s).',
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    });

    console.log('Session created successfully:', { sessionId: session.id, url: session.url });
    
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error details:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Stripe.errors.StripeError ? error.type : 'unknown'
    });

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 