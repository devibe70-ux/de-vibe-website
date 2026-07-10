import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react'; // Placeholder for the actual logo icon

export default function Header() {
  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo">
          <Hexagon size={32} />
          <span>DE VIBE</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/android">Android</Link>
          <Link to="/microsoft">Windows</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/quote" className="btn">Get Quote</Link>
        </nav>
      </div>
    </header>
  );
}
