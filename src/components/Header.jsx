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
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ 
            width: '36px', 
            height: '36px', 
            borderRadius: '10px', 
            background: 'var(--gradient-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'var(--btn-text)' 
          }}>
            <Hexagon size={22} />
          </div>
          <span className="gradient-text" style={{ fontWeight: '800', letterSpacing: '-0.03em', fontSize: '1.25rem' }}>
            DE VIBE
          </span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/" style={{ color: 'var(--text-primary)' }}>Home</Link>
          <Link to="/products" style={{ color: 'var(--text-primary)' }}>Store</Link>
          <Link to="/services" style={{ color: 'var(--text-primary)' }}>Services</Link>
          <Link to="/projects" style={{ color: 'var(--text-primary)' }}>Projects</Link>
          <Link to="/microsoft" style={{ color: 'var(--text-primary)' }}>Windows</Link>
          <Link to="/guides" style={{ color: 'var(--text-primary)' }}>PC Guides</Link>
          <Link to="/blog" style={{ color: 'var(--text-primary)' }}>Insights</Link>
          <Link to="/contact" style={{ color: 'var(--text-primary)' }}>Contact</Link>
          <Link to="/remote" style={{ color: 'var(--text-primary)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', border: '1px solid var(--glass-border)', backgroundColor: 'var(--surface)' }}>
            Remote Portal
          </Link>
          
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
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#71717a" />}
          </button>

          <Link to="/quote" className="btn" style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}>
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
