import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { GraduationCap, School, Users } from 'lucide-react';
import '../../styles/components/CallToAction.css';

const actions = [
  {
    Icon: GraduationCap,
    title: 'For Students',
    text: 'Start practice and mock tests tailored to your exam goals.',
    cta: 'Start Practicing',
    href: '/products',
    variant: 'primary',
  },
  {
    Icon: School,
    title: 'For Institutions',
    text: 'Schedule a demo to see NEP/OBE aligned LMS in action.',
    cta: 'Schedule Demo',
    href: '/contact',
    variant: 'outline',
  },
  {
    Icon: Users,
    title: 'For Recruiters',
    text: 'Run campus drives with AI-powered, role-mapped assessments.',
    cta: 'Request Drive',
    href: '/contact',
    variant: 'outline',
  },
];

const CallToAction = () => (
  <section className="cta-section section-padding" id="cta">
    <Container fluid className="px-4 px-lg-5">
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Get Started</h2>
          <p className="section-subtitle">Pick the path that fits you best—student, institution, or recruiter.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {actions.map(({ Icon, title, text, cta, href, variant }) => (
          <Col lg={4} md={6} className="mb-4" key={title}>
            <Card className="card-custom cta-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="cta-icon-wrap">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h4 className="cta-title">{title}</h4>
                <p className="cta-text">{text}</p>
                <div className="mt-auto">
                  {variant === 'primary' ? (
                    <Button className="btn-primary-custom w-100" href={href}>
                      {cta}
                    </Button>
                  ) : (
                    <Button variant="outline-primary" className="w-100 cta-outline" href={href}>
                      {cta}
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
