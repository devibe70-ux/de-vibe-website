import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img 
          src="/banner.jpg" 
          alt="De Vibe Team" 
          style={{ 
            width: '100%', 
            maxWidth: '900px', 
            borderRadius: '16px', 
            marginBottom: '3rem', 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
          }} 
        />
        <h1>Feel The Vibe</h1>
        <p>
          We are a modern digital agency specializing in website creation, logo design, 
          custom corporate software, and everything you need to launch and scale your business.
        </p>
        <div className="hero-buttons">
          <Link to="/quote" className="btn">Get a Free Quote</Link>
          <a href="#projects" className="btn btn-outline">View Our Work</a>
        </div>
      </div>
    </section>
  );
}
