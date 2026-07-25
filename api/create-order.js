import Razorpay from 'razorpay';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'INR', receipt } = req.body || {};
    const amountInPaise = Number(amount);

    if (!amountInPaise || isNaN(amountInPaise) || amountInPaise < 100) {
      return res.status(400).json({
        error: 'Invalid amount. Minimum amount is 100 paise (₹1.00).'
      });
    }

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_THonuwRGOpJ1KH';
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || 'x7yQohzlMgYAeybb6AbTkpqp';

    const razorpay = new Razorpay({
      key_id: razorpayKeyId,
      key_secret: razorpayKeySecret
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amountInPaise),
      currency: currency.toUpperCase(),
      receipt: receipt || `rcpt_${Date.now()}`
    });

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to create Razorpay order'
    });
  }
}
