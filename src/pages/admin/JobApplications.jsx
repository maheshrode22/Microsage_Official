import React, { useMemo, useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Calendar,
  Download,
  FileText,
  Mail,
  Phone,
  RotateCcw,
  Trash2,
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

const toLocalDateKey = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const isToday = (value) => toLocalDateKey(value) === toLocalDateKey(new Date());

const JobApplications = ({
  applications = [],
  deletedApplications = [],
  loading = false,
  error = '',
  onResumeDownload,
  onSoftDelete,
  onRestore,
  onToggleMarked,
}) => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [actionId, setActionId] = useState(null);
  const [localError, setLocalError] = useState('');
  const [localSuccess, setLocalSuccess] = useState('');
  const [filter, setFilter] = useState('all');
  const [titleFilter, setTitleFilter] = useState('all');

  const activeApplications = useMemo(
    () => applications.filter((a) => !a.deleted_at),
    [applications]
  );

  const todayApplications = useMemo(
    () => activeApplications.filter((a) => isToday(a.created_at)),
    [activeApplications]
  );

  const stats = useMemo(() => {
    const withResume = activeApplications.filter((a) => a.resume_path).length;
    const marked = activeApplications.filter((a) => a.is_marked).length;
    return {
      total: activeApplications.length,
      today: todayApplications.length,
      withResume,
      marked,
      deleted: deletedApplications.length,
    };
  }, [activeApplications, deletedApplications, todayApplications]);

  const sourceList = filter === 'deleted' ? deletedApplications : activeApplications;

  const jobTitles = useMemo(
    () =>
      [...new Set(sourceList.map((a) => a.job_title).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [sourceList]
  );

  const filtered = useMemo(() => {
    let list = sourceList;
    if (filter === 'new') list = list.filter((a) => isToday(a.created_at));
    if (filter === 'marked') list = list.filter((a) => a.is_marked);
    if (titleFilter !== 'all') list = list.filter((a) => a.job_title === titleFilter);

    // Marked applications stay on top within the current list
    return [...list].sort((a, b) => {
      if (filter === 'deleted') return 0;
      if (!!b.is_marked !== !!a.is_marked) return b.is_marked ? 1 : -1;
      return 0;
    });
  }, [sourceList, filter, titleFilter]);

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

  const handleSoftDelete = async (application) => {
    if (!onSoftDelete) return;
    if (!window.confirm(`Move application from ${application.name} to Deleted? You can restore it later.`)) {
      return;
    }
    setActionId(application.id);
    setLocalError('');
    setLocalSuccess('');
    try {
      await onSoftDelete(application);
      setLocalSuccess('Application moved to Deleted.');
      if (filter === 'deleted') setFilter('all');
    } catch (err) {
      setLocalError(err.message || 'Failed to delete application.');
    } finally {
      setActionId(null);
    }
  };

  const handleRestore = async (application) => {
    if (!onRestore) return;
    setActionId(application.id);
    setLocalError('');
    setLocalSuccess('');
    try {
      await onRestore(application);
      setLocalSuccess('Application restored.');
    } catch (err) {
      setLocalError(err.message || 'Failed to restore application.');
    } finally {
      setActionId(null);
    }
  };

  const handleToggleMarked = async (application) => {
    if (!onToggleMarked) return;
    setActionId(application.id);
    setLocalError('');
    setLocalSuccess('');
    try {
      await onToggleMarked(application);
      setLocalSuccess(
        application.is_marked ? 'Removed from Marked.' : 'Application marked and kept aside.'
      );
    } catch (err) {
      setLocalError(err.message || 'Failed to update marked status.');
    } finally {
      setActionId(null);
    }
  };

  const displayError = localError || error;
  const emptyFilterLabel =
    titleFilter !== 'all'
      ? titleFilter
      : filter === 'all'
        ? 'matching'
        : filter;

  const getRowClassName = (item) => {
    if (filter === 'deleted') return 'job-apps-row-deleted';
    if (item.is_marked) return 'job-apps-row-marked';
    if (!item.is_read) return 'job-apps-row-new';
    return '';
  };

  return (
    <div className="job-apps">
      <div className="job-apps-toolbar">
        <div className="job-apps-stats">
          <div className="job-apps-stat">
            <span className="job-apps-stat-value">{stats.total}</span>
            <span className="job-apps-stat-label">Total</span>
          </div>
          <div className="job-apps-stat new">
            <span className="job-apps-stat-value">{stats.today}</span>
            <span className="job-apps-stat-label">Today</span>
          </div>
          <div className="job-apps-stat marked">
            <span className="job-apps-stat-value">{stats.marked}</span>
            <span className="job-apps-stat-label">Marked</span>
          </div>
          <div className="job-apps-stat resume">
            <span className="job-apps-stat-value">{stats.withResume}</span>
            <span className="job-apps-stat-label">Resumes</span>
          </div>
          <div className="job-apps-stat deleted">
            <span className="job-apps-stat-value">{stats.deleted}</span>
            <span className="job-apps-stat-label">Deleted</span>
          </div>
        </div>

        <div className="job-apps-toolbar-actions">
          {jobTitles.length > 0 && (
            <Form.Group className="job-apps-title-filter mb-0">
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

          <div className="job-apps-filters">
            {[
              { key: 'all', label: 'All' },
              { key: 'new', label: 'Today' },
              { key: 'marked', label: 'Marked' },
              { key: 'deleted', label: 'Deleted' },
            ].map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`job-apps-filter-btn ${filter === key ? 'active' : ''}`}
                onClick={() => {
                  setFilter(key);
                  setTitleFilter('all');
                }}
              >
                {label}
                {key === 'new' && stats.today > 0 && (
                  <span className="job-apps-filter-count">{stats.today}</span>
                )}
                {key === 'marked' && stats.marked > 0 && (
                  <span className="job-apps-filter-count marked">{stats.marked}</span>
                )}
                {key === 'deleted' && stats.deleted > 0 && (
                  <span className="job-apps-filter-count muted">{stats.deleted}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {displayError && (
        <Alert variant="danger" className="job-apps-alert">{displayError}</Alert>
      )}
      {localSuccess && (
        <Alert
          variant="success"
          className="job-apps-alert"
          onClose={() => setLocalSuccess('')}
          dismissible
        >
          {localSuccess}
        </Alert>
      )}

      <div className="job-apps-table-card">
        {loading ? (
          <div className="dashboard-loading">
            <Spinner animation="border" role="status" />
          </div>
        ) : sourceList.length === 0 ? (
          <div className="job-apps-empty">
            <span className="job-apps-empty-icon">
              {filter === 'deleted' ? (
                <Trash2 size={32} strokeWidth={1.5} />
              ) : (
                <FileText size={32} strokeWidth={1.5} />
              )}
            </span>
            <h4>{filter === 'deleted' ? 'No deleted applications' : 'No applications yet'}</h4>
            <p>
              {filter === 'deleted'
                ? 'Soft-deleted applications will appear here so you can restore them.'
                : 'When candidates apply from the career page, their applications will appear here.'}
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="job-apps-empty">
            <span className="job-apps-empty-icon">
              {filter === 'marked' ? (
                <Bookmark size={32} strokeWidth={1.5} />
              ) : (
                <Briefcase size={32} strokeWidth={1.5} />
              )}
            </span>
            <h4>
              {filter === 'marked'
                ? 'No marked applications'
                : `No ${emptyFilterLabel} applications`}
            </h4>
            <p>
              {filter === 'marked'
                ? 'Use the Mark button on any application to keep it aside for later.'
                : 'Try switching the Job Title or status filter to see other applications.'}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="job-apps-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Contact</th>
                  <th>{filter === 'deleted' ? 'Deleted' : 'Applied'}</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className={getRowClassName(item)}>
                    <td>
                      <div className="job-apps-applicant">
                        <span className={`job-apps-avatar ${item.is_marked ? 'marked' : ''}`}>
                          {(item.name || 'A').charAt(0).toUpperCase()}
                        </span>
                        <div className="job-apps-applicant-info">
                          <strong>
                            {item.name}
                            {item.is_marked && (
                              <span className="job-apps-marked-badge">Marked</span>
                            )}
                          </strong>
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
                      <span
                        className="job-apps-date"
                        title={formatDate(filter === 'deleted' ? item.deleted_at : item.created_at)}
                      >
                        <Calendar size={13} strokeWidth={2} />
                        {formatShortDate(filter === 'deleted' ? item.deleted_at : item.created_at)}
                      </span>
                    </td>
                    <td>
                      <div className="job-apps-actions-cell">
                        {filter !== 'deleted' && (
                          <button
                            type="button"
                            className={`job-apps-mark-btn ${item.is_marked ? 'active' : ''}`}
                            onClick={() => handleToggleMarked(item)}
                            disabled={actionId === item.id}
                            title={item.is_marked ? 'Remove mark' : 'Mark and keep aside'}
                          >
                            {item.is_marked ? (
                              <BookmarkCheck size={15} strokeWidth={2} />
                            ) : (
                              <Bookmark size={15} strokeWidth={2} />
                            )}
                            {item.is_marked ? 'Marked' : 'Mark'}
                          </button>
                        )}
                        <button
                          type="button"
                          className="job-apps-download-btn"
                          onClick={() => handleDownload(item)}
                          disabled={downloadingId === item.id || !item.resume_path}
                          title="Download resume"
                        >
                          <Download size={15} strokeWidth={2} />
                          {downloadingId === item.id ? 'Opening...' : 'Resume'}
                        </button>
                        {filter === 'deleted' ? (
                          <button
                            type="button"
                            className="job-apps-restore-btn"
                            onClick={() => handleRestore(item)}
                            disabled={actionId === item.id}
                            title="Restore application"
                          >
                            <RotateCcw size={15} strokeWidth={2} />
                            {actionId === item.id ? 'Restoring...' : 'Restore'}
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="job-apps-delete-btn"
                            onClick={() => handleSoftDelete(item)}
                            disabled={actionId === item.id}
                            title="Soft delete application"
                          >
                            <Trash2 size={15} strokeWidth={2} />
                            {actionId === item.id ? 'Deleting...' : 'Delete'}
                          </button>
                        )}
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
