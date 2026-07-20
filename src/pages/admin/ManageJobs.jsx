import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  MapPin,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react';
import {
  arrayToLines,
  createJob,
  deleteJob,
  fetchAllJobs,
  linesToArray,
  slugifyTitle,
  toggleJobPublished,
  updateJob,
} from '../../services/jobService';

const EMPTY_FORM = {
  slug: '',
  title: '',
  designation: '',
  qualification: '',
  type: 'Full-Time',
  openings: '',
  location: '',
  hiringProcess: '',
  probation: '',
  stipend: '',
  salaryNote: '',
  focus: '',
  coreSkillsText: '',
  technicalSkillsText: '',
  responsibilitiesText: '',
  applyEmail: 'hr@gatetutor.in',
  whatsapp: '+91 7709 000 738',
  isPublished: true,
  isActive: true,
};

const jobToForm = (job) => ({
  slug: job.slug,
  title: job.title,
  designation: job.designation,
  qualification: job.qualification,
  type: job.type,
  openings: job.openings || '',
  location: job.location,
  hiringProcess: job.hiringProcess,
  probation: job.probation,
  stipend: job.stipend,
  salaryNote: job.salaryNote,
  focus: job.focus,
  coreSkillsText: arrayToLines(job.coreSkills),
  technicalSkillsText: arrayToLines(job.technicalSkills),
  responsibilitiesText: arrayToLines(job.responsibilities),
  applyEmail: job.applyEmail,
  whatsapp: job.whatsapp,
  isPublished: job.isPublished,
  isActive: job.isActive,
});

const formToJob = (form) => ({
  slug: form.slug.trim(),
  title: form.title.trim(),
  designation: form.designation.trim(),
  qualification: form.qualification.trim(),
  type: form.type.trim(),
  openings: form.openings.trim() || null,
  location: form.location.trim(),
  hiringProcess: form.hiringProcess.trim(),
  probation: form.probation.trim(),
  stipend: form.stipend.trim(),
  salaryNote: form.salaryNote.trim(),
  focus: form.focus.trim(),
  coreSkills: linesToArray(form.coreSkillsText),
  technicalSkills: linesToArray(form.technicalSkillsText),
  responsibilities: linesToArray(form.responsibilitiesText),
  applyEmail: form.applyEmail.trim(),
  whatsapp: form.whatsapp.trim(),
  isPublished: form.isPublished,
  isActive: form.isActive,
});

const REQUIRED_FIELDS = [
  'title', 'designation', 'qualification', 'location',
  'hiringProcess', 'probation', 'stipend', 'salaryNote', 'focus', 'slug',
];

const FormSection = ({ title, description, children }) => (
  <div className="job-form-section">
    <div className="job-form-section-head">
      <h5 className="job-form-section-title">{title}</h5>
      {description && <p className="job-form-section-desc">{description}</p>}
    </div>
    <div className="job-form-grid">{children}</div>
  </div>
);

