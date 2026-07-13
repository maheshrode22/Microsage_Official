import React, { useMemo, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import {
  Briefcase,
  Calendar,
  Download,
  FileText,
  Mail,
  Phone,
} from 'lucide-react';

const formatDate = (value) => {
  if (!value) return '-';
  return new Date(value).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatShortDate = (value) => {
  if (!value) return '-';
  return new Date(value).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const JobApplications = ({
  applications = [],
  loading = false,
  error = '',
  onResumeDownload,
}) => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [localError, setLocalError] = useState('');
  const [filter, setFilter] = useState('all');

  const stats = useMemo(() => {
    const unread = applications.filter((a) => !a.is_read).length;
    const withResume = applications.filter((a) => a.resume_path).length;
    return {
      total: applications.length,
      unread,
      seen: applications.length - unread,
      withResume,
    };
  }, [applications]);

  const filtered = useMemo(() => {
    if (filter === 'new') return applications.filter((a) => !a.is_read);
    if (filter === 'seen') return applications.filter((a) => a.is_read);
    return applications;
  }, [applications, filter]);

  const handleDownload = async (application) => {
    if (!onResumeDownload) return;
    setDownloadingId(application.id);
    setLocalError('');
    try {
      await onResumeDownload(application);
    } catch (err) {
      setLocalError(err.message || 'Failed to download resume.');
    } finally {
      setDownloadingId(null);
    }
  };

  const displayError = localError || error;

  return (
    <div className="job-apps">
      <div className="job-apps-toolbar">
        <div className="job-apps-stats">
          <div className="job-apps-stat">
            <span className="job-apps-stat-value">{stats.total}</span>
            <span className="job-apps-stat-label">Total</span>
          </div>
          <div className="job-apps-stat new">
            <span className="job-apps-stat-value">{stats.unread}</span>
            <span className="job-apps-stat-label">New</span>
          </div>
          <div className="job-apps-stat seen">
            <span className="job-apps-stat-value">{stats.seen}</span>
            <span className="job-apps-stat-label">Seen</span>
          </div>
          <div className="job-apps-stat resume">
            <span className="job-apps-stat-value">{stats.withResume}</span>
            <span className="job-apps-stat-label">Resumes</span>
          </div>
        </div>

        <div className="job-apps-filters">
          {[
            { key: 'all', label: 'All' },
            { key: 'new', label: 'New' },
            { key: 'seen', label: 'Seen' },
          ].map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`job-apps-filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
              {key === 'new' && stats.unread > 0 && (
                <span className="job-apps-filter-count">{stats.unread}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {displayError && (
        <Alert variant="danger" className="job-apps-alert">{displayError}</Alert>
      )}

      <div className="job-apps-table-card">
        {loading ? (
          <div className="dashboard-loading">
            <Spinner animation="border" role="status" />
          </div>
        ) : applications.length === 0 ? (
          <div className="job-apps-empty">
            <span className="job-apps-empty-icon">
              <FileText size={32} strokeWidth={1.5} />
            </span>
            <h4>No applications yet</h4>
            <p>When candidates apply from the career page, their applications will appear here.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="job-apps-empty">
            <span className="job-apps-empty-icon">
              <Briefcase size={32} strokeWidth={1.5} />
            </span>
            <h4>No {filter} applications</h4>
            <p>Try switching the filter to see other applications.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="job-apps-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Contact</th>
                  <th>Applied</th>
                  <th className="text-end">Resume</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className={!item.is_read ? 'job-apps-row-new' : ''}>
                    <td>
                      <div className="job-apps-applicant">
                        <span className="job-apps-avatar">
                          {(item.name || 'A').charAt(0).toUpperCase()}
                        </span>
                        <div className="job-apps-applicant-info">
                          <strong>{item.name}</strong>
                          {item.resume_name && (
                            <span className="job-apps-resume-name">
                              <FileText size={12} strokeWidth={2} />
                              {item.resume_name}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="job-apps-position">
                        <Briefcase size={13} strokeWidth={2} />
                        <span>{item.job_title}</span>
                      </div>
                    </td>
                    <td>
                      <div className="job-apps-contact">
                        <a href={`mailto:${item.email}`} className="job-apps-contact-link">
                          <Mail size={13} strokeWidth={2} />
                          {item.email}
                        </a>
                        {item.phone && (
                          <a href={`tel:${item.phone}`} className="job-apps-contact-link muted">
                            <Phone size={13} strokeWidth={2} />
                            {item.phone}
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <span className="job-apps-date" title={formatDate(item.created_at)}>
                        <Calendar size={13} strokeWidth={2} />
                        {formatShortDate(item.created_at)}
                      </span>
                    </td>
                    <td>
                      <div className="job-apps-resume-cell">
                        <button
                          type="button"
                          className="job-apps-download-btn"
                          onClick={() => handleDownload(item)}
                          disabled={downloadingId === item.id || !item.resume_path}
                          title="Download resume"
                        >
                          <Download size={15} strokeWidth={2} />
                          {downloadingId === item.id ? 'Opening...' : 'Download'}
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

export default JobApplications;
