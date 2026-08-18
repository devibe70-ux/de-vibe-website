import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Building2, ShieldCheck, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us & Google Business Location - De Vibe Studio</title>
        <meta name="description" content="Official contact details for De Vibe Studio. Reach our engineering desk via Phone: +91 93284 12916, Email: help@devibestudio.in or devibe70@gmail.com." />
        <link rel="canonical" href="https://www.devibestudio.com/contact" />
        <meta property="og:title" content="Contact Us - De Vibe Studio" />
        <meta property="og:url" content="https://www.devibestudio.com/contact" />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Contact De Vibe Studio</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3.5rem', fontSize: '1.2rem' }}>
            Official Business Contact, Support Desk, & Google Business Location Details
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            
            {/* Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '12px', color: 'var(--text-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>Official Support Emails</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.95rem' }}>
                    <a href="mailto:help@devibestudio.in" style={{ color: 'var(--text-primary)', fontWeight: '700', textDecoration: 'none' }}>help@devibestudio.in</a>
                    <a href="mailto:devibe70@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>devibe70@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '12px', color: 'var(--text-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>Phone & WhatsApp Direct</h4>
                  <a href="tel:+919328412916" style={{ color: 'var(--text-primary)', fontWeight: '800', fontSize: '1.15rem', textDecoration: 'none' }}>+91 93284 12916</a>
                  <span style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Mon - Sat: 11:00 AM - 8:00 PM IST</span>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '12px', color: 'var(--text-primary)' }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem' }}>GSTIN & Business Location</h4>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600', display: 'block', fontSize: '0.95rem' }}>De Vibe Studio — State Code 24 (Gujarat, India)</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.2rem' }}>GSTIN Tax Compliance: <strong>24ASHPS97771ZE</strong></span>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem' }}>Send Direct Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>Full Name *</label>
                  <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>Email Address *</label>
                  <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }} required />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>Message *</label>
                  <textarea id="message" rows="4" placeholder="How can we help your business?" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none' }} required></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem', fontSize: '1rem' }}>Send Message ➔</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
