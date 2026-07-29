import { Helmet } from 'react-helmet-async';
import { Monitor, HardDrive, Briefcase, ShoppingCart, ShieldCheck, ArrowRight, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';

export default function Home() {
  const featuredApps = [
    {
      id: 'optimafix',
      title: 'OptimaFix Pro',
      subtitle: 'Windows Diagnostics & Auto PC Repair',
      price: '₹999 Excl. GST',
      image: '/screenshots/optimafix_pro_app.jpg',
      badge: 'Most Popular',
      link: '/products'
    },
    {
      id: 'optispace',
      title: 'OptiSpace PC Pro',
      subtitle: 'Disk Space Treemap & Junk Analyzer',
      price: '₹499 Excl. GST',
      image: '/screenshots/optispace_pc_app.jpg',
      badge: 'Disk Utility',
      link: '/products'
    },
    {
      id: 'devibe-oms',
      title: 'De-Vibe OMS Enterprise',
      subtitle: 'Omni-Channel Order Management System',
      price: '₹14,999 Excl. GST',
      image: '/screenshots/devibe_oms_app.jpg',
      badge: 'Enterprise ERP',
      link: '/products'
    }
  ];

  return (
    <>
      <Helmet>
        <title>De Vibe | Premium Web & Software Agency</title>
        <meta name="description" content="Elevate your digital presence. De Vibe specializes in custom web development, corporate software solutions, and premium logo design." />
        <link rel="canonical" href="https://www.devibestudio.com/" />
      </Helmet>

      <Hero />

      {/* FEATURED PRODUCTS & LIVE APP INTERFACES SHOWCASE SECTION */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <Eye size={16} /> Software Suite & Live App Interfaces
            </div>
            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Featured Desktop Software & Apps</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
              Explore our high-performance desktop software utilities and enterprise systems. Purchase official software licenses directly with instant Razorpay checkout.
            </p>
          </div>

          {/* Apps Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {featuredApps.map((app) => (
              <div 
                key={app.id}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
                  <img src={app.image} alt={app.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--accent)', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '12px' }}>
                    {app.badge}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 0.25rem 0' }}>{app.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{app.subtitle}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600', display: 'block' }}>Base Price</span>
                      <strong style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>{app.price}</strong>
                    </div>
                    <Link to={app.link} className="btn" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      Buy License <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/products" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
              View All Software Products & Complete Comparison Matrix ➔
            </Link>
          </div>

        </div>
      </section>

      <About />
    </>
  );
}
