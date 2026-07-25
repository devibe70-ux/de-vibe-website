import { Helmet } from 'react-helmet-async';
import { HardDrive, Shield, Zap, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AndroidApps() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OptiSpace PC",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "999",
      "priceCurrency": "INR"
    },
    "description": "Desktop disk space analyzer and storage optimizer for Windows."
  };

  return (
    <>
      <Helmet>
        <title>Desktop Utility Ecosystem - De Vibe Apps & Tools</title>
        <meta name="description" content="Explore De Vibe's software ecosystem, featuring OptiSpace PC for deep disk space optimization and OptimaFix Pro." />
        <link rel="canonical" href="https://www.devibestudio.com/android" />
        <meta property="og:title" content="Desktop Utility Ecosystem - De Vibe Software" />
        <meta property="og:description" content="Explore De Vibe's software ecosystem, featuring OptiSpace PC." />
        <meta property="og:url" content="https://www.devibestudio.com/android" />
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Desktop Utility Suite</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            High-performance desktop executables and system optimization utilities.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* OptiSpace PC */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <HardDrive size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>OptiSpace PC (OptiSpec PC)</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                OptiSpace PC brings high-speed disk space analysis and automated storage management to the Windows environment. Because direct APK sideloading is restricted on Android devices, OptiSpace PC is provided as a native Windows executable installer (.msix) to analyze disk volumes, clean system temporary caches, and optimize file allocation tables locally without cloud upload.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <Zap size={20} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Deep Disk Visualizer</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scans drive partitions and pinpoints space-consuming directory trees.</p>
                </div>
                <div>
                  <Shield size={20} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Local Zero-Cloud Clean</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>100% offline cleanup preserving absolute user data privacy.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn">View All Products & Buy License</Link>
                <Link to="/microsoft" className="btn btn-outline">Explore Windows Ecosystem</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
