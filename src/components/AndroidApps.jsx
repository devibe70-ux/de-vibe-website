import { Helmet } from 'react-helmet-async';
import { Smartphone, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AndroidApps() {
  return (
    <>
      <Helmet>
        <title>Android Ecosystem - De Vibe Apps & Games</title>
        <meta name="description" content="Explore De Vibe's powerful Android ecosystem, including OptiSpace Mobile and immersive gaming experiences." />
      </Helmet>
      
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Android Ecosystem</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Next-generation mobile applications powered by on-device AI.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* OptiSpace Mobile */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Smartphone size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>OptiSpace Mobile</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                OptiSpace Mobile is our flagship Android application designed to intelligently optimize your device storage. Utilizing advanced on-device Machine Learning algorithms, it scans your photo and video libraries to detect visually similar (fuzzy) duplicates, blurry photos, and unnecessarily large video files. It then offers one-tap compression and secure deletion without compromising visual fidelity.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div>
                  <Zap size={20} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>AI Fuzzy Matching</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Detects nearly identical photos that standard hash-checkers miss.</p>
                </div>
                <div>
                  <Shield size={20} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>On-Device Processing</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>100% of the ML processing happens on your phone. No cloud uploads.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://github.com/devibe70-ux/optispace-mobile/releases/latest/download/OptiSpace.apk" className="btn" download>
                  Download APK
                </a>
                <Link to="/support/optispace-mobile" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  View Documentation
                </Link>
              </div>
            </div>

            {/* Sniper Kill */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Zap size={32} color="var(--accent)" />
                <h2 style={{ margin: 0, fontSize: '2rem' }}>Sniper Kill</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Sniper Kill is a high-octane mobile gaming experience developed in-house. Featuring advanced ballistics physics and high-fidelity 3D environments, it pushes the boundaries of what is possible on modern Android hardware.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://github.com/davincishah/sniper-kill/releases/latest/download/SniperKill.apk" className="btn" download>
                  Download Game APK
                </a>
                <Link to="/support/sniper-kill" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                  Game Support & FAQ
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
