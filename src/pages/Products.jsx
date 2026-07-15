import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Check,
  Target,
  TrendingUp,
  Gauge,
  BarChart3,
  BrainCircuit,
  Award,
} from 'lucide-react';
import { products } from '../data/products';
import '../styles/components/Products.css';

const APEX_ICONS = [
  { Icon: Gauge, label: 'Benchmark' },
  { Icon: BarChart3, label: 'Analytics' },
  { Icon: BrainCircuit, label: 'AI' },
  { Icon: Award, label: 'Excellence' },
  { Icon: Target, label: 'Performance' },
  { Icon: TrendingUp, label: 'Growth' },
];

const Products = () => {
  return (
    <section id="products" className="products-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row>
          <Col lg={12}>
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              AI-powered education technology for students, institutions, and recruiters.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          {products.map((product) => {
            const isExternal = product.external !== false && product.link.startsWith('http');
            const taglineLines = product.visual.tagline.split('\n');

            return (
              <Col lg={12} key={product.id} className="mb-4">
                <Card
                  className={`card-custom product-card ${product.highlight ? 'product-card-highlight' : ''}`}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col lg={8}>
                        <h3 className="product-title">{product.title}</h3>
                        {product.subtitle && (
                          <p className="product-subtitle">{product.subtitle}</p>
                        )}
                        {product.tagline && (
                          <p className="product-tagline">{product.tagline}</p>
                        )}
                        {(Array.isArray(product.description)
                          ? product.description
                          : [product.description]
                        ).map((paragraph) => (
                          <p key={paragraph.slice(0, 48)} className="product-description">
                            {paragraph}
                          </p>
                        ))}
                        <ul className="product-features">
                          {product.features.map((feature) => (
                            <li key={feature}>
                              <Check size={15} strokeWidth={2.5} className="feature-icon-lucide" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {product.highlight && (
                          <div className="product-highlight-info mt-2">
                            <p className="mb-2">
                              <strong>All you need is a PC &amp; Internet – we take care of the rest.</strong>
                            </p>
                            <p className="mb-0 product-trust-line">
                              <Target size={16} strokeWidth={2} className="product-inline-icon" />
                              Already trusted by <strong>200+ colleges</strong>
                              <span className="product-trust-sep">|</span>
                              <TrendingUp size={16} strokeWidth={2} className="product-inline-icon" />
                              Join the Digital Hiring Revolution now!
                            </p>
                          </div>
                        )}
                        {product.id === 'apex' && (
                          <div className="product-icon-row mt-3" aria-hidden="true">
                            {APEX_ICONS.map(({ Icon, label }) => (
                              <span key={label} className="product-icon-chip" title={label}>
                                <Icon size={18} strokeWidth={2} />
                              </span>
                            ))}
                          </div>
                        )}
                        <a
                          href={product.link}
                          {...(isExternal
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="btn btn-primary-custom mt-3"
                        >
                          {product.buttonText}
                        </a>
                      </Col>
                      <Col lg={4} className="text-center mt-4 mt-lg-0">
                        <div className="product-visual">
                          <div className="product-image-wrapper">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="product-main-image"
                            />
                            <div className={`visual-box ${product.id === 'apex' ? 'visual-box-apex' : ''}`}>
                              <h4>{product.visual.name}</h4>
                              {taglineLines.map((line) => (
                                <p key={line} className="visual-tagline-line">
                                  {line}
                                </p>
                              ))}
                              <div className="visual-stats">
                                {product.visual.stats.map((stat) => (
                                  <div className="visual-stat" key={stat.label}>
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                  </div>
                                ))}
                              </div>
                              {product.visual.stakeholders && (
                                <div className="visual-stakeholders">
                                  {product.visual.stakeholders.map((name) => (
                                    <span key={name} className="visual-stakeholder">
                                      {name}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
