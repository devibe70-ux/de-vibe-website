import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ShoppingCart, Calculator, Users, Rocket, ShieldCheck } from 'lucide-react';

const liveProjects = [
  {
    id: 'launchpad',
    name: 'Turnkey 96-Hour Business Launchpad',
    category: 'Full-Stack Branding & Web Engineering',
    description: 'Complete 96-hour business launchpad: Custom brand logo, brand story, high-speed React 19 web application, Razorpay 18% GST invoicing, and Google/AI search indexing.',
    link: '/full-suite-business',
    badge: '96h Turnaround'
  },
  {
    id: 'accounting',
    name: 'Custom GST Accounting & Financial Ledger Software',
    category: 'Desktop & Web Financial Tools',
    description: 'Automated 18% GST tax invoice generator (SAC Code 997331), real-time income & expense ledger audit, and sequential bill formatting.',
    link: '/full-suite-business',
    badge: 'Tax Software'
  },
  {
    id: 'attendance',
    name: 'Employee Attendance & Payroll Suite',
    category: 'HR & Operations Management',
    description: 'Biometric and geo-location staff check-in tracker, shift planning matrix, automated monthly salary slips, and leave management.',
    link: '/full-suite-business',
    badge: 'HR Suite'
  },
  {
    id: 'optimafix',
    name: 'OptimaFix Pro — Windows Diagnostic Suite',
    category: 'Commercial Desktop Software',
    description: 'High-speed 5-stage automated repair wizard, S.M.A.R.T. NVMe wear telemetry, AST-2 style hardware stress testing, and WinPE boot rescue.',
    link: '/products',
    badge: 'Live Software'
  },
  {
    id: 'oms',
    name: 'De-Vibe OMS Enterprise ERP',
    category: 'Enterprise Order Architecture',
    description: 'Omni-channel order routing engine, real-time multi-channel inventory synchronization matrix, and PostgreSQL ACID transaction locks.',
    link: '/products',
    badge: 'Enterprise ERP'
  }
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Live Projects & Systems - De Vibe Studio</title>
        <meta name="description" content="Explore live commercial software systems, web applications, and business suites built and hosted directly by De Vibe Studio." />
        <link rel="canonical" href="https://www.devibestudio.com/projects" />
      </Helmet>
      <section id="projects" style={{ minHeight: '80vh', padding: '6rem 0' }} className="bg-alt">
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Live Portfolio & Systems
            </span>
            <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem 0' }}>Our Commercial Projects & Software Suites</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              All software tools, business suites, and web applications are hosted live and operational directly on our site.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {liveProjects.map(proj => (
              <div key={proj.id} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-primary)', backgroundColor: 'var(--surface)', padding: '0.3rem 0.75rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    {proj.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {proj.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', margin: '0 0 0.75rem 0' }}>{proj.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                  {proj.description}
                </p>

                <Link to={proj.link} className="btn" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', fontSize: '0.9rem' }}>
                  View Live Solution <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
