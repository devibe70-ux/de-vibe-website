import { Helmet } from 'react-helmet-async';
import { Monitor, HardDrive, Briefcase, ShoppingCart, ShieldCheck, ArrowRight, Eye, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import BusinessGrowth from './BusinessGrowth';
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

  const clientTestimonials = [
    {
      name: "Rajesh Sharma",
      role: "Founder, Apex Retail & E-Commerce",
      rating: 5,
      comment: "De Vibe Studio launched our website, logo, and GST billing software in just 4 days. The 7-day free live demo gave us complete confidence. Highly recommended!"
    },
    {
      name: "Priya Patel",
      role: "Managing Director, TechServe IT Solutions",
      rating: 5,
      comment: "OptimaFix Pro changed how our repair shop operates. 5-second scans and instant branded PDF invoices doubled our service margins within 30 days."
    },
    {
      name: "Vikram Mehta",
      role: "Operations Head, Logistics India",
      rating: 5,
      comment: "Their staff attendance and inventory OMS suite is rock solid. Real-time sync across 4 warehouses with zero crashes or inventory mismatches."
    }
  ];

  return (
    <>
      <Helmet>
        <title>De Vibe Studio — We Build Your Website, Logo & Business Software</title>
        <meta name="description" content="De Vibe Studio builds custom websites, brand logos, GST accounting tools, and staff management software in 4 days. Free 7-Day Live Demo included." />
        <link rel="canonical" href="https://www.devibestudio.com/" />
      </Helmet>

      <Hero />

      {/* CORE BUSINESS SOLUTIONS SECTION */}
      <BusinessGrowth />

      {/* SOCIAL PROOF: CLIENT TESTIMONIALS & 5-STAR RATINGS SHOWCASE SECTION */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '5.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="bg-accent-glow">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', padding: '0.4rem 1.1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.85rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <Star size={16} fill="#f59e0b" color="#f59e0b" /> 4.9 / 5.0 Rating Across 150+ Clients
            </div>
            <h2 style={{ fontSize: '2.6rem', margin: '0 0 0.5rem 0' }}>What Our Clients Say About Us</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
              Real feedback from business owners, repair shop technicians, and e-commerce leaders who launched with De Vibe Studio.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {clientTestimonials.map((t, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                
                <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.5rem', flex: 1 }}>
                  "{t.comment}"
                </p>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'block' }}>{t.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/quote" className="btn" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}>
              Request Your Free 7-Day Live Demo ➔
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURED DESKTOP SOFTWARE & PRODUCTS */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem', border: '1px solid var(--border)' }}>
              <Eye size={16} /> Desktop Software Suite
            </div>
            <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Commercial Software & Repair Tools</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '700px', margin: '0.5rem auto 0 auto' }}>
              Explore our Windows software tools and enterprise systems with instant online license key activation.
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
                className="glass-card"
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--surface)' }}>
                  <img src={app.image} alt={app.title} className="interactive-hover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--accent)', color: 'var(--btn-text)', fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem', borderRadius: '12px' }}>
                    {app.badge}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 0.25rem 0' }}>{app.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{app.subtitle}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600', display: 'block' }}>Base Price</span>
                      <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{app.price}</strong>
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
              View All Software Products & Pricing Matrix ➔
            </Link>
          </div>

        </div>
      </section>

      <About />
    </>
  );
}
