import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Calculator, Users, Code, CheckCircle2, ShieldCheck, ArrowRight, Zap, Building2, FileText, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FullSuiteBusiness() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const businessSolutions = [
    {
      id: 'launchpad',
      category: 'launchpad',
      badge: '96-Hour Turnkey Launchpad',
      title: 'Complete Business Setup, Logo, Brand Story & Web App',
      pricing: 'Base ₹24,999.00 (+18% GST = ₹29,498.82 Total)',
      delivery: '⚡ 96-Hour Guaranteed Delivery',
      description: 'Go from concept to market-ready business in 96 hours: Professional brand logo design, brand story & USP paper, fast React 19 web application, payment gateway setup (Razorpay 18% GST), and Google/AI search indexing.',
      deliverables: [
        'Custom Brand Logo & Typography Style Guidelines',
        'Brand Story, Mission Statement & USP Positioning Paper',
        'High-Speed React 19 / Vite 8 Web Application',
        'Razorpay 18% GST Tax Invoicing & Payment Gateway',
        'Google Search Console & AI Answer Engine Indexing',
        '96-Hour Guaranteed Turnaround Timeline'
      ],
      ctaText: 'Launch My Business Now',
      ctaLink: '/quote'
    },
    {
      id: 'accounting',
      category: 'software',
      badge: 'Financial & Tax Suite',
      title: 'Custom GST Accounting & Financial Ledger Software',
      pricing: 'Base ₹14,999.00 (+18% GST = ₹17,698.82 Total)',
      delivery: '🔒 Lifetime Commercial License',
      description: 'Custom desktop MSIX and web accounting software tailored for your business: Automated 18% GST tax invoicing (SAC Code 997331), real-time ledger tracking, expense logging, and digital client receipts.',
      deliverables: [
        'Automated 18% GST Tax Invoice Generator with SAC Codes',
        'Real-Time Income, Expense & Ledger Audit Tracking',
        'Sequential Tax Bill Formatting (RAZORPAY-0111, 0112)',
        'One-Click Monthly GST Returns Data Export (CSV/PDF)',
        'Client Payment Reminder & Invoice Tracking Desk',
        '100% Offline Local Data Privacy & Encrypted Backups'
      ],
      ctaText: 'Get Accounting Software',
      ctaLink: '/quote'
    },
    {
      id: 'attendance',
      category: 'software',
      badge: 'HR & Operations',
      title: 'Employee Attendance, HR & Payroll Management Suite',
      pricing: 'Base ₹19,999.00 (+18% GST = ₹23,598.82 Total)',
      delivery: '⏱️ 7-Day Custom Setup',
      description: 'Streamline staff management with a custom attendance and payroll engine: Biometric/Geo-location mobile & desktop staff check-in, shift planner, automated salary slip generation, and leave management.',
      deliverables: [
        'Geo-Location & Device Fingerprint Staff Check-in',
        'Automated Overtime & Shift Scheduling Matrix',
        'One-Click Monthly Salary Slip & Payroll Generator',
        'Leave Application & Approval Workflow Desk',
        'Staff Performance & Attendance Analytics Dashboard',
        'Multi-Branch & Remote Employee Support'
      ],
      ctaText: 'Get Attendance & HR Suite',
      ctaLink: '/quote'
    },
    {
      id: 'custom-app',
      category: 'engineering',
      badge: 'Bespoke Engineering',
      title: 'Custom Problem-Solving Software & App Engineering',
      pricing: 'Base ₹29,999.00 (+18% GST = ₹35,398.82 Total)',
      delivery: '🚀 Tailored Architecture',
      description: 'Solve specific operational bottlenecks in your business with custom software built from scratch: Desktop MSIX utilities, web diagnostic portals, and high-frequency backend databases.',
      deliverables: [
        'Bespoke Architecture Engineered for Your Bottlenecks',
        'High-Frequency PostgreSQL & Redis Database Engine',
        'Custom Windows Desktop (MSIX) & Mobile Web Apps',
        'Real-Time Webhook & Third-Party API Integrations',
        'Full Source Code Transfer & Intellectual Property',
        'Dedicated 12-Month Technical Support & Updates'
      ],
      ctaText: 'Request Custom App Build',
      ctaLink: '/quote'
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? businessSolutions 
    : businessSolutions.filter(s => s.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>All-In-One Business Solutions Suite - De Vibe Studio</title>
        <meta name="description" content="Complete business software & branding solutions: Turnkey 96-Hour Business Launchpad, Custom GST Accounting Software, Staff Attendance & HR Suite, and Bespoke Apps." />
        <link rel="canonical" href="https://www.devibestudio.com/full-suite-business" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--surface)', color: 'var(--text-primary)', padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid var(--glass-border)' }}>
              <Building2 size={16} /> Total Business Ecosystem
            </div>
            <h1 className="gradient-text" style={{ fontSize: '3.3rem', marginBottom: '1rem' }}>
              All-In-One Business Solutions & Software Suite
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '850px', margin: '0 auto' }}>
              Everything your business needs under one roof: Turnkey 96-Hour Brand Setup, Custom GST Accounting Software, Staff Attendance & Payroll Systems, and Custom App Engineering.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'btn' : 'btn btn-outline'}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              All Business Solutions
            </button>
            <button
              onClick={() => setSelectedCategory('launchpad')}
              className={selectedCategory === 'launchpad' ? 'btn' : 'btn btn-outline'}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              96h Business Launchpad
            </button>
            <button
              onClick={() => setSelectedCategory('software')}
              className={selectedCategory === 'software' ? 'btn' : 'btn btn-outline'}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              Accounting & HR Software
            </button>
            <button
              onClick={() => setSelectedCategory('engineering')}
              className={selectedCategory === 'engineering' ? 'btn' : 'btn btn-outline'}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              Custom App Engineering
            </button>
          </div>

          {/* Solutions Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
            {filteredSolutions.map((sol) => (
              <div key={sol.id} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-primary)', backgroundColor: 'var(--surface)', padding: '0.35rem 0.85rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    {sol.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700' }}>
                    {sol.delivery}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0', lineHeight: '1.3' }}>{sol.title}</h3>
                
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {sol.pricing}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  {sol.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                    Included Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {sol.deliverables.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={sol.ctaLink} className="btn" style={{ width: '100%', textAlign: 'center', padding: '0.85rem', fontSize: '0.95rem' }}>
                  {sol.ctaText} ➔
                </Link>
              </div>
            ))}
          </div>

          {/* 7-Day Live Staging Trial CTA */}
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: '20px', border: '1px solid var(--glass-border)', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Need a Custom All-In-One Package for Your Business?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto 1.75rem auto' }}>
              We offer <strong>7-Day Free Live Staging Previews</strong>. Test your custom web app, accounting software, or staff attendance portal on a live staging domain before finalizing your order.
            </p>
            <Link to="/quote" className="btn" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: '700' }}>
              Request 7-Day Free Live Staging Trial ➔
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
