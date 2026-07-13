import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <Logo height={36} className="mb-2" variant="light" />
              <p className="footer-description">
                Transforming education and talent development in India with AI-powered solutions.
              </p>
              <div className="footer-certifications">
                <span>Startup India</span>
                <span>MSME Certified</span>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="footer-heading">Products</h6>
            <ul className="footer-links">
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">GATEtutor Platform</a></li>
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">GATEtutor LMS</a></li>
              <li><a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">Campus Hiring</a></li>
            </ul>
            <h6 className="footer-heading mt-4">Legal</h6>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="footer-heading">Contact</h6>
            <ul className="footer-contact">
              <li>
                <span className="footer-icon"><MapPin size={16} strokeWidth={2} /></span>
                <span>
                  B-303, Gardenia, Tupe Nagar,<br />
                  Hadapsar, Pune 411028
                </span>
              </li>
              <li>
                <span className="footer-icon"><Phone size={16} strokeWidth={2} /></span>
                <a href="tel:9960334040">9960334040</a>
              </li>
              <li>
                <span className="footer-icon"><Mail size={16} strokeWidth={2} /></span>
                <a href="mailto:info@gatetutor.in">info@gatetutor.in</a>
              </li>
              <li>
                <span className="footer-icon"><Globe size={16} strokeWidth={2} /></span>
                <a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">gatetutor.in</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Microsage Private Limited. All rights reserved.
          </p>
          <p className="footer-cin">
            CIN: U72200PN2022PTC213457
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
