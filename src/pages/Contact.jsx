import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Mail, MapPin, Phone } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { Globe } from 'lucide-react';
import { validateContactForm } from '../utils/formHelpers';
import { submitContactForm } from '../services/formService';
import '../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setSubmitStatus({
        type: 'danger',
        message: err.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have questions? Send us a message and we'll respond as soon as possible.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={8} className="mb-4">
            <Card className="card-custom contact-form-card">
              <div className="contact-form-header">
                <h4>Send us a Message</h4>
                <p>We'll get back to you as soon as possible</p>
              </div>
              <Card.Body className="p-4">
                {submitStatus && (
                  <Alert variant={submitStatus.type} className="mb-3">
                    {submitStatus.message}
                  </Alert>
                )}
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
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
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
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
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
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
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
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" className="btn-primary-custom" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    <span className="contact-icon"><MapPin size={18} strokeWidth={2} /></span>
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
                    <span className="contact-icon"><Phone size={18} strokeWidth={2} /></span>
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
                    <span className="contact-icon"><Mail size={18} strokeWidth={2} /></span>
                    Email
                  </h5>
                  <p className="contact-info-text">
                    <a href="mailto:info@gatetutor.in">info@gatetutor.in</a>
                  </p>
                </Card.Body>
              </Card>
              <Card className="card-custom">
                <Card.Body className="p-4">
                  <h5 className="contact-info-title">
                    <span className="contact-icon"><Globe size={18} strokeWidth={2} /></span>
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
