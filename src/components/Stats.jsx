import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Stats.css';

const StatCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      // Extract numeric value from string
      const end = parseInt(stat.number.replace(/[^0-9]/g, '')) || 100;
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = Math.max(totalDuration / end, 10);

      let timer = setInterval(() => {
        start += Math.ceil(end / 40); // Faster increments
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, stat.number]);

  const displayValue = stat.number.includes('+') ? `${count}+` :
    stat.number.includes('Lakh') ? `${count}+ Lakh` :
      stat.number.includes('%') ? `${count}%` : count;

  return (
    <Col lg={3} md={6} className="mb-4" ref={cardRef}>
      <div className={`stat-card-v2 ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
        <div className="stat-icon-wrapper-v2">
          {stat.icon}
        </div>
        <h3 className="stat-number-v2">{isVisible ? displayValue : '0'}</h3>
        <h4 className="stat-label-v2">{stat.label}</h4>
        <p className="stat-description-v2">{stat.description}</p>
        <div className="stat-card-progress"></div>
      </div>
    </Col>
  );
};

const Stats = () => {
  const stats = [
    {
      number: '150+',
      label: 'Institutions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
          <path d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4" /><path d="M9 21h6" />
        </svg>
      ),
      description: 'Partnered Colleges'
    },
    {
      number: '11 Lakh',
      label: 'Students',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      description: 'Active Learners'
    },
    {
      number: '2022',
      label: 'Founded',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L12 9" /><path d="M15 12v5s1 .5 4 1c0-1.5-.5-3-.5-3L12 15" />
        </svg>
      ),
      description: 'Year Established'
    },
    {
      number: '100%',
      label: 'AI-Powered',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
        </svg>
      ),
      description: 'Smart Learning'
    }
  ];

  return (
    <section className="stats-section section-padding" id="impact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <div className="section-title-wrapper-v2">
              <h2 className="section-title-v2">Our Impact</h2>
            </div>
            <p className="section-subtitle-v2">
              Numbers that speak for our commitment to transforming education.
              Our growing network of institutions and students demonstrates the trust
              and confidence in our innovative solutions.
            </p>
          </Col>
        </Row>
        <Row>
          {stats.map((stat, index) => (
            <StatCard stat={stat} index={index} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;


