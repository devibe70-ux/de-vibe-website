import { useState, useEffect, useCallback } from 'react';

const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

export function useRazorpay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
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
      paymentLinkUrl,
      onSuccess,
      onFailure,
      prefillEmail = '',
      prefillPhone = '',
      prefillName = ''
    }) => {
      // If a dedicated Razorpay Payment Link URL is provided (recommended for static sites)
      if (paymentLinkUrl) {
        window.open(paymentLinkUrl, '_blank');
        return;
      }

      if (!window.Razorpay) {
        alert('Razorpay Payment Gateway is still loading. Please try again in a moment.');
        return;
      }

      const amountInPaise = Math.round(amountInINR * 100);
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_THonuwRGOpJ1KH';

      let orderId = null;
      let hasBackend = false;

      // Attempt backend order creation
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
        console.log('Static site environment detected.');
      }

      const options = {
        key: razorpayKey,
        amount: amountInPaise,
        currency: 'INR',
        name: 'De Vibe Studio',
        description: `${productName} - ${productDescription || 'Software License'}`,
        image: 'https://www.devibestudio.com/banner.jpg',
        handler: async function (response) {
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
                return;
              }
            } catch (vErr) {
              console.error('Signature verification error:', vErr);
            }
          }

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
              onFailure('Checkout cancelled by user.');
            }
          }
        }
      };

      if (orderId) {
        options.order_id = orderId;
      }

      try {
        const razorpayInstance = new window.Razorpay(options);

        razorpayInstance.on('payment.failed', function (response) {
          console.warn('Razorpay SDK requires order_id from backend API:', response.error);
          if (onFailure) {
            onFailure(response.error ? response.error.description : 'Payment failed');
          }
        });

        razorpayInstance.open();
      } catch (err) {
        console.error('Razorpay Modal Error:', err);
        if (onFailure) {
          onFailure(err.message);
        }
      }
    },
    []
  );

  return { isLoaded, loadingError, openPaymentModal };
}
