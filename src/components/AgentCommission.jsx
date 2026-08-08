import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Users, Award, TrendingUp, CheckCircle, Copy, ArrowRight, ShieldCheck, Zap, Sparkles, Percent, Share2, Wallet, HelpCircle, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AgentCommission() {
  // Calculator state
  const [digitalSalesCount, setDigitalSalesCount] = useState(15);
  const [usbSalesCount, setUsbSalesCount] = useState(10);
  const [techSubCount, setTechSubCount] = useState(5);
  const [omsSalesCount, setOmsSalesCount] = useState(2);

  // Agent Signup Form State
  const [agentForm, setAgentForm] = useState({
    name: '',
    email: '',
    phone: '',
    shopName: '',
    city: '',
    upiId: ''
  });

  const [registeredAgent, setRegisteredAgent] = useState(null);

  // Calculation Logic (Prices in INR)
  // Digital Home: ₹1,178.82 Total -> 20% Comm = ₹235.76 per sale
  // USB Boot: ₹7,078.82 Total -> 20% Comm = ₹1,415.76 per sale
  // Tech Sub: ₹4,718.82/yr Total -> 15% Comm = ₹707.82 per sub/yr
  // OMS Enterprise: ₹17,698.82 Total -> 10% Comm = ₹1,769.88 per sale

  const digitalComm = digitalSalesCount * 235.76;
  const usbComm = usbSalesCount * 1415.76;
  const techComm = techSubCount * 707.82;
  const omsComm = omsSalesCount * 1769.88;

  const totalMonthlyEarnings = Math.round(digitalComm + usbComm + (techComm / 12) + omsComm);
  const totalAnnualEarnings = Math.round(totalMonthlyEarnings * 12);

  const handleRegisterAgent = (e) => {
    e.preventDefault();
    if (!agentForm.name || !agentForm.phone) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const agentCode = `AGENT-${agentForm.name.substring(0, 3).toUpperCase()}${randomId}`;
    const referralLink = `https://www.devibestudio.com/products?ref=${agentCode}`;

    setRegisteredAgent({
      ...agentForm,
      agentCode,
      referralLink
    });
  };

  const handleCopyLink = (text) => {
    navigator.clipboard.writeText(text);
    alert('Referral link copied to clipboard!');
  };

  return (
    <>
      <Helmet>
        <title>De Vibe Agent Commission & Partner Program - Earn 20% Sales Referral</title>
        <meta name="description" content="Join the official De Vibe Agent & Affiliate Commission Network. Earn up to 20% instant commission selling OptimaFix Pro and De-Vibe OMS to computer repair shops and businesses." />
        <link rel="canonical" href="https://www.devibestudio.com/agent-program" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <Wallet size={16} /> Official Partner Network
            </div>
            <h1 className="gradient-text" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
              De Vibe Agent & Affiliate Commission Program
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Partner with De Vibe Studio to earn high-ticket commissions selling PC diagnostic tools and enterprise OMS software to technicians, computer repair shops, and business clients.
            </p>
          </div>

          {/* 3 Core Commission Tiers Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', margin: '0 auto 1.25rem auto' }}>
                <Percent size={28} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase' }}>OptimaFix Pro Tiers</span>
              <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0', color: '#10b981' }}>20% Commission</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                Earn up to <strong>₹1,415.76 per sale</strong> on OptimaFix Pro Digital & 16GB Bootable USB Drive orders.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(129, 140, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', margin: '0 auto 1.25rem auto' }}>
                <TrendingUp size={28} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-purple)', textTransform: 'uppercase' }}>Tech Pro Autopay</span>
              <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0', color: 'var(--accent-purple)' }}>15% Recurring</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                Earn passive recurring monthly & annual income every time your referred technicians renew their subscription.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', margin: '0 auto 1.25rem auto' }}>
                <Award size={28} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Enterprise OMS Deals</span>
              <h3 style={{ fontSize: '2.2rem', margin: '0.25rem 0', color: 'var(--accent-gold)' }}>10% High-Ticket</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                Earn <strong>₹1,769 to ₹3,539 per deal</strong> referring enterprise e-commerce clients to De-Vibe OMS & Bahamut OMS.
              </p>
            </div>
          </div>

          {/* INTERACTIVE AGENT EARNINGS CALCULATOR */}
          <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Interactive Estimator
              </span>
              <h2 style={{ fontSize: '2.4rem', margin: '0.4rem 0 0 0' }}>Calculate Your Monthly Agent Income</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.5rem' }}>
                Adjust the sliders below to estimate your potential commission earnings based on monthly client referrals.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
              
              {/* Sliders Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: '600' }}>OptimaFix Digital Home (₹999 + GST):</span>
                    <strong style={{ color: 'var(--accent)' }}>{digitalSalesCount} Sales / mo</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={digitalSalesCount}
                    onChange={(e) => setDigitalSalesCount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comm: ₹235.76 per sale</span>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: '600' }}>Technician 16GB Boot USB (₹5,999 + GST):</span>
                    <strong style={{ color: '#10b981' }}>{usbSalesCount} Sales / mo</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={usbSalesCount}
                    onChange={(e) => setUsbSalesCount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#10b981' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comm: ₹1,415.76 per sale</span>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: '600' }}>Tech Pro Autopay Subscriptions:</span>
                    <strong style={{ color: 'var(--accent-purple)' }}>{techSubCount} Techs / mo</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={techSubCount}
                    onChange={(e) => setTechSubCount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-purple)' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comm: ₹707.82 per sub / yr</span>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: '600' }}>De-Vibe OMS Enterprise Deals:</span>
                    <strong style={{ color: 'var(--accent-gold)' }}>{omsSalesCount} Deals / mo</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={omsSalesCount}
                    onChange={(e) => setOmsSalesCount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Comm: ₹1,769.88 per deal</span>
                </div>
              </div>

              {/* Total Earnings Display Box */}
              <div style={{ backgroundColor: 'rgba(6, 9, 17, 0.7)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Estimated Monthly Agent Income
                </span>
                <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#10b981', lineHeight: '1', marginBottom: '0.5rem' }}>
                  ₹{totalMonthlyEarnings.toLocaleString('en-IN')}
                </div>
                <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  (~ ₹{totalAnnualEarnings.toLocaleString('en-IN')} / year)
                </span>

                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
                  ⚡ Weekly Direct Payouts transferred straight to your UPI ID / Bank Account.
                </div>
              </div>

            </div>
          </div>

          {/* AGENT REGISTRATION FORM */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Sparkles size={24} color="var(--accent)" />
                <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Register as an Official Agent</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Sign up in 30 seconds to generate your unique Agent Referral Link & ID. Start sharing with client shop owners and computer users immediately.
              </p>

              {registeredAgent ? (
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1.75rem', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <CheckCircle size={20} /> Welcome aboard, {registeredAgent.name}!
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    Your Official Agent Account is active. Your referral code is: <strong style={{ color: 'var(--text-primary)' }}>{registeredAgent.agentCode}</strong>
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '700', display: 'block', marginBottom: '0.4rem' }}>
                      YOUR UNIQUE REFERRAL LINK:
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input 
                        type="text" 
                        readOnly 
                        value={registeredAgent.referralLink} 
                        style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--accent)', fontWeight: '600', fontSize: '0.85rem' }} 
                      />
                      <button 
                        onClick={() => handleCopyLink(registeredAgent.referralLink)} 
                        className="btn" 
                        style={{ padding: '0.75rem 1rem' }}
                      >
                        <Copy size={16} /> Copy
                      </button>
                    </div>
                  </div>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Payout UPI: {registeredAgent.upiId || 'Pending setup'} | All sales automatically tracked & credited weekly.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleRegisterAgent} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      value={agentForm.name} 
                      onChange={(e) => setAgentForm({ ...agentForm, name: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(6, 9, 17, 0.7)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '0.4rem' }}>WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        value={agentForm.phone} 
                        onChange={(e) => setAgentForm({ ...agentForm, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(6, 9, 17, 0.7)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '0.4rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="rahul@techrepair.com" 
                        value={agentForm.email} 
                        onChange={(e) => setAgentForm({ ...agentForm, email: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(6, 9, 17, 0.7)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '0.4rem' }}>Shop / Business Name</label>
                      <input 
                        type="text" 
                        placeholder="Sharma Computer Care" 
                        value={agentForm.shopName} 
                        onChange={(e) => setAgentForm({ ...agentForm, shopName: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(6, 9, 17, 0.7)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '0.4rem' }}>UPI ID for Weekly Payouts *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="9876543210@paytm / @okicici" 
                        value={agentForm.upiId} 
                        onChange={(e) => setAgentForm({ ...agentForm, upiId: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', backgroundColor: 'rgba(6, 9, 17, 0.7)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn" style={{ marginTop: '0.5rem', width: '100%', padding: '0.9rem', fontSize: '1rem' }}>
                    Generate My Agent Link & Join Network ➔
                  </button>
                </form>
              )}
            </div>

            {/* Why Join & Agent Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={22} color="var(--accent)" /> Why Technicians & Repair Shops Join Us
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>High Customer Conversion:</strong> Customers love OptimaFix Pro diagnostic reports and 5s speed boost.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Weekly Direct UPI Payouts:</strong> No minimum withdrawal thresholds — commissions are transferred every Monday.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Free Marketing Media Kit:</strong> Access printable shop posters, WhatsApp flyers, and client pitch scripts.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}>
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Dedicated Partner Support:</strong> 24/7 priority WhatsApp desk for agent assistance and bulk order queries.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Support CTA */}
              <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.08)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '2rem', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Need Bulk Shop Licenses or Custom Agent Terms?</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Speak directly with our Partner Manager for enterprise computer repair chains and bulk USB orders.
                </p>
                <a href="https://wa.me/919328412916" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Chat on WhatsApp (+91 93284 12916)
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
