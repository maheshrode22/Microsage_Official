import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div className="hero-content">
              <h1 className="hero-title">
                Transforming Education & Talent Development in India
              </h1>
              <p className="hero-subtitle">
                India's first AI-powered learning and employability system designed to bridge 
                the gap between academic preparation and real-world career readiness. 
                Empowering students, institutions, and corporates with cutting-edge technology 
                solutions for smarter education and efficient hiring.
              </p>
              <div className="hero-highlights">
                <p className="highlight-text">
                  <strong>🎯 Key Features:</strong> AI-Powered Learning • GATE Preparation • Campus Hiring • 
                  Corporate Recruitment • NEP & OBE Compliant LMS • 150+ Partner Institutions • 11+ Lakh Active Students
                </p>
              </div>
              <div className="hero-buttons">
                <Button 
                  className="btn-primary-custom me-3 mb-3"
                  onClick={() => navigate('/products')}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outline-primary"
                  className="mb-3"
                  onClick={() => navigate('/contact')}
                >
                  Get in Touch
                </Button>
              </div>
              <div className="hero-stats mt-5">
                <div className="stat-item">
                  <h3>150+</h3>
                  <p>Institutions</p>
                </div>
                <div className="stat-item">
                  <h3>11+ Lakh</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>2022</h3>
                  <p>Founded</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                  alt="Education Technology" 
                  className="hero-main-image"
                />
                <div className="floating-card card-1">
                  <div className="floating-icon">🎓</div>
                  <p>150+ Institutions</p>
                </div>
                <div className="floating-card card-2">
                  <div className="floating-icon">👥</div>
                  <p>11+ Lakh Students</p>
                </div>
                <div className="floating-card card-3">
                  <div className="floating-icon">🚀</div>
                  <p>AI-Powered</p>
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

