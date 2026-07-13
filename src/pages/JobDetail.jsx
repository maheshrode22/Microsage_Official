import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  Check,
  GraduationCap,
  MapPin,
  Paperclip,
  ClipboardList,
  Mail,
  Phone,
  Trophy,
} from 'lucide-react';
import { fetchJobBySlug } from '../services/jobService';
import { submitJobApplication } from '../services/formService';
import '../styles/components/Career.css';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      setLoading(true);
      setLoadError('');
      try {
        const data = await fetchJobBySlug(id);
        setJob(data);
      } catch (err) {
        setLoadError(err.message || 'Failed to load job details.');
      } finally {
        setLoading(false);
      }
    };
    loadJob();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      e.target.value = '';
      return;
    }
    setResumeFile(file);
    if (submitStatus) setSubmitStatus(null);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      await submitJobApplication({
        jobId: job.slug,
        jobTitle: job.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        resumeFile,
      });

      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! Our HR team will contact you soon.',
      });
      setFormData({ name: '', email: '', phone: '' });
      setResumeFile(null);
      setShowForm(false);
    } catch (err) {
      setSubmitStatus({
        type: 'danger',
        message: err.message || 'Failed to submit application.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setSubmitStatus(null);
    setFormData({ name: '', email: '', phone: '' });
    setResumeFile(null);
  };

  if (loading) {
    return (
      <section className="career-section section-padding">
        <Container fluid className="px-4 px-lg-5 text-center">
          <Spinner animation="border" role="status" />
        </Container>
      </section>
    );
  }

  if (loadError || !job) {
    return (
      <section className="career-section section-padding">
        <Container fluid className="px-4 px-lg-5 text-center">
          <h2 className="section-title">Job Not Found</h2>
          <p className="section-subtitle">
            {loadError || 'This position may no longer be available.'}
          </p>
          <Link to="/career" className="btn btn-primary-custom mt-3">View All Openings</Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="career-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Link to="/career" className="job-back-link d-inline-flex align-items-center gap-1">
              <ArrowLeft size={16} strokeWidth={2} />
              All Openings
            </Link>

            <div className="job-detail-header">
              <div className="job-header-top">
                {job.isActive && (
                  <span className="job-status-badge">Actively Hiring</span>
                )}
              </div>
              <h1 className="job-detail-title">{job.title}</h1>
              <p className="job-detail-company">Microsage Private Limited · Pune</p>
              <div className="job-meta-tags">
                <span className="meta-tag">
                  <MapPin size={14} strokeWidth={2} className="meta-icon-lucide" />
                  {job.location}
                </span>
                <span className="meta-tag">
                  <Briefcase size={14} strokeWidth={2} className="meta-icon-lucide" />
                  {job.type}
                </span>
                <span className="meta-tag">
                  <GraduationCap size={14} strokeWidth={2} className="meta-icon-lucide" />
                  {job.qualification}
                </span>
                <span className="meta-tag">
                  <ClipboardList size={14} strokeWidth={2} className="meta-icon-lucide" />
                  {job.hiringProcess}
                </span>
              </div>
            </div>

            <div className="job-info-grid">
              <div className="job-info-item">
                <span className="job-info-label">Designation</span>
                <span className="job-info-value">{job.designation}</span>
              </div>
              <div className="job-info-item">
                <span className="job-info-label">Training & Probation</span>
                <span className="job-info-value">{job.probation}</span>
              </div>
              <div className="job-info-item">
                <span className="job-info-label">Stipend</span>
                <span className="job-info-value">{job.stipend}</span>
              </div>
              <div className="job-info-item">
                <span className="job-info-label">Post Probation</span>
                <span className="job-info-value">Performance Based</span>
              </div>
            </div>

            <div className="job-salary-note d-flex align-items-start gap-2">
              <Trophy size={18} strokeWidth={2} className="flex-shrink-0 mt-1" />
              <p className="mb-0">{job.salaryNote}</p>
            </div>

            <div className="job-section">
              <h3 className="job-section-title">About This Role</h3>
              <p className="job-section-text">{job.focus}</p>
            </div>

            <div className="job-section">
              <h3 className="job-section-title">Skills Required</h3>
              <div className="job-skills-grid">
                {job.coreSkills.map((skill, i) => (
                  <span key={i} className="job-skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            {job.responsibilities?.length > 0 && (
              <div className="job-section">
                <h3 className="job-section-title">Key Responsibilities</h3>
                <ul className="job-tech-list">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>
                      <Check size={14} strokeWidth={2.5} className="job-list-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="job-section">
              <h3 className="job-section-title">Technical Requirements</h3>
              <ul className="job-tech-list">
                {job.technicalSkills.map((skill, i) => (
                  <li key={i}>
                    <Check size={14} strokeWidth={2.5} className="job-list-icon" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="job-sidebar">
              <div className="job-apply-card">
                <h4>Apply for this position</h4>
                <p>Take the next step in your career journey.</p>

                {submitStatus && !showForm && (
                  <Alert variant={submitStatus.type} className="mb-3">
                    {submitStatus.message}
                  </Alert>
                )}

                {!showForm ? (
                  <div className="job-apply-buttons">
                    <button className="job-apply-primary" onClick={() => setShowForm(true)}>
                      Apply Now
                    </button>
                    <a
                      href={`https://wa.me/${job.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in the ${job.title} position at Microsage.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-apply-whatsapp"
                    >
                      WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    {submitStatus && (
                      <Alert variant={submitStatus.type} className="mb-3">
                        {submitStatus.message}
                      </Alert>
                    )}
                    <Form onSubmit={handleApply} className="job-apply-form">
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <div className="resume-upload-area">
                          <label htmlFor="resume-input" className="resume-upload-label">
                            <Paperclip size={16} strokeWidth={2} className="resume-upload-icon-lucide" />
                            <span className="resume-upload-text">
                              {resumeFile ? resumeFile.name : 'Upload Resume (PDF, DOC)'}
                            </span>
                            <span className="resume-upload-hint">Max 5MB</span>
                          </label>
                          <input
                            id="resume-input"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="resume-file-input"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </Form.Group>
                      <button type="submit" className="job-apply-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                      <button
                        type="button"
                        className="job-apply-cancel"
                        onClick={handleCancelForm}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    </Form>
                  </>
                )}
              </div>

              <div className="job-contact-card">
                <h5>Have questions?</h5>
                <div className="job-contact-item d-flex align-items-center gap-2">
                  <Mail size={16} strokeWidth={2} />
                  <a href={`mailto:${job.applyEmail}`}>{job.applyEmail}</a>
                </div>
                <div className="job-contact-item d-flex align-items-center gap-2">
                  <Phone size={16} strokeWidth={2} />
                  <a href={`tel:${job.whatsapp.replace(/[^0-9+]/g, '')}`}>{job.whatsapp}</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobDetail;
