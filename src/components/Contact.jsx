import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible. 
              Whether you're a student, institution, or corporate partner, we're here to help you achieve your goals.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={8} className="mb-4">
            <Card className="card-custom contact-form-card">
              <div className="contact-form-header">
                <h4>Send us a Message</h4>
                <p>We'll get back to you as soon as possible</p>
              </div>
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Enter your message"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" className="btn-primary-custom">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <div className="contact-info">
              <Card className="card-custom mb-4">
                <Card.Body className="p-4">
                  <h5 className="contact-info-title">
                    <span className="contact-icon">📍</span>
                    Address
                  </h5>
                  <p className="contact-info-text">
                    B-303, GARDENIA, TUPE NAGAR<br />
                    SADE SATRA NALI PU<br />
                    Hadapsar, Pune<br />
                    Maharashtra, India - 411028
                  </p>
                </Card.Body>
              </Card>
              <Card className="card-custom mb-4">
                <Card.Body className="p-4">
                  <h5 className="contact-info-title">
                    <span className="contact-icon">📞</span>
                    Phone
                  </h5>
                  <p className="contact-info-text">
                    <a href="tel:9960334040">9960334040</a>
                  </p>
                </Card.Body>
              </Card>
              <Card className="card-custom mb-4">
                <Card.Body className="p-4">
                  <h5 className="contact-info-title">
                    <span className="contact-icon">✉️</span>
                    Email
                  </h5>
                  <p className="contact-info-text">
                    <a href="mailto:microsagepl@gmail.com">microsagepl@gmail.com</a>
                  </p>
                </Card.Body>
              </Card>
              <Card className="card-custom">
                <Card.Body className="p-4">
                  <h5 className="contact-info-title">
                    <span className="contact-icon">🌐</span>
                    Website
                  </h5>
                  <p className="contact-info-text">
                    <a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">
                      gatetutor.in
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

