export async function redirectToCheckout(priceId: string) {
  try {
    console.log('Starting checkout process...', { priceId });
    
    // Create Checkout Session on the server
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Server response error:', data);
      throw new Error(data.error || 'Failed to create checkout session');
    }

    const { url } = data;
    
    // Redirect to Checkout
    if (url) {
      console.log('Redirecting to checkout URL:', url);
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert(error instanceof Error ? error.message : 'Failed to redirect to checkout. Please try again.');
  }
} 