import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TrustPanel.css';

const trustItems = [
  { title: 'NEP & OBE Ready', text: 'Aligned with outcome-based education and NEP compliance.' },
  { title: 'Assessment Integrity', text: 'Role-mapped tests with analytics and proctoring options.' },
  { title: 'Data Privacy', text: 'Secure handling of learner and institution data.' },
  { title: 'Accessibility', text: 'Designed for keyboard navigation and scalable text.' },
];

const TrustPanel = () => (
  <section className="trust-section section-padding" id="trust">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Built for Trust</h2>
          <p className="section-subtitle">Compliance and reliability for institutions, students, and recruiters.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {trustItems.map((item, idx) => (
          <Col lg={3} md={6} className="mb-4" key={idx}>
            <Card className="card-custom trust-card h-100">
              <Card.Body className="p-4">
                <h4 className="trust-title">{item.title}</h4>
                <p className="trust-text">{item.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default TrustPanel;

