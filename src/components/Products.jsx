import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw, ShoppingCart, ShieldCheck, HardDrive, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRazorpay } from '../hooks/useRazorpay';
import PaymentModal from './PaymentModal';

const optimafixVariants = [
  {
    id: 'digital',
    title: 'Digital Home License',
    price: 999,
    basePrice: '₹846.61',
    gstAmount: '₹152.39',
    priceDisplay: '₹999',
    badge: 'Single PC',
    description: 'Instant digital key for 1 Windows PC with full diagnostics & cleanup.',
    features: ['1 PC Lifetime Activation', '5-Stage Repair Wizard', 'Registry & DNS Optimizer', 'Instant Digital Key']
  },
  {
    id: 'tech',
    title: 'Tech Pro License',
    price: 3999,
    basePrice: '₹3,388.98',
    gstAmount: '₹610.02',
    priceDisplay: '₹3,999 / year',
    badge: 'Multi-PC / Pro',
    description: 'Unlimited PC repair license for technicians & computer repair shops.',
    features: ['Unlimited PC Repair Scans', 'Apple AST-2 Diagnostics', 'Client Comparison Reports', 'Priority 24/7 Support']
  },
  {
    id: 'usb',
    title: 'Technician Boot USB',
    price: 5999,
    basePrice: '₹5,083.90',
    gstAmount: '₹915.10',
    priceDisplay: '₹5,999',
    badge: 'Hardware + Tech',
    description: 'Pre-loaded 16GB Bootable Rescue USB drive with offline PE console.',
    features: ['16GB Custom Hardware Drive', 'Zero-Click Offline PE Console', 'Pre-activated Tech License', 'Free Express Shipping']
  }
];

// AEO FAQ Questions & Answers
const faqs = [
  {
    question: "How do I purchase software directly on De Vibe Studio before Microsoft Store availability?",
    answer: "You can purchase direct digital licenses right here using our integrated Razorpay payment gateway. Upon verified payment, your digital license key activates immediately and your software installer (.msix) downloads directly."
  },
  {
    question: "Is 18% GST tax invoice included with software purchases?",
    answer: "Yes! Every purchase includes an official 18% GST Tax Invoice (SAC Code 997331) issued under Seller GSTIN 24ASHPS97771ZE."
  },
  {
    question: "Does OptimaFix Pro work on Windows 10 and Windows 11?",
    answer: "Yes, OptimaFix Pro is fully compatible with Windows 10, Windows 11 (64-bit), and Windows Server environments."
  },
  {
    question: "How does De-Vibe OMS integrate with existing enterprise systems?",
    answer: "De-Vibe OMS provides REST and GraphQL webhooks to sync omni-channel inventory, sales status, and ERP data in real-time."
  }
];

