import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CookieBanner from './components/CookieBanner';
import './App.css';

// Dynamic Code-Splitting for Sub-100ms Route Loads
const GetQuote = lazy(() => import('./components/GetQuote'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Contact = lazy(() => import('./components/Contact'));
const AndroidApps = lazy(() => import('./components/AndroidApps'));
const MicrosoftApps = lazy(() => import('./components/MicrosoftApps'));
const Support = lazy(() => import('./components/Support'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Reviews = lazy(() => import('./components/Reviews'));
const Products = lazy(() => import('./components/Products'));
const RemoteDashboard = lazy(() => import('./components/RemoteDashboard'));
const TechGuides = lazy(() => import('./components/TechGuides'));

const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '36px', height: '36px', border: '3px solid var(--border)', borderTopColor: 'var(--text-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem auto' }} />
      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Loading De Vibe Studio...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<GetQuote />} />
              <Route path="/get-quote" element={<GetQuote />} />
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
              <Route path="/full-suite-business" element={<Services />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
