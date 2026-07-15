import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Target, TrendingUp, Users, Building, Cpu, Award, FileText, Activity, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import '../styles/components/Investors.css';

const Investors = () => {
  return (
    <div className="investors-section">
      <Container fluid className="px-4 px-lg-5">
        
        {/* Hero Section */}
        <Row className="investors-hero">
          <Col lg={12}>
            <h2 className="section-title">Scaling India's Employability Infrastructure</h2>
            <p className="section-subtitle">
              Building the core intelligence layer for education, assessment, and hiring. 
              Our vision is to build a nation-wide network powered by GATEtutor, PragyaAI, and APEX.
            </p>
          </Col>
        </Row>

        {/* Road to 2031 Timeline */}
        <Row>
          <Col lg={12}>
            <div className="section-header-box">
              <h3>Road to 2031</h3>
            </div>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-year">FY27</div>
                <div className="timeline-stats">250 Institutions</div>
                <div className="text-primary-glow fw-bold mb-3">₹4.5 Cr Revenue Visibility</div>
                <div className="timeline-desc text-start">
                  <ul>
                    <li>Product Built & Validated</li>
                    <li>PragyaAI Operational</li>
                    <li>APEX Launch Phase</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY28</div>
                <div className="timeline-stats">600 Institutions</div>
                <div className="text-primary-glow fw-bold mb-3">Multi-State Expansion</div>
                <div className="timeline-desc text-start">
                  <ul>
                    <li>Institutional Network Growth</li>
                    <li>Strategic Partnerships</li>
                    <li>Increased Adoption</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY29</div>
                <div className="timeline-stats">1,000 Institutions</div>
                <div className="text-primary-glow fw-bold mb-3">Employer Ecosystem Growth</div>
                <div className="timeline-desc text-start">
                  <ul>
                    <li>Strong Institutional Presence</li>
                    <li>Growing Employer Ecosystem</li>
                    <li>Enhanced AI Intelligence</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY30</div>
                <div className="timeline-stats">1,600 Institutions</div>
                <div className="text-primary-glow fw-bold mb-3">APEX Benchmark Expansion</div>
                <div className="timeline-desc text-start">
                  <ul>
                    <li>Large-Scale Adoption</li>
                    <li>Outcome-Based Assessment</li>
                    <li>Strong Network Effects</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year text-warning-glow">FY31</div>
                <div className="timeline-stats text-warning-glow">2,000+ Institutions</div>
                <div className="text-warning-glow fw-bold mb-3">₹35-40 Cr+ Revenue Potential</div>
                <div className="timeline-desc text-start">
                  <ul>
                    <li>National Presence</li>
                    <li>Recognised APEX Brand</li>
                    <li>Employability Intelligence Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Business Model Flow */}
        <Row>
          <Col lg={12}>
            <div className="section-header-box mt-5">
              <h3>Our Business Model</h3>
            </div>
            <div className="business-flow">
              <div className="flow-step">
                <div className="flow-icon-wrapper">
                  <Building size={32} className="flow-icon" />
                </div>
                <div className="flow-title">INSTITUTIONS</div>
                <div className="flow-desc">Colleges & Universities adopt GATEtutor</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <div className="flow-icon-wrapper">
                  <FileText size={32} className="flow-icon" />
                </div>
                <div className="flow-title">GATETUTOR</div>
                <div className="flow-desc">Integrated Platform for Learning & Assessment</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <div className="flow-icon-wrapper border-primary">
                  <Cpu size={32} className="flow-icon text-primary-glow" />
                </div>
                <div className="flow-title text-primary-glow">PRAGYAAI</div>
                <div className="flow-desc">AI Intelligence Layer that analyses & predicts</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <div className="flow-icon-wrapper border-warning">
                  <Award size={32} className="flow-icon text-warning-glow" />
                </div>
                <div className="flow-title text-warning-glow">APEX</div>
                <div className="flow-desc">Common Employability Benchmark</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <div className="flow-icon-wrapper border-success">
                  <Users size={32} className="flow-icon text-success-glow" />
                </div>
                <div className="flow-title text-success-glow">EMPLOYERS</div>
                <div className="flow-desc">Access validated talent through data-driven decisions</div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Revenue Streams (Using Feature Blocks instead of Cards) */}
        <Row className="mb-5 g-4">
          <Col md={6} xl={3}>
            <div className="feature-block">
              <h4>
                <div className="feature-icon"><Building size={20} /></div>
                1. Institutional Licensing
              </h4>
              <p>Recurring annual contracts from colleges & universities.</p>
              <ul>
                <li>Per Institution / Department</li>
                <li>Scalable & Recurring</li>
                <li>High Renewal Potential</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="feature-block">
              <h4>
                <div className="feature-icon"><FileText size={20} /></div>
                2. Multi-Year Agreements
              </h4>
              <p>3-Year and multi-year contracts ensure revenue visibility and stability.</p>
              <ul>
                <li>Higher Contract Value</li>
                <li>Predictable Revenue Base</li>
                <li>Lower Churn</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="feature-block">
              <h4 className="text-warning-glow">
                <div className="feature-icon"><TrendingUp size={20} /></div>
                3. APEX Benchmark
              </h4>
              <p>Future revenue from APEX assessments, benchmarking & reports.</p>
              <ul>
                <li>Institutional Benchmarking</li>
                <li>Domain / Regional Insights</li>
                <li>Custom Assessment Services</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="feature-block">
              <h4 className="text-success-glow">
                <div className="feature-icon"><Briefcase size={20} /></div>
                4. Employer Ecosystem
              </h4>
              <p>Future opportunities in talent intelligence, matching & insights.</p>
              <ul>
                <li>Candidate Access / Shortlisting</li>
                <li>Analytics & Talent Insights</li>
                <li>Hiring Intelligence Solutions</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Investment Highlights - Using Highlight Rows instead of Cards */}
        <Row>
          <Col lg={12}>
            <div className="section-header-box mt-4">
              <h3>Investment Highlights: Our Competitive Moat</h3>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            
            <div className="highlight-row">
              <div className="highlight-icon-large">
                <ShieldCheck size={36} />
              </div>
              <div className="highlight-content">
                <h4>High Barriers to Entry</h4>
                <p>Operating inside institutional core systems creates deep integration, making switching costs high and ensuring long-term institutional stickiness.</p>
              </div>
            </div>

            <div className="highlight-row">
              <div className="highlight-icon-large">
                <Activity size={36} />
              </div>
              <div className="highlight-content">
                <h4>B2B SaaS Margin Profile</h4>
                <p>Our model is built on low customer acquisition costs (CAC) through institutional bulk-adoption and high lifetime value (LTV) due to recurring licensing structures.</p>
              </div>
            </div>

            <div className="highlight-row">
              <div className="highlight-icon-large">
                <Cpu size={36} />
              </div>
              <div className="highlight-content">
                <h4>Proprietary AI Layer</h4>
                <p>PragyaAI continuously gathers vast amounts of learning data, creating an unassailable data moat that improves assessment accuracy and personalization over time.</p>
              </div>
            </div>

            <div className="highlight-row">
              <div className="highlight-icon-large">
                <Target size={36} />
              </div>
              <div className="highlight-content">
                <h4>First-Mover Advantage</h4>
                <p>APEX is positioning itself as the definitive national standard for employability, bridging the massive gap between academia outputs and industry requirements.</p>
              </div>
            </div>

            <div className="highlight-row">
              <div className="highlight-icon-large">
                <Zap size={36} />
              </div>
              <div className="highlight-content">
                <h4>Network Effects</h4>
                <p>As more institutions adopt the platform, the employer ecosystem grows stronger, which in turn attracts more institutions—creating a powerful, self-sustaining flywheel.</p>
              </div>
            </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Investors;
