import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Users, Building2, Briefcase, Cpu, Award, BookOpen, ArrowDown } from 'lucide-react';
import '../../styles/components/Infrastructure.css';

const STAKEHOLDERS = [
  {
    icon: Users,
    title: 'Students',
    text: 'Learn. Grow. Prove readiness.',
  },
  {
    icon: Building2,
    title: 'Institutions',
    text: 'Teach. Assess. Elevate outcomes.',
  },
  {
    icon: Briefcase,
    title: 'Employers',
    text: 'Discover. Evaluate. Hire the best.',
  },
];

const LAYERS = [
  {
    id: 'gatetutor',
    step: '01',
    icon: BookOpen,
    name: 'GATEtutor',
    role: 'Learning & Assessment Ecosystem',
    tagline: 'One platform for every stakeholder',
  },
  {
    id: 'pragya',
    step: '02',
    icon: Cpu,
    name: 'PragyaAI',
    role: 'Proprietary AI Intelligence Layer',
    tagline: 'Data that predicts. AI that personalises.',
  },
  {
    id: 'apex',
    step: '03',
    icon: Award,
    name: 'APEX',
    role: 'AI Productivity & Excellence Platform',
    tagline: 'A common benchmark, industry-aligned',
  },
];

const Infrastructure = () => (
  <section className="infrastructure-section section-padding" id="infrastructure">
    <Container fluid className="px-4 px-lg-5">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <p className="infra-eyebrow">Platform Architecture</p>
          <h2 className="section-title">Building the Intelligence Infrastructure</h2>
          <p className="section-subtitle infra-subtitle">
            A unified ecosystem that connects learning, measures potential, and unlocks employability.
          </p>
        </Col>
      </Row>

      <div className="infra-stakeholders">
        {STAKEHOLDERS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="infra-stakeholder">
            <span className="infra-stakeholder-icon" aria-hidden="true">
              <Icon size={20} strokeWidth={1.75} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="infra-flow-hint" aria-hidden="true">
        <span className="infra-flow-hint-line" />
        <ArrowDown size={16} strokeWidth={2} />
        <span>Flows into</span>
      </div>

      <div className="infra-stack">
        <div className="infra-stack-rail" aria-hidden="true" />

        {LAYERS.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <React.Fragment key={layer.id}>
              <article className={`infra-layer infra-layer--${layer.id}`}>
                <div className="infra-layer-step">{layer.step}</div>
                <div className="infra-layer-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="infra-layer-body">
                  <div className="infra-layer-copy">
                    <h3>{layer.name}</h3>
                    <p>{layer.role}</p>
                  </div>
                  <p className="infra-layer-tagline">{layer.tagline}</p>
                </div>
              </article>
              {index < LAYERS.length - 1 && (
                <div className="infra-stack-gap" aria-hidden="true" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="infra-flow-hint" aria-hidden="true">
        <span className="infra-flow-hint-line" />
        <ArrowDown size={16} strokeWidth={2} />
        <span>Delivers</span>
      </div>

      <div className="infra-outcome">
        <p className="infra-outcome-label">Outcome</p>
        <h3>Future-ready workforce</h3>
        <p className="infra-outcome-text">
          Stronger institutions. Smarter hiring. Greater impact.
        </p>
      </div>
    </Container>
  </section>
);

export default Infrastructure;
