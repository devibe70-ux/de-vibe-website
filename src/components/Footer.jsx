import { Link } from 'react-router-dom';

const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
            <h4>Ecosystems</h4>
            <Link to="/android" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Android Ecosystem</Link>
            <Link to="/microsoft" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Windows Ecosystem</Link>
            <Link to="/quote" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Get a Free Quote</Link>
            <Link to="/contact" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Contact Support</Link>
          </div>

          <div className="footer-col">
            <h4>Developers & Repos</h4>
            <a 
              href="https://github.com/devibe70-ux/de-vibe-website-builder" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' }}
            >
              <GithubIcon size={16} /> Web Builder App Repo ➔
            </a>
            <a 
              href="https://github.com/devibe70-ux/OptimaFix-Pro" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
              <GithubIcon size={16} /> OptimaFix-Pro Repo
            </a>
            <a 
              href="https://github.com/devibe70-ux" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
              <GithubIcon size={16} /> DEVIBE70-UX Org
            </a>
            <a 
              href="https://github.com/DavinciShah" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            >
              <GithubIcon size={16} /> DAVINCISHAH
            </a>
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
