import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import LearningTracks from './components/LearningTracks';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TrustPanel from './components/TrustPanel';
import CallToAction from './components/CallToAction';
import Career from './components/Career';
import Footer from './components/Footer';

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <HowItWorks />
    <LearningTracks />
    <Testimonials />
    <TrustPanel />
    <CallToAction />
  </>
);

const AboutPage = () => (
  <>
    <About />
  </>
);

const ServicesPage = () => (
  <>
    <Services />
  </>
);

const ProductsPage = () => (
  <>
    <Products />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

