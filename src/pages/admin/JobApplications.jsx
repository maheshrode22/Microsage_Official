import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import {
  Bookmark,
  BookmarkCheck,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  Download,
  FileText,
  Mail,
  Pencil,
  Phone,
  Plus,
  RotateCcw,
  Trash2,
  X,
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
  onUpdateNotes,
}) => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [actionId, setActionId] = useState(null);
  const [localError, setLocalError] = useState('');
  const [localSuccess, setLocalSuccess] = useState('');
  const [filter, setFilter] = useState('all');
  const [titleFilter, setTitleFilter] = useState('all');

  // Actions dropdown state
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  // Notes modal state
  const [noteModalApplicant, setNoteModalApplicant] = useState(null);
  const [noteModalEditing, setNoteModalEditing] = useState(false);
  const [noteDraft, setNoteDraft] = useState('');
  const [savingNoteId, setSavingNoteId] = useState(null);

  // Close dropdown on click outside
  useEffect(() => {
    if (!openDropdownId) return undefined;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  // Handle ESC key for note modal
  useEffect(() => {
    if (!noteModalApplicant) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNoteModalApplicant(null);
        setNoteModalEditing(false);
        setNoteDraft('');
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [noteModalApplicant]);

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
    if (
      !window.confirm(
        `Move application from ${application.name} to Deleted? You can restore it later.`
      )
    ) {
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
        application.is_marked
          ? 'Removed from Marked.'
          : 'Application marked and kept aside.'
      );
    } catch (err) {
      setLocalError(err.message || 'Failed to update marked status.');
    } finally {
      setActionId(null);
    }
  };

  const handleOpenNoteModal = (application, startInEdit = false) => {
    setNoteModalApplicant(application);
    setNoteDraft(application.notes || '');
    setNoteModalEditing(startInEdit || !application.notes);
  };

  const handleCloseNoteModal = () => {
    setNoteModalApplicant(null);
    setNoteModalEditing(false);
    setNoteDraft('');
  };

  const handleSaveNote = async () => {
    if (!onUpdateNotes || !noteModalApplicant) return;
    setSavingNoteId(noteModalApplicant.id);
    setLocalError('');
    try {
      await onUpdateNotes(noteModalApplicant.id, noteDraft);
      setNoteModalEditing(false);
      setLocalSuccess('Note saved successfully.');
      // Update the local reference so the modal shows fresh content
      setNoteModalApplicant((prev) => prev ? { ...prev, notes: noteDraft } : null);
    } catch (err) {
      setLocalError(err.message || 'Failed to save note.');
    } finally {
      setSavingNoteId(null);
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
                ? 'Use the Mark option on any application to keep it aside for later.'
                : 'Try switching the Job Title or status filter to see other applications.'}
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="job-apps-table">
              <thead>
                <tr>
                  <th className="job-apps-th-applicant">Applicant</th>
                  <th className="job-apps-th-position">Position</th>
                  <th className="job-apps-th-contact">Contact</th>
                  <th className="job-apps-th-applied">{filter === 'deleted' ? 'Deleted' : 'Applied'}</th>
                  <th className="job-apps-th-notes">Notes</th>
                  <th className="job-apps-th-actions text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id} className={getRowClassName(item)}>
                    <td className="job-apps-td-applicant">
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
                    <td className="job-apps-td-position">
                      <div className="job-apps-position">
                        <Briefcase size={13} strokeWidth={2} />
                        <span>{item.job_title}</span>
                      </div>
                    </td>
                    <td className="job-apps-td-contact">
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
                    <td className="job-apps-td-applied">
                      <span
                        className="job-apps-date"
                        title={formatDate(filter === 'deleted' ? item.deleted_at : item.created_at)}
                      >
                        <Calendar size={13} strokeWidth={2} />
                        {formatShortDate(filter === 'deleted' ? item.deleted_at : item.created_at)}
                      </span>
                    </td>
                    <td className="job-apps-notes-cell">
                      {item.notes ? (
                        <button
                          type="button"
                          className="job-apps-note-preview-btn"
                          onClick={() => handleOpenNoteModal(item, false)}
                          title="Click to view/edit note"
                        >
                          <FileText size={13} strokeWidth={2} />
                          <span className="job-apps-note-preview-text">{item.notes}</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="job-apps-add-note-btn"
                          onClick={() => handleOpenNoteModal(item, true)}
                          title="Add candidate note"
                        >
                          <Plus size={13} strokeWidth={2} />
                          <span>Add Note</span>
                        </button>
                      )}
                    </td>
                    <td className="job-apps-td-actions">
                      <div className="job-apps-actions-cell">
                        <div
                          className="job-apps-dropdown"
                          ref={openDropdownId === item.id ? dropdownRef : null}
                        >
                          <button
                            type="button"
                            className={`job-apps-dropdown-toggle ${openDropdownId === item.id ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdownId(openDropdownId === item.id ? null : item.id);
                            }}
                            aria-expanded={openDropdownId === item.id}
                            title="Actions menu"
                          >
                            <span>Actions</span>
                            <ChevronDown
                              size={14}
                              strokeWidth={2}
                              className={`job-apps-dropdown-arrow ${openDropdownId === item.id ? 'open' : ''}`}
                            />
                          </button>

                          {openDropdownId === item.id && (
                            <div
                              className="job-apps-dropdown-menu"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {filter !== 'deleted' && (
                                <button
                                  type="button"
                                  className={`job-apps-dropdown-item ${item.is_marked ? 'active' : ''}`}
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    handleToggleMarked(item);
                                  }}
                                  disabled={actionId === item.id}
                                >
                                  {item.is_marked ? (
                                    <>
                                      <BookmarkCheck size={15} strokeWidth={2} className="marked" />
                                      <span>Marked</span>
                                    </>
                                  ) : (
                                    <>
                                      <Bookmark size={15} strokeWidth={2} />
                                      <span>Mark</span>
                                    </>
                                  )}
                                </button>
                              )}

                              <button
                                type="button"
                                className="job-apps-dropdown-item"
                                onClick={() => {
                                  setOpenDropdownId(null);
                                  handleDownload(item);
                                }}
                                disabled={downloadingId === item.id || !item.resume_path}
                              >
                                <Download size={15} strokeWidth={2} className="resume" />
                                <span>{downloadingId === item.id ? 'Opening...' : 'Resume'}</span>
                              </button>

                              <div className="job-apps-dropdown-divider" />

                              {filter === 'deleted' ? (
                                <button
                                  type="button"
                                  className="job-apps-dropdown-item restore"
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    handleRestore(item);
                                  }}
                                  disabled={actionId === item.id}
                                >
                                  <RotateCcw size={15} strokeWidth={2} className="restore" />
                                  <span>{actionId === item.id ? 'Restoring...' : 'Restore'}</span>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="job-apps-dropdown-item danger"
                                  onClick={() => {
                                    setOpenDropdownId(null);
                                    handleSoftDelete(item);
                                  }}
                                  disabled={actionId === item.id}
                                >
                                  <Trash2 size={15} strokeWidth={2} className="danger" />
                                  <span>{actionId === item.id ? 'Deleting...' : 'Delete'}</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Notes Popup Modal */}
      {noteModalApplicant && (
        <div
          className="contact-view-overlay"
          onClick={handleCloseNoteModal}
          role="presentation"
        >
          <div
            className="contact-view-modal job-apps-note-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="note-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-view-header">
              <div className="contact-view-header-main">
                <span className={`job-apps-avatar ${noteModalApplicant.is_marked ? 'marked' : ''}`}>
                  {(noteModalApplicant.name || 'A').charAt(0).toUpperCase()}
                </span>
                <div>
                  <h3 id="note-modal-title" className="contact-view-title">
                    {noteModalApplicant.name}
                  </h3>
                  <p className="contact-view-subtitle">{noteModalApplicant.job_title}</p>
                </div>
              </div>
              <button
                type="button"
                className="contact-view-close"
                onClick={handleCloseNoteModal}
                aria-label="Close"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="contact-view-body">
              <div className="job-apps-note-modal-content">
                <div className="job-apps-note-modal-label-row">
                  <span className="contact-view-label">Candidate Notes</span>
                  {!noteModalEditing && (
                    <button
                      type="button"
                      className="job-apps-note-action-btn edit"
                      onClick={() => {
                        setNoteDraft(noteModalApplicant.notes || '');
                        setNoteModalEditing(true);
                      }}
                      title="Edit note"
                    >
                      <Pencil size={12} strokeWidth={2} />
                      <span>Edit</span>
                    </button>
                  )}
                </div>

                {noteModalEditing ? (
                  <textarea
                    className="job-apps-note-modal-textarea"
                    placeholder="Add candidate notes (interview remarks, status, feedback)..."
                    value={noteDraft}
                    onChange={(e) => setNoteDraft(e.target.value)}
                    rows={5}
                    autoFocus
                  />
                ) : (
                  <div className="job-apps-note-modal-text">
                    {noteModalApplicant.notes || <span className="job-apps-note-empty">No notes added yet.</span>}
                  </div>
                )}
              </div>
            </div>

            <div className="contact-view-footer">
              {noteModalEditing ? (
                <>
                  <button
                    type="button"
                    className="contact-view-action primary"
                    onClick={handleSaveNote}
                    disabled={savingNoteId === noteModalApplicant.id}
                  >
                    <Check size={15} strokeWidth={2} />
                    {savingNoteId === noteModalApplicant.id ? 'Saving...' : 'Save Note'}
                  </button>
                  <button
                    type="button"
                    className="contact-view-action ghost"
                    onClick={() => {
                      setNoteModalEditing(false);
                      setNoteDraft(noteModalApplicant.notes || '');
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="contact-view-action ghost"
                  onClick={handleCloseNoteModal}
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplications;
