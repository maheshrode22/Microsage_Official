import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useAuth } from '../../context/AuthContext';
import '../../styles/components/AdminLayout.css';
import '../../styles/components/Dashboard.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-brand">
            <Skeleton width={120} height={32} />
          </div>
          <div className="p-3">
            <Skeleton count={4} height={40} className="mb-2" />
          </div>
        </aside>
        <div className="admin-main">
          <header className="admin-topbar">
            <div className="admin-topbar-left">
              <div>
                <Skeleton width={150} height={24} className="mb-1" />
                <Skeleton width={220} height={14} />
              </div>
            </div>
            <div className="admin-topbar-right d-flex align-items-center gap-2">
              <Skeleton circle width={32} height={32} />
              <Skeleton width={70} height={32} borderRadius={6} />
            </div>
          </header>
          <main className="admin-content">
            <div className="dashboard-stats">
              {[1, 2, 3].map((i) => (
                <div key={i} className="dashboard-stat-card">
                  <Skeleton circle width={44} height={44} />
                  <div style={{ flex: 1 }}>
                    <Skeleton width={100} height={14} className="mb-1" />
                    <Skeleton width={50} height={24} />
                  </div>
                </div>
              ))}
            </div>
            <div className="dashboard-recent-grid mt-4">
              {[1, 2].map((i) => (
                <div key={i} className="dashboard-card">
                  <Skeleton width={180} height={20} className="mb-3" />
                  <Skeleton count={3} height={14} className="mb-2" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
