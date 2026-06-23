import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content grid grid-2">
          <div className="footer-col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              DE VIBE
            </h4>
            <p style={{ color: 'var(--text-secondary)' }}>
              Feel The Vibe. Crafting digital experiences that matter.
            </p>
          </div>
          <div className="footer-col" style={{ alignItems: 'flex-start' }}>
            <h4>Our Developers</h4>
            <a href="https://github.com/DavinciShah" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Github size={18} /> DavinciShah
            </a>
            <a href="https://github.com/devibe70-ux" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Github size={18} /> devibe70-ux
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} De Vibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
