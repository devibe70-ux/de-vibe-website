import { Link } from 'react-router-dom';
import { Hexagon, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--glass-border)', backgroundColor: 'rgba(6, 9, 17, 0.88)', backdropFilter: 'blur(16px)' }}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Hexagon size={22} />
          </div>
          <span className="gradient-text" style={{ fontWeight: '800', letterSpacing: '-0.03em' }}>DE VIBE</span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products" style={{ color: 'var(--accent)', fontWeight: '700' }}>Store</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/microsoft">Windows</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/remote" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid var(--glass-border)' }}>
            Remote Portal
          </Link>
          <Link to="/quote" className="btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}>
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
