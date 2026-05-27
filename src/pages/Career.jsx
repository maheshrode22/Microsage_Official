import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jobs from '../data/jobs';
import '../styles/components/Career.css';

const Career = () => (
  <section className="career-section section-padding">
    <Container fluid className="px-4 px-lg-5">
      <Row className="justify-content-center">
        <Col lg={7} className="text-center">
          <h2 className="section-title">Careers</h2>
          <p className="section-subtitle">
            Join <strong>Microsage Private Limited</strong> to build AI-powered learning and hiring products.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {jobs.map((job) => (
          <Col lg={4} md={6} className="mb-4" key={job.id}>
            <div className="career-card">
              <div className="career-card-header">
                <span className="career-type-badge">{job.type}</span>
              </div>
              <h4 className="career-title">{job.title}</h4>
              <p className="career-meta">
                <span>📍 {job.location}</span>
              </p>
              <p className="career-focus">{job.focus}</p>
              <div className="career-skills-preview">
                {job.coreSkills.slice(0, 4).map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
                {job.coreSkills.length > 4 && (
                  <span className="skill-tag skill-tag-more">+{job.coreSkills.length - 4} more</span>
                )}
              </div>
              <div className="career-card-footer">
                <Link to={`/career/${job.id}`} className="btn btn-primary-custom career-view-btn">
                  View Details
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col lg={12}>
          <div className="career-cta">
            <div>
              <h4>Don't see a perfect fit?</h4>
              <p className="mb-0">Send your profile and we'll reach out when a role opens up.</p>
            </div>
            <Button
              variant="outline-primary"
              className="career-cta-btn"
              href="mailto:hr@gatetutor.in?subject=Open%20Application"
            >
              Share Your Profile
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Career;
