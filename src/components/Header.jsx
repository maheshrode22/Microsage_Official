import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import '../styles/components/Header.css';

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
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand as={Link} to="/" onClick={handleNavigate} className="navbar-brand-custom">
          <Logo height={50} />
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
            <NavDropdown
              title="Brochures"
              id="brochures-dropdown"
              className="custom-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://drive.google.com/file/d/1di62GTWH5yy4ltfwm6eXH3S-FA5fStL_/view?usp=sharing"
                target="_blank"
                className="dropdown-item-custom"
              >
                GATetutor brochures
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://drive.google.com/file/d/1dBtOxqmjdHirTAdbP6cAspNMGFE3Fkmq/view?usp=drive_link"
                target="_blank"
                className="dropdown-item-custom"
              >
                Corporate brochures
              </NavDropdown.Item>
            </NavDropdown>
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

