import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Monitor, Smartphone, Briefcase, Database, Check, Shield, Zap, RefreshCw, ShoppingCart, ShieldCheck, HardDrive, Key, Award } from 'lucide-react';
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

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "OptimaFix Pro",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
        "offers": optimafixVariants.map(v => ({
          "@type": "Offer",
          "name": v.title,
          "price": v.price.toString(),
          "priceCurrency": "INR",
          "eligibleRegion": "IN",
          "vatID": "24ASHPS97771ZE"
        }))
      }
    ]
  };

  const handleCheckout = (variant) => {
    const targetVariant = variant || selectedVariant;
    const downloadLink = "https://github.com/devibe70-ux/pc-repair-tool/releases/latest/download/OptimaFix.msix";

    openPaymentModal({
      amountInINR: targetVariant.price,
      productName: `OptimaFix Pro (${targetVariant.title})`,
      productDescription: targetVariant.description,
      onSuccess: (response) => {
        setPaymentSuccess({
          isOpen: true,
          productName: `OptimaFix Pro - ${targetVariant.title}`,
          downloadUrl: downloadLink,
          paymentId: response.razorpay_payment_id
        });

        // Trigger automatic file download
        const link = document.createElement('a');
        link.href = downloadLink;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      onFailure: (errorMsg) => {
        console.log('Razorpay dismiss:', errorMsg);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Software Products & Utilities - De Vibe Studio</title>
        <meta name="description" content="Explore De Vibe's software suites with 18% GST tax invoice compliance (GSTIN: 24ASHPS97771ZE), featuring OptimaFix Pro, OptiSpace Mobile, and enterprise OMS." />
        <link rel="canonical" href="https://www.devibestudio.com/products" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
            Software Products
          </h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
            Next-generation system utility software and enterprise database environments.
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

            {/* 3 Formats / Variants Selector Grid */}
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
                        handleCheckout(variant);
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
                  {selectedVariant.title} ({selectedVariant.priceDisplay} incl. 18% GST)
                </h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Base Price: {selectedVariant.basePrice} | 18% GST: {selectedVariant.gstAmount} | GSTIN: 24ASHPS97771ZE
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  onClick={() => handleCheckout(selectedVariant)}
                  className="btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}
                >
                  <ShieldCheck size={18} /> Proceed to Razorpay Checkout ({selectedVariant.priceDisplay})
                </button>
              </div>
            </div>
          </div>

          {/* Sibling Products Grid */}
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Additional Ecosystem Solutions</h2>
          
          <div className="grid grid-3">
            
            {/* OptiSpace PC / OptiSpec PC */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <HardDrive size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>OptiSpace PC</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Windows desktop disk analyzer and high-performance storage manager. Scans system volumes, visualizes space consumption, purges orphaned installers, and optimizes file allocation tables locally without cloud upload.
              </p>
              <Link to="/microsoft" className="btn btn-outline" style={{ textAlign: 'center' }}>Explore Windows Suite</Link>
            </div>

            {/* De-Vibe OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Briefcase size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>De-Vibe OMS</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Proprietary enterprise Order Management System to streamline omni-channel inventory flow, status routing, and sales reports automation.
              </p>
              <Link to="/microsoft" className="btn btn-outline" style={{ textAlign: 'center' }}>Enterprise OMS Specs</Link>
            </div>

            {/* Bahamut OMS */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Database size={24} color="var(--accent)" />
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Bahamut OMS</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                Specialized high-frequency fork designed for extreme database loads, transactional security, and sub-millisecond data synchronization.
              </p>
              <Link to="/microsoft" className="btn btn-outline" style={{ textAlign: 'center' }}>View Database Specs</Link>
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
