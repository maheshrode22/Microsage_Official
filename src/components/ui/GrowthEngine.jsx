import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Users, Database, Cpu, Award, Building, ShieldCheck, TrendingUp } from 'lucide-react';
import '../../styles/components/GrowthEngine.css';

const GrowthEngine = () => {
  return (
    <section className="growth-engine-section section-padding bg-light">
      <Container fluid className="px-4 px-lg-5">
        <Row className="text-center mb-3">
          <Col lg={12}>
            <h2 className="section-title">The Growth Engine</h2>
            <p className="section-subtitle">
              Why the ecosystem gets stronger and more valuable as it grows.
            </p>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="flywheel-container">
              
              <div className="flywheel-step">
                <div className="fw-icon bg-blue"><Users size={28} /></div>
                <div className="fw-content">
                  <h5>1. More Students</h5>
                  <p>Learn, Practice, Assess</p>
                </div>
              </div>

              <div className="fw-arrow">»</div>

              <div className="flywheel-step">
                <div className="fw-icon bg-purple"><Database size={28} /></div>
                <div className="fw-content">
                  <h5>2. More Data</h5>
                  <p>Millions of interactions</p>
                </div>
              </div>

              <div className="fw-arrow">»</div>

              <div className="flywheel-step">
                <div className="fw-icon bg-indigo"><Cpu size={28} /></div>
                <div className="fw-content">
                  <h5>3. Better PragyaAI</h5>
                  <p>Smarter predictions</p>
                </div>
              </div>

              <div className="fw-arrow">»</div>

              <div className="flywheel-step">
                <div className="fw-icon bg-orange"><Award size={28} /></div>
                <div className="fw-content">
                  <h5>4. Stronger APEX</h5>
                  <p>Trusted outcomes</p>
                </div>
              </div>

              <div className="fw-arrow">»</div>

              <div className="flywheel-step">
                <div className="fw-icon bg-teal"><Building size={28} /></div>
                <div className="fw-content">
                  <h5>5. Higher Adoption</h5>
                  <p>Better academic results</p>
                </div>
              </div>

              <div className="fw-arrow">»</div>

              <div className="flywheel-step">
                <div className="fw-icon bg-green"><ShieldCheck size={28} /></div>
                <div className="fw-content">
                  <h5>6. Employer Trust</h5>
                  <p>Hiring confidence</p>
                </div>
              </div>

            </div>
          </Col>
        </Row>

        <Row className="mt-3 text-center">
          <Col lg={10} className="mx-auto">
            <div className="growth-summary-box">
              <div className="gs-item">
                <Database className="text-primary me-2" size={24}/>
                <strong>DATA</strong> CREATES INTELLIGENCE.
              </div>
              <div className="gs-item">
                <Cpu className="text-purple me-2" size={24}/>
                <strong>INTELLIGENCE</strong> CREATES TRUST.
              </div>
              <div className="gs-item">
                <TrendingUp className="text-success me-2" size={24}/>
                <strong>TRUST</strong> DRIVES GROWTH.
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default GrowthEngine;
