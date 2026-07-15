import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

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
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Investors from './pages/Investors';

// UI sections (Home page sections)
import Hero from './components/ui/Hero';
import Infrastructure from './components/ui/Infrastructure';
import GrowthEngine from './components/ui/GrowthEngine';
import LearningTracks from './components/ui/LearningTracks';
import TrustPanel from './components/ui/TrustPanel';
import CallToAction from './components/ui/CallToAction';

const HomePage = () => (
  <>
    <Hero />
    <Infrastructure />
    <LearningTracks />
    <GrowthEngine />
    <TrustPanel />
    <CallToAction />
  </>
);

const AppContent = () => {
  const { pathname } = useLocation();
  const hidePublicLayout = pathname === '/login' || pathname.startsWith('/dashboard');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`App${hidePublicLayout ? ' App--no-nav' : ''}`}>
      {!hidePublicLayout && <Header />}
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
        <Route path="/login" element={<Login />} />
        <Route path="/investors" element={<Investors />} />
        <Route
          path="/dashboard"
          element={(
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hidePublicLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
