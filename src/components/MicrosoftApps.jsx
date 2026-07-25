import { Helmet } from 'react-helmet-async';
import { Monitor, Briefcase, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicrosoftApps() {
  const msAppSchema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "OptimaFix Pro",
      "operatingSystem": "Windows 10, Windows 11",
      "applicationCategory": "UtilitiesApplication",
      "offers": { "@type": "Offer", "price": "999", "priceCurrency": "INR" },
      "downloadUrl": "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix"
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "De-Vibe OMS",
      "operatingSystem": "Windows, Cloud",
      "applicationCategory": "BusinessApplication",
      "downloadUrl": "https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Microsoft & Windows Ecosystem - De Vibe Enterprise</title>
        <meta name="description" content="Explore De Vibe's Windows and enterprise software ecosystem, featuring OptiSpace PC and De-Vibe OMS." />
        <link rel="canonical" href="https://www.devibestudio.com/microsoft" />
        <meta property="og:title" content="Windows Ecosystem - De Vibe Software" />
        <meta property="og:description" content="Explore De Vibe's Windows software ecosystem, featuring OptiSpace PC and De-Vibe OMS." />
        <meta property="og:url" content="https://www.devibestudio.com/microsoft" />
        <script type="application/ld+json">{JSON.stringify(msAppSchema)}</script>
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Windows Ecosystem</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Robust desktop applications and enterprise management systems.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* OptimaFix Pro */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Monitor size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>OptimaFix Pro</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                OptimaFix Pro brings our powerful diagnostics and automated system optimization engine to the Windows desktop environment. It deeply scans disk health (SMART parameters), clears cache, fixes dead shortcuts, resets DNS, and applies registry customization tweaks (like Telemetry disabling and visual speedup parameters).
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix" className="btn" download>
                  Download for Windows (.msix)
                </a>
                <Link to="/support/optimafix-pro" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  View Documentation
                </Link>
              </div>
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
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix" className="btn" download>
                  Download Enterprise Installer
                </a>
                <Link to="/support/de-vibe-oms" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  Enterprise Documentation
                </Link>
              </div>
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
