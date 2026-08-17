import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content grid grid-4" style={{ gap: '2rem' }}>
          <div className="footer-col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              DE VIBE
            </h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Feel The Vibe. Crafting bespoke websites, enterprise software, and brand identities that scale.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
              <strong>Phone:</strong> <a href="tel:+919328412916" style={{ color: 'var(--text-primary)' }}>+91 93284 12916</a><br />
              <strong>Email:</strong> <a href="mailto:help@devibestudio.in" style={{ color: 'var(--text-primary)' }}>help@devibestudio.in</a><br />
              <strong>Admin:</strong> <a href="mailto:devibe70@gmail.com" style={{ color: 'var(--text-muted)' }}>devibe70@gmail.com</a>
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Home</Link>
            <Link to="/products" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Software Store</Link>
            <Link to="/guides" style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '600' }}>PC Repair Guides</Link>
            <Link to="/services" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Services</Link>
            <Link to="/projects" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects</Link>
            <Link to="/reviews" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Client Reviews</Link>
            <Link to="/blog" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Insights & Blog</Link>
          </div>

          <div className="footer-col">
            <h4>Business Suites</h4>
            <Link to="/full-suite-business" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '700' }}>Business Suite ➔</Link>
            <Link to="/android" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Android Ecosystem</Link>
            <Link to="/microsoft" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Windows Ecosystem</Link>
            <Link to="/quote" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Get a Free Quote</Link>
            <Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contact Support</Link>
          </div>

          <div className="footer-col">
            <h4>Commercial Solutions</h4>
            <Link to="/products" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>OptimaFix Pro Suite</Link>
            <Link to="/products" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>De-Vibe OMS ERP</Link>
            <Link to="/full-suite-business" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>GST Accounting Tools</Link>
            <Link to="/full-suite-business" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Staff Attendance HR</Link>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <span>&copy; {new Date().getFullYear()} De Vibe. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/privacy" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Terms of Service</Link>
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
