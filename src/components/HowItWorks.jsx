import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HowItWorks.css';

const steps = [
  {
    title: 'Assess & Benchmark',
    text: 'Diagnostic tests for skills, aptitude, and role readiness.',
  },
  {
    title: 'Learn & Practice',
    text: 'Guided modules, question banks, coding labs, and mock tests.',
  },
  {
    title: 'Evaluate & Improve',
    text: 'Instant feedback, analytics, and targeted remediation.',
  },
  {
    title: 'Connect to Opportunities',
    text: 'Campus hiring workflows with role-mapped assessments.',
  },
];

const HowItWorks = () => (
  <section className="howitworks-section section-padding" id="how-it-works">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple, outcomes-driven flow that moves learners from assessment to job readiness.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {steps.map((step, idx) => (
          <Col lg={3} md={6} className="mb-4" key={idx}>
            <Card className="card-custom how-card h-100">
              <Card.Body className="p-4">
                <div className="how-step">{idx + 1}</div>
                <h4 className="how-title">{step.title}</h4>
                <p className="how-text">{step.text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default HowItWorks;

