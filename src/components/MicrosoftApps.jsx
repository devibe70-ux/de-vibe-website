import { Helmet } from 'react-helmet-async';
import { Monitor, Briefcase, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicrosoftApps() {
  return (
    <>
      <Helmet>
        <title>Microsoft & Windows Ecosystem - De Vibe Enterprise</title>
        <meta name="description" content="Explore De Vibe's Windows and enterprise software ecosystem, featuring OptiSpace PC and De-Vibe OMS." />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Windows Ecosystem</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Robust desktop applications and enterprise management systems.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* OptiSpace PC */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Monitor size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>OptiSpace PC Version</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                OptiSpace PC brings our powerful AI-driven storage optimization engine to the Windows desktop environment. It deeply scans NTFS and FAT32 file systems to locate deeply buried duplicate files, residual uninstaller data, and uncompressed media caches, safely freeing up gigabytes of critical drive space.
              </p>
              <Link to="/support/optispace-pc" className="btn">View Documentation & Support</Link>
            </div>

            {/* De-Vibe OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Briefcase size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>De-Vibe OMS</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Our proprietary Order Management System (OMS) built to handle complex, omni-channel operational workflows. It serves as the central nervous system for enterprise clients, integrating seamlessly with existing ERPs and frontend systems to automate data routing, status updates, and inventory synchronization.
              </p>
              <Link to="/support/de-vibe-oms" className="btn">Enterprise Documentation</Link>
            </div>

            {/* Bahamut OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Database size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>Bahamut OMS</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                A highly specialized fork of our core OMS technology, Bahamut OMS is designed for high-frequency, extreme-volume transaction environments. It leverages aggressive caching strategies and distributed database architectures to maintain sub-millisecond response times under heavy enterprise loads.
              </p>
              <Link to="/support/bahamut-oms" className="btn">Enterprise Documentation</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
