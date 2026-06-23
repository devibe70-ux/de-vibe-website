import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
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
