import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  BriefcaseBusiness,
  LayoutDashboard,
  Mail,
  Menu,
} from 'lucide-react';
import Logo from './Logo';
import '../../styles/components/AdminLayout.css';

const SIDEBAR_ITEMS = [
  { key: 'overview', label: 'Dashboard', Icon: LayoutDashboard },
  { key: 'contact', label: 'Contact Us', Icon: Mail },
  { key: 'jobs', label: 'Job Applications', Icon: Briefcase },
  { key: 'manage-jobs', label: 'Manage Jobs', Icon: BriefcaseBusiness },
];

const PAGE_META = {
  overview: {
    title: 'Dashboard',
    subtitle: 'Overview of all website submissions',
  },
  contact: {
    title: 'Contact Submissions',
    subtitle: 'Messages received from the contact form',
  },
  jobs: {
    title: 'Job Applications',
    subtitle: 'Applications submitted from career pages',
  },
  'manage-jobs': {
    title: 'Manage Jobs',
    subtitle: 'Create, edit, and publish career page job postings',
  },
};

const AdminLayout = ({
  activeTab,
  onTabChange,
  userEmail,
  onLogout,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { title, subtitle } = PAGE_META[activeTab] || PAGE_META.overview;

  const handleTabChange = (key) => {
    onTabChange(key);
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="admin-layout">
      <div
        className={`admin-sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-brand">
          <Logo height={36} text="MICROSAGE" variant="light" />
          <span className="admin-sidebar-badge">Admin Panel</span>
        </div>

        <nav className="admin-sidebar-nav">
          <p className="admin-sidebar-label">Menu</p>
          {SIDEBAR_ITEMS.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              className={`admin-sidebar-link ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTabChange(key)}
            >
              <span className="admin-sidebar-icon">
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="admin-sidebar-text">{label}</span>
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-sidebar-footer-link" onClick={() => setSidebarOpen(false)}>
            <ArrowLeft size={16} strokeWidth={2} />
            Back to Website
          </Link>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              type="button"
              className="admin-menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={2} />
            </button>
            <div>
              <h1 className="admin-topbar-title">{title}</h1>
              <p className="admin-topbar-subtitle">{subtitle}</p>
            </div>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-user-chip">
              <span className="admin-user-avatar">
                {(userEmail || 'A').charAt(0).toUpperCase()}
              </span>
              <span className="admin-user-email">{userEmail}</span>
            </div>
            <button type="button" className="admin-logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        </header>

        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
