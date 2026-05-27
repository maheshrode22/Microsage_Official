import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Career from './pages/Career';
import JobDetail from './pages/JobDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// UI sections (Home page sections)
import Hero from './components/ui/Hero';
import Stats from './components/ui/Stats';
import HowItWorks from './components/ui/HowItWorks';
import LearningTracks from './components/ui/LearningTracks';
import TrustPanel from './components/ui/TrustPanel';
import CallToAction from './components/ui/CallToAction';

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <HowItWorks />
    <LearningTracks />
    <TrustPanel />
    <CallToAction />
  </>
);

const AppContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:id" element={<JobDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
