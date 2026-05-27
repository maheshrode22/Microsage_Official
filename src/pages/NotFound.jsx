import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <div style={{ fontSize: '8rem', lineHeight: 1, marginBottom: '1rem' }}>404</div>
            <h2 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>
              Page Not Found
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Oops! The page you're looking for doesn't exist or may have been moved.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button className="btn-primary-custom" onClick={() => navigate('/')}>
                Go to Home
              </Button>
              <Button variant="outline-primary" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
