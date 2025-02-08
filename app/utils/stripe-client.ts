export async function redirectToCheckout(priceId: string) {
  try {
    // Create Checkout Session on the server
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const { url } = await response.json();
    
    // Redirect to Checkout
    if (url) {
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to redirect to checkout. Please try again.');
  }
} 