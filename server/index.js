import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize Razorpay SDK instance
const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

if (!razorpayKeyId || !razorpayKeySecret) {
  console.warn('⚠️ Warning: RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET missing in environment.');
}

const razorpay = new Razorpay({
  key_id: razorpayKeyId || 'rzp_test_THonuwRGOpJ1KH',
  key_secret: razorpayKeySecret || 'x7yQohzlMgYAeybb6AbTkpqp'
});

/**
 * STEP 1: Backend Endpoint to Create Razorpay Order
 * Route: POST /api/create-order
 */
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;

    // Validate amount (Must be in paise and >= 100 paise)
    const amountInPaise = Number(amount);
    if (!amountInPaise || isNaN(amountInPaise) || amountInPaise < 100) {
      return res.status(400).json({
        error: 'Invalid amount. Minimum transaction amount is 100 paise (₹1.00).'
      });
    }

    const options = {
      amount: Math.round(amountInPaise),
      currency: currency.toUpperCase(),
      receipt: receipt || `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);
    if (error.statusCode === 401) {
      return res.status(401).json({ error: 'Razorpay Authentication failed. Invalid Key ID or Secret.' });
    }
    return res.status(500).json({
      error: error.message || 'Failed to create order with Razorpay Gateway'
    });
  }
});

/**
 * STEP 3: Backend Endpoint to Verify Payment Signature
 * Route: POST /api/verify-payment
 */
app.post('/api/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Missing fields check
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: razorpay_order_id, razorpay_payment_id, or razorpay_signature'
      });
    }

    // HMAC SHA256 Signature Verification Algorithm: order_id + "|" + payment_id
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'x7yQohzlMgYAeybb6AbTkpqp')
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed: Signature mismatch.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Payment verified successfully.',
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id
    });
  } catch (error) {
    console.error('Razorpay Signature Verification Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error during payment verification.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Razorpay Backend API Server running on port ${PORT}`);
});
