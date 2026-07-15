import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Users, Building, Briefcase, Cpu, Award, BookOpen, ArrowDown } from 'lucide-react';
import '../../styles/components/Infrastructure.css';

const Infrastructure = () => {
  return (
    <section className="infrastructure-section section-padding bg-white">
      <Container fluid className="px-4 px-lg-5">
        
        {/* Section Header */}
        <Row className="text-center mb-3">
          <Col lg={8} className="mx-auto">
            <h2 className="section-title">Building the Intelligence Infrastructure</h2>
            <p className="section-subtitle">
              A unified ecosystem that connects learning, measures potential, and unlocks employability.
            </p>
          </Col>
        </Row>

        {/* Stakeholders Row */}
        <Row className="mb-3 g-3 justify-content-center">
          <Col md={4} sm={6}>
            <div className="infra-stakeholder-card">
              <Users className="infra-sh-icon text-primary" size={28} />
              <div>
                <h5>Students</h5>
                <p>Learn. Grow. Prove Readiness.</p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div className="infra-stakeholder-card">
              <Building className="infra-sh-icon text-purple" size={28} />
              <div>
                <h5>Institutions</h5>
                <p>Teach. Assess. Elevate Outcomes.</p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="infra-stakeholder-card">
              <Briefcase className="infra-sh-icon text-success" size={28} />
              <div>
                <h5>Employers</h5>
                <p>Discover. Evaluate. Hire the Best.</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Arrow Down */}
        <div className="infra-arrow-down">
          <ArrowDown size={24} />
        </div>

        {/* 3 Layers */}
        <Row className="justify-content-center">
          <Col lg={10}>
            
            {/* Layer 1 */}
            <div className="infra-layer layer-gatetutor">
              <div className="layer-left">
                <div className="layer-icon-box">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3>GATEtutor</h3>
                  <p>Learning & Assessment Ecosystem</p>
                </div>
              </div>
              <div className="layer-right">
                <span>One Platform. All Stakeholders.</span>
              </div>
            </div>

            {/* Connector */}
            <div className="infra-connector">
              <div className="connector-line"></div>
            </div>

            {/* Layer 2 */}
            <div className="infra-layer layer-pragya">
              <div className="layer-left">
                <div className="layer-icon-box">
                  <Cpu size={28} />
                </div>
                <div>
                  <h3>PragyaAI</h3>
                  <p>Proprietary AI Intelligence Layer</p>
                </div>
              </div>
              <div className="layer-right">
                <span>Data That Predicts. AI That Personalises.</span>
              </div>
            </div>

            {/* Connector */}
            <div className="infra-connector">
              <div className="connector-line"></div>
            </div>

            {/* Layer 3 */}
            <div className="infra-layer layer-apex">
              <div className="layer-left">
                <div className="layer-icon-box">
                  <Award size={28} />
                </div>
                <div>
                  <h3>APEX</h3>
                  <p>AI Productivity & Excellence Platform</p>
                </div>
              </div>
              <div className="layer-right">
                <span>A Common Benchmark. Industry-Aligned.</span>
              </div>
            </div>

          </Col>
        </Row>

        {/* Arrow Down */}
        <div className="infra-arrow-down">
          <ArrowDown size={24} />
        </div>

        {/* Outcome */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="infra-outcome">
              <h4>FUTURE-READY WORKFORCE</h4>
              <p>Stronger Institutions. Smarter Hiring. Greater Impact.</p>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Infrastructure;
