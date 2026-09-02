import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      type: "Direct Contact Form Message",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    try {
      // 1. Post to Google Apps Script Endpoint
      await fetch('https://script.google.com/macros/s/AKfycbxe7Q1UZbx8JDgQqVDYlGhSKTrtOSRoq8fqfulFmnHcOdIHTjqs4szESQOrOjCPYz6O/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
    } catch (err) {}

    try {
      // 2. Dual Backup via Formspree
      await fetch('https://formspree.io/f/xbjnqkyy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {}

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — De Vibe Studio</title>
        <meta name="description" content="Get in touch with De Vibe Studio. Registered Address: Block D-1303, 13th Floor, Cloud 9, Nehrunagar, Ahmedabad, Gujarat - 380015, India. Email: support@devibestudio.com." />
        <link rel="canonical" href="https://www.devibestudio.com/contact-us" />
        <meta property="og:title" content="Contact Us — De Vibe Studio" />
        <meta property="og:url" content="https://www.devibestudio.com/contact-us" />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3.5rem', fontSize: '1.2rem' }}>
            We'd love to hear from you. Get in touch with our customer support and business software team.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            {/* Registered Contact & Business Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Get In Touch</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Whether you need custom software, project consultation, or support for software licenses, our team is ready to assist you.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Registered Business Address</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    De Vibe, Block D-1303, 13th Floor, Cloud 9, Opp. Shaligram Tower, Near Jhansi Ki Rani Statue, Nehrunagar, Ahmedabad, Gujarat - 380015, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Customer Support Email</h4>
                  <a href="mailto:support@devibestudio.com" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>
                    support@devibestudio.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Customer Care Phone</h4>
                  <a href="tel:+919328412916" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>
                    +91 93284 12916
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Support Operating Hours</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    11:00 AM to 8:00 PM IST (Monday – Saturday)
                  </span>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                <ShieldCheck size={16} color="var(--accent)" style={{ marginBottom: '0.25rem' }} /><br />
                devibestudio.com is owned and operated by Heena Sheth (Proprietorship, Trading as De Vibe). Registered GSTIN: 24ASHPS9777R1ZE.
              </div>
            </div>

            {/* Clean Direct Contact Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message Received!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Thank you for contacting De Vibe Studio. Our customer care team will review your inquiry and respond to support@devibestudio.com within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Your Message *</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      placeholder="How can we help your business?" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }} 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn" disabled={loading} style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem', fontSize: '1.05rem', fontWeight: '700' }}>
                    {loading ? 'Sending Message...' : 'Send Message ➔'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
