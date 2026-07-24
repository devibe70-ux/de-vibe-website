import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay before showing the banner for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="cookie-banner-container">
        <div className="cookie-banner-content">
          <div className="cookie-banner-icon">
            <Cookie size={24} className="accent-color" />
          </div>
          <p className="cookie-banner-text">
            We use cookies to analyze traffic, personalize content, and serve relevant advertisements in accordance with Google policies. By clicking "Accept All", you consent to our use of cookies and data processing. Read our <Link to="/privacy" className="cookie-link">Privacy Policy</Link> to learn more.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button onClick={handleDecline} className="btn-cookie-decline">
            Decline
          </button>
          <button onClick={handleAccept} className="btn-cookie-accept">
            Accept All
          </button>
          <button onClick={() => setIsVisible(false)} className="cookie-close-btn" aria-label="Close cookie banner">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
