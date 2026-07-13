import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Inbox, Mail } from 'lucide-react';
import AdminLayout from '../components/layout/AdminLayout';
import ContactSubmissions from './admin/ContactSubmissions';
import JobApplications from './admin/JobApplications';
import ManageJobs from './admin/ManageJobs';
import { useAuth } from '../context/AuthContext';
import {
  fetchContactSubmissions,
  fetchJobApplications,
  getResumeDownloadUrl,
  markJobApplicationsAsRead,
} from '../services/dashboardService';
import '../styles/components/Dashboard.css';

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

const Dashboard = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const [activeTab, setActiveTab] = useState('overview');
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const unreadJobCount = jobApplications.filter((job) => !job.is_read).length;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError('');

      try {
        const [contacts, jobs] = await Promise.all([
          fetchContactSubmissions(),
          fetchJobApplications(),
        ]);
        setContactSubmissions(contacts);
        setJobApplications(jobs);
      } catch (err) {
        setError(err.message || 'Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (activeTab !== 'jobs' || loading) return;

    const unreadIds = jobApplications.filter((job) => !job.is_read).map((job) => job.id);
    if (!unreadIds.length) return;

    const markSeen = async () => {
      try {
        await markJobApplicationsAsRead(unreadIds);
        setJobApplications((prev) =>
          prev.map((job) => (unreadIds.includes(job.id) ? { ...job, is_read: true } : job))
        );
      } catch (err) {
        setError(err.message || 'Failed to mark applications as seen.');
      }
    };

    markSeen();
  }, [activeTab, loading, jobApplications]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to sign out.');
    }
  };

  const handleResumeDownload = async (application) => {
    const signedUrl = await getResumeDownloadUrl(application.resume_path);
    window.open(signedUrl, '_blank', 'noopener,noreferrer');
  };

  const renderOverview = () => {
    if (loading) {
      return (
        <div className="dashboard-loading">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    const total = contactSubmissions.length + jobApplications.length;
    const latestContact = contactSubmissions[0];
    const latestJob = jobApplications[0];

    return (
      <>
        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              <Inbox size={22} strokeWidth={2} />
            </span>
            <div>
              <p className="dashboard-stat-label">Total Submissions</p>
              <h3 className="dashboard-stat-value">{total}</h3>
            </div>
          </div>
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              <Mail size={22} strokeWidth={2} />
            </span>
            <div>
              <p className="dashboard-stat-label">Contact Messages</p>
              <h3 className="dashboard-stat-value">{contactSubmissions.length}</h3>
            </div>
          </div>
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-icon">
              <Briefcase size={22} strokeWidth={2} />
            </span>
            <div>
              <p className="dashboard-stat-label">Job Applications</p>
              <h3 className="dashboard-stat-value">{jobApplications.length}</h3>
              {unreadJobCount > 0 && (
                <p className="dashboard-stat-new">{unreadJobCount} new</p>
              )}
            </div>
          </div>
        </div>

        <div className="dashboard-quick-actions">
          <button type="button" className="dashboard-action-card" onClick={() => setActiveTab('contact')}>
            <span>View Contact Messages</span>
            <strong>{contactSubmissions.length} entries</strong>
          </button>
          <button type="button" className="dashboard-action-card" onClick={() => setActiveTab('jobs')}>
            <span>View Job Applications</span>
            <strong>
              {jobApplications.length} entries
              {unreadJobCount > 0 ? ` · ${unreadJobCount} new` : ''}
            </strong>
          </button>
        </div>

        <div className="dashboard-recent-grid">
          <div className="dashboard-card">
            <h4 className="dashboard-card-title">Latest Contact Message</h4>
            {latestContact ? (
              <div className="dashboard-recent-item">
                <p><strong>{latestContact.name}</strong> — {latestContact.email}</p>
                <p className="dashboard-recent-message">{latestContact.message}</p>
                <span className="dashboard-recent-date">{formatDate(latestContact.created_at)}</span>
              </div>
            ) : (
              <p className="dashboard-empty-inline">No contact messages yet.</p>
            )}
          </div>
          <div className="dashboard-card">
            <h4 className="dashboard-card-title">Latest Job Application</h4>
            {latestJob ? (
              <div className="dashboard-recent-item">
                <p>
                  <strong>{latestJob.name}</strong> — {latestJob.job_title}
                  {!latestJob.is_read && <span className="dashboard-new-badge">New</span>}
                </p>
                <p className="dashboard-recent-message">{latestJob.email} · {latestJob.phone}</p>
                <span className="dashboard-recent-date">{formatDate(latestJob.created_at)}</span>
              </div>
            ) : (
              <p className="dashboard-empty-inline">No job applications yet.</p>
            )}
          </div>
        </div>
      </>
    );
  };

  const renderContent = () => {
    if (activeTab === 'overview') return renderOverview();
    if (activeTab === 'contact') {
      return (
        <ContactSubmissions
          submissions={contactSubmissions}
          loading={loading}
        />
      );
    }
    if (activeTab === 'manage-jobs') {
      return <ManageJobs />;
    }
    if (activeTab === 'jobs') {
      return (
        <JobApplications
          applications={jobApplications}
          loading={loading}
          onResumeDownload={handleResumeDownload}
        />
      );
    }
    return null;
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      userEmail={user?.email}
      onLogout={handleLogout}
    >
      {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
      {renderContent()}
    </AdminLayout>
  );
};

export default Dashboard;
