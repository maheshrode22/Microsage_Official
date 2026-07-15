import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Target, TrendingUp, Users, Building, Cpu, Award, Zap, Briefcase, Globe, FileText, Activity } from 'lucide-react';
import '../styles/components/Investors.css';

const Investors = () => {
  return (
    <div className="investors-section">
      <Container fluid className="px-4 px-lg-5">
        
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Scaling India's Employability Infrastructure</h2>
            <p className="section-subtitle">
              Building the core intelligence layer for education, assessment, and hiring. 
              Our vision is to reach 2,000+ institutions by 2031, powered by GATEtutor, PragyaAI, and APEX.
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
                <div className="text-primary fw-bold mb-2">₹4.5 Cr Revenue Visibility</div>
                <div className="timeline-desc text-start">
                  <ul className="mb-0 ps-3">
                    <li>Product Built</li>
                    <li>PragyaAI Operational</li>
                    <li>APEX Launch Phase</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY28</div>
                <div className="timeline-stats">600 Institutions</div>
                <div className="text-primary fw-bold mb-2">Multi-State Expansion</div>
                <div className="timeline-desc text-start">
                  <ul className="mb-0 ps-3">
                    <li>Institutional Network Growth</li>
                    <li>Strategic Partnerships</li>
                    <li>Increased Adoption</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY29</div>
                <div className="timeline-stats">1,000 Institutions</div>
                <div className="text-primary fw-bold mb-2">Employer Ecosystem Growth</div>
                <div className="timeline-desc text-start">
                  <ul className="mb-0 ps-3">
                    <li>Strong Institutional Presence</li>
                    <li>Growing Employer Ecosystem</li>
                    <li>Enhanced AI Intelligence</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">FY30</div>
                <div className="timeline-stats">1,600 Institutions</div>
                <div className="text-primary fw-bold mb-2">APEX Benchmark Expansion</div>
                <div className="timeline-desc text-start">
                  <ul className="mb-0 ps-3">
                    <li>Large-Scale Adoption</li>
                    <li>Outcome-Based Assessment</li>
                    <li>Strong Network Effects</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year text-warning">FY31</div>
                <div className="timeline-stats text-warning">2,000+ Institutions</div>
                <div className="text-warning fw-bold mb-2">₹35-40 Cr+ Revenue Potential</div>
                <div className="timeline-desc text-start">
                  <ul className="mb-0 ps-3">
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
            <p className="text-center text-secondary mb-4">Institution-Led Adoption. Ecosystem-Led Growth.</p>
            <div className="business-flow">
              <div className="flow-step">
                <Building className="flow-icon" />
                <div className="flow-title">INSTITUTIONS</div>
                <div className="flow-desc">Colleges & Universities adopt GATEtutor</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <FileText className="flow-icon" />
                <div className="flow-title">GATETUTOR</div>
                <div className="flow-desc">Integrated Platform for Learning & Assessment</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <Cpu className="flow-icon" />
                <div className="flow-title">PRAGYAAI</div>
                <div className="flow-desc">AI Intelligence Layer that analyses & predicts</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <Award className="flow-icon text-warning" />
                <div className="flow-title text-warning">APEX</div>
                <div className="flow-desc">Common Employability Benchmark</div>
              </div>
              <div className="flow-arrow">»</div>
              <div className="flow-step">
                <Users className="flow-icon text-success" />
                <div className="flow-title text-success">EMPLOYERS</div>
                <div className="flow-desc">Access validated talent through data-driven decisions</div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Revenue Streams */}
        <Row className="mb-5 g-4">
          <Col md={6} xl={3}>
            <div className="investors-card">
              <Building size={32} className="text-primary mb-3" />
              <h4>1. Institutional Licensing</h4>
              <p>Recurring annual contracts from colleges & universities.</p>
              <ul>
                <li>Per Institution / Department</li>
                <li>Scalable & Recurring</li>
                <li>High Renewal Potential</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="investors-card">
              <FileText size={32} className="text-primary mb-3" />
              <h4>2. Multi-Year Agreements</h4>
              <p>3-Year and multi-year contracts ensure revenue visibility and stability.</p>
              <ul>
                <li>Higher Contract Value</li>
                <li>Predictable Revenue Base</li>
                <li>Lower Churn</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="investors-card">
              <TrendingUp size={32} className="text-warning mb-3" />
              <h4 className="text-warning">3. APEX Benchmark Services</h4>
              <p>Future revenue from APEX assessments, benchmarking & reports.</p>
              <ul>
                <li>Institutional Benchmarking</li>
                <li>Domain / Regional Insights</li>
                <li>Custom Assessment Services</li>
              </ul>
            </div>
          </Col>
          <Col md={6} xl={3}>
            <div className="investors-card">
              <Briefcase size={32} className="text-success mb-3" />
              <h4 className="text-success">4. Employer Ecosystem</h4>
              <p>Future opportunities in talent intelligence, matching & insights.</p>
              <ul>
                <li>Candidate Access / Shortlisting</li>
                <li>Analytics & Talent Insights</li>
                <li>Hiring Intelligence Solutions</li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Investment Highlights */}
        <Row>
          <Col lg={12}>
            <div className="section-header-box">
              <h3>Investment Highlights: Why We Believe We Can Win</h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="investors-card text-center">
              <TrendingUp size={40} className="text-primary mx-auto mb-3" />
              <h4>Existing Revenue Visibility</h4>
              <h3 className="text-primary fw-bold">₹4.5 Cr</h3>
              <p className="mb-1 text-secondary">FY27 Revenue Target</p>
              <p className="text-muted small mt-2">Strong institutional pipeline and recurring contracts.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="investors-card text-center">
              <Building size={40} className="text-primary mx-auto mb-3" />
              <h4>Scalable Institutional Model</h4>
              <p className="text-dark fw-bold mb-1">250 → 600 → 1000 → 1600 → 2000 Institutions</p>
              <p className="text-muted small mt-2">Clear and achievable growth roadmap over the next 5 years.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="investors-card text-center">
              <Cpu size={40} className="text-primary mx-auto mb-3" />
              <h4>Proprietary Intelligence Layer</h4>
              <h5 className="text-dark">PragyaAI</h5>
              <p className="text-muted small mt-2">Transforms learning data into actionable intelligence and personalised learning paths.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="investors-card text-center">
              <Target size={40} className="text-primary mx-auto mb-3" />
              <h4>APEX Opportunity</h4>
              <h5 className="text-dark">APEX Benchmark</h5>
              <p className="text-muted small mt-2">Building a common benchmark for AI Productivity & Employability nationwide.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="investors-card text-center">
              <Activity size={40} className="text-primary mx-auto mb-3" />
              <h4>Recurring Revenue Foundation</h4>
              <p className="text-muted small mt-2">Institution-led recurring contracts with growing multi-year agreements.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="investors-card text-center">
              <Globe size={40} className="text-primary mx-auto mb-3" />
              <h4>Large Market Opportunity</h4>
              <p className="text-muted small mt-2">Operating at the intersection of Higher Education, Employability, AI Readiness, and Workforce Intelligence.</p>
            </div>
          </Col>
        </Row>

        {/* Exit Plan */}
        <Row>
          <Col lg={12}>
            <div className="section-header-box">
              <h3>Exit Plan: Multiple Pathways. Strong Outcomes.</h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={4}>
            <div className="investors-card">
              <h4 className="border-bottom border-secondary pb-3 mb-4">Investment Horizon</h4>
              <div className="mb-4">
                <h5 className="text-primary"><Zap size={20} className="me-2"/>Year 0–3</h5>
                <p className="small">Product scale, institutional penetration, revenue growth</p>
              </div>
              <div className="mb-4">
                <h5 className="text-info"><Zap size={20} className="me-2"/>Year 4–6</h5>
                <p className="small">National leadership, APEX benchmark adoption, strong revenue scale</p>
              </div>
              <div className="mb-4">
                <h5 className="text-warning"><Zap size={20} className="me-2"/>Year 6+</h5>
                <p className="small">Strategic partnerships, market expansion, exit readiness</p>
              </div>
              <div className="mt-4 pt-3 border-top border-secondary">
                <p className="text-dark fw-bold mb-0">Targeting strong value creation within 6-8 years</p>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="investors-card">
              <h4 className="border-bottom border-secondary pb-3 mb-4 text-center">Potential Exit Pathways</h4>
              <Row className="g-4 mt-2">
                <Col md={6}>
                  <div className="p-3 border border-secondary rounded">
                    <h5 className="text-primary">Strategic Acquisition</h5>
                    <p className="small text-muted mb-0">By global edtech, workforce tech or assessment companies looking to expand their AI and employability capabilities.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="p-3 border border-secondary rounded">
                    <h5 className="text-info">Merger</h5>
                    <p className="small text-muted mb-0">Merger with complementary platforms in education, talent intelligence or AI assessment space.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="p-3 border border-secondary rounded">
                    <h5 className="text-warning">Secondary Sale</h5>
                    <p className="small text-muted mb-0">Partial or full stake sale to growth equity or private equity investors for further scale and expansion.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="p-3 border border-secondary rounded">
                    <h5 className="text-success">IPO</h5>
                    <p className="small text-muted mb-0">Listing on stock exchanges to unlock long-term value and drive broader impact.</p>
                  </div>
                </Col>
              </Row>
              <div className="mt-4 text-center p-3 bg-light border rounded">
                <p className="mb-0 text-dark">Our goal is to build a <strong>category-defining company</strong> with multiple exit opportunities and exceptional returns.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Investors;
