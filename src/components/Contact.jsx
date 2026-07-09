import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - De Vibe Agency</title>
        <meta name="description" content="Get in touch with De Vibe for premium web development, custom software, and branding solutions." />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
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
                    <a href="mailto:help@devibestudio.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>help@devibestudio.com</a>
                    <a href="mailto:devibe70@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>devibe70@gmail.com</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Call Us</h4>
                  <a href="tel:+919328412916" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>+91 932 841 2916</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={24} color="var(--accent)" />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0' }}>Location</h4>
                  <span style={{ color: 'var(--text-secondary)' }}>India</span>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-primary)' }} required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-primary)' }} required />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Your Message</label>
                  <textarea id="message" rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-primary)', resize: 'vertical' }} required></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem' }}>Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
