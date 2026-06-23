export default function GetQuote() {
  return (
    <section className="bg-alt" style={{ flex: 1, padding: '4rem 0' }}>
      <div className="container quote-container">
        <h2>Get a Free Quote</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Please fill out the form below with your project details and we will get back to you shortly.
        </p>
        <div className="iframe-wrapper">
          {/* Placeholder for Google Form iframe */}
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_form_id_here/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            style={{ border: 'none', borderRadius: '12px' }}
            title="Get Quote Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
