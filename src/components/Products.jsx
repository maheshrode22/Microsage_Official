import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Products.css';

const Products = () => {
  const products = [
    {
      title: 'GATEtutor Platform',
      description: 'India\'s first AI-powered learning and employability system',
      features: [
        'Intelligent Study Centre',
        'Automated Test Creation',
        'Coding Assessments',
        'Resume Building',
        'Corporate Recruitment Integration'
      ],
      link: 'https://gatetutor.in'
    },
    {
      title: 'GATEtutor + PragyaAI - Campus Hiring',
      description: 'India\'s first AI-powered learning and recruitment platform tailored for campus hiring. Perfect for HR leaders aiming to hire job-ready freshers.',
      features: [
        'AI-based Assessment',
        'Role-Mapped Test Reports',
        'Resume Screening',
        'Employability Scores',
        'All-in-One ATS Dashboard'
      ],
      link: 'https://gatetutor.in',
      highlight: true
    }
  ];

  return (
    <section id="products" className="products-section section-padding">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Innovative education technology solutions powered by AI. Our comprehensive 
              product suite includes learning management systems, assessment platforms, and 
              recruitment solutions designed to transform how students learn and how companies hire.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          {products.map((product, index) => (
            <Col lg={12} key={index} className="mb-4">
              <Card className={`card-custom product-card ${product.highlight ? 'product-card-highlight' : ''}`}>
                <Card.Body className="p-5">
                  <Row className="align-items-center">
                    <Col lg={8}>
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-description">{product.description}</p>
                      <ul className="product-features">
                        {product.features.map((feature, idx) => (
                          <li key={idx}>
                            <span className="feature-icon">→</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {product.highlight && (
                        <div className="product-highlight-info mt-3">
                          <p className="mb-2">
                            <strong>All you need is a PC & Internet – we take care of the rest.</strong>
                          </p>
                          <p className="mb-0">
                            🎯 Already trusted by <strong>150+ colleges</strong> | 📈 Join the Digital Hiring Revolution now!
                          </p>
                        </div>
                      )}
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary-custom mt-4"
                      >
                        {product.highlight ? 'Get Started with Campus Hiring' : 'Explore GATEtutor'}
                      </a>
                    </Col>
                    <Col lg={4} className="text-center mt-4 mt-lg-0">
                      <div className="product-visual">
                        <div className="product-image-wrapper">
                          <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop" 
                            alt={product.title}
                            className="product-main-image"
                          />
                          <div className="visual-box">
                            <h4>{product.highlight ? 'PragyaAI' : 'GATEtutor'}</h4>
                            <p>{product.highlight ? 'AI-Powered Hiring' : 'AI-Powered Learning'}</p>
                            <div className="visual-stats">
                              <div className="visual-stat">
                                <span className="stat-number">150+</span>
                                <span className="stat-label">Institutions</span>
                              </div>
                              <div className="visual-stat">
                                <span className="stat-number">11+ L</span>
                                <span className="stat-label">Students</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;

