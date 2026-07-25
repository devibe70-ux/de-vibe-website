import { CheckCircle2, Download, FileText, X } from 'lucide-react';

export default function PaymentModal({
  isOpen,
  onClose,
  productName,
  downloadUrl,
  paymentId
}) {
  if (!isOpen) return null;

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

          {paymentId && (
            <div className="payment-id-badge" style={{ marginBottom: '1rem' }}>
              <span>Transaction ID:</span> <code>{paymentId}</code>
            </div>
          )}

          {/* GST Tax Invoice Summary Box */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '1rem',
            width: '100%',
            fontSize: '0.85rem',
            textAlign: 'left',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              <FileText size={16} color="var(--accent)" /> 18% GST Tax Invoice Included
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span>Seller GSTIN:</span>
              <strong style={{ color: 'var(--text-primary)' }}>24ASHPS97771ZE</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <span>SAC Code:</span>
              <span>997331 (IT Software Licensing)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Tax Type:</span>
              <span>18% GST (Inclusive)</span>
            </div>
          </div>

          <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <button onClick={handleDownload} className="btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.9rem' }}>
              <Download size={20} /> Download Software Installer (.msix)
            </button>
            <button onClick={onClose} className="btn-cookie-decline" style={{ width: '100%', textAlign: 'center' }}>
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
