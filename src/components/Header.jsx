import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header style={{ 
      borderBottom: '1px solid var(--glass-border)', 
      backgroundColor: 'var(--glass-bg)', 
      backdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
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
          <Link to="/guides" style={{ color: 'var(--accent-emerald)', fontWeight: '700' }}>PC Guides</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/contact">Contact</Link>
          
          <button 
            onClick={toggleTheme} 
            title={theme === 'dark' ? 'Switch to Day Light Theme' : 'Switch to Dark Theme'}
            style={{ 
              background: 'var(--surface)', 
              border: '1px solid var(--glass-border)', 
              borderRadius: '10px', 
              width: '38px', 
              height: '38px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'var(--text-primary)', 
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          <Link to="/remote" style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--accent)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid var(--glass-border)' }}>
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
