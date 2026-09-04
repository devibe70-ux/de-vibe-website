import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import CookieBanner from './components/CookieBanner';
import './App.css';

// Dynamic Code-Splitting for Secondary Routes
const GetQuote = lazy(() => import('./components/GetQuote'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const AndroidApps = lazy(() => import('./components/AndroidApps'));
const MicrosoftApps = lazy(() => import('./components/MicrosoftApps'));
const Support = lazy(() => import('./components/Support'));
const Projects = lazy(() => import('./components/Projects'));
const Reviews = lazy(() => import('./components/Reviews'));
const RemoteDashboard = lazy(() => import('./components/RemoteDashboard'));
const TechGuides = lazy(() => import('./components/TechGuides'));
const ReturnPolicy = lazy(() => import('./components/ReturnPolicy'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("De Vibe ErrorBoundary caught an exception:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '6rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Something went wrong loading this page.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Please refresh or navigate back to the home page.</p>
          <button onClick={() => window.location.href = '/'} className="btn">Return to Home</button>
        </div>
      );
    }
    return this.props.children;
  }
}

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
          <ErrorBoundary>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/quote" element={<GetQuote />} />
                <Route path="/get-quote" element={<GetQuote />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/return-refund-policy" element={<ReturnPolicy />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
                <Route path="/refund-policy" element={<ReturnPolicy />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/android" element={<AndroidApps />} />
                <Route path="/microsoft" element={<MicrosoftApps />} />
                <Route path="/support/:appId" element={<Support />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/remote" element={<RemoteDashboard />} />
                <Route path="/guides" element={<TechGuides />} />
                <Route path="/full-suite-business" element={<Services />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
