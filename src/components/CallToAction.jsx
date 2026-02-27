import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './CallToAction.css';

const actions = [
  {
    title: 'For Students',
    text: 'Start practice and mock tests tailored to your exam goals.',
    cta: 'Start Practicing',
    href: '/products',
    variant: 'primary',
  },
  {
    title: 'For Institutions',
    text: 'Schedule a demo to see NEP/OBE aligned LMS in action.',
    cta: 'Schedule Demo',
    href: '/contact',
    variant: 'outline',
  },
  {
    title: 'For Recruiters',
    text: 'Run campus drives with AI-powered, role-mapped assessments.',
    cta: 'Request Drive',
    href: '/contact',
    variant: 'outline',
  },
];

const CallToAction = () => (
  <section className="cta-section section-padding" id="cta">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Get Started</h2>
          <p className="section-subtitle">Pick the path that fits you best—student, institution, or recruiter.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {actions.map((action, idx) => (
          <Col lg={4} md={6} className="mb-4" key={idx}>
            <Card className="card-custom cta-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <h4 className="cta-title">{action.title}</h4>
                <p className="cta-text">{action.text}</p>
                <div className="mt-auto">
                  {action.variant === 'primary' ? (
                    <Button className="btn-primary-custom w-100" href={action.href}>
                      {action.cta}
                    </Button>
                  ) : (
                    <Button variant="outline-primary" className="w-100 cta-outline" href={action.href}>
                      {action.cta}
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default CallToAction;

