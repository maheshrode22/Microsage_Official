import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      title: 'GATEtutor B2C Platform',
      description: 'Subscription-based self-study and practice ecosystem for GATE & placement preparation. Empowering students with intelligent study tools and comprehensive practice materials.',
      features: [
        'AI-powered personalized learning',
        'Comprehensive GATE preparation',
        'Placement practice modules',
        'Self-paced learning environment'
      ]
    },
    {
      icon: '🏫',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      title: 'GATEtutor LMS for Colleges',
      description: 'NEP & OBE-compliant platform with role-based dashboards, assessment tools, and analytics. Helping institutions deliver smarter education.',
      features: [
        'NEP & OBE compliant',
        'Role-based dashboards',
        'Advanced assessment tools',
        'Comprehensive analytics'
      ]
    },
    {
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      title: 'GATEtutor + PragyaAI - Campus Hiring Platform',
      description: 'India\'s first AI-powered learning and recruitment platform tailored for campus hiring. Hire job-ready freshers with speed and accuracy.',
      features: [
        'AI-based Assessment',
        'Role-Mapped Test Reports',
        'Resume Screening',
        'Employability Scores',
        'All-in-One ATS Dashboard'
      ]
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Our Core Offerings</h2>
            <p className="section-subtitle">
              Comprehensive solutions for students, institutions, and corporates. 
              From AI-powered learning platforms to campus hiring systems, we provide 
              end-to-end solutions that transform education and recruitment processes.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="card-custom service-card h-100">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-icon-overlay">
                    <span className="icon-emoji">{service.icon}</span>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                    <br />
                    <span className="service-additional-info">
                      Trusted by leading institutions and corporates across India for 
                      innovative education and recruitment solutions.
                    </span>
                  </Card.Text>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col lg={12}>
            <div className="services-highlight hr-leaders-section">
              <Row className="align-items-center">
                <Col md={8}>
                  <h3>Are you an HR leader aiming to hire job-ready freshers with speed and accuracy?</h3>
                  <p className="mb-3">
                    Introducing <strong>GATEtutor + PragyaAI</strong> – India's first AI-powered learning and recruitment platform tailored for campus hiring.
                  </p>
                  <div className="hr-features-list">
                    <div className="hr-feature-item">
                      <span className="hr-check">✅</span>
                      <span>AI-based Assessment</span>
                    </div>
                    <div className="hr-feature-item">
                      <span className="hr-check">✅</span>
                      <span>Role-Mapped Test Reports</span>
                    </div>
                    <div className="hr-feature-item">
                      <span className="hr-check">✅</span>
                      <span>Resume Screening</span>
                    </div>
                    <div className="hr-feature-item">
                      <span className="hr-check">✅</span>
                      <span>Employability Scores</span>
                    </div>
                    <div className="hr-feature-item">
                      <span className="hr-check">✅</span>
                      <span>All-in-One ATS Dashboard</span>
                    </div>
                  </div>
                  <p className="mt-3 mb-0">
                    <strong>All you need is a PC & Internet – we take care of the rest.</strong>
                  </p>
                  <p className="mt-2 mb-0">
                    🎯 Already trusted by <strong>150+ colleges</strong> | 📈 Join the Digital Hiring Revolution now!
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
};

export default Services;

