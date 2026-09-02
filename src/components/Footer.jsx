import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content grid grid-4" style={{ gap: '2rem' }}>
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.75rem 0' }}>
              DE VIBE STUDIO
            </h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Feel The Vibe. Crafting bespoke websites, enterprise software, and brand identities that scale.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
              <strong>Registered Office & Physical Address:</strong><br />
              De Vibe, Block D-1303, 13th Floor, Cloud 9, Opp. Shaligram Tower, Near Jhansi Ki Rani Statue, Nehrunagar, Ahmedabad, Gujarat - 380015, India
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1rem' }}>
              <strong>Support Email:</strong> <a href="mailto:support@devibestudio.com" style={{ color: 'var(--text-primary)' }}>support@devibestudio.com</a><br />
              <strong>Customer Care Phone:</strong> <a href="tel:+919328412916" style={{ color: 'var(--text-primary)' }}>+91 93284 12916</a><br />
              <strong>Operating Hours:</strong> 11:00 AM to 8:00 PM IST (Monday – Saturday)
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
              devibestudio.com is owned and operated by Heena Sheth (Proprietorship, Trading as De Vibe). Registered GSTIN: 24ASHPS9777R1ZE.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Home</Link>
            <Link to="/products" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Software Store</Link>
            <Link to="/full-suite-business" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '700' }}>Business Suite</Link>
            <Link to="/services" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Services</Link>
            <Link to="/guides" style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '600' }}>PC Repair Guides</Link>
            <Link to="/projects" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects</Link>
            <Link to="/reviews" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Client Reviews</Link>
            <Link to="/blog" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Insights & Blog</Link>
          </div>

          <div className="footer-col">
            <h4>Legal & Support</h4>
            <Link to="/contact-us" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '700' }}>Contact Us ➔</Link>
            <Link to="/quote" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Get a Free Quote</Link>
            <Link to="/privacy" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Terms of Service</Link>
            <Link to="/return-refund-policy" style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '700' }}>Return & Refund Policy</Link>
            <Link to="/android" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Android Ecosystem</Link>
            <Link to="/microsoft" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Windows Ecosystem</Link>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center', marginTop: '2rem' }}>
          <span>&copy; {new Date().getFullYear()} De Vibe. All rights reserved. devibestudio.com is owned and operated by Heena Sheth (Proprietorship, Trading as De Vibe). Registered GSTIN: 24ASHPS9777R1ZE.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact-us" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Contact Us</Link>
            <Link to="/privacy" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Terms of Service</Link>
            <Link to="/return-refund-policy" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Return & Refund Policy</Link>
            <a 
              href="javascript:googlefc.callbackQueue.push(googlefc.showRevocationMessage)" 
              style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'underline' }}
            >
              Privacy & Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
