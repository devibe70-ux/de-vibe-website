import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Mail, Phone, MapPin, Truck, Clock } from 'lucide-react';

export default function ReturnPolicy() {
  return (
    <>
      <Helmet>
        <title>Return & Refund Policy — De Vibe Studio</title>
        <meta name="description" content="Official Return and Refund Policy for De Vibe Studio. Return Address: Block D-1303, 13th Floor, Cloud 9, Nehrunagar, Ahmedabad, Gujarat - 380015, India. Email: support@devibestudio.com." />
        <link rel="canonical" href="https://www.devibestudio.com/return-refund-policy" />
        <meta property="og:title" content="Return & Refund Policy — De Vibe Studio" />
        <meta property="og:url" content="https://www.devibestudio.com/return-refund-policy" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', padding: '0.4rem 1.1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <ShieldCheck size={16} color="#10b981" /> 30-Day Customer Satisfaction Guarantee
            </div>
            <h1 style={{ fontSize: '2.8rem', margin: '0 0 0.75rem 0' }}>Return & Refund Policy</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Transparent, explicit return and refund terms for software licenses, physical hardware drives, and custom business packages.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            <p>
              <strong>Effective Date: {new Date().getFullYear()}</strong><br />
              <code>devibestudio.com is owned and operated by Heena Sheth (Proprietorship, Trading as De Vibe). Registered GSTIN: 24ASHPS9777R1ZE.</code>
            </p>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>1. 30-Day Return & Refund Guarantee Window</h3>
              <p>
                At De Vibe Studio, we stand behind the quality of our commercial software tools (OptimaFix Pro, OptiSpace PC, De-Vibe OMS) and physical hardware rescue drives. Customers are eligible for a full refund within <strong>30 calendar days</strong> from the date of purchase.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>2. Digital Software License Cancellation</h3>
              <p>
                For digital software downloads and instant serial key activations:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Refund requests submitted to <strong>support@devibestudio.com</strong> within 30 days of purchase will be processed immediately.</li>
                <li>Upon issuing a refund, the associated software license key (`OPTFIX-2026-XXXX-XXXX`) will be deactivated in our server.</li>
                <li>No cancellation fee or restocking penalty applies.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>3. Physical Hardware USB Drives (Shipping & Return Address)</h3>
              <p>
                For physical 8GB & 16GB Technician Rescue Boot Hardware USB Drives:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li><strong>Dispatch & Delivery Timelines:</strong> Physical USB orders are dispatched via Express Courier within 24 hours of order placement. Estimated domestic delivery time is <strong>2 to 4 business days</strong>.</li>
                <li><strong>Defective / Damaged Drive:</strong> If your USB hardware drive arrives damaged or unreadable, we dispatch a free replacement or issue a 100% full refund immediately with zero shipping fee.</li>
                <li><strong>Standard Hardware Return Address:</strong> Physical returns must be shipped to our registered physical address:<br />
                  <strong style={{ color: 'var(--text-primary)' }}>De Vibe, Block D-1303, 13th Floor, Cloud 9, Opp. Shaligram Tower, Near Jhansi Ki Rani Statue, Nehrunagar, Ahmedabad, Gujarat - 380015, India</strong>
                </li>
                <li>Return shipping label costs for valid returns are covered by De Vibe Studio.</li>
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
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>5. How to Initiate a Return or Refund Claim</h3>
              <p>
                To request a return or refund, contact our support team with your order email or Razorpay Payment ID (`pay_XXXXXX`):
              </p>
              <div style={{ backgroundColor: 'var(--surface)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div><strong>Support Email:</strong> <a href="mailto:support@devibestudio.com" style={{ color: 'var(--accent)', fontWeight: '600' }}>support@devibestudio.com</a></div>
                <div><strong>Customer Care Phone:</strong> <a href="tel:+919328412916" style={{ color: 'var(--accent)', fontWeight: '600' }}>+91 93284 12916</a> (11:00 AM to 8:00 PM IST, Monday – Saturday)</div>
                <div><strong>Registered Physical Address:</strong> De Vibe, Block D-1303, 13th Floor, Cloud 9, Opp. Shaligram Tower, Near Jhansi Ki Rani Statue, Nehrunagar, Ahmedabad, Gujarat - 380015, India</div>
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>6. Refund Processing Timeline</h3>
              <p>
                Approved refunds are processed immediately and credited back to your original payment method (Credit/Debit Card, UPI, Net Banking, Razorpay) within <strong>5 to 7 business days</strong>. An official credit confirmation receipt will be emailed to you from support@devibestudio.com.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
