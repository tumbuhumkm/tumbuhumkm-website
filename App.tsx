import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import TumbuhContent30 from './pages/TumbuhContent30';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Consultation from './pages/Consultation';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/tumbuhcontent30" element={<TumbuhContent30 />} />
            <Route path="/portofolio" element={<Portfolio />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/konsultasi" element={<Consultation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/*" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
