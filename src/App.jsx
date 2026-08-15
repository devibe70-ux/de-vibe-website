import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GetQuote from './components/GetQuote';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import AndroidApps from './components/AndroidApps';
import MicrosoftApps from './components/MicrosoftApps';
import Support from './components/Support';
import Services from './components/Services';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import CookieBanner from './components/CookieBanner';
import Products from './components/Products';
import RemoteDashboard from './components/RemoteDashboard';
import TechGuides from './components/TechGuides';
import FullSuiteBusiness from './components/FullSuiteBusiness';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/android" element={<AndroidApps />} />
            <Route path="/microsoft" element={<MicrosoftApps />} />
            <Route path="/support/:appId" element={<Support />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/products" element={<Products />} />
            <Route path="/remote" element={<RemoteDashboard />} />
            <Route path="/guides" element={<TechGuides />} />
            <Route path="/full-suite-business" element={<FullSuiteBusiness />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
