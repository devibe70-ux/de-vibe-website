import { Helmet } from 'react-helmet-async';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    company: "Lumina Tech Solutions",
    rating: 5,
    text: "De Vibe completely transformed our digital presence. They didn't just build a website; they engineered a platform that increased our lead generation by 150% within three months. Their understanding of custom software architecture is unmatched.",
    date: "May 12, 2026"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Apex Retail Group",
    rating: 4,
    text: "Very professional team with an excellent eye for modern design. The rebranding and new e-commerce site they built for us is lightning fast and our customers love the new UI/UX. The only reason for 4 stars is a slight delay in initial deployment, but the final product was absolutely worth the wait.",
    date: "June 28, 2026"
  },
  {
    id: 3,
    name: "David Althaus",
    company: "Horizon Financial",
    rating: 5,
    text: "We needed a highly secure, custom enterprise portal for our clients. De Vibe delivered beyond our expectations. Their focus on Zero Trust architecture and scalable microservices gave us total peace of mind. Highly recommended for serious corporate projects.",
    date: "July 02, 2026"
  }
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <span key={index} style={{ color: index < rating ? '#FFD700' : '#444', fontSize: '1.2rem', marginRight: '0.2rem' }}>
      ★
    </span>
  ));
};

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Client Reviews - De Vibe Agency</title>
        <meta name="description" content="Read authentic reviews from clients who have partnered with De Vibe for custom web development, branding, and enterprise software solutions." />
      </Helmet>
      <section className="bg-alt" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Client Success Stories</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Don't just take our word for it. See what our partners have to say about the digital transformations we've achieved together.
          </p>
          
          <div className="grid grid-2 grid-3">
            {reviews.map(review => (
              <div key={review.id} className="project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  {renderStars(review.rating)}
                </div>
                <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', flex: 1, marginBottom: '2rem', lineHeight: '1.6' }}>
                  "{review.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--accent)' }}>{review.name}</h4>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{review.company}</p>
                  <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Ready to start your own success story?</h3>
            <a href="/quote" className="btn">Get a Custom Quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
