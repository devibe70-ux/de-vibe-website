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

    return () => {
      // Keep script in DOM once loaded for re-use
    };
  }, []);

  const openPaymentModal = useCallback(
    ({
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
        alert('Razorpay SDK is loading. Please try again in a few seconds.');
        return;
      }

      // Convert INR to Paise (1 INR = 100 Paise)
      const amountInPaise = Math.round(amountInINR * 100);

      // Get key from environment variable or fallback to test mode placeholder
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_devibestudio';

      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: 'INR',
        name: 'De Vibe',
        description: `${productName} - ${productDescription || 'Software License'}`,
        image: 'https://www.devibestudio.com/banner.jpg',
        handler: function (response) {
          // Response contains razorpay_payment_id
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
            if (onFailure) {
              onFailure('Payment modal dismissed by user.');
            }
          }
        }
      };

      try {
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.on('payment.failed', function (response) {
          if (onFailure) {
            onFailure(response.error.description || 'Payment Failed');
          }
        });
        razorpayInstance.open();
      } catch (err) {
        console.error('Razorpay Error:', err);
        if (onFailure) {
          onFailure(err.message || 'Error initializing Razorpay Checkout.');
        }
      }
    },
    []
  );

  return { isLoaded, loadingError, openPaymentModal };
}
