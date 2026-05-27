import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import jobs from '../data/jobs';
import '../styles/components/Career.css';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      e.target.value = '';
      return;
    }
    setResumeFile(file);
  };

  const handleApply = (e) => {
    e.preventDefault();
    // Future: send FormData to backend API with resume file
    // const data = new FormData();
    // data.append('name', formData.name);
    // data.append('email', formData.email);
    // data.append('phone', formData.phone);
    // data.append('resume', resumeFile);
    // await fetch(`/api/jobs/${job.id}/apply`, { method: 'POST', body: data });

    const subject = `Application: ${job.title} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nResume: ${resumeFile ? resumeFile.name : 'Not attached'}\n\nNote: Please attach your resume to this email.`;
    window.location.href = `mailto:${job.applyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', phone: '' });
    setResumeFile(null);
    setShowForm(false);
  };


  if (!job) {
    return (
      <section className="career-section section-padding">
        <Container fluid className="px-4 px-lg-5 text-center">
          <h2 className="section-title">Job Not Found</h2>
          <p className="section-subtitle">This position may no longer be available.</p>
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
            {/* Back link */}
            <Link to="/career" className="job-back-link">← All Openings</Link>

            {/* Header */}
            <div className="job-detail-header">
              <div className="job-header-top">
                <span className="job-status-badge">🟢 Actively Hiring</span>
              </div>
              <h1 className="job-detail-title">{job.title}</h1>
              <p className="job-detail-company">Microsage Private Limited · Pune</p>
              <div className="job-meta-tags">
                <span className="meta-tag"><span className="meta-icon">📍</span> {job.location}</span>
                <span className="meta-tag"><span className="meta-icon">💼</span> {job.type}</span>
                <span className="meta-tag"><span className="meta-icon">🎓</span> {job.qualification}</span>
                <span className="meta-tag"><span className="meta-icon">📝</span> {job.hiringProcess}</span>
              </div>
            </div>

            {/* Quick Info */}
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

            {/* Salary note */}
            <div className="job-salary-note">
              <span>🏆</span>
              <p>{job.salaryNote}</p>
            </div>

            {/* Focus */}
            <div className="job-section">
              <h3 className="job-section-title">About This Role</h3>
              <p className="job-section-text">{job.focus}</p>
            </div>

            {/* Core Skills */}
            <div className="job-section">
              <h3 className="job-section-title">Skills Required</h3>
              <div className="job-skills-grid">
                {job.coreSkills.map((skill, i) => (
                  <span key={i} className="job-skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            {job.responsibilities && (
              <div className="job-section">
                <h3 className="job-section-title">Key Responsibilities</h3>
                <ul className="job-tech-list">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Skills */}
            <div className="job-section">
              <h3 className="job-section-title">Technical Requirements</h3>
              <ul className="job-tech-list">
                {job.technicalSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <div className="job-sidebar">
              {/* Apply Card */}
              <div className="job-apply-card">
                <h4>Apply for this position</h4>
                <p>Take the next step in your career journey.</p>

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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.245A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.726-5.992-1.957l-.42-.312-2.772.737.688-2.686-.342-.447A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                ) : (
                  <Form onSubmit={handleApply} className="job-apply-form">
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <div className="resume-upload-area">
                        <label htmlFor="resume-input" className="resume-upload-label">
                          <span className="resume-upload-icon">📎</span>
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
                        />
                      </div>
                    </Form.Group>
                    <button type="submit" className="job-apply-primary">Submit Application</button>
                    <button type="button" className="job-apply-cancel" onClick={() => setShowForm(false)}>Cancel</button>
                  </Form>
                )}
              </div>

              {/* Contact Card */}
              <div className="job-contact-card">
                <h5>Have questions?</h5>
                <div className="job-contact-item">
                  <span>📧</span>
                  <a href={`mailto:${job.applyEmail}`}>{job.applyEmail}</a>
                </div>
                <div className="job-contact-item">
                  <span>📲</span>
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
