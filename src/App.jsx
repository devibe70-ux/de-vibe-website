import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GetQuote from './components/GetQuote';
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
