import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

const GetQuote = lazy(() => import('./components/GetQuote'));

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '5rem 0' }}>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<GetQuote />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
