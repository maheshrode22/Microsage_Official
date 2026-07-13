import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Accessibility, BadgeCheck, Lock, Shield } from 'lucide-react';
import '../../styles/components/TrustPanel.css';

const trustItems = [
  {
    Icon: Shield,
    title: 'NEP & OBE Ready',
    text: 'Fully aligned with National Education Policy and outcome-based education frameworks.',
  },
  {
    Icon: BadgeCheck,
    title: 'Assessment Integrity',
    text: 'Role-mapped tests with real-time analytics and AI-powered proctoring.',
  },
  {
    Icon: Lock,
    title: 'Data Privacy',
    text: 'Enterprise-grade encryption and secure handling of all learner data.',
  },
  {
    Icon: Accessibility,
    title: 'Accessibility First',
    text: 'WCAG compliant with keyboard navigation and scalable text support.',
  },
];

const TrustPanel = () => (
  <section className="trust-panel section-padding">
    <Container fluid className="px-4 px-lg-5">
      <Row className="justify-content-center">
        <Col lg={7} className="text-center">
          <h2 className="section-title">Built for Trust</h2>
          <p className="section-subtitle">
            Enterprise-grade compliance and reliability for institutions, students, and recruiters.
          </p>
        </Col>
      </Row>
      <Row className="trust-grid">
        {trustItems.map(({ Icon, title, text }) => (
          <Col lg={3} md={6} className="mb-4" key={title}>
            <div className="trust-card">
              <div className="trust-icon">
                <Icon size={24} strokeWidth={2} />
              </div>
              <h4 className="trust-title">{title}</h4>
              <p className="trust-text">{text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default TrustPanel;
