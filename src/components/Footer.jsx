import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h4 className="footer-brand-name">Microsage</h4>
              <p className="footer-brand-tagline">Private Limited</p>
              <p className="footer-description">
                Transforming education and talent development in India with
                AI-powered learning solutions.
              </p>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/career">Careers</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-heading">Products</h5>
            <ul className="footer-links">
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">GATEtutor Platform</a></li>
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">GATEtutor LMS</a></li>
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">Corporate Recruitment</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon">📍</span>
                <span>Hadapsar, Pune, Maharashtra</span>
              </li>
              <li>
                <span className="footer-icon">📞</span>
                <a href="tel:9960334040">9960334040</a>
              </li>
              <li>
                <span className="footer-icon">✉️</span>
                <a href="mailto:microsagepl@gmail.com">microsagepl@gmail.com</a>
              </li>
              <li>
                <span className="footer-icon">🌐</span>
                <a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">gatetutor.in</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12}>
            <div className="footer-bottom">
              <p className="footer-copyright">
                © {new Date().getFullYear()} Microsage Private Limited. All rights reserved.
              </p>
              <p className="footer-legal">
                CIN: U72200PN2022PTC213457 |
                Startup India & MSME Certified
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

