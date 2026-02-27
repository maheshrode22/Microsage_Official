import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="custom-navbar"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavigate} className="navbar-brand-custom">
          <span className="brand-name">Microsage</span>
          <span className="brand-tagline">Private Limited - Transforming Education & Talent Development</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleNavigate}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={handleNavigate}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={handleNavigate}
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              onClick={handleNavigate}
              className={location.pathname === '/products' ? 'active' : ''}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={handleNavigate}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/career"
              onClick={handleNavigate}
              className={location.pathname === '/career' ? 'active' : ''}
            >
              Careers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

