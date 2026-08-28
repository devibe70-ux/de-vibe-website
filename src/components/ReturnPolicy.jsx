import { Helmet } from 'react-helmet-async';
import { RefreshCw, ShieldCheck, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function ReturnPolicy() {
  return (
    <>
      <Helmet>
        <title>Return & Refund Policy — De Vibe Studio</title>
        <meta name="description" content="Official Return and Refund Policy for De Vibe Studio software licenses, physical rescue USB drives, and business solutions." />
        <link rel="canonical" href="https://www.devibestudio.com/return-policy" />
        <meta property="og:title" content="Return & Refund Policy — De Vibe Studio" />
        <meta property="og:url" content="https://www.devibestudio.com/return-policy" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', padding: '0.4rem 1.1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <ShieldCheck size={16} color="#10b981" /> 30-Day Customer Satisfaction Guarantee
            </div>
            <h1 style={{ fontSize: '2.8rem', margin: '0 0 0.75rem 0' }}>Return & Refund Policy</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Transparent, customer-first return policy for all software licenses, physical hardware drives, and custom business packages.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            <p><strong>Effective Date: {new Date().getFullYear()} | Seller GSTIN: 24ASHPS97771ZE</strong></p>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>1. 30-Day Return & Money-Back Guarantee</h3>
              <p>
                At De Vibe Studio, we stand behind the quality of our commercial software tools (OptimaFix Pro, OptiSpace PC, De-Vibe OMS) and physical hardware rescue drives. If you are not 100% satisfied with your purchase, you are eligible for a full refund within <strong>30 calendar days</strong> from the date of purchase.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>2. Digital Software License Cancellation</h3>
              <p>
                For digital software downloads and instant serial key license activations:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Refund requests submitted within 30 days of purchase will be processed immediately.</li>
                <li>Upon issuing a refund, the associated software license key (`OPTFIX-2026-XXXX-XXXX`) will be deactivated in our activation server.</li>
                <li>No cancellation fee or penalty applies.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>3. Physical Hardware USB Drives (Shipping & Returns)</h3>
              <p>
                For physical 8GB & 16GB Technician Rescue Boot Hardware USB Drives shipped via Express Courier:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li><strong>Defective / Damaged Drive:</strong> If your USB hardware drive arrives damaged or unreadable, we will dispatch a free express replacement or issue a 100% refund immediately with zero shipping fee.</li>
                <li><strong>Standard Return:</strong> To return a physical USB drive, contact our support desk within 30 days. Items must be returned in good condition. Return shipping costs are covered by De Vibe Studio.</li>
                <li><strong>Return Address:</strong> De Vibe Studio Customer Desk, Ahmedabad, Gujarat, India (State Code 24).</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>4. Custom Business & Launchpad Services</h3>
              <p>
                For custom website development, brand logo design, and custom GST accounting software:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Custom projects include a <strong>96-Hour Guaranteed Delivery & Staging Review Protocol</strong>.</li>
                <li>If you are unsatisfied during the initial 96-hour staging review before final domain migration, a 100% full refund is issued.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>5. How to Initiate a Return or Refund</h3>
              <p>
                To request a return or refund, contact our customer desk with your purchase email or Razorpay Payment ID (`pay_XXXXXX`):
              </p>
              <div style={{ backgroundColor: 'var(--surface)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>Email Support:</strong> <a href="mailto:help@devibestudio.in" style={{ color: 'var(--accent)' }}>help@devibestudio.in</a> / <a href="mailto:devibe70@gmail.com" style={{ color: 'var(--accent)' }}>devibe70@gmail.com</a></div>
                <div><strong>Phone / WhatsApp:</strong> <a href="tel:+919328412916" style={{ color: 'var(--accent)' }}>+91 93284 12916</a> (11:00 AM to 8:00 PM IST)</div>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>6. Refund Processing Time</h3>
              <p>
                Approved refunds are credited back to your original payment method (Credit/Debit Card, UPI, Net Banking, Razorpay) within <strong>5 to 7 business days</strong>. You will receive an official Razorpay credit receipt via email.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
