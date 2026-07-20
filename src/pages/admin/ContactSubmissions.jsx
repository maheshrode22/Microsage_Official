import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import {
  Calendar,
  Eye,
  Mail,
  MessageSquare,
  Phone,
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

const ContactSubmissions = ({ submissions = [], loading = false, error = '' }) => {
  const [selected, setSelected] = useState(null);

  const stats = useMemo(() => ({
    total: submissions.length,
    withPhone: submissions.filter((s) => s.phone?.trim()).length,
    thisWeek: submissions.filter((s) => {
      const d = new Date(s.created_at);
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return d >= weekAgo;
    }).length,
  }), [submissions]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <div className="contact-subs">
      <div className="contact-subs-toolbar">
        <div className="contact-subs-stats">
          <div className="contact-subs-stat">
            <span className="contact-subs-stat-value">{stats.total}</span>
            <span className="contact-subs-stat-label">Total</span>
          </div>
          <div className="contact-subs-stat week">
            <span className="contact-subs-stat-value">{stats.thisWeek}</span>
            <span className="contact-subs-stat-label">This Week</span>
          </div>
          <div className="contact-subs-stat phone">
            <span className="contact-subs-stat-value">{stats.withPhone}</span>
            <span className="contact-subs-stat-label">With Phone</span>
          </div>
        </div>
      </div>

      {error && <Alert variant="danger" className="contact-subs-alert">{error}</Alert>}

      <div className="contact-subs-table-card">
        {loading ? (
          <div className="dashboard-loading">
            <Spinner animation="border" role="status" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="contact-subs-empty">
            <span className="contact-subs-empty-icon">
              <MessageSquare size={32} strokeWidth={1.5} />
            </span>
            <h4>No messages yet</h4>
            <p>When visitors submit the contact form, their messages will appear here.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="contact-subs-table">
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Contact</th>
                  <th>Message</th>
                  <th>Received</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="contact-subs-sender">
                        <span className="contact-subs-avatar">
                          {(item.name || 'A').charAt(0).toUpperCase()}
                        </span>
                        <strong>{item.name}</strong>
                      </div>
                    </td>
                    <td>
                      <div className="contact-subs-contact">
                        <a href={`mailto:${item.email}`} className="contact-subs-link">
                          <Mail size={13} strokeWidth={2} />
                          {item.email}
                        </a>
                        {item.phone ? (
                          <a href={`tel:${item.phone}`} className="contact-subs-link muted">
                            <Phone size={13} strokeWidth={2} />
                            {item.phone}
                          </a>
                        ) : (
                          <span className="contact-subs-no-phone">No phone</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <p className="contact-subs-message">{item.message}</p>
                    </td>
                    <td>
                      <span className="contact-subs-date" title={formatDate(item.created_at)}>
                        <Calendar size={13} strokeWidth={2} />
                        {formatShortDate(item.created_at)}
                      </span>
                    </td>
                    <td>
                      <div className="contact-subs-actions">
                        <button
                          type="button"
                          className="contact-subs-view-btn"
                          onClick={() => setSelected(item)}
                        >
                          <Eye size={15} strokeWidth={2} />
                          View
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

      {selected && (
        <div
          className="contact-view-overlay"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="contact-view-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-view-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="contact-view-header">
              <div className="contact-view-header-main">
                <span className="contact-view-avatar">
                  {(selected.name || 'A').charAt(0).toUpperCase()}
                </span>
                <div>
                  <h3 id="contact-view-title" className="contact-view-title">
                    {selected.name}
                  </h3>
                  <p className="contact-view-subtitle">Contact form submission</p>
                </div>
              </div>
              <button
                type="button"
                className="contact-view-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            <div className="contact-view-body">
              <div className="contact-view-meta">
                <div className="contact-view-field">
                  <span className="contact-view-label">Email</span>
                  <a href={`mailto:${selected.email}`} className="contact-view-value link">
                    <Mail size={14} strokeWidth={2} />
                    {selected.email}
                  </a>
                </div>
                <div className="contact-view-field">
                  <span className="contact-view-label">Phone</span>
                  {selected.phone ? (
                    <a href={`tel:${selected.phone}`} className="contact-view-value link">
                      <Phone size={14} strokeWidth={2} />
                      {selected.phone}
                    </a>
                  ) : (
                    <span className="contact-view-value muted">Not provided</span>
                  )}
                </div>
                <div className="contact-view-field">
                  <span className="contact-view-label">Received</span>
                  <span className="contact-view-value">
                    <Calendar size={14} strokeWidth={2} />
                    {formatDate(selected.created_at)}
                  </span>
                </div>
              </div>

              <div className="contact-view-message-block">
                <span className="contact-view-label">Message</span>
                <div className="contact-view-message">{selected.message}</div>
              </div>
            </div>

            <div className="contact-view-footer">
              <a
                href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: Your message to Microsage`)}`}
                className="contact-view-action primary"
              >
                <Mail size={15} strokeWidth={2} />
                Reply by Email
              </a>
              {selected.phone && (
                <a href={`tel:${selected.phone}`} className="contact-view-action">
                  <Phone size={15} strokeWidth={2} />
                  Call
                </a>
              )}
              <button
                type="button"
                className="contact-view-action ghost"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
