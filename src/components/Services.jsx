import { Monitor, PenTool, Rocket, Code, TrendingUp, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: <Rocket size={32} />,
    title: 'Complete 96-Hour Turnkey Business Launchpad',
    delivery: '⚡ 96-Hour Delivery Guarantee',
    pricing: 'Base ₹24,999.00 (+18% GST = ₹29,498.82 Total)',
    description: 'Go from concept to market-ready business in 96 hours: Custom brand logo, high-converting React web application, instant payment gateway setup (Razorpay 18% GST), and Google/AI search indexing.',
    features: ['Custom Brand Logo & Style Guidelines', 'High-Speed React Web Application', 'Razorpay 18% GST Invoicing Setup', '96-Hour Guaranteed Turnaround']
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'AI Search & Answer Engine Optimization (AEO/GEO)',
    delivery: '🚀 96-Hour Implementation',
    pricing: 'Base ₹14,999.00 (+18% GST = ₹17,698.82 Total)',
    description: 'Route high-intent buyer traffic directly to your business from AI search engines (ChatGPT, Perplexity, Gemini, Claude, Copilot) using structured JSON-LD schemas and llms.txt manifests.',
    features: ['Full-Stack AEO & GEO Optimization', 'Machine-Readable `llms.txt` Directives', 'Schema.org Product & Service Markup', 'High-Intent Customer Conversion Funnels']
  },
  {
    icon: <Monitor size={32} />,
    title: 'Custom Web Application & E-Commerce Engineering',
    delivery: '⏱️ 7 - 14 Days Delivery',
    pricing: 'Base ₹19,999.00 (+18% GST = ₹23,598.82 Total)',
    description: 'High-performance bespoke web applications, e-commerce storefronts, and diagnostic web portals featuring 200 OK static pre-rendering and mobile responsiveness.',
    features: ['Modern UI/UX & Micro-Animations', 'Static Pre-Rendering (200 OK Status)', '100% Mobile & Tablet Responsive', 'SEO Optimized with PageSpeed 95+']
  },
  {
    icon: <Code size={32} />,
    title: 'Enterprise Software & Order Systems (De-Vibe OMS)',
    delivery: '🔒 Commercial Software License',
    pricing: 'De-Vibe OMS Base ₹14,999 / Bahamut OMS Base ₹29,999',
    description: 'Omni-channel order routing, real-time inventory synchronization matrix, and high-frequency PostgreSQL and Redis transactional database locks.',
    features: ['Real-Time Multi-Channel Inventory Matrix', 'PostgreSQL ACID Transaction Locks', 'Redis Sub-Millisecond Execution Engine', 'Raft Consensus Database Clustering']
  }
];

export default function Services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web & Enterprise Software Engineering Services",
    "provider": {
      "@type": "Organization",
      "name": "De Vibe Studio",
      "vatID": "24ASHPS97771ZE"
    },
    "serviceType": "Turnkey Business Launchpad, AI Search Optimization (AEO/GEO), Web Application Engineering, Enterprise OMS",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Our Services & Pricing - De Vibe Studio</title>
        <meta name="description" content="Explore De Vibe Studio services: 96-Hour Turnkey Business Launchpad, AI Search Optimization (AEO/GEO), Custom Web Apps, and Enterprise OMS." />
        <link rel="canonical" href="https://www.devibestudio.com/services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <section id="services" style={{ minHeight: '80vh', padding: '6rem 0' }} className="bg-alt">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Solutions & Pricing
            </span>
            <h1 style={{ fontSize: '3.2rem', margin: '0.5rem 0 1rem 0' }}>Our Core Services & Growth Packages</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Transparent pricing, clear deliverables, and guaranteed 96-hour turnaround timelines for turnkey business launchpads.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {servicesList.map((service, index) => (
              <div key={index} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                    {service.icon}
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.35rem 0.75rem', borderRadius: '12px' }}>
                    {service.delivery}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', margin: '0 0 0.5rem 0' }}>{service.title}</h3>
                
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '1rem' }}>
                  {service.pricing}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {service.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', marginBottom: '1.75rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} color="#10b981" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/quote" className="btn" style={{ width: '100%', textAlign: 'center', padding: '0.8rem', fontSize: '0.9rem' }}>
                  Get Started ➔
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
