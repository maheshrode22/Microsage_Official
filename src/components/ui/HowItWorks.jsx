import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase, BookOpen, ClipboardCheck, LineChart } from 'lucide-react';
import '../../styles/components/HowItWorks.css';

const steps = [
  {
    Icon: ClipboardCheck,
    title: 'Assess & Benchmark',
    text: 'Diagnostic tests for skills, aptitude, and role readiness.',
  },
  {
    Icon: BookOpen,
    title: 'Learn & Practice',
    text: 'Guided modules, question banks, coding labs, and mock tests.',
  },
  {
    Icon: LineChart,
    title: 'Evaluate & Improve',
    text: 'Instant feedback, analytics, and targeted remediation.',
  },
  {
    Icon: Briefcase,
    title: 'Connect to Opportunities',
    text: 'Campus hiring workflows with role-mapped assessments.',
  },
];

const HowItWorks = () => (
  <section className="howitworks-section section-padding" id="how-it-works">
    <Container fluid className="px-4 px-lg-5">
      <Row>
        <Col lg={12}>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple, outcomes-driven flow that moves learners from assessment to job readiness.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {steps.map(({ Icon, title, text }, idx) => (
          <Col lg={3} md={6} className="mb-4" key={title}>
            <Card className="card-custom how-card h-100">
              <Card.Body className="p-4">
                <div className="how-step">
                  <Icon size={22} strokeWidth={2} />
                  <span className="how-step-num">{idx + 1}</span>
                </div>
                <h4 className="how-title">{title}</h4>
                <p className="how-text">{text}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default HowItWorks;