const ManageJobs = ({ onCountChange }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [view, setView] = useState('list');
  const [editingSlug, setEditingSlug] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [slugTouched, setSlugTouched] = useState(false);
  const [actionSlug, setActionSlug] = useState(null);
  const [titleFilter, setTitleFilter] = useState('all');

  const stats = useMemo(() => ({
    total: jobs.length,
    published: jobs.filter((j) => j.isPublished).length,
    draft: jobs.filter((j) => !j.isPublished).length,
  }), [jobs]);

  const jobTitles = useMemo(
    () =>
      [...new Set(jobs.map((job) => job.title).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    if (titleFilter === 'all') return jobs;
    return jobs.filter((job) => job.title === titleFilter);
  }, [jobs, titleFilter]);

  const loadJobs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAllJobs();
      setJobs(data);
      onCountChange?.(data.length);
    } catch (err) {
      setError(err.message || 'Failed to load job postings.');
    } finally {
      setLoading(false);
    }
  }, [onCountChange]);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  useEffect(() => {
    if (
      titleFilter !== 'all' &&
      jobs.length > 0 &&
      !jobs.some((job) => job.title === titleFilter)
    ) {
      setTitleFilter('all');
    }
  }, [jobs, titleFilter]);

  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: type === 'checkbox' ? checked : value };
      if (name === 'title' && !slugTouched && view === 'create') {
        next.slug = slugifyTitle(value);
      }
      return next;
    });
    setSuccess('');
  };

  const handleSlugChange = (e) => {
    setSlugTouched(true);
    // Keep typed value as-is (e.g. TA → /career/TA), only strip spaces
    const value = e.target.value.replace(/\s+/g, '');
    setForm((prev) => ({ ...prev, slug: value }));
    setSuccess('');
  };

  const openCreate = () => {
    setEditingSlug(null);
    setForm(EMPTY_FORM);
    setSlugTouched(false);
    setView('create');
    setError('');
    setSuccess('');
  };

  const openEdit = (job) => {
    setEditingSlug(job.slug);
    setForm(jobToForm(job));
    setSlugTouched(true);
    setView('edit');
    setError('');
    setSuccess('');
  };

  const cancelForm = () => {
    setView('list');
    setEditingSlug(null);
    setForm(EMPTY_FORM);
    setError('');
  };

  const validateForm = () => {
    for (const field of REQUIRED_FIELDS) {
      if (!form[field]?.trim()) {
        const label = field === 'hiringProcess' ? 'Hiring Process'
          : field === 'salaryNote' ? 'Salary Note'
          : field.charAt(0).toUpperCase() + field.slice(1);
        return `${label} is required.`;
      }
    }
    if (!/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(form.slug.trim())) {
      return 'Slug can use letters, numbers, and hyphens only (e.g. TA or junior-ml-engineer).';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const payload = formToJob(form);
      const slugTaken = jobs.some(
        (j) =>
          j.slug.toLowerCase() === payload.slug.toLowerCase() &&
          (view === 'create' || j.slug !== editingSlug)
      );
      if (slugTaken) {
        setError('A job with this slug already exists. Choose a different slug.');
        setSaving(false);
        return;
      }
      if (view === 'create') {
        await createJob(payload);
        setSuccess('Job posted successfully.');
      } else {
        await updateJob(editingSlug, payload);
        setSuccess('Job updated successfully.');
      }
      await loadJobs();
      setView('list');
      setEditingSlug(null);
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(err.message || 'Failed to save job.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm('Delete this job posting? This cannot be undone.')) return;
    setActionSlug(slug);
    setError('');
    setSuccess('');
    try {
      await deleteJob(slug);
      setSuccess('Job deleted.');
      await loadJobs();
    } catch (err) {
      setError(err.message || 'Failed to delete job.');
    } finally {
      setActionSlug(null);
    }
  };

  const handleTogglePublished = async (job) => {
    setActionSlug(job.slug);
    setError('');
    setSuccess('');
    try {
      await toggleJobPublished(job.slug, !job.isPublished);
      setSuccess(job.isPublished ? 'Job unpublished.' : 'Job published.');
      await loadJobs();
    } catch (err) {
      setError(err.message || 'Failed to update publish status.');
    } finally {
      setActionSlug(null);
    }
  };

  if (view === 'create' || view === 'edit') {
    return (
      <div className="manage-jobs">
        <div className="manage-jobs-form-card">
          <div className="manage-jobs-form-top">
            <div>
              <button type="button" className="manage-jobs-back" onClick={cancelForm} disabled={saving}>
                <ArrowLeft size={16} strokeWidth={2} />
                Back to listings
              </button>
              <h2 className="manage-jobs-form-title">
                {view === 'create' ? 'Post New Job' : 'Edit Job Posting'}
              </h2>
              <p className="manage-jobs-form-subtitle">
                {view === 'create'
                  ? 'Fill in the details below to publish a new opening on the career page.'
                  : 'Update job details. Changes reflect on the public career page when published.'}
              </p>
            </div>
          </div>

          {error && <Alert variant="danger" className="manage-jobs-alert">{error}</Alert>}
          {success && <Alert variant="success" className="manage-jobs-alert">{success}</Alert>}

          <Form onSubmit={handleSubmit} className="job-form">
            <FormSection title="Basic Information" description="Core job title and role details.">
              <Form.Group>
                <Form.Label>Job Title *</Form.Label>
                <Form.Control name="title" value={form.title} onChange={handleFieldChange} required disabled={saving} placeholder="e.g. Junior AI/ML Engineer" />
              </Form.Group>
              <Form.Group>
                <Form.Label>URL Slug *</Form.Label>
                <Form.Control
                  name="slug"
                  value={form.slug}
                  onChange={handleSlugChange}
                  required
                  disabled={saving}
                  placeholder="TA"
                />
                <Form.Text className="text-muted">
                  Career page URL: <strong>/career/{form.slug || 'TA'}</strong>
                  {' '}— short custom slugs like TA are allowed.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Designation *</Form.Label>
                <Form.Control name="designation" value={form.designation} onChange={handleFieldChange} required disabled={saving} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Qualification *</Form.Label>
                <Form.Control name="qualification" value={form.qualification} onChange={handleFieldChange} required disabled={saving} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Employment Type</Form.Label>
                <Form.Select name="type" value={form.type} onChange={handleFieldChange} disabled={saving}>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Openings</Form.Label>
                <Form.Control name="openings" value={form.openings} onChange={handleFieldChange} disabled={saving} placeholder="e.g. 2" />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>Location *</Form.Label>
                <Form.Control name="location" value={form.location} onChange={handleFieldChange} required disabled={saving} placeholder="Near Amanora, Hadapsar, Pune" />
              </Form.Group>
            </FormSection>

            <FormSection title="Hiring & Compensation" description="Process, probation period, and pay details.">
              <Form.Group>
                <Form.Label>Hiring Process *</Form.Label>
                <Form.Control name="hiringProcess" value={form.hiringProcess} onChange={handleFieldChange} required disabled={saving} placeholder="Interview Based" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Probation Period *</Form.Label>
                <Form.Control name="probation" value={form.probation} onChange={handleFieldChange} required disabled={saving} placeholder="6 Months" />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>Stipend *</Form.Label>
                <Form.Control name="stipend" value={form.stipend} onChange={handleFieldChange} required disabled={saving} />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>Salary Note *</Form.Label>
                <Form.Control as="textarea" rows={2} name="salaryNote" value={form.salaryNote} onChange={handleFieldChange} required disabled={saving} />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>About This Role *</Form.Label>
                <Form.Control as="textarea" rows={2} name="focus" value={form.focus} onChange={handleFieldChange} required disabled={saving} />
              </Form.Group>
            </FormSection>

            <FormSection title="Skills & Responsibilities" description="Enter one item per line.">
              <Form.Group className="job-form-full">
                <Form.Label>Core Skills</Form.Label>
                <Form.Control as="textarea" rows={4} name="coreSkillsText" value={form.coreSkillsText} onChange={handleFieldChange} disabled={saving} placeholder={'Python\nMachine Learning\nDeep Learning'} />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>Technical Requirements</Form.Label>
                <Form.Control as="textarea" rows={4} name="technicalSkillsText" value={form.technicalSkillsText} onChange={handleFieldChange} disabled={saving} />
              </Form.Group>
              <Form.Group className="job-form-full">
                <Form.Label>Key Responsibilities</Form.Label>
                <Form.Control as="textarea" rows={4} name="responsibilitiesText" value={form.responsibilitiesText} onChange={handleFieldChange} disabled={saving} />
              </Form.Group>
            </FormSection>

            <FormSection title="Contact & Visibility">
              <Form.Group>
                <Form.Label>Apply Email</Form.Label>
                <Form.Control name="applyEmail" type="email" value={form.applyEmail} onChange={handleFieldChange} disabled={saving} />
              </Form.Group>
              <Form.Group>
                <Form.Label>WhatsApp Number</Form.Label>
                <Form.Control name="whatsapp" value={form.whatsapp} onChange={handleFieldChange} disabled={saving} />
              </Form.Group>
              <div className="job-form-full job-visibility-toggles">
                <label className={`job-toggle-card ${form.isPublished ? 'active' : ''}`}>
                  <input type="checkbox" name="isPublished" checked={form.isPublished} onChange={handleFieldChange} disabled={saving} />
                  <span className="job-toggle-icon">{form.isPublished ? <Eye size={18} /> : <EyeOff size={18} />}</span>
                  <span className="job-toggle-text">
                    <strong>Published</strong>
                    <small>Visible on the public career page</small>
                  </span>
                </label>
                <label className={`job-toggle-card ${form.isActive ? 'active' : ''}`}>
                  <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleFieldChange} disabled={saving} />
                  <span className="job-toggle-icon"><CheckCircle2 size={18} /></span>
                  <span className="job-toggle-text">
                    <strong>Accepting Applications</strong>
                    <small>ON = students can apply · OFF = job visible, apply closed</small>
                  </span>
                </label>
              </div>
            </FormSection>

            <div className="job-form-actions">
              <Button type="submit" variant="primary" className="job-form-submit" disabled={saving}>
                {saving ? 'Saving...' : view === 'create' ? 'Post Job' : 'Save Changes'}
              </Button>
              <Button type="button" variant="outline-secondary" onClick={cancelForm} disabled={saving}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-jobs">
      <div className="manage-jobs-toolbar">
        <div className="manage-jobs-stats">
          <div className="manage-jobs-stat">
            <span className="manage-jobs-stat-value">{stats.total}</span>
            <span className="manage-jobs-stat-label">Total Jobs</span>
          </div>
          <div className="manage-jobs-stat published">
            <span className="manage-jobs-stat-value">{stats.published}</span>
            <span className="manage-jobs-stat-label">Published</span>
          </div>
          <div className="manage-jobs-stat draft">
            <span className="manage-jobs-stat-value">{stats.draft}</span>
            <span className="manage-jobs-stat-label">Drafts</span>
          </div>
        </div>
        <div className="manage-jobs-toolbar-actions">
          {jobs.length > 0 && (
            <Form.Group className="manage-jobs-title-filter mb-0">
              <Form.Label className="visually-hidden">Filter by Job Title</Form.Label>
              <Form.Select
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
                aria-label="Filter by Job Title"
              >
                <option value="all">All Job Titles</option>
                {jobTitles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
          <Button variant="primary" className="manage-jobs-add-btn" onClick={openCreate}>
            <Plus size={17} strokeWidth={2.5} />
            Post New Job
          </Button>
        </div>
      </div>

      {error && <Alert variant="danger" className="manage-jobs-alert">{error}</Alert>}
      {success && <Alert variant="success" className="manage-jobs-alert">{success}</Alert>}

      <div className="manage-jobs-table-card">
        {loading ? (
          <div className="dashboard-loading">
            <Spinner animation="border" role="status" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="manage-jobs-empty">
            <span className="manage-jobs-empty-icon"><Briefcase size={32} strokeWidth={1.5} /></span>
            <h4>No job postings yet</h4>
            <p>Create your first job opening to display on the career page.</p>
            <Button variant="primary" onClick={openCreate}>
              <Plus size={16} strokeWidth={2.5} />
              Post New Job
            </Button>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="manage-jobs-empty">
            <span className="manage-jobs-empty-icon"><Briefcase size={32} strokeWidth={1.5} /></span>
            <h4>No jobs match this title</h4>
            <p>Try selecting a different Job Title from the filter.</p>
            <Button variant="outline-secondary" onClick={() => setTitleFilter('all')}>
              Show All Jobs
            </Button>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="manage-jobs-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job) => (
                  <tr key={job.slug}>
                    <td>
                      <div className="manage-jobs-title-cell">
                        <strong>{job.title}</strong>
                        <span className="job-table-slug">/career/{job.slug}</span>
                      </div>
                    </td>
                    <td>
                      <span className="manage-jobs-location">
                        <MapPin size={13} strokeWidth={2} />
                        {job.location}
                      </span>
                    </td>
                    <td><span className="manage-jobs-type">{job.type}</span></td>
                    <td>
                      <div className="manage-jobs-badges">
                        <span className={`job-status-badge ${job.isPublished ? 'published' : 'draft'}`}>
                          {job.isPublished ? 'Published' : 'Draft'}
                        </span>
                        {job.isActive ? (
                          <span className="job-status-badge active">Hiring</span>
                        ) : (
                          <span className="job-status-badge closed">Apply Closed</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="job-action-group">
                        <button
                          type="button"
                          className="job-action-btn"
                          onClick={() => window.open(`/career/${job.slug}`, '_blank')}
                          title="View on site"
                        >
                          <ExternalLink size={15} strokeWidth={2} />
                        </button>
                        <button type="button" className="job-action-btn" onClick={() => openEdit(job)} title="Edit">
                          <Pencil size={15} strokeWidth={2} />
                        </button>
                        <button
                          type="button"
                          className={`job-action-btn ${job.isPublished ? 'warning' : 'success'}`}
                          onClick={() => handleTogglePublished(job)}
                          disabled={actionSlug === job.slug}
                          title={job.isPublished ? 'Unpublish' : 'Publish'}
                        >
                          {job.isPublished ? <EyeOff size={15} strokeWidth={2} /> : <Eye size={15} strokeWidth={2} />}
                        </button>
                        <button
                          type="button"
                          className="job-action-btn danger"
                          onClick={() => handleDelete(job.slug)}
                          disabled={actionSlug === job.slug}
                          title="Delete"
                        >
                          <Trash2 size={15} strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobs;
