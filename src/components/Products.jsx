import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [isPhysical, setIsPhysical] = useState(false);

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OptimaFix Pro",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "999",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "OptiSpace Mobile",
        "operatingSystem": "Android",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Software Products & Utilities - De Vibe Studio</title>
        <meta name="description" content="Explore De Vibe's premium software suites, featuring OptimaFix Pro for Windows system repair, OptiSpace Mobile, and enterprise order management solutions." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', fontFamily: 'var(--font-outfit)' }}>
            Software Products
          </h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Next-generation system utility software and enterprise database environments.
          </p>

          {/* OptimaFix Pro Highlight Product Card */}
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            padding: '3rem', 
            borderRadius: '16px', 
            border: '1px solid var(--border)', 
            marginBottom: '4rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '10px', 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <Monitor size={28} />
                  </div>
                  <div>
                    <h2 style={{ margin: 0, fontSize: '2.2rem', textAlign: 'left' }}>OptimaFix Pro</h2>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>Windows Diagnostics & Guided System Repair</p>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                  OptimaFix Pro is an elite computer diagnostic and automated repair toolkit for Windows systems. Modeled after professional hardware diagnostics suites, it sequentially analyzes system files health, clears caches, deletes dead shortcut structures, purges orphaned installers, resets DNS latency, and locks custom visual registry tweaks for a snappier GUI performance.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Shield size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Apple-Style Invoices</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Generates professional before/after client repair comparison reports.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Zap size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Automated Wizard</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Runs 5 repair stages sequentially, updating progress bars in real-time.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <RefreshCw size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>PE USB Auto-Run</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Create bootable media with zero-click offline repair consoles.</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix" className="btn">
                    Download MSIX Package
                  </a>
                  <Link to="/support/optimafix-pro" className="btn btn-outline">
                    View Setup Documentation
                  </Link>
                </div>
              </div>

              {/* Interactive Pricing Card inside Products.jsx */}
              <div style={{ 
                width: '380px', 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '2.5rem', 
                borderRadius: '12px', 
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: !isPhysical ? 'var(--accent)' : 'var(--text-secondary)' }}>Digital Key</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: '46px', height: '24px' }}>
                    <input 
                      type="checkbox" 
                      checked={isPhysical} 
                      onChange={() => setIsPhysical(!isPhysical)} 
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{ 
                      position: 'absolute', 
                      cursor: 'pointer', 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      backgroundColor: 'rgba(0,0,0,0.1)', 
                      borderRadius: '34px',
                      border: '1px solid var(--border)',
                      transition: '0.3s'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        content: '""', 
                        height: '16px', width: '16px', 
                        left: isPhysical ? '24px' : '4px', 
                        bottom: '3px', 
                        backgroundColor: 'var(--accent)', 
                        borderRadius: '50%',
                        transition: '0.3s'
                      }} />
                    </span>
                  </label>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: isPhysical ? 'var(--accent)' : 'var(--text-secondary)' }}>Physical USB</span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--text-secondary)' }}>
                    {isPhysical ? 'Technician Boot USB' : 'Tech Pro Annual License'}
                  </h4>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {isPhysical ? '₹5,999' : '₹3,999'}
                    {!isPhysical && <span style={{ fontSize: '1rem', fontWeight: '500', opacity: 0.7 }}> / year</span>}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    {isPhysical ? 'Pre-loaded 16GB Rescue USB drive in custom box.' : 'Or ₹7,999 for One-Time Lifetime License.'}
                  </p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--accent)" /> Apple AST-2 Diagnostics</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--accent)" /> 5-Stage Guided Wizard</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--accent)" /> DNS and Network Switchers</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="var(--accent)" /> Cryptographic verification keys</li>
                </ul>

                <a 
                  href={isPhysical ? "https://www.amazon.in" : "https://github.com/devibe70-ux/pc-repair-tool"} 
                  className="btn" 
                  style={{ textAlign: 'center', width: '100%', background: 'var(--accent)', color: '#fff' }}
                >
                  {isPhysical ? 'Order on Amazon / Flipkart' : 'Secure License Checkout'}
                </a>
              </div>
            </div>
          </div>

          {/* Sibling Products Grid */}
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Additional Ecosystem Solutions</h2>
          
          <div className="grid grid-3">
            
            {/* OptiSpace Mobile */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Smartphone size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>OptiSpace Mobile</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                On-device Android storage optimization utilizing edge Machine Learning models. Safely detects similar duplicate visual media without uploading data to the cloud.
              </p>
              <Link to="/android" className="btn btn-outline" style={{ textAlign: 'center' }}>Explore Android Suite</Link>
            </div>

            {/* De-Vibe OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Briefcase size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>De-Vibe OMS</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Proprietary enterprise Order Management System to streamline omni-channel inventory flow, status routing, and sales reports automation.
              </p>
              <Link to="/microsoft" className="btn btn-outline" style={{ textAlign: 'center' }}>Enterprise OMS Specs</Link>
            </div>

            {/* Bahamut OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Database size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Bahamut OMS</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Specialized high-frequency fork designed for extreme database loads, transactional security, and sub-millisecond data synchronization.
              </p>
              <Link to="/microsoft" className="btn btn-outline" style={{ textAlign: 'center' }}>View Database Specs</Link>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
