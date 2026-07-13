import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Briefcase,
  Check,
  GraduationCap,
  School,
  Target,
  TrendingUp,
} from 'lucide-react';
import '../styles/components/Services.css';

const services = [
  {
    Icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    title: 'GATEtutor B2C Platform',
    description: 'Subscription-based self-study and practice ecosystem for GATE & placement preparation. Empowering students with intelligent study tools and comprehensive practice materials.',
    features: [
      'AI-powered personalized learning',
      'Comprehensive GATE preparation',
      'Placement practice modules',
      'Self-paced learning environment',
    ],
  },
  {
    Icon: School,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    title: 'GATEtutor LMS for Colleges',
    description: 'NEP & OBE-compliant platform with role-based dashboards, assessment tools, and analytics. Helping institutions deliver smarter education.',
    features: [
      'NEP & OBE compliant',
      'Role-based dashboards',
      'Advanced assessment tools',
      'Comprehensive analytics',
    ],
  },
  {
    Icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    title: 'GATEtutor + PragyaAI - Campus Hiring Platform',
    description: 'India\'s first AI-powered learning and recruitment platform tailored for campus hiring. Hire job-ready freshers with speed and accuracy.',
    features: [
      'AI-based Assessment',
      'Role-Mapped Test Reports',
      'Resume Screening',
      'Employability Scores',
      'All-in-One ATS Dashboard',
    ],
  },
];

const hrFeatures = [
  'AI-based Assessment',
  'Role-Mapped Test Reports',
  'Resume Screening',
  'Employability Scores',
  'All-in-One ATS Dashboard',
];

const Services = () => (
  <section id="services" className="services-section section-padding">
    <Container fluid className="px-4 px-lg-5">
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Our Core Offerings</h2>
          <p className="section-subtitle">
            Comprehensive solutions for students, institutions, and corporates — from AI-powered learning to campus hiring.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {services.map((service) => (
          <Col lg={4} md={6} className="mb-4" key={service.title}>
            <Card className="card-custom service-card h-100">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-icon-overlay">
                  <span className="service-icon-lucide">
                    <service.Icon size={22} strokeWidth={2} />
                  </span>
                </div>
              </div>
              <Card.Body className="p-4">
                <Card.Title className="service-title">{service.title}</Card.Title>
                <Card.Text className="service-description">
                  {service.description}
                </Card.Text>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} strokeWidth={2.5} className="service-check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <div className="services-highlight hr-leaders-section">
            <Row className="align-items-center">
              <Col md={8}>
                <h3>Are you an HR leader aiming to hire job-ready freshers with speed and accuracy?</h3>
                <p className="mb-3">
                  Introducing <strong>GATEtutor + PragyaAI</strong> – India&apos;s first AI-powered learning and recruitment platform tailored for campus hiring.
                </p>
                <div className="hr-features-list">
                  {hrFeatures.map((feature) => (
                    <div className="hr-feature-item" key={feature}>
                      <Check size={16} strokeWidth={2.5} className="hr-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  <strong>All you need is a PC &amp; Internet – we take care of the rest.</strong>
                </p>
                <p className="mt-2 mb-0 hr-trust-line">
                  <Target size={16} strokeWidth={2} className="hr-inline-icon" />
                  Already trusted by <strong>200+ colleges</strong>
                  <span className="hr-trust-sep">|</span>
                  <TrendingUp size={16} strokeWidth={2} className="hr-inline-icon" />
                  Join the Digital Hiring Revolution now!
                </p>
              </Col>
              <Col md={4} className="text-md-end mt-3 mt-md-0">
                <a
                  href="https://gatetutor.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-custom"
                >
                  Visit GATEtutor
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;
