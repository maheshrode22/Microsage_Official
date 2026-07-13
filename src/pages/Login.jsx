import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import Logo from '../components/layout/Logo';
import { useAuth } from '../context/AuthContext';
import '../styles/components/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, signIn } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [notRobot, setNotRobot] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, loading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!notRobot) {
      setError('Please confirm that you are not a robot.');
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn(formData.email, formData.password);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      setNotRobot(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading-screen">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-brand-panel">
        <div className="login-brand-content">
          <Logo height={44} variant="light" />
          <span className="login-brand-badge">Secure Admin Portal</span>
          <h1 className="login-brand-title">
            Manage your business submissions with confidence
          </h1>
          <p className="login-brand-text">
            Access contact enquiries and job applications from one professional
            dashboard built for Microsage Private Limited.
          </p>
          <ul className="login-brand-features">
            <li><Check size={15} strokeWidth={2.5} className="login-feature-icon" />Contact form submissions</li>
            <li><Check size={15} strokeWidth={2.5} className="login-feature-icon" />Career &amp; job applications</li>
            <li><Check size={15} strokeWidth={2.5} className="login-feature-icon" />Resume downloads</li>
          </ul>
        </div>
        <p className="login-brand-footer">
          &copy; {new Date().getFullYear()} Microsage Private Limited
        </p>
      </div>

      <div className="login-form-panel">
        <div className="login-form-wrapper">
          <div className="login-mobile-brand">
            <Link to="/" className="login-mobile-logo">
              <Logo height={36} />
            </Link>
          </div>

          <div className="login-form-header">
            <h2>Welcome back</h2>
            <p>Sign in to your admin account to continue</p>
          </div>

          {error && (
            <Alert variant="danger" className="login-alert">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group className="login-field">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your-admin@email.com"
                disabled={isSubmitting}
                className="login-input"
              />
            </Form.Group>

            <Form.Group className="login-field">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                disabled={isSubmitting}
                className="login-input"
              />
            </Form.Group>

            <div className="login-robot-check">
              <Form.Check
                type="checkbox"
                id="not-robot"
                label="I am not a robot"
                checked={notRobot}
                onChange={(e) => {
                  setNotRobot(e.target.checked);
                  if (error) {
                    setError('');
                  }
                }}
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              className="login-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </Form>

          <div className="login-form-footer">
            <Link to="/" className="login-back-link">
              &larr; Return to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
