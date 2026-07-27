import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw, ShoppingCart, ShieldCheck, HardDrive, HelpCircle, Key, Radio, Disc, FileSpreadsheet, XCircle, Cpu, Sliders, Layers, Sparkles, Clock, Award, Terminal, CheckCircle } from 'lucide-react';
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
      badge: 'Single PC Lifetime',
      subBadge: 'Affordable Home Plan',
      speedTag: '⚡ 1x Standard Engine (~30s scan)',
      description: 'Instant digital key for 1 Windows PC with essential diagnostics, junk cleanup & S.M.A.R.T. health checks.',
      highlights: [
        '1 PC Lifetime Activation',
        '5-Stage Automated Repair Wizard',
        'Registry & DNS Latency Reset',
        'Basic S.M.A.R.T. Disk Health Check',
        'Instant Digital Key Delivery'
      ]
    },
    {
      id: 'tech',
      title: subscriptionCycle === 'monthly' ? 'Tech Pro Monthly (Autopay)' : 'Tech Pro Annual (Autopay)',
      basePriceNum: subscriptionCycle === 'monthly' ? 399 : 3999,
      basePriceDisplay: subscriptionCycle === 'monthly' ? '₹399.00 / mo' : '₹3,999.00 / yr',
      gstAmount: subscriptionCycle === 'monthly' ? '₹71.82' : '₹719.82',
      totalPrice: subscriptionCycle === 'monthly' ? 470.82 : 4718.82,
      totalDisplay: subscriptionCycle === 'monthly' ? '₹470.82 / month' : '₹4,718.82 / year',
      badge: 'Autopay Subscription',
      subBadge: '⭐ Best ROI for Repair Shops & Techs',
      speedTag: '🚀 5x Multi-Thread Turbo Engine (~5s scan)',
      description: 'Commercial repair license for technicians & shops with 5x parallel engine, Apple AST-2 diagnostics & client PDF invoices.',
      highlights: [
        'Unlimited PCs & Scans (Multi-Device)',
        'Apple AST-2 Style Component Stress Test',
        'Branded Client PDF Diagnostic Invoices',
        'Automated Daily Scheduled Auto-Repair',
        'Priority 24/7 Tech Hotline & Remote Support'
      ]
    },
    {
      id: 'usb',
      title: usbDeliveryOption === 'soft' ? 'Technician Rescue Boot (Digital ISO)' : 'Technician Rescue Boot (16GB Hardware USB)',
      basePriceNum: usbDeliveryOption === 'soft' ? 3999 : 5999,
      basePriceDisplay: usbDeliveryOption === 'soft' ? '₹3,999.00' : '₹5,999.00',
      gstAmount: usbDeliveryOption === 'soft' ? '₹719.82' : '₹1,079.82',
      totalPrice: usbDeliveryOption === 'soft' ? 4718.82 : 7078.82,
      totalDisplay: usbDeliveryOption === 'soft' ? '₹4,718.82 (Digital ISO)' : '₹7,078.82 (16GB USB)',
      badge: usbDeliveryOption === 'soft' ? 'Digital ISO Download' : 'Physical 16GB Hardware Drive',
      description: usbDeliveryOption === 'soft' 
        ? 'Bare-metal WinPE offline boot rescue console soft copy for unbootable PCs and Blue Screen (BSOD) repair.'
        : 'Pre-loaded 16GB Custom Bootable Hardware USB Drive shipped express with zero-click offline WinPE recovery environment.',
      speedTag: '⚡ Bare-Metal WinPE Kernel (Instant Offline Boot)',
      highlights: usbDeliveryOption === 'soft'
        ? [
            'Instant Bootable ISO Image Soft Copy',
            'Zero-Click Offline WinPE Rescue Console',
            'Offline Registry Hive Injector & BCD Repair',
            'Bare-Metal Unbootable BSOD OS Recovery',
            'Pre-activated Unlimited Tech License'
          ]
        : [
            '16GB Custom Bootable Hardware USB Drive',
            'Zero-Click Offline WinPE Rescue Console',
            'Offline Registry Hive Injector & BCD Repair',
            'Bare-Metal Unbootable BSOD OS Recovery',
            'Free Express Doorstep Shipping & Lifetime USB Warranty'
          ]
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
      downloadLink: '/downloads/OptimaFix.msix'
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
      downloadLink: '/downloads/DeVibe-OMS-Installer.msix'
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
      downloadLink: '/downloads/DeVibe-OMS-Installer.msix'
    }
  ];

  const selectedVariant = optimafixVariants.find(v => v.id === selectedVariantId) || optimafixVariants[0];

  const handleCheckoutProduct = (name, totalPrice, description, downloadLink) => {
    // Generate unique serial number with product-specific prefix before launching checkout
    let prefix = 'OPTFIX';
    if (name.toLowerCase().includes('optispace')) prefix = 'OPTSPC';
    else if (name.toLowerCase().includes('oms') && name.toLowerCase().includes('de-vibe')) prefix = 'DVOMS';
    else if (name.toLowerCase().includes('bahamut')) prefix = 'BAHAMUT';

    const generatedSerial = `${prefix}-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

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
        <div className="container" style={{ maxWidth: '1240px' }}>
          
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
                width: '52px', 
                height: '52px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent)'
              }}>
                <Monitor size={32} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '2.2rem', textAlign: 'left' }}>OptimaFix Pro</h2>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--accent)', fontWeight: '600' }}>
                  Professional Diagnostics & Automated Repair Suite for Windows OS
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              OptimaFix Pro is an elite computer diagnostic and automated repair toolkit for Windows systems. Modeled after professional hardware diagnostics suites, it sequentially analyzes system file health, clears caches, deletes dead shortcuts, purges orphaned installers, and optimizes system latency.
            </p>

            {/* 3 Formats Grid - Tally Inspired Layout */}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.75rem', textAlign: 'center' }}>
              Select Your OptimaFix Pro License Tier:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginBottom: '3rem' }}>
              {optimafixVariants.map((variant) => {
                const isSelected = variant.id === selectedVariantId;
                return (
                  <div
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    style={{
                      backgroundColor: isSelected ? 'rgba(37, 99, 235, 0.04)' : 'var(--bg-secondary)',
                      border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                      borderRadius: '14px',
                      padding: '2rem',
                      cursor: 'pointer',
                      transition: 'all 0.25 ease',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
                    {/* Top Right +18% GST Badge (Tally Inspired) */}
                    <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: '700' }}>
                      +18% GST
                    </div>

                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '700', marginBottom: '0.25rem' }}>
                      {variant.badge}
                    </span>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', marginBottom: '0.75rem' }}>
                      {variant.subBadge}
                    </div>

                    <h4 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>{variant.title}</h4>
                    
                    {/* Price Display */}
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.1rem' }}>
                      {variant.basePriceDisplay}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1.25rem' }}>
                      Base Price (+18% GST {variant.gstAmount} = <strong style={{ color: 'var(--text-primary)' }}>Total: {variant.totalDisplay}</strong>)
                    </div>

                    {/* Speed Tag Pill */}
                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: '#10b981', fontSize: '0.8rem', fontWeight: '700', padding: '0.4rem 0.75rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      {variant.speedTag}
                    </div>

                    {/* Interactive Autopay Subscriptions Toggle for Tech Pro Card */}
                    {variant.id === 'tech' && (
                      <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                          🔄 Autopay Renewal Billing Cycle:
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSubscriptionCycle('monthly'); }}
                            style={{
                              flex: 1,
                              padding: '0.45rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: subscriptionCycle === 'monthly' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: subscriptionCycle === 'monthly' ? 'var(--accent)' : 'transparent',
                              color: subscriptionCycle === 'monthly' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '700',
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
                              padding: '0.45rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: subscriptionCycle === 'annual' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: subscriptionCycle === 'annual' ? 'var(--accent)' : 'transparent',
                              color: subscriptionCycle === 'annual' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '700',
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
                      <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)', padding: '0.85rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                          💾 Format Option:
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUsbDeliveryOption('soft'); }}
                            style={{
                              flex: 1,
                              padding: '0.45rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: usbDeliveryOption === 'soft' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: usbDeliveryOption === 'soft' ? 'var(--accent)' : 'transparent',
                              color: usbDeliveryOption === 'soft' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '700',
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
                              padding: '0.45rem',
                              fontSize: '0.75rem',
                              borderRadius: '6px',
                              border: usbDeliveryOption === 'physical' ? '2px solid var(--accent)' : '1px solid var(--border)',
                              backgroundColor: usbDeliveryOption === 'physical' ? 'var(--accent)' : 'transparent',
                              color: usbDeliveryOption === 'physical' ? '#fff' : 'var(--text-primary)',
                              fontWeight: '700',
                              cursor: 'pointer'
                            }}
                          >
                            16GB Hardware USB (₹5,999)
                          </button>
                        </div>
                      </div>
                    )}

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                      {variant.description}
                    </p>

                    {/* "What You Get" Checklist Box (Tally Style) */}
                    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '1.75rem', flex: 1 }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                        What you get:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {variant.highlights.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <CheckCircle size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckoutProduct(`OptimaFix Pro (${variant.title})`, variant.totalPrice, variant.description, "/downloads/OptimaFix.msix");
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
                        fontWeight: '700',
                        padding: '0.85rem'
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
                  Includes Trackable License Serial Number & 18% GST Tax Invoice (Seller GSTIN: 24ASHPS97771ZE)
                </span>
              </div>
              <div>
                <button
                  onClick={() => handleCheckoutProduct(`OptimaFix Pro (${selectedVariant.title})`, selectedVariant.totalPrice, selectedVariant.description, "/downloads/OptimaFix.msix")}
                  className="btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                >
                  <ShieldCheck size={18} /> Proceed to Razorpay Checkout ({selectedVariant.totalDisplay})
                </button>
              </div>
            </div>

            {/* EXPANDED HIGH-VALUE PLAN COMPARISON MATRIX TABLE */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <FileSpreadsheet size={26} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.75rem' }}>Comprehensive Plan Comparison Matrix</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Detailed technical specification breakdown demonstrating what improves in performance, diagnostic speed, hardware depth, and capabilities across each tier.
              </p>

              <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '2px solid var(--border)' }}>
                      <th style={{ padding: '1.1rem', border: '1px solid var(--border)', fontSize: '0.95rem' }}>Technical Specs & Capabilities</th>
                      <th style={{ padding: '1.1rem', border: '1px solid var(--border)', textAlign: 'center', fontSize: '0.95rem', width: '25%' }}>Digital Home License</th>
                      <th style={{ padding: '1.1rem', border: '1px solid var(--border)', textAlign: 'center', fontSize: '0.95rem', width: '25%', backgroundColor: 'rgba(37, 99, 235, 0.04)' }}>Tech Pro Subscription</th>
                      <th style={{ padding: '1.1rem', border: '1px solid var(--border)', textAlign: 'center', fontSize: '0.95rem', width: '25%' }}>Technician Rescue Boot</th>
                    </tr>
                  </thead>
                  <tbody>

                    {/* CATEGORY 1: PERFORMANCE ENGINE */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        ⚡ 1. Performance Engine & Diagnostic Speed
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Scan & Repair Throughput</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>1x Sequential (~30s scan)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>🚀 5x Multi-Thread Turbo (~5s)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: '#10b981' }}>⚡ Bare-Metal Instant (WinPE)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>System Execution Mode</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>User-Mode Process</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Elevated Administrative Agent</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Standalone WinPE Kernel (Bare-Metal)</td>
                    </tr>

                    {/* CATEGORY 2: DIAGNOSTIC CAPABILITIES */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        🛠️ 2. Diagnostic & Component Stress Suite
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Disk Health & S.M.A.R.T. Analysis</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Basic NVMe/SATA Health</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Advanced Sector & Wear Level Test</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>RAW Partition & Surface Scanner</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Hardware Component Certification</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Basic CPU/RAM Summary</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>🍏 Apple AST-2 Style Component Stress</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Low-Level Bus & Memory Pattern Test</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Unbootable OS & BSOD Diagnosis</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><XCircle size={16} color="#ef4444" style={{ display: 'inline' }} /> In-OS Only</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Driver Conflict Resolver</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: '#10b981' }}><Check size={16} color="#10b981" style={{ display: 'inline' }} /> Full Offline BSOD Recovery</td>
                    </tr>

                    {/* CATEGORY 3: REPAIR & LATENCY TWEAKS */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        🧹 3. System Repair & Latency Optimization
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Junk & Dead Shortcut Purger</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={16} color="#10b981" style={{ display: 'inline' }} /> Included</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={16} color="#10b981" style={{ display: 'inline' }} /> Automated Daily Auto-Purge</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><Check size={16} color="#10b981" style={{ display: 'inline' }} /> Offline Zero-Click Purger</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Registry & DNS Latency Optimizer</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Basic Registry & DNS Reset</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Deep Hive Optimization & TCP Latency Tweak</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Offline Hive Injector & BCD Rebuilder</td>
                    </tr>

                    {/* CATEGORY 4: CLIENT REPORTS & SHOP MANAGEMENT */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        📊 4. Client Reports & Invoicing
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Client Diagnostic Invoices</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>On-Screen Summary</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>📄 Exportable Branded PDF Client Reports</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Hardware Event & Forensic Logs</td>
                    </tr>

                    {/* CATEGORY 5: LICENSING & FORMAT */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        🔑 5. License Scope & Hardware Delivery
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Device License Activations</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>1 Windows PC Lifetime</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>Unlimited PCs & Scans</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: '#10b981' }}>Unlimited PCs & Bare-Metal WinPE</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Delivery & Media Format</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Instant MSIX Key Download</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Instant MSIX Key Download</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Digital ISO Soft Copy or Physical 16GB USB</td>
                    </tr>

                    {/* CATEGORY 6: LEGAL GST & SUPPORT */}
                    <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.06)' }}>
                      <td colSpan={4} style={{ padding: '0.75rem 1rem', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                        🛡️ 6. Legal GST Compliance & Support Level
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>18% GST Tax Invoice & SAC Code</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Official GST Invoice (SAC 997331)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Official GST Invoice (SAC 997331)</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Official GST Invoice (SAC 997331)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Trackable Product Serial Key</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>OPTFIX-2026-XXXX</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>OPTFIX-2026-XXXX</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>OPTFIX-2026-XXXX</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Support Level & Guarantee</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Standard Email Support</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>Priority 24/7 Tech Hotline & Remote Desktop</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: '#10b981' }}>VIP Engineer Hotline + Lifetime USB Replacement</td>
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
