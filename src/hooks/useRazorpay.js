import { useState, useEffect, useCallback } from 'react';

const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

export function useRazorpay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    // Check if script is already present
    if (window.Razorpay) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = () => {
      setLoadingError('Failed to load Razorpay Payment Gateway SDK.');
    };

    document.body.appendChild(script);
  }, []);

  const openPaymentModal = useCallback(
    async ({
      amountInINR,
      productName,
      productDescription,
      onSuccess,
      onFailure,
      prefillEmail = '',
      prefillPhone = '',
      prefillName = ''
    }) => {
      if (!window.Razorpay) {
        alert('Razorpay Payment Gateway is still loading. Please try again in a second.');
        return;
      }

      const amountInPaise = Math.round(amountInINR * 100);
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_THonuwRGOpJ1KH';

      let orderId = null;
      let hasBackend = false;

      // STEP 1: Attempt to create backend order if server API is available
      try {
        const orderResponse = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: 'INR',
            receipt: `rcpt_${Date.now()}`
          })
        });

        if (orderResponse.ok) {
          const orderData = await orderResponse.json();
          if (orderData && orderData.order_id) {
            orderId = orderData.order_id;
            hasBackend = true;
          }
        }
      } catch (err) {
        // Static hosting mode (e.g. GitHub Pages) - fallback to direct client SDK checkout
        console.log('Backend API not available, falling back to direct Razorpay Standard Checkout');
      }

      // STEP 2: Configure Razorpay Checkout Modal
      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: 'INR',
        name: 'De Vibe Studio',
        description: `${productName} - ${productDescription || 'Software License'}`,
        image: 'https://www.devibestudio.com/banner.jpg',
        handler: async function (response) {
          // If backend verification is enabled
          if (hasBackend && response.razorpay_order_id && response.razorpay_signature) {
            try {
              const verifyResponse = await fetch('/api/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature
                })
              });
              const verifyData = await verifyResponse.json();
              if (verifyResponse.ok && verifyData.success) {
                if (onSuccess) onSuccess(response);
              } else {
                alert(`⚠️ Payment Signature Verification Error: ${verifyData.error || 'Invalid signature'}`);
                if (onFailure) onFailure(verifyData.error);
              }
              return;
            } catch (vErr) {
              console.error('Signature verification error:', vErr);
            }
          }

          // Direct client-side success callback (Static site mode)
          if (onSuccess) {
            onSuccess(response);
          }
        },
        prefill: {
          name: prefillName,
          email: prefillEmail,
          contact: prefillPhone
        },
        theme: {
          color: '#2563eb'
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal dismissed by user');
            if (onFailure) {
              onFailure('Payment checkout cancelled by user.');
            }
          }
        }
      };

      // If backend order ID was generated, attach it
      if (orderId) {
        options.order_id = orderId;
      }

      try {
        const razorpayInstance = new window.Razorpay(options);

        // Handle payment failure event
        razorpayInstance.on('payment.failed', function (response) {
          console.error('Razorpay Payment Failed:', response.error);
          alert(`❌ Payment Failed: ${response.error.description || 'Transaction declined'}`);
          if (onFailure) {
            onFailure(response.error.description || 'Payment Failed');
          }
        });

        razorpayInstance.open();
      } catch (err) {
        console.error('Razorpay Checkout Open Error:', err);
        alert(`❌ Error opening Razorpay Payment Gateway: ${err.message}`);
        if (onFailure) {
          onFailure(err.message);
        }
      }
    },
    []
  );

  return { isLoaded, loadingError, openPaymentModal };
}
