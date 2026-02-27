import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Career.css';

const roles = [
  {
    title: 'Senior React Developer',
    type: 'Full-time · Pune / Remote',
    focus: 'Build and optimize our learning platform interfaces.',
    points: ['5+ years React', 'UI performance', 'Design system experience'],
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time · Pune / Remote',
    focus: 'Develop assessment intelligence and personalization models.',
    points: ['Python, TensorFlow/PyTorch', 'LLM integration', 'MLOps basics'],
  },
  {
    title: 'Customer Success Manager',
    type: 'Full-time · Pune / Remote',
    focus: 'Drive adoption with institutions and corporate partners.',
    points: ['EdTech/HRTech experience', 'Stakeholder management', 'Data-driven reporting'],
  },
];

const Career = () => (
  <section className="career-section section-padding">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Careers</h2>
          <p className="section-subtitle">
            Join Microsage to build AI-powered learning and hiring products that serve institutions,
            students, and employers across India.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {roles.map((role, idx) => (
          <Col lg={4} md={6} className="mb-4" key={idx}>
            <Card className="card-custom career-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <h4 className="career-title">{role.title}</h4>
                <p className="career-meta">{role.type}</p>
                <p className="career-focus">{role.focus}</p>
                <ul className="career-points">
                  {role.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className="btn-primary-custom w-100"
                    href="mailto:microsagepl@gmail.com?subject=Career%20Application"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col lg={12}>
          <div className="career-cta">
            <div>
              <h4>Don’t see a perfect fit?</h4>
              <p className="mb-0">Send your profile and we’ll reach out when a role opens up.</p>
            </div>
            <Button
              variant="outline-primary"
              className="career-cta-btn"
              href="mailto:microsagepl@gmail.com?subject=Open%20Application"
            >
              Share Your Profile
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Career;

