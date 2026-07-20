import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { fetchPublishedJobs } from '../services/jobService';
import '../styles/components/Career.css';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchPublishedJobs();
        setJobs(data);
      } catch (err) {
        setError(err.message || 'Failed to load job openings.');
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  return (
    <section className="career-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="career-header">
              <span className="career-eyebrow">We&apos;re Hiring</span>
              <h1 className="career-heading">Build the Future of Learning &amp; Hiring</h1>
              <p className="career-subheading">
                Join <strong>Microsage Private Limited</strong> and help us craft AI-powered
                products that transform how people learn, get assessed, and get hired.
              </p>
            </div>
          </Col>
        </Row>

        {error && (
          <Row className="mt-3">
            <Col lg={12}>
              <div className="alert alert-danger mb-0">{error}</div>
            </Col>
          </Row>
        )}

        {loading ? (
          <div className="career-loading">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          <Row className="mt-4">
            {jobs.length === 0 ? (
              <Col lg={12} className="text-center">
                <p className="career-empty">No job openings at the moment. Please check back soon.</p>
              </Col>
            ) : (
              jobs.map((job) => (
                <Col lg={4} md={6} className="mb-4" key={job.slug}>
                  <div className="career-card">
                    <div className="career-card-header">
                      <span className="career-type-badge">{job.type}</span>
                      {!job.isActive && (
                        <span className="career-closed-badge">Apply Closed</span>
                      )}
                    </div>
                    <h4 className="career-title">{job.title}</h4>
                    <p className="career-meta d-flex align-items-center gap-1">
                      <MapPin size={14} strokeWidth={2} />
                      {job.location}
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
                      <Link to={`/career/${job.slug}`} className="btn btn-primary-custom career-view-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </Col>
              ))
            )}
          </Row>
        )}

        <Row className="mt-3">
          <Col lg={12}>
            <div className="career-cta">
              <div>
                <h4>Don&apos;t see a perfect fit?</h4>
                <p className="mb-0">Send us your profile and we&apos;ll reach out when a role opens up.</p>
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
};

export default Career;
