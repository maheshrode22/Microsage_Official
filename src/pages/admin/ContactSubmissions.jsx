import React, { useMemo, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Mail,
  MessageSquare,
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

const ContactSubmissions = ({ submissions = [], loading = false, error = '' }) => {
  const [expandedId, setExpandedId] = useState(null);

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

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
                  <th className="text-end" />
                </tr>
              </thead>
              <tbody>
                {submissions.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <tr className={isExpanded ? 'contact-subs-row-expanded' : ''}>
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
                          <p className={`contact-subs-message ${isExpanded ? 'expanded' : ''}`}>
                            {item.message}
                          </p>
                        </td>
                        <td>
                          <span className="contact-subs-date" title={formatDate(item.created_at)}>
                            <Calendar size={13} strokeWidth={2} />
                            {formatShortDate(item.created_at)}
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="contact-subs-expand-btn"
                            onClick={() => toggleExpand(item.id)}
                            title={isExpanded ? 'Collapse' : 'Expand message'}
                          >
                            {isExpanded ? (
                              <ChevronUp size={16} strokeWidth={2} />
                            ) : (
                              <ChevronDown size={16} strokeWidth={2} />
                            )}
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSubmissions;
