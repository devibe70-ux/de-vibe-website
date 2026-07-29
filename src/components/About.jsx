export default function About() {
  return (
    <section id="about" className="bg-alt" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
          🤝 Strategic Growth Partner
        </div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About De Vibe Studio</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <p>
            De Vibe Studio is a premier digital agency and software engineering firm dedicated to a single core purpose: <strong>helping entrepreneurs, repair shops, IT technicians, and enterprise brands build their business from scratch and scale their revenue.</strong>
          </p>
          <p>
            Founded on the principle that digital experiences should be both visually stunning and technologically superior, we partner with growing companies to engineer custom-built React applications, high-throughput Order Management Systems (OMS), and commercial PC repair software tools (OptimaFix Pro). In an era where generic templates fail, we build custom digital ecosystems that convert visitors into buyers and automate business operations.
          </p>
          <p>
            Our core mission is to bridge the gap between technical complexity and business growth. Whether you need a turnkey startup launchpad, commercial repair shop software licenses that boost service margins by 300%, or full-stack AI search engine dominance (AEO & GEO), De Vibe Studio is your relentless engine for business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
