import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GraduationCap, Building, Briefcase, AlertCircle, TrendingDown, Users, DollarSign, Activity } from 'lucide-react';
import '../../styles/components/EducationGap.css';

const EducationGap = () => {
  return (
    <section className="education-gap-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row className="text-center mb-4">
          <Col lg={12}>
            <h2 className="section-title">The Education-to-Employment Gap</h2>
            <p className="section-subtitle">A critical disconnect with massive impact on India's workforce readiness.</p>
          </Col>
        </Row>
        
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="gap-card">
              <div className="gap-icon-wrapper student-icon">
                <GraduationCap size={30} />
              </div>
              <h3>STUDENTS</h3>
              <ul>
                <li>Learn</li>
                <li>Practice</li>
                <li>Graduate</li>
              </ul>
              <div className="gap-struggle">
                But struggle to <strong>prove employability</strong>
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={6}>
            <div className="gap-card">
              <div className="gap-icon-wrapper institution-icon">
                <Building size={30} />
              </div>
              <h3>INSTITUTIONS</h3>
              <ul>
                <li>Teach</li>
                <li>Assess</li>
                <li>Certify</li>
              </ul>
              <div className="gap-struggle">
                But lack <strong>outcome visibility</strong>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <div className="gap-card">
              <div className="gap-icon-wrapper employer-icon">
                <Briefcase size={30} />
              </div>
              <h3>EMPLOYERS</h3>
              <ul>
                <li>Hire</li>
                <li>Train</li>
                <li>Retain</li>
              </ul>
              <div className="gap-struggle">
                But struggle to identify <strong>future-ready talent</strong>
              </div>
            </div>
          </Col>
        </Row>

        {/* The Result Bar */}
        <Row className="mt-4">
          <Col lg={10} className="mx-auto">
            <div className="gap-result-container">
              <div className="gap-result-header">THE RESULT</div>
              <Row className="g-3 text-center">
                <Col md={3} xs={6}>
                  <div className="result-item">
                    <TrendingDown className="result-icon text-danger" size={24} />
                    <span>WIDENING <strong>SKILL GAP</strong></span>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="result-item">
                    <Users className="result-icon text-warning" size={24} />
                    <span>LOW <strong>EMPLOYABILITY</strong></span>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="result-item">
                    <DollarSign className="result-icon text-primary" size={24} />
                    <span>HIRING <strong>INEFFICIENCY</strong></span>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="result-item">
                    <Activity className="result-icon text-danger" size={24} />
                    <span>PRODUCTIVITY <strong>LOSS</strong></span>
                  </div>
                </Col>
              </Row>
            </div>
            
            <div className="gap-conclusion mt-3">
              <AlertCircle size={22} className="text-primary me-3 flex-shrink-0" />
              <p className="mb-0">
                Education and employment remain <strong>disconnected</strong>. The world needs a <span className="text-primary fw-bold">new intelligence layer.</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationGap;
