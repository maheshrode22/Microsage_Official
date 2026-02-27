import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './LearningTracks.css';

const tracks = [
  {
    title: 'GATE Core Mastery',
    duration: '12 weeks · 120+ hrs',
    outcomes: ['Concept mastery', '2000+ practice Qs', '5 mock tests'],
    tags: ['GATE', 'Core CS/IT', 'Mock Tests'],
  },
  {
    title: 'Placement Readiness',
    duration: '8 weeks · 80+ hrs',
    outcomes: ['DSA drills', 'Aptitude + Verbal', 'Interview prep'],
    tags: ['DSA', 'Aptitude', 'Interview'],
  },
  {
    title: 'AI & Data Foundations',
    duration: '6 weeks · 60+ hrs',
    outcomes: ['Python + ML basics', 'Mini projects', 'Model evaluation'],
    tags: ['AI/ML', 'Python', 'Projects'],
  },
  {
    title: 'Soft Skills & Career',
    duration: '4 weeks · 30+ hrs',
    outcomes: ['Resume + ATS check', 'GD + PI practice', 'Career coaching'],
    tags: ['Communication', 'Resume', 'Interviews'],
  },
];

const LearningTracks = () => (
  <section className="learning-tracks section-padding" id="tracks">
    <Container>
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Learning Tracks</h2>
          <p className="section-subtitle">
            Outcome-focused pathways combining guided learning, practice, and assessments for students and job seekers.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {tracks.map((track, idx) => (
          <Col lg={3} md={6} className="mb-4" key={idx}>
            <Card className="card-custom track-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <h4 className="track-title">{track.title}</h4>
                <p className="track-duration">{track.duration}</p>
                <ul className="track-outcomes">
                  {track.outcomes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="track-tags">
                  {track.tags.map((tag, i) => (
                    <Badge key={i} bg="light" text="dark" className="track-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default LearningTracks;

