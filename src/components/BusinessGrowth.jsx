import { Rocket, Wrench, Briefcase, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Target, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessGrowth() {
  const growthTracks = [
    {
      id: 'startups',
      icon: Rocket,
      badge: 'For Startups & Founders',
      title: 'Turnkey Business Setup & Launchpad',
      description: 'Go from concept to market-ready business in 96 hours with custom branding, logo design, lightning-fast React website, and Google/AI indexing.',
      metrics: '⚡ 96-Hour Turnaround | 📈 100% Turnkey',
      highlights: [
        'Custom Brand Identity & Professional Logo Design',
        'High-Converting React/Vite Web Application',
        'Full-Stack SEO & Agentic AI Search Indexing',
        'Integrated Payment Gateways & Lead Forms'
      ],
      ctaText: 'Launch Your Business',
      ctaLink: '/get-quote'
    },
    {
      id: 'techs',
      icon: Wrench,
      badge: 'For Repair Shops & IT Techs',
      title: 'Automated Diagnostic & Service Revenue',
      description: 'Turn your PC repair business into a high-margin powerhouse using OptimaFix Pro. Run 5s turbo scans and export branded PDF invoices for your clients.',
      metrics: '💰 +300% Service Margins | ⏱️ 5s Turbo Scans',
      highlights: [
        'Commercial OptimaFix Pro Tech License',
        'Enterprise AST-2 Hardware Stress Testing',
        'Branded Client PDF Diagnostic Invoices',
        'Bare-Metal WinPE Offline Rescue Boot USB'
      ],
      ctaText: 'Get Tech License',
      ctaLink: '/products'
    },
    {
      id: 'enterprise',
      icon: Briefcase,
      badge: 'For E-Commerce & Enterprises',
      title: 'Order Automation & Scalable ERP',
      description: 'Eliminate inventory bottlenecks and scale order volume 10x with De-Vibe OMS & Bahamut OMS. Centralize multi-channel orders, routing, and sales reports.',
      metrics: '🚀 10x Order Throughput | 🔒 Zero Stockouts',
      highlights: [
        'Omni-Channel Real-time Inventory Sync',
        'High-Frequency Database Architecture (Bahamut)',
        'Seamless Integration with Existing ERPs',
        'Automated Executive Sales Analytics'
      ],
      ctaText: 'Explore Enterprise OMS',
      ctaLink: '/support/de-vibe-oms'
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      badge: 'For Growth Brands',
      title: 'AI Search Dominance (AEO & GEO)',
      description: 'Dominate traditional Google Search AND next-generation AI Search Engines (ChatGPT, Perplexity, Gemini, Claude) to route high-intent buyer traffic directly to your business.',
      metrics: '🤖 AEO & GEO Setup | ₹14,999 (+18% GST)',
      highlights: [
        'Full-Stack AEO (Answer Engine Optimization)',
        'GEO (Generative Engine Optimization) Schema',
        'Machine-Readable LLM Directives (`llms.txt`)',
        'High-Intent Buyer Conversion Funnels'
      ],
      ctaText: 'Get AI Search Optimization',
      ctaLink: '/quote'
    }
  ];

  const blueprintSteps = [
    {
      number: '01',
      title: 'Blueprint & Identity',
      desc: 'We map out your business goals, brand identity, and technical architecture for maximum market impact.'
    },
    {
      number: '02',
      title: 'Build & Launch',
      desc: 'We engineer high-performance web apps and software tools tailored to convert visitors into paying customers.'
    },
    {
      number: '03',
      title: 'Automate & Monetize',
      desc: 'We deploy operational automation tools (OptimaFix Pro, De-Vibe OMS) to maximize your profit margins.'
    },
    {
      number: '04',
      title: 'Scale & Dominate',
      desc: 'We amplify your brand across AI answer engines and search algorithms to scale your customer base continuously.'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-primary)', padding: '6rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ maxWidth: '1240px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)', padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <Award size={16} /> Our Core Mission
          </div>
          <h2 style={{ fontSize: '2.8rem', margin: 0, lineHeight: '1.2' }}>
            We Help You Build Your Business & Accelerate Your Growth
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto 0 auto', lineHeight: '1.6' }}>
            Whether you are launching a new startup, expanding a computer repair shop, or scaling an enterprise e-commerce brand, De Vibe Studio provides the software tools, branding, and engineering expertise to build your business from scratch and scale your revenue.
          </p>
        </div>

        {/* 4 Growth Tracks Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {growthTracks.map((track) => {
            const IconComp = track.icon;
            return (
              <div 
                key={track.id}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, boxShadow 0.25s ease',
                  position: 'relative'
                }}
                className="growth-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <IconComp size={26} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', backgroundColor: 'rgba(37, 99, 235, 0.06)', padding: '0.3rem 0.75rem', borderRadius: '12px' }}>
                    {track.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>{track.title}</h3>
                
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#10b981', marginBottom: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '0.35rem 0.65rem', borderRadius: '6px', width: 'fit-content' }}>
                  {track.metrics}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {track.description}
                </p>

                {/* Highlights List */}
                <div style={{ marginTop: 'auto', marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Key Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {track.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={track.ctaLink} className="btn" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', fontSize: '0.9rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  {track.ctaText} <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* 4-Step Business Growth Blueprint Banner */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          padding: '3.5rem 3rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Proven Methodology
            </span>
            <h3 style={{ fontSize: '2.2rem', margin: '0.4rem 0 0 0' }}>The De Vibe 4-Step Business Growth Blueprint</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {blueprintSteps.map((step, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-primary)', padding: '1.75rem', borderRadius: '14px', border: '1px solid var(--border)', position: 'relative' }}>
                <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--accent)', opacity: 0.8, display: 'block', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  {step.number}
                </span>
                <h4 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>{step.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0, lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* High-Converting CTA Button inside Blueprint Banner */}
          <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: '700' }}>
              Schedule Free Growth Strategy Call
            </Link>
            <Link to="/products" className="btn btn-outline" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: '700' }}>
              Explore Business Software License Store
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
