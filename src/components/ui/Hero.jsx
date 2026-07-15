import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import '../../styles/components/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <Container fluid className="px-4 px-lg-5">
        <Row className="align-items-center hero-row">
          <Col lg={6} className="hero-left">
            <div className="hero-content">

              <h1 className="hero-title">
                Transforming Education & Talent Development
              </h1>
              <p className="hero-subtitle">
                Bridging the gap between academic preparation and real-world career
                readiness — empowering students, institutions, and corporates.
              </p>
              <div className="hero-buttons">
                <Button
                  className="btn-primary-custom"
                  onClick={() => navigate('/products')}
                >
                  Explore Products
                </Button>
                <Button
                  variant="outline-primary"
                  className="hero-btn-outline"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>
              </div>
              <div className="hero-trust-bar">
                <div className="trust-stat">
                  <strong>200+</strong>
                  <span>Institutions</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-stat">
                  <strong>11+ Lakh</strong>
                  <span>Students</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-stat">
                  <strong>100%</strong>
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-right">
            <div className="hero-visual">
              <div className="hero-image-container">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Education Technology"
                  className="hero-main-image"
                />
              </div>
              <div className="hero-feature-cards">
                <div className="feature-card fc-1">
                  <span className="fc-icon"><GraduationCap size={22} strokeWidth={2} /></span>
                  <div>
                    <strong>GATE Prep</strong>
                    <span>AI-powered learning</span>
                  </div>
                </div>
                <div className="feature-card fc-2">
                  <span className="fc-icon"><Briefcase size={22} strokeWidth={2} /></span>
                  <div>
                    <strong>Campus Hiring</strong>
                    <span>Role-mapped assessments</span>
                  </div>
                </div>
                <div className="feature-card fc-3">
                  <span className="fc-icon"><BarChart3 size={22} strokeWidth={2} /></span>
                  <div>
                    <strong>NEP & OBE</strong>
                    <span>Compliant LMS</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
