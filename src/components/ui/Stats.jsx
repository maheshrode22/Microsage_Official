import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bot, Building2, Rocket, Users } from 'lucide-react';
import useCounterAnimation from '../../hooks/useCounterAnimation';
import '../../styles/components/Stats.css';

const stats = [
  { number: '200+', label: 'Partner Institutions', Icon: Building2 },
  { number: '11 Lakh', label: 'Active Learners', Icon: Users },
  { number: '2022', label: 'Year Established', Icon: Rocket },
  { number: '100%', label: 'AI-Powered Platform', Icon: Bot },
];

const StatCard = ({ stat, index }) => {
  const { count, isVisible, cardRef } = useCounterAnimation(stat.number);
  const { Icon } = stat;

  const displayValue = stat.number.includes('+') ? `${count}+`
    : stat.number.includes('Lakh') ? `${count}+ Lakh`
    : stat.number.includes('%') ? `${count}%`
    : count;

  return (
    <Col lg={3} md={6} className="mb-4" ref={cardRef}>
      <div className={`stat-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
        <div className="stat-icon-wrap">
          <Icon size={26} strokeWidth={2} />
        </div>
        <h3 className="stat-number">{isVisible ? displayValue : '0'}</h3>
        <p className="stat-label">{stat.label}</p>
      </div>
    </Col>
  );
};

const Stats = () => (
  <section id="stats" className="stats-section section-padding">
    <Container fluid className="px-4 px-lg-5">
      <Row className="justify-content-center">
        <Col lg={7} className="text-center mb-4">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Trusted by institutions and learners across India to deliver outcomes that matter.
          </p>
        </Col>
      </Row>
      <Row>
        {stats.map((stat, index) => (
          <StatCard stat={stat} index={index} key={stat.label} />
        ))}
      </Row>
    </Container>
  </section>
);

export default Stats;
