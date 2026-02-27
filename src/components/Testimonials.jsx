import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'Our students improved mock scores by 18% after structured practice.',
    name: 'Dr. Meera Kulkarni',
    role: 'Dean, Partner Institution',
  },
  {
    quote: 'Role-mapped assessments cut our screening time and boosted quality.',
    name: 'Arjun Rao',
    role: 'Head of Talent, Tech Employer',
  },
  {
    quote: 'The LMS aligns with OBE, giving clear visibility on outcomes.',
    name: 'Prof. Sandeep Jain',
    role: 'HoD, Engineering College',
  },
];

const Testimonials = () => (
  <section className="testimonials-section section-padding" id="testimonials">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">What Partners Say</h2>
          <p className="section-subtitle">Trusted by institutions and employers across India.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {testimonials.map((item, idx) => (
          <Col lg={4} md={6} className="mb-4" key={idx}>
            <Card className="card-custom testimonial-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <p className="testimonial-quote">“{item.quote}”</p>
                <div className="mt-auto">
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Testimonials;

