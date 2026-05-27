import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useCounterAnimation from '../../hooks/useCounterAnimation';
import '../../styles/components/Stats.css';

const stats = [
  {
    number: '150+',
    label: 'Partner Institutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
        <path d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4" /><path d="M9 21h6" />
      </svg>
    ),
  },
  {
    number: '11 Lakh',
    label: 'Active Learners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: '2022',
    label: 'Year Established',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L12 9" /><path d="M15 12v5s1 .5 4 1c0-1.5-.5-3-.5-3L12 15" />
      </svg>
    ),
  },
  {
    number: '100%',
    label: 'AI-Powered Platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
      </svg>
    ),
  },
];

const StatCard = ({ stat, index }) => {
  const { count, isVisible, cardRef } = useCounterAnimation(stat.number);

  const displayValue = stat.number.includes('+') ? `${count}+`
    : stat.number.includes('Lakh') ? `${count}+ Lakh`
    : stat.number.includes('%') ? `${count}%`
    : count;

  return (
    <Col lg={3} md={6} className="mb-4" ref={cardRef}>
      <div className={`stat-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
        <div className="stat-icon-wrap">{stat.icon}</div>
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
