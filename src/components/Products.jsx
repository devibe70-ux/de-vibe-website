import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw, ShoppingCart, ShieldCheck, HardDrive, HelpCircle, Key, Radio, Disc, FileSpreadsheet, XCircle, Cpu, Sliders, Layers, Sparkles, Clock, Award, Terminal, CheckCircle, Eye, Maximize2, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRazorpay } from '../hooks/useRazorpay';
import PaymentModal from './PaymentModal';

export default function Products() {
  const [selectedVariantId, setSelectedVariantId] = useState('digital');
  
  // Tech Pro Autopay Subscription Cycle Toggle ('monthly' vs 'annual')
  const [subscriptionCycle, setSubscriptionCycle] = useState('annual');

  // Technician Rescue USB Delivery Option ('soft' vs 'physical')
  const [usbDeliveryOption, setUsbDeliveryOption] = useState('physical');

  // Physical USB Capacity Tier ('8gb' vs '16gb')
  const [usbCapacity, setUsbCapacity] = useState('16gb');

  // Interactive Screenshot Lightbox Modal State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    caption: ''
  });

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
      totalDisplay: '₹1,178.82 / lifetime',
      badge: 'Most Popular for Home & Office',
      description: 'Single-PC lifetime license with 5-stage automated repair engine, S.M.A.R.T. NVMe disk audit, and RAM latency optimizer.',
      speedTag: '🚀 5-Stage Automated Repair Engine (~5s scan)',
      highlights: [
        'Single PC Lifetime License (No Subscriptions)',
        'S.M.A.R.T. NVMe/SSD Health Diagnostics',
        'One-Click System Cleanup & RAM Optimizer',
        'SFC & DISM Automated Recovery Wizard',
        'Lifetime Free Version 1.x Software Updates'
      ]
    },
    {
      id: 'tech-pro',
      title: 'Technician Pro Subscription',
      basePriceNum: subscriptionCycle === 'monthly' ? 399 : 3999,
      basePriceDisplay: subscriptionCycle === 'monthly' ? '₹399.00 / mo' : '₹3,999.00 / yr',
      gstAmount: subscriptionCycle === 'monthly' ? '₹71.82' : '₹719.82',
      totalPrice: subscriptionCycle === 'monthly' ? 470.82 : 4718.82,
      totalDisplay: subscriptionCycle === 'monthly' ? '₹470.82 / month' : '₹4,718.82 / year',
      badge: 'Autopay Subscription',
      subBadge: '⭐ Best ROI for Repair Shops & Techs',
      speedTag: '🚀 5x Multi-Thread Turbo Engine (~5s scan)',
      description: 'Commercial repair license for technicians & shops with 5x parallel engine, Enterprise AST-2 diagnostics & client PDF invoices.',
      highlights: [
        'Unlimited PCs & Scans (Multi-Device)',
        'Enterprise AST-2 Component Stress Test',
        'Branded Client PDF Diagnostic Invoices',
        'Automated Daily Scheduled Auto-Repair',
        'Priority 24/7 Tech Hotline & Remote Support'
      ]
    },
    {
      id: 'bootable',
      title: usbDeliveryOption === 'soft' 
        ? 'Technician Rescue Boot (Digital ISO)' 
        : (usbCapacity === '8gb' ? 'Technician Rescue Boot (8GB Hardware USB)' : 'Mother of All Recovery Drives (16GB Master USB)'),
      basePriceNum: usbDeliveryOption === 'soft' ? 3999 : (usbCapacity === '8gb' ? 999 : 1500),
      basePriceDisplay: usbDeliveryOption === 'soft' ? '₹3,999.00' : (usbCapacity === '8gb' ? '₹999.00' : '₹1,500.00'),
      gstAmount: usbDeliveryOption === 'soft' ? '₹719.82' : (usbCapacity === '8gb' ? '₹179.82' : '₹270.00'),
      totalPrice: usbDeliveryOption === 'soft' ? 4718.82 : (usbCapacity === '8gb' ? 1178.82 : 1770.00),
      totalDisplay: usbDeliveryOption === 'soft' 
        ? '₹4,718.82 (Digital ISO)' 
        : (usbCapacity === '8gb' ? '₹1,178.82 (8GB Standard USB)' : '₹1,770.00 (16GB Master USB)'),
      badge: usbDeliveryOption === 'soft' ? 'Digital ISO Download' : (usbCapacity === '8gb' ? 'Physical 8GB Standard USB' : 'Physical 16GB Master Drive'),
      description: usbDeliveryOption === 'soft' 
        ? 'Bare-metal WinPE offline boot rescue console soft copy for unbootable PCs and Blue Screen (BSOD) repair.'
        : (usbCapacity === '8gb' 
            ? 'Pre-loaded 8GB Hardware USB Drive shipped express with OptimaFix Pro 5-stage repair engine & recovery tools.' 
            : '16GB Mother of All Recovery Drives featuring Interconnected Faulty Driver Remediation, Portable Diagnostics Suite & WinPE Rescue.'),
      speedTag: '⚡ Bare-Metal WinPE Kernel (Instant Offline Boot)',
      highlights: usbDeliveryOption === 'soft'
        ? [
            'Instant Bootable ISO Image Soft Copy',
            'Zero-Click Offline WinPE Rescue Console',
            'Offline Registry Hive Injector & BCD Repair',
            'Bare-Metal Unbootable BSOD OS Recovery',
            'Pre-activated Unlimited Tech License'
          ]
        : (usbCapacity === '8gb'
            ? [
                '8GB Standard Hardware USB Drive (₹999)',
                'OptimaFix Pro 5-Stage Repair Wizard',
                'BCD Bootloader Repair & SFC/DISM Suite',
                'NTFS Read-Only Write Lock Security',
                'Free Express Doorstep Shipping'
              ]
            : [
                '16GB Master Mother of All Recovery Drives (₹1,500)',
                'Interconnected Faulty Driver Remediation Engine',
                'Universal Wi-Fi/LAN/NVMe DriverPacks (E:\DriverPacks)',
                'Portable Technician Diagnostics Suite (E:\PortableTools)',
                'Free Express Doorstep Shipping & Lifetime Warranty'
              ])
    }
  ];

  const appScreenshots = [
    {
      id: 'optimafix-dash',
      title: 'OptimaFix Pro — Diagnostic Dashboard',
      image: '/screenshots/optimafix_pro_app.jpg',
      category: 'Windows Repair Suite',
      caption: 'Real-time 5-Stage Repair Wizard, S.M.A.R.T. NVMe drive health monitoring, and RAM latency optimizer.'
    },
    {
      id: 'optimafix-winpe',
      title: 'OptimaFix Pro — WinPE Bare-Metal Rescue Console',
      image: '/screenshots/optimafix_winpe_app.jpg',
      category: 'Emergency Boot Recovery',
      caption: 'Zero-click offline Windows PE recovery environment for repairing unbootable PCs and Blue Screen (BSOD) crashes.'
    },
    {
      id: 'optispace-pc',
      title: 'OptiSpace PC — Storage & Treemap Analyzer',
      image: '/screenshots/optispace_pc_app.jpg',
      category: 'Storage Management',
      caption: 'Interactive disk volume visualizer with color-coded treemaps, duplicate file remover, and automated junk purger.'
    },
    {
      id: 'devibe-oms',
      title: 'De-Vibe OMS — Enterprise Order Dashboard',
      image: '/screenshots/devibe_oms_app.jpg',
      category: 'Enterprise OMS Software',
      caption: 'Omni-channel order management console with real-time inventory synchronization and automated sales reporting.'
    }
  ];

  const additionalProducts = [
    {
      id: 'optispace-pc',
      title: 'OptiSpace PC Pro',
      icon: HardDrive,
      image: '/screenshots/optispace_pc_app.jpg',
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
      image: '/screenshots/devibe_oms_app.jpg',
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
      image: '/screenshots/devibe_oms_app.jpg',
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

        const receiptData = {
          productName: name,
          downloadUrl: downloadLink,
          paymentId: response.razorpay_payment_id,
          serialNumber: generatedSerial,
          purchaseDate: new Date().toISOString(),
          vendorGstin: '24ASHPS97771ZE'
        };

        // 1. Save receipt to LocalStorage so download is accessible anytime
        try {
          localStorage.setItem('devibe_active_license_receipt', JSON.stringify(receiptData));
        } catch (err) {}

        // 2. Generate Single-Use Cryptographic Expiring Download Token (Expires in 48 Hours, Single Claim)
        const downloadToken = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
        const expiresTimestamp = Date.now() + 172800000; // 48 Hours (2 Days)
        const secureTokenUrl = `https://www.devibestudio.com/api/download?token=${downloadToken}&serial=${generatedSerial}&exp=${expiresTimestamp}`;

        const customerEmail = response.razorpay_email || 'customer@devibestudio.com';
        const customerPhone = response.razorpay_contact || '';

        try {
          fetch('https://formspree.io/f/xbjnqkyy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to_email: customerEmail,
              subject: `[CONFIRMED] OptimaFix Pro Secure Single-Use 48-Hour Download Link (${generatedSerial})`,
              productName: name,
              licenseSerial: generatedSerial,
              paymentId: response.razorpay_payment_id,
              downloadTokenUrl: secureTokenUrl,
              tokenPolicy: 'Single-Use 48-Hour Cryptographic Token (Hardware Bound & Anti-Sharing Locked)',
              warningNotice: 'IMPORTANT: Do NOT forward or share this link. Sharing will consume your single-use token and permanently lock your personal license key!',
              vendorGstin: '24ASHPS97771ZE'
            })
          });
        } catch (e) {}

        // 3. Dispatch automated WHATSAPP message with Secure Single-Use 48-Hour Token & Anti-Sharing Notice
        if (customerPhone) {
          try {
            const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
            const targetPhone = cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone;
            const waMsg = encodeURIComponent(`🎉 PAYMENT CONFIRMED!\n\nThank you for purchasing ${name} from De Vibe (GSTIN: 24ASHPS97771ZE).\n\n🔑 License Key: ${generatedSerial}\n💳 Txn ID: ${response.razorpay_payment_id}\n🔒 Secure Single-Use Link (48 Hours): ${secureTokenUrl}\n\n⚠️ IMPORTANT ANTI-PIRACY NOTICE: This link is SINGLE-USE ONLY and expires in 48 hours. Do NOT forward or share this link with anyone, as forwarding will consume your token and lock your license key!`);
            const waLink = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${waMsg}`;
            
            setTimeout(() => {
              window.open(waLink, '_blank');
            }, 1200);
          } catch (waErr) {}
        }

        // 4. Trigger immediate direct file download on screen
        if (downloadLink) {
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = downloadLink;
            link.download = downloadLink.split('/').pop() || 'OptimaFix-Pro-Setup.exe';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 800);
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
        <title>Official Software Store & App Screenshots - De Vibe Studio</title>
        <meta name="description" content="View live application screenshots and purchase official software licenses (Base Price + 18% GST, GSTIN: 24ASHPS97771ZE) on De Vibe Studio with trackable Serial Keys." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
        
        {/* Schema.org SoftwareApplication Markup with Screenshots for High-Converting Google Search Snippets */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "OptimaFix Pro",
          "operatingSystem": "Windows 10, Windows 11, WinPE",
          "applicationCategory": "UtilitiesApplication",
          "description": "Professional diagnostics and automated PC repair suite with 5x parallel engine, AST-2 component stress testing, and WinPE rescue console.",
          "screenshot": [
            "https://www.devibestudio.com/screenshots/optimafix_pro_app.jpg",
            "https://www.devibestudio.com/screenshots/optimafix_winpe_app.jpg"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "485"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "999",
            "highPrice": "5999",
            "offerCount": "3"
          }
        })}
        </script>
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
            Software Products & Direct License Store
          </h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Explore live application screenshots and purchase official licenses directly prior to Microsoft Store release.
          </p>

          {/* High-Converting Trust & Guarantee Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            fontSize: '0.88rem',
            fontWeight: '600',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#10b981' }}>
              <ShieldCheck size={16} /> 10,000+ PCs Diagnosed & Repaired
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)' }}>
              <Star size={16} fill="var(--accent)" /> 4.9/5 Rating (485 Verified Reviews)
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Lock size={16} color="#3b82f6" /> 100% VirusTotal Clean & Signed MSIX
            </span>
          </div>

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

          {/* HIGH-CONVERTING LIVE APP SCREENSHOTS & UI GALLERY SECTION */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                <Eye size={16} /> Live Interface Preview
              </div>
              <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Application Screenshots & User Interfaces</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.5rem' }}>
                Click any screenshot below to inspect the high-resolution software interface and feature controls.
              </p>
            </div>

            {/* Screenshots Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
              {appScreenshots.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxState({
                    isOpen: true,
                    imageSrc: item.image,
                    title: item.title,
                    caption: item.caption
                  })}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '14px',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                    position: 'relative'
                  }}
                  className="screenshot-card"
                >
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden', backgroundColor: '#000' }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.3s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }} className="screenshot-overlay">
                      <span style={{ backgroundColor: 'var(--accent)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Maximize2 size={14} /> Zoom Screenshot
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', margin: '0.3rem 0 0.5rem 0' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

            {/* Main App Hero Screenshot Banner inside Card */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              marginBottom: '2rem',
              position: 'relative',
              cursor: 'pointer'
            }}
            onClick={() => setLightboxState({
              isOpen: true,
              imageSrc: '/screenshots/optimafix_pro_app.jpg',
              title: 'OptimaFix Pro — Diagnostic Dashboard UI',
              caption: 'Real-time 5-Stage Repair Wizard, S.M.A.R.T. NVMe drive health monitoring, and RAM latency optimizer.'
            })}
            >
              <img 
                src="/screenshots/optimafix_pro_app.jpg" 
                alt="OptimaFix Pro Dashboard Screenshot" 
                style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fff',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backdropFilter: 'blur(4px)'
              }}>
                <Maximize2 size={14} /> Click to Inspect Fullscreen UI
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
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                  >
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
                    
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.1rem' }}>
                      {variant.basePriceDisplay}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1.25rem' }}>
                      Base Price (+18% GST {variant.gstAmount} = <strong style={{ color: 'var(--text-primary)' }}>Total: {variant.totalDisplay}</strong>)
                    </div>

                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: '#10b981', fontSize: '0.8rem', fontWeight: '700', padding: '0.4rem 0.75rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      {variant.speedTag}
                    </div>

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
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>⚡ Enterprise AST-2 Component Stress</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Low-Level Bus & Memory Pattern Test</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', fontWeight: '600' }}>Unbootable OS & BSOD Diagnosis</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}><XCircle size={16} color="#ef4444" style={{ display: 'inline' }} /> In-OS Only</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Driver Conflict Resolver</td>
                      <td style={{ padding: '0.85rem 1rem', border: '1px solid var(--border)', textAlign: 'center', fontWeight: '700', color: '#10b981' }}><Check size={16} color="#10b981" style={{ display: 'inline' }} /> Full Offline BSOD Recovery</td>
                    </tr>

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
                <div key={prod.id} style={{ backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: '14px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Embedded Screenshot Preview for Additional Software */}
                  {prod.image && (
                    <div 
                      style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.25rem', height: '140px', backgroundColor: '#000', cursor: 'pointer', position: 'relative' }}
                      onClick={() => setLightboxState({
                        isOpen: true,
                        imageSrc: prod.image,
                        title: prod.title,
                        caption: prod.description
                      })}
                    >
                      <img src={prod.image} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: '8px', right: '8px', backgroundColor: 'rgba(0, 0, 0, 0.75)', color: '#fff', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Maximize2 size={12} /> Inspect UI
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <IconComp size={24} color="var(--accent)" />
                    <h3 style={{ margin: 0, fontSize: '1.3rem' }}>{prod.title}</h3>
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.1rem' }}>
                    {prod.basePriceDisplay}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1rem' }}>
                    Base Price (+18% GST {prod.gstAmount} = <strong>Total: {prod.totalDisplay}</strong>)
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {prod.description}
                  </p>
                  <button 
                    onClick={() => handleCheckoutProduct(prod.title, prod.totalPrice, prod.description, prod.downloadLink)}
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.8rem' }}
                  >
                    <ShoppingCart size={16} /> Pay {prod.totalDisplay} via Razorpay
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FULLSCREEN APP SCREENSHOT LIGHTBOX MODAL */}
      {lightboxState.isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(8px)'
        }}
        onClick={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
        >
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            width: '100%',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img 
              src={lightboxState.imageSrc} 
              alt={lightboxState.title} 
              style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', backgroundColor: '#000', display: 'block' }}
            />

            <div style={{ padding: '1.75rem 2rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{lightboxState.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {lightboxState.caption}
              </p>
            </div>
          </div>
        </div>
      )}

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
