import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Rocket, Monitor, Calculator, Users, Cpu, Code, ArrowRight, CheckCircle2 } from 'lucide-react';

const fullServices = [
  {
    icon: <Rocket size={32} color="var(--accent)" />,
    title: 'Turnkey 96-Hour Business Launchpad',
    price: '₹24,999 Excl. GST',
    description: 'Complete 96-hour business startup package: Custom brand logo, brand story, high-speed React web app, Razorpay 18% GST billing setup, and Google/AI indexing.',
    link: '/quote',
    badge: '96h Turnaround'
  },
  {
    icon: <Monitor size={32} color="var(--accent)" />,
    title: 'Custom Website Design & Engineering',
    price: 'Custom Project Quote',
    description: 'Bespoke React 19 web applications with sub-100ms load speeds, interactive animations, SEO/AEO optimization, and mobile responsiveness.',
    link: '/quote',
    badge: 'High Performance'
  },
  {
    icon: <Calculator size={32} color="var(--accent)" />,
    title: 'Custom GST Accounting & Billing Software',
    price: '₹14,999 Excl. GST',
    description: 'Automated 18% GST tax invoice generator (SAC Code 997331), income/expense ledger tracking, sequential bill formatting, and instant PDF receipts.',
    link: '/quote',
    badge: 'GST Tax Software'
  },
  {
    icon: <Users size={32} color="var(--accent)" />,
    title: 'Employee Attendance & Payroll HR Suite',
    price: '₹19,999 Excl. GST',
    description: 'Geo-location and device fingerprint staff check-in tracker, shift planning matrix, automated monthly salary slips, and leave management.',
    link: '/quote',
    badge: 'HR & Payroll'
  },
  {
    icon: <Cpu size={32} color="var(--accent)" />,
    title: 'OptimaFix Pro — Windows PC Diagnostic Suite',
    price: '₹999 Excl. GST',
    description: 'High-speed 5-stage automated repair wizard, S.M.A.R.T. NVMe disk audit, targeted RAM latency optimizer, and WinPE bare-metal boot rescue console.',
    link: '/products',
    badge: 'Live Software'
  },
  {
    icon: <Code size={32} color="var(--accent)" />,
    title: 'Bespoke Custom Software Engineering',
    price: '₹29,999 Excl. GST',
    description: 'Bespoke Windows desktop MSIX apps, cloud ERP systems, and targeted operational problem-solving software engineered for your business.',
    link: '/quote',
    badge: 'Custom Software'
  }
];

export default function Services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "De Vibe Studio Business Solutions & Software Development Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "De Vibe Studio",
      "url": "https://www.devibestudio.com",
      "telephone": "+919328412916",
      "email": "help@devibestudio.in"
    },
    "serviceType": "Turnkey Business Launchpad, Custom Web Development, GST Accounting Software, Staff Attendance HR Suite, OptimaFix Pro PC Diagnostics",
    "areaServed": ["India", "Gujarat", "Ahmedabad", "Worldwide"]
  };

  return (
    <>
      <Helmet>
        <title>Our Services & Business Solutions — De Vibe Studio</title>
        <meta name="description" content="Explore De Vibe Studio services: Turnkey 96-hour business launchpads, custom React websites, brand logos, GST accounting tools, and staff attendance software." />
        <link rel="canonical" href="https://www.devibestudio.com/services" />
        <meta property="og:title" content="Our Services & Business Solutions — De Vibe Studio" />
        <meta property="og:description" content="Explore our complete business suite: Turnkey launchpads, custom web design, GST billing software, and employee HR tools." />
        <meta property="og:url" content="https://www.devibestudio.com/services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <section id="services" style={{ minHeight: '80vh', padding: '6rem 0' }} className="bg-alt">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Full Business Solutions & Engineering
            </span>
            <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem 0' }}>Our Services & Business Solutions</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              Everything you need to launch and scale your business: from brand logo and website to GST accounting tools and staff management.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {fullServices.map((sol, index) => (
              <div key={index} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    {sol.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-primary)', backgroundColor: 'var(--surface)', padding: '0.35rem 0.85rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    {sol.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', margin: '0 0 0.5rem 0' }}>{sol.title}</h3>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.85rem', display: 'block' }}>{sol.price}</span>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                  {sol.description}
                </p>

                <Link to={sol.link} className="btn" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--glass-border)', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Ready to Scale Your Business Operations?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto 1.75rem auto' }}>
              Schedule a strategy call or request a project estimate. Guaranteed 96-Hour Delivery on Turnkey Launchpads with 18% GST invoice.
            </p>
            <Link to="/quote" className="btn" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: '700' }}>
              Request Project Estimate ➔
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
