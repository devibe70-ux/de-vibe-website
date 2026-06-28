export default function About() {
  return (
    <section id="about" className="bg-alt">
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2>About De Vibe</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          <p>
            De Vibe is a premier digital agency specializing in modern web design, robust enterprise software development, and strategic brand identity. Founded on the principle that digital experiences should be both visually stunning and technologically superior, we partner with growing businesses to elevate their online presence. In an era where a company's website is its most critical asset, we reject generic templates in favor of custom-engineered, lightning-fast solutions built on modern frameworks like React and Vite.
          </p>
          <p>
            Our core mission is to bridge the gap between creative vision and technical execution. Whether you are a startup in need of a complete brand identity—from logo design to digital strategy—or an established enterprise requiring scalable, custom software to streamline complex operations, our team of dedicated developers and designers deliver. We don't just build websites; we engineer digital ecosystems that drive actual conversions and operational efficiency.
          </p>
          <p>
            At De Vibe, we believe in transparency, long-term partnerships, and the relentless pursuit of perfection. We handle the technical complexities of SEO optimization, mobile responsiveness, and cloud deployment so that you can focus on what you do best: running your business. Feel the vibe of true digital innovation and let us transform your digital footprint into a powerful engine for growth.
          </p>
        </div>
      </div>
    </section>
  );
}
