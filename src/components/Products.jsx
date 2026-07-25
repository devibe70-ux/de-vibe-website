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
    basePriceNum: 1,
    basePrice: '₹0.85',
    gstAmount: '₹0.15',
    totalPrice: 1,
    totalDisplay: '₹1.00 (Test Price)',
    badge: 'Single PC',
    description: 'Instant digital key for 1 Windows PC with full diagnostics & cleanup.',
    features: ['1 PC Lifetime Activation', '5-Stage Repair Wizard', 'Registry & DNS Optimizer', 'Instant Digital Key']
  },
  {
    id: 'tech',
    title: 'Tech Pro License',
    basePriceNum: 2,
    basePrice: '₹1.69',
    gstAmount: '₹0.31',
    totalPrice: 2,
    totalDisplay: '₹2.00 (Test Price)',
    badge: 'Multi-PC / Pro',
    description: 'Unlimited PC repair license for technicians & computer repair shops.',
    features: ['Unlimited PC Repair Scans', 'Apple AST-2 Diagnostics', 'Client Comparison Reports', 'Priority 24/7 Support']
  },
  {
    id: 'usb',
    title: 'Technician Boot USB',
    basePriceNum: 3,
    basePrice: '₹2.54',
    gstAmount: '₹0.46',
    totalPrice: 3,
    totalDisplay: '₹3.00 (Test Price)',
    badge: 'Hardware + Tech',
    description: 'Pre-loaded 16GB Bootable Rescue USB drive with offline PE console.',
    features: ['16GB Custom Hardware Drive', 'Zero-Click Offline PE Console', 'Pre-activated Tech License', 'Free Express Shipping']
  }
];

// Additional Products List (Exclusive of 18% GST)
const additionalProducts = [
  {
    id: 'optispace-pc',
    title: 'OptiSpace PC Pro',
    icon: HardDrive,
    basePriceNum: 1,
    basePrice: '₹0.85',
    gstAmount: '₹0.15',
    totalPrice: 1,
    totalDisplay: '₹1.00 (Test Price)',
    description: 'Windows desktop disk analyzer and high-performance storage manager. Visualizes drive usage and purges orphaned files locally.',
    downloadLink: 'https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix'
  },
  {
    id: 'devibe-oms',
    title: 'De-Vibe OMS Enterprise',
    icon: Briefcase,
    basePriceNum: 2,
    basePrice: '₹1.69',
    gstAmount: '₹0.31',
    totalPrice: 2,
    totalDisplay: '₹2.00 (Test Price)',
    description: 'Proprietary enterprise Order Management System to streamline omni-channel inventory flow, status routing, and sales reports automation.',
    downloadLink: 'https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix'
  },
  {
    id: 'bahamut-oms',
    title: 'Bahamut OMS High-Freq',
    icon: Database,
    basePriceNum: 3,
    basePrice: '₹2.54',
    gstAmount: '₹0.46',
    totalPrice: 3,
    totalDisplay: '₹3.00 (Test Price)',
    description: 'Specialized high-frequency fork designed for extreme database loads, transactional security, and sub-millisecond data synchronization.',
    downloadLink: 'https://github.com/devibe70-ux/De-vibe-OMS/releases/latest/download/DeVibe-OMS-Installer.msix'
  }
];

const faqs = [
  {
    question: "Are prices listed on the website exclusive of GST?",
    answer: "Yes, all listed product prices are Exclusive of 18% GST (SAC Code 997331). Applicable 18% GST is added at checkout, and an official Tax Invoice with Seller GSTIN 24ASHPS97771ZE is generated."
  },
  {
    question: "How do I purchase software directly on De Vibe Studio before Microsoft Store availability?",
    answer: "You can purchase direct digital licenses right here using our integrated Razorpay payment gateway. Upon verified payment, your digital license key activates immediately and your software installer (.msix) downloads directly."
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
          "price": v.totalPrice.toString(),
          "priceCurrency": "INR",
          "eligibleRegion": "IN",
          "vatID": "24ASHPS97771ZE",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": v.basePriceNum.toString(),
            "priceCurrency": "INR",
            "valueAddedTaxIncluded": "false"
          }
        }
      })),
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

  const handleCheckoutProduct = (name, totalPrice, description, downloadLink) => {
    openPaymentModal({
      amountInINR: totalPrice,
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
        <title>Software Products (Exclusive of GST) - De Vibe Studio</title>
        <meta name="description" content="Purchase software licenses (Exclusive of 18% GST, GSTIN: 24ASHPS97771ZE) on De Vibe Studio before Microsoft Store launch. OptimaFix Pro, OptiSpace PC, De-Vibe OMS." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
        
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

          {/* GSTIN & Tax Compliance Banner (Exclusive of GST Notice) */}
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '2px dashed #ef4444',
            borderRadius: '10px',
            padding: '1rem 1.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '1rem',
            color: '#ef4444',
            fontWeight: '700'
          }}>
            🧪 TRIAL PAYMENT MODE ACTIVE: All products set to ₹1.00, ₹2.00, and ₹3.00 for live Razorpay checkout testing. (Seller GSTIN: 24ASHPS97771ZE)
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
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.1rem' }}>
                      {variant.basePrice}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.75rem' }}>
                      Excl. GST (+18% GST {variant.gstAmount} = {variant.totalDisplay})
                    </div>
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

            {/* Selected Format Summary Bar */}
            <div style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '1.5rem 2rem', 
              borderRadius: '12px', 
              border: '1px solid var(--border)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1rem' 
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Selected Package:</span>
                <h4 style={{ margin: '0.25rem 0 0 0', fontSize: '1.1rem' }}>
                  {selectedVariant.title} ({selectedVariant.basePrice} Excl. GST)
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Base: {selectedVariant.basePrice} | 18% GST: {selectedVariant.gstAmount} | <strong>Total Payable: {selectedVariant.totalDisplay}</strong>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  onClick={() => handleCheckoutProduct(`OptimaFix Pro (${selectedVariant.title})`, selectedVariant.totalPrice, selectedVariant.description, "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix")}
                  className="btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                >
                  <ShieldCheck size={18} /> Proceed to Checkout ({selectedVariant.totalDisplay})
                </button>
              </div>
            </div>
          </div>

          {/* Sibling Direct Purchase Products Grid */}
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
                    {prod.basePrice}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '1rem' }}>
                    Excl. GST (+18% GST {prod.gstAmount} = {prod.totalDisplay})
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

          {/* AEO FAQ Section */}
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
