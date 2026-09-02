import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

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
        <meta name="description" content="Get in touch with De Vibe Studio for custom web development, brand logos, GST accounting tools, and software solutions." />
        <link rel="canonical" href="https://www.devibestudio.com/contact" />
        <meta property="og:title" content="Contact Us — De Vibe Studio" />
        <meta property="og:url" content="https://www.devibestudio.com/contact" />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Ready to elevate your digital presence? We'd love to hear from you.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Get In Touch</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Whether you have a question about our services, need a custom software quote, or just want to discuss your business strategy, our team is ready to help.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={24} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Email Us</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="mailto:help@devibestudio.in" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>help@devibestudio.in</a>
                    <a href="mailto:devibe70@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>devibe70@gmail.com</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Call / WhatsApp Us</h4>
                  <a href="tel:+919328412916" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>+91 93284 12916</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Location & Tax Compliance</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>Gujarat, India | GSTIN 24ASHPS9777R1ZE</span>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message Received!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Your Message *</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      placeholder="How can we help your business grow?" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      spellCheck={true} 
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }} 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn" disabled={loading} style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem' }}>
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
