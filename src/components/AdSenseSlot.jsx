import { useEffect } from 'react';

export default function AdSenseSlot({ style, className, slot, format = 'auto', responsive = 'true' }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // Catch AdSense initialization errors if adblocker is active
      console.log('AdSense init error:', e);
    }
  }, []);

  return (
    <div style={{ margin: '2rem 0', minHeight: '100px', width: '100%', textAlign: 'center', overflow: 'hidden', ...style }} className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: '90px' }}
        data-ad-client="ca-pub-7107715238624071"
        data-ad-slot={slot || "auto"}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
