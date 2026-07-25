import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw, ShoppingCart, ShieldCheck, HardDrive, HelpCircle, Key, Radio, Disc, FileSpreadsheet, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRazorpay } from '../hooks/useRazorpay';
import PaymentModal from './PaymentModal';

export default function Products() {
  const [selectedVariantId, setSelectedVariantId] = useState('digital');
  
  // Tech Pro Autopay Subscription Cycle Toggle ('monthly' vs 'annual')
  const [subscriptionCycle, setSubscriptionCycle] = useState('annual');

  // Technician Rescue USB Delivery Option ('soft' vs 'physical')
  const [usbDeliveryOption, setUsbDeliveryOption] = useState('physical');

  const { openPaymentModal } = useRazorpay();
  const [paymentSuccess, setPaymentSuccess] = useState({
    isOpen: false,
    productName: '',
    downloadUrl: '',
    paymentId: '',
    serialNumber: ''
  });

  // Official Production Pricing (Exclusive of 18% GST)
  const isTestMode = false;

  const optimafixVariants = [
    {
      id: 'digital',
      title: 'Digital Home License',
      basePriceNum: 999,
      basePriceDisplay: '₹999.00',
      gstAmount: '₹179.82',
      totalPrice: 1178.82,
      totalDisplay: '₹1,178.82',
      badge: 'Single PC',
      description: 'Instant digital key for 1 Windows PC with full diagnostics & cleanup.',
      features: ['1 PC Lifetime Activation', '5-Stage Repair Wizard', 'Registry & DNS Optimizer', 'Instant Digital Key']
    },
    {
      id: 'tech',
      title: subscriptionCycle === 'monthly' ? 'Tech Pro Monthly Subscription (Autopay)' : 'Tech Pro Annual Subscription (Autopay)',
      basePriceNum: subscriptionCycle === 'monthly' ? 399 : 3999,
      basePriceDisplay: subscriptionCycle === 'monthly' ? '₹399.00 / mo' : '₹3,999.00 / yr',
      gstAmount: subscriptionCycle === 'monthly' ? '₹71.82' : '₹719.82',
      totalPrice: subscriptionCycle === 'monthly' ? 470.82 : 4718.82,
      totalDisplay: subscriptionCycle === 'monthly' ? '₹470.82 / month' : '₹4,718.82 / year',
      badge: 'Autopay Subscription',
      description: 'Unlimited PC repair license for technicians & shops with automated recurring monthly/annual billing.',
      features: ['Unlimited PC Repair Scans', 'Autopay Recurring Billing', 'Apple AST-2 Diagnostics', 'Priority 24/7 Support']
    },
    {
      id: 'usb',
      title: usbDeliveryOption === 'soft' ? 'Technician Rescue Boot (Digital ISO Soft Copy)' : 'Technician Rescue Boot (Physical 16GB USB Drive)',
      basePriceNum: usbDeliveryOption === 'soft' ? 3999 : 5999,
      basePriceDisplay: usbDeliveryOption === 'soft' ? '₹3,999.00' : '₹5,999.00',
      gstAmount: usbDeliveryOption === 'soft' ? '₹719.82' : '₹1,079.82',
      totalPrice: usbDeliveryOption === 'soft' ? 4718.82 : 7078.82,
      totalDisplay: usbDeliveryOption === 'soft' ? '₹4,718.82 (Digital ISO)' : '₹7,078.82 (Physical 16GB USB)',
      badge: usbDeliveryOption === 'soft' ? 'Digital ISO Download' : 'Physical Hardware Ship',
      description: usbDeliveryOption === 'soft' 
        ? 'Instant bootable ISO / PE image soft copy download for custom USB flashing.'
        : 'Pre-loaded 16GB Custom Bootable Hardware USB Drive shipped express to your door with offline WinPE console.',
      features: usbDeliveryOption === 'soft'
        ? ['Instant Bootable ISO Image', 'Offline PE Rescue Console', 'Pre-activated Tech License', 'Zero Shipping Wait']
        : ['16GB Custom Hardware USB Drive', 'Zero-Click Offline PE Console', 'Pre-activated Tech License', 'Free Express Doorstep Shipping']
    }
  ];

  const additionalProducts = [
    {
      id: 'optispace-pc',
      title: 'OptiSpace PC Pro',
      icon: HardDrive,
      basePriceDisplay: '₹499.00',
      gstAmount: '₹89.82',
      totalPrice: 588.82,
      totalDisplay: '₹588.82',
      description: 'Windows desktop disk analyzer and high-performance storage manager. Visualizes drive usage and purges orphaned files locally.',
      downloadLink: 'https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix'
    },
    {
      id: 'devibe-oms',
      title: 'De-Vibe OMS Enterprise',
      icon: Briefcase,
      basePriceDisplay: '₹14,999.00',
      gstAmount: '₹2,699.82',
      totalPrice: 17698.82,
      totalDisplay: '₹17,698.82',
      description: 'Proprietary enterprise Order Management System to streamline omni-channel inventory flow, status routing, and sales reports automation.',
      downloadLink: 'https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix'
    },
    {
      id: 'bahamut-oms',
      title: 'Bahamut OMS High-Freq',
      icon: Database,
      basePriceDisplay: '₹29,999.00',
      gstAmount: '₹5,399.82',
      totalPrice: 35398.82,
      totalDisplay: '₹35,398.82',
      description: 'Specialized high-frequency fork designed for extreme database loads, transactional security, and sub-millisecond data synchronization.',
      downloadLink: 'https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix'
    }
  ];

  const selectedVariant = optimafixVariants.find(v => v.id === selectedVariantId) || optimafixVariants[0];

  const handleCheckoutProduct = (name, totalPrice, description, downloadLink) => {
    // Generate unique serial number before launching checkout
    const generatedSerial = `OPTFIX-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    openPaymentModal({
      amountInINR: totalPrice,
      productName: name,
      productDescription: `${description} | License Serial: ${generatedSerial}`,
      onSuccess: (response) => {
        setPaymentSuccess({
          isOpen: true,
          productName: name,
          downloadUrl: downloadLink,
          paymentId: response.razorpay_payment_id,
          serialNumber: generatedSerial
        });

        if (downloadLink) {
          const link = document.createElement('a');
          link.href = downloadLink;
          link.setAttribute('download', '');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      },
      onFailure: (errorMsg) => {
        console.log('Payment checkout cancelled:', errorMsg);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Software Products & Direct License Store - De Vibe Studio</title>
        <meta name="description" content="Purchase official software licenses (Base Price + 18% GST, GSTIN: 24ASHPS97771ZE) on De Vibe Studio with trackable Serial Keys, Autopay Subscriptions, and Plan Comparison Matrix." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
            Software Products & Direct License Store
          </h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Purchase official software licenses directly on our site prior to Microsoft Store release.
          </p>

          {/* GSTIN & Tax Compliance Banner */}
          <div style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '0.85rem 1.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>📢 Note: All listed prices are Exclusive of 18% GST (SAC Code 997331). 18% GST is added at checkout.</span>
            <span style={{ margin: '0 0.75rem', opacity: 0.5 }}>|</span>
            <span>Seller GSTIN: <strong style={{ color: 'var(--accent)' }}>24ASHPS97771ZE</strong></span>
          </div>

          {/* OptimaFix Pro Main Card */}
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            padding: '3rem', 
            borderRadius: '16px', 
            border: '1px solid var(--border)', 
            marginBottom: '4rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent)'
              }}>
                <Monitor size={28} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '2.2rem', textAlign: 'left' }}>OptimaFix Pro</h2>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>
                  Available with Trackable Serial Numbers, Autopay Subscriptions, and Soft/Hardware Boot Options
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              OptimaFix Pro is an elite computer diagnostic and automated repair toolkit for Windows systems. Modeled after professional hardware diagnostics suites, it sequentially analyzes system file health, clears caches, deletes dead shortcuts, purges orphaned installers, and optimizes system latency.
            </p>

            {/* 3 Formats Grid */}
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Select Your OptimaFix Pro Package:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {optimafixVariants.map((variant) => {
                const isSelected = variant.id === selectedVariantId;
                return (
                  <div
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.04)' : 'var(--bg-secondary)',
                      border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    {isSelected && (
                      <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--accent)', color: '#fff', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '10px', fontWeight: '600' }}>
                        Selected
                      </span>
                    )}
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                      {variant.badge}
                    </span>
                    <h4 style={{ fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>{variant.title}</h4>
                    
                    {/* Price Display: Base Price + 18% GST */}
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.1rem' }}>
                      {variant.basePriceDisplay}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1rem' }}>
                      Base Price (+18% GST {variant.gstAmount} = <strong>Total: {variant.totalDisplay}</strong>)
                    </div>

                    {/* Interactive Autopay Subscriptions Toggle for Tech Pro Card */}
                    {variant.id === 'tech' && (
                      <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                          🔄 Autopay Renewal Billing Cycle:
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSubscriptionCycle('monthly'); }}
                            style={{
                              flex: 1,
                              padding: '0.4rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: subscriptionCycle === 'monthly' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: subscriptionCycle === 'monthly' ? 'var(--accent)' : 'transparent',
                              color: subscriptionCycle === 'monthly' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}
                          >
                            Monthly (₹399/mo)
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSubscriptionCycle('annual'); }}
                            style={{
                              flex: 1,
                              padding: '0.4rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: subscriptionCycle === 'annual' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: subscriptionCycle === 'annual' ? 'var(--accent)' : 'transparent',
                              color: subscriptionCycle === 'annual' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}
                          >
                            Annual (₹3,999/yr)
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Interactive USB Hardware vs Soft Copy Toggle for Rescue USB Card */}
                    {variant.id === 'usb' && (
                      <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                          💾 Format Option:
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUsbDeliveryOption('soft'); }}
                            style={{
                              flex: 1,
                              padding: '0.4rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: usbDeliveryOption === 'soft' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: usbDeliveryOption === 'soft' ? 'var(--accent)' : 'transparent',
                              color: usbDeliveryOption === 'soft' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}
                          >
                            Digital ISO (₹3,999)
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUsbDeliveryOption('physical'); }}
                            style={{
                              flex: 1,
                              padding: '0.4rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: usbDeliveryOption === 'physical' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: usbDeliveryOption === 'physical' ? 'var(--accent)' : 'transparent',
                              color: usbDeliveryOption === 'physical' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}
                          >
                            16GB Hardware USB (₹5,999)
                          </button>
                        </div>
                      </div>
                    )}

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>
                      {variant.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckoutProduct(`OptimaFix Pro (${variant.title})`, variant.totalPrice, variant.description, "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix");
                      }}
                      className="btn"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        background: isSelected ? 'var(--accent)' : 'var(--text-primary)',
                        color: '#fff',
                        fontWeight: '600'
                      }}
                    >
                      <ShoppingCart size={16} /> Pay {variant.totalDisplay} via Razorpay
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Selection Summary Bar */}
            <div style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '1.5rem 2rem', 
              borderRadius: '12px', 
              border: '1px solid var(--border)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1rem',
              marginBottom: '3.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Selected Package:</span>
                <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem' }}>
                  {selectedVariant.title} (Base {selectedVariant.basePriceDisplay} + 18% GST = {selectedVariant.totalDisplay})
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Includes Trackable License Serial Number & 18% GST Invoice (GSTIN: 24ASHPS97771ZE)
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleCheckoutProduct(`OptimaFix Pro (${selectedVariant.title})`, selectedVariant.totalPrice, selectedVariant.description, "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix")}
                  className="btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                >
                  <ShieldCheck size={18} /> Proceed to Razorpay Checkout ({selectedVariant.totalDisplay})
                </button>
              </div>
            </div>

            {/* LEGAL & DECISION COMPARISON MATRIX TABLE */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <FileSpreadsheet size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.6rem' }}>Comprehensive Plan Comparison Matrix</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Detailed specification breakdown for transparent legal compliance and buyer decision guidance.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '2px solid var(--border)' }}>
                      <th style={{ padding: '1rem', border: '1px solid var(--border)' }}>Features & Legal Specs</th>
                      <th style={{ padding: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Digital Home License</th>
                      <th style={{ padding: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Tech Pro License</th>
                      <th style={{ padding: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Technician Rescue Boot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Target Audience / Usage Scope</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Personal Single PC</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Commercial Tech / Repair Shops</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Emergency Field Repair & Boot Recovery</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Device License Activations</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>1 Windows PC Lifetime</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Unlimited PCs & Scans</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Unlimited PCs & WinPE USB</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Base Price (Excl. 18% GST)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>₹999.00</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>₹399/mo or ₹3,999/yr</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>₹3,999 (ISO) / ₹5,999 (USB)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Delivery & Hardware Format</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Instant MSIX Key Download</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Instant MSIX Key Download</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Digital ISO Soft Copy or Physical 16GB USB</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Autopay Recurring Billing</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><XCircle size={18} color="#ef4444" style={{ display: 'inline' }} /> Lifetime (No Subscription)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={18} color="#10b981" style={{ display: 'inline' }} /> Monthly / Annual Autopay</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><XCircle size={18} color="#ef4444" style={{ display: 'inline' }} /> Lifetime (No Subscription)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Unique License Serial Number</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={18} color="#10b981" style={{ display: 'inline' }} /> OPTFIX-2026-XXXX</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={18} color="#10b981" style={{ display: 'inline' }} /> OPTFIX-2026-XXXX</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={18} color="#10b981" style={{ display: 'inline' }} /> OPTFIX-2026-XXXX</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Official Legal GST Tax Invoice</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>RAZORPAY-0111 (Sequential)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>RAZORPAY-0112 (Sequential)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>RAZORPAY-0113 (Sequential)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Sibling Direct Purchases */}
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Direct Software License Purchases</h2>
          
          <div className="grid grid-3">
            {additionalProducts.map((prod) => {
              const IconComp = prod.icon;
              return (
                <div key={prod.id} style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <IconComp size={24} color="var(--accent)" />
                    <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{prod.title}</h3>
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.1rem' }}>
                    {prod.basePriceDisplay}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1rem' }}>
                    Base Price (+18% GST {prod.gstAmount} = <strong>Total: {prod.totalDisplay}</strong>)
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {prod.description}
                  </p>
                  <button 
                    onClick={() => handleCheckoutProduct(prod.title, prod.totalPrice, prod.description, prod.downloadLink)}
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
                  >
                    <ShoppingCart size={16} /> Pay {prod.totalDisplay} via Razorpay
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Payment Confirmation Modal with Serial Key & Legal Razorpay Invoice Number Generation */}
      <PaymentModal
        isOpen={paymentSuccess.isOpen}
        onClose={() => setPaymentSuccess(prev => ({ ...prev, isOpen: false }))}
        productName={paymentSuccess.productName}
        downloadUrl={paymentSuccess.downloadUrl}
        paymentId={paymentSuccess.paymentId}
        serialNumber={paymentSuccess.serialNumber}
      />
    </>
  );
}
