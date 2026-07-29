import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img 
          src="/banner.jpg" 
          alt="De Vibe Team — We Help You Build & Scale Your Business" 
          style={{ 
            width: '100%', 
            maxWidth: '900px', 
            borderRadius: '16px', 
            marginBottom: '2.5rem', 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
          }} 
        />

        {/* Growth Metric Pill Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <span style={{ backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '700', padding: '0.4rem 1rem', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Rocket size={15} /> Turnkey Business Launchpad
          </span>
          <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: '#10b981', fontSize: '0.85rem', fontWeight: '700', padding: '0.4rem 1rem', borderRadius: '20px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <TrendingUp size={15} /> Scale Revenue & Automation
          </span>
        </div>

        <h1 style={{ fontSize: '3.2rem', lineHeight: '1.25', marginBottom: '1.25rem' }}>
          We Help You Build Your Business & Accelerate Your Growth
        </h1>

        <p style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          De Vibe Studio is your complete digital growth partner. From custom web engineering and branding to enterprise OMS software and AI search engine dominance, we build the tools that power your business success.
        </p>

        <div className="hero-buttons">
          <Link to="/get-quote" className="btn" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', fontWeight: '700' }}>
            Start Building Your Business
          </Link>
          <Link to="/products" className="btn btn-outline" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem', fontWeight: '700' }}>
            Explore Software Products
          </Link>
        </div>
      </div>
    </section>
  );
}
