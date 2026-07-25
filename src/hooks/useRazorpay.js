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
        alert('Razorpay SDK is still loading. Please try again in a moment.');
        return;
      }

      try {
        // Convert INR to Paise (1 INR = 100 Paise)
        const amountInPaise = Math.round(amountInINR * 100);

        // STEP 1: Call Backend to Create Order
        const orderResponse = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: amountInPaise,
            currency: 'INR',
            receipt: `rcpt_${Date.now()}`
          })
        });

        const orderData = await orderResponse.json();

        if (!orderResponse.ok || orderData.error) {
          throw new Error(orderData.error || 'Failed to create order on server');
        }

        const { order_id } = orderData;
        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_THonuwRGOpJ1KH';

        // STEP 2: Configure Razorpay Checkout Modal
        const options = {
          key: razorpayKey,
          amount: orderData.amount || amountInPaise,
          currency: orderData.currency || 'INR',
          name: 'De Vibe Studio',
          description: `${productName} - ${productDescription || 'Software License'}`,
          image: 'https://www.devibestudio.com/banner.jpg',
          order_id: order_id, // Mandatory Razorpay Order ID from backend
          handler: async function (response) {
            // response contains: razorpay_payment_id, razorpay_order_id, razorpay_signature

            try {
              // STEP 3: Verify Payment Signature via Backend
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
                if (onSuccess) {
                  onSuccess({
                    ...response,
                    message: verifyData.message
                  });
                }
              } else {
                const errorMsg = verifyData.error || 'Payment verification failed: Signature mismatch.';
                alert(`⚠️ Payment Failed: ${errorMsg}`);
                if (onFailure) {
                  onFailure(errorMsg);
                }
              }
            } catch (err) {
              console.error('Signature verification error:', err);
              alert(`⚠️ Error verifying payment signature: ${err.message}`);
              if (onFailure) {
                onFailure(err.message);
              }
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
        console.error('Razorpay Checkout Init Error:', err);
        alert(`❌ Error starting payment: ${err.message}`);
        if (onFailure) {
          onFailure(err.message);
        }
      }
    },
    []
  );

  return { isLoaded, loadingError, openPaymentModal };
}
