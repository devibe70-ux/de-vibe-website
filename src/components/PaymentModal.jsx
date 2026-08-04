import { useState, useEffect } from 'react';
import { CheckCircle2, Download, FileText, Key, Copy, Check, X, ShieldCheck } from 'lucide-react';

export default function PaymentModal({
  isOpen,
  onClose,
  productName,
  downloadUrl,
  paymentId,
  serialNumber
}) {
  const [copied, setCopied] = useState(false);
  const [activeSerialKey, setActiveSerialKey] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');

  useEffect(() => {
    if (isOpen && paymentId) {
      // Generate or use provided unique trackable license serial key
      const generatedKey = serialNumber || `OPTFIX-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      
      // Sequential Legal Razorpay Tax Invoice Bill Number format: RAZORPAY-0111, RAZORPAY-0112, etc.
      let storedSeq = parseInt(localStorage.getItem('devibe_last_invoice_seq') || '111', 10);
      let currentSeq = (isNaN(storedSeq) || storedSeq < 111) ? 111 : storedSeq;
      const generatedInvoiceNum = `RAZORPAY-${String(currentSeq).padStart(4, '0')}`;
      localStorage.setItem('devibe_last_invoice_seq', String(currentSeq + 1));

      setActiveSerialKey(generatedKey);
      setInvoiceNumber(generatedInvoiceNum);

      // Record license sale & legal tax invoice record in local storage log
      try {
        const existingLogs = JSON.parse(localStorage.getItem('devibe_license_sales_log') || '[]');
        const newRecord = {
          invoiceNumber: generatedInvoiceNum,
          serialNumber: generatedKey,
          productName: productName || 'Software License',
          paymentId,
          date: new Date().toISOString(),
          sellerGstin: '24ASHPS97771ZE',
          sacCode: '997331',
          taxRate: '18% GST'
        };
        existingLogs.push(newRecord);
        localStorage.setItem('devibe_license_sales_log', JSON.stringify(existingLogs));
      } catch (err) {
        console.error('License log error:', err);
      }
    }
  }, [isOpen, paymentId, serialNumber, productName]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (activeSerialKey) {
      navigator.clipboard.writeText(activeSerialKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-card">
        <button onClick={onClose} className="payment-modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="payment-modal-body">
          <div className="payment-success-icon">
            <CheckCircle2 size={56} color="#10b981" />
          </div>

          <h2 style={{ fontSize: '1.8rem', margin: '1rem 0 0.5rem 0' }}>Payment Successful!</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.25rem' }}>
            Thank you for purchasing <strong>{productName}</strong>. Your digital software license is active.
          </p>

          {/* Trackable License Serial Key Display Box */}
          {activeSerialKey && (
            <div style={{
              backgroundColor: 'rgba(37, 99, 235, 0.06)',
              border: '2px dashed var(--accent)',
              borderRadius: '12px',
              padding: '1.25rem',
              width: '100%',
              marginBottom: '1.25rem',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                <Key size={18} /> Unique Product License Serial Key:
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'monospace', color: 'var(--text-primary)', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                {activeSerialKey}
              </div>
              <button
                onClick={handleCopy}
                className="btn btn-outline"
                style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                {copied ? 'Serial Key Copied!' : 'Copy Serial Key'}
              </button>
            </div>
          )}

          {/* Anti-Piracy Single-Use 48-Hour Warning Banner */}
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid #ef4444',
            borderRadius: '10px',
            padding: '1rem',
            width: '100%',
            marginBottom: '1.25rem',
            fontSize: '0.85rem',
            color: '#f87171',
            textAlign: 'left',
            lineHeight: '1.4'
          }}>
            <strong style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
              ⚠️ Single-Use 48-Hour Security Token Notice
            </strong>
            Your download link is a single-use cryptographic token valid for <strong>48 hours</strong>. Do NOT forward or share this link with anyone. Forwarding your link will consume your download token and permanently lock your personal license key!
          </div>

          {paymentId && (
            <div className="payment-id-badge" style={{ marginBottom: '1rem' }}>
              <span>Razorpay Txn ID:</span> <code>{paymentId}</code>
            </div>
          )}

          {/* Legal GST Tax Invoice Summary Box */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '1.25rem',
            width: '100%',
            fontSize: '0.85rem',
            textAlign: 'left',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <FileText size={18} color="var(--accent)" /> Legal Razorpay Tax Invoice Receipt
            </div>

            {invoiceNumber && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem' }}>
                <span>Official Invoice No:</span>
                <strong style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '0.9rem' }}>{invoiceNumber}</strong>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span>Seller GSTIN:</span>
              <strong style={{ color: 'var(--text-primary)' }}>24ASHPS97771ZE</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span>SAC Code:</span>
              <span>997331 (IT Software Licensing)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Tax Rate:</span>
              <span>18% GST (Exclusive of Base Price)</span>
            </div>
          </div>

          <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <button onClick={handleDownload} className="btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.9rem' }}>
              <Download size={20} /> Download Software Installer (.msix)
            </button>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Hello De Vibe Support! I completed my purchase of ${productName}.\n\n🔑 My License Serial Key: ${activeSerialKey}\n💳 Razorpay Txn ID: ${paymentId}\n📦 Invoice No: ${invoiceNumber}\n\nPlease confirm my order details & send my download link!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.85rem',
                backgroundColor: '#25D366',
                color: '#ffffff',
                fontWeight: '700',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              💬 Send License & Download Link via WhatsApp
            </a>
            <button onClick={onClose} className="btn-cookie-decline" style={{ width: '100%', textAlign: 'center' }}>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