export default function Products() {
  const [selectedVariantId, setSelectedVariantId] = useState('digital');
  const { openPaymentModal } = useRazorpay();
  const [paymentSuccess, setPaymentSuccess] = useState({
    isOpen: false,
    productName: '',
    downloadUrl: '',
    paymentId: ''
  });

  const selectedVariant = optimafixVariants.find(v => v.id === selectedVariantId) || optimafixVariants[0];

  // Full-Stack SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization) Schema Graph
  const seoAeoGeoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.devibestudio.com/#organization",
        "name": "De Vibe Studio",
        "url": "https://www.devibestudio.com",
        "logo": "https://www.devibestudio.com/banner.jpg",
        "vatID": "24ASHPS97771ZE",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      ...optimafixVariants.map(v => ({
        "@type": "SoftwareApplication",
        "name": `OptimaFix Pro - ${v.title}`,
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": v.price.toString(),
          "priceCurrency": "INR",
          "eligibleRegion": "IN",
          "vatID": "24ASHPS97771ZE",
          "availability": "https://schema.org/InStock"
        }
      })),
      {
        "@type": "SoftwareApplication",
        "name": "OptiSpace PC (OptiSpec PC)",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
        "offers": {
          "@type": "Offer",
          "price": "499",
          "priceCurrency": "INR",
          "vatID": "24ASHPS97771ZE"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "De-Vibe OMS Enterprise",
        "operatingSystem": "Windows, Cloud",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "14999",
          "priceCurrency": "INR",
          "vatID": "24ASHPS97771ZE"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const handleCheckoutProduct = (name, price, description, downloadLink) => {
    openPaymentModal({
      amountInINR: price,
      productName: name,
      productDescription: description,
      onSuccess: (response) => {
        setPaymentSuccess({
          isOpen: true,
          productName: name,
          downloadUrl: downloadLink,
          paymentId: response.razorpay_payment_id
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
        <title>Software Products & Direct License Sales - De Vibe Studio</title>
        <meta name="description" content="Purchase official software licenses directly on De Vibe Studio before Microsoft Store launch. OptimaFix Pro, OptiSpace PC, De-Vibe OMS. 18% GST Tax Invoice (GSTIN: 24ASHPS97771ZE)." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
        
        {/* GEO & Geo-Targeting Meta Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_IN" />

        <script type="application/ld+json">{JSON.stringify(seoAeoGeoSchema)}</script>
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
            padding: '0.75rem 1.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>🔒 18% GST Tax Invoice Included (SAC 997331)</span>
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
                  Available in 3 Formats: Home Digital Key, Tech Pro License, & Rescue Boot USB
                </p>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              OptimaFix Pro is an elite computer diagnostic and automated repair toolkit for Windows systems. Modeled after professional hardware diagnostics suites, it sequentially analyzes system files health, clears caches, deletes dead shortcut structures, purges orphaned installers, resets DNS latency, and applies custom visual tweaks.
            </p>

            {/* 3 Formats Grid */}
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Select Your OptimaFix Pro Format:
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
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.25rem' }}>
                      {variant.priceDisplay}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      Base: {variant.basePrice} + 18% GST ({variant.gstAmount})
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>
                      {variant.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCheckoutProduct(`OptimaFix Pro (${variant.title})`, variant.price, variant.description, "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix");
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
                      <ShoppingCart size={16} /> Pay {variant.priceDisplay} via Razorpay
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sibling Direct Purchase Products Grid */}
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Direct Software License Purchases</h2>
          
          <div className="grid grid-3">
            
            {/* OptiSpace PC / OptiSpec PC */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <HardDrive size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>OptiSpace PC Pro</h3>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                ₹499 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '400' }}>(Incl. 18% GST)</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Windows desktop disk analyzer and high-performance storage manager. Visualizes drive usage and purges orphaned files locally.
              </p>
              <button 
                onClick={() => handleCheckoutProduct("OptiSpace PC Pro License", 499, "Full OptiSpace PC Pro Windows License", "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix")}
                className="btn"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
              >
                <ShoppingCart size={16} /> Buy License (₹499)
              </button>
            </div>

            {/* De-Vibe OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Briefcase size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>De-Vibe OMS Enterprise</h3>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                ₹14,999 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '400' }}>(Incl. 18% GST)</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Proprietary enterprise Order Management System to streamline omni-channel inventory flow, status routing, and sales reports automation.
              </p>
              <button 
                onClick={() => handleCheckoutProduct("De-Vibe OMS Enterprise Server", 14999, "Enterprise Server Order Management License", "https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix")}
                className="btn"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
              >
                <ShoppingCart size={16} /> Buy Enterprise (₹14,999)
              </button>
            </div>

            {/* Bahamut OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Database size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Bahamut OMS High-Freq</h3>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                ₹29,999 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '400' }}>(Incl. 18% GST)</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                Specialized high-frequency fork designed for extreme database loads, transactional security, and sub-millisecond data synchronization.
              </p>
              <button 
                onClick={() => handleCheckoutProduct("Bahamut OMS High-Frequency Distributed Engine", 29999, "High-Frequency Distributed Database Engine License", "https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix")}
                className="btn"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%' }}
              >
                <ShoppingCart size={16} /> Buy High-Freq (₹29,999)
              </button>
            </div>

          </div>

          {/* AEO (Answer Engine Optimization) & FAQ Section */}
          <div style={{ marginTop: '5rem', backgroundColor: 'var(--bg-primary)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <HelpCircle size={28} color="var(--accent)" />
              <h2 style={{ margin: 0, fontSize: '2rem' }}>Frequently Asked Questions & Licensing Guide</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((faq, index) => (
                <div key={index} style={{ borderBottom: index < faqs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Payment Confirmation Modal */}
      <PaymentModal
        isOpen={paymentSuccess.isOpen}
        onClose={() => setPaymentSuccess(prev => ({ ...prev, isOpen: false }))}
        productName={paymentSuccess.productName}
        downloadUrl={paymentSuccess.downloadUrl}
        paymentId={paymentSuccess.paymentId}
      />
    </>
  );
}
