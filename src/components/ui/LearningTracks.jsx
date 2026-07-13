import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  Brain,
  Check,
  Code2,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';
import '../../styles/components/LearningTracks.css';

const tracks = [
  {
    Icon: GraduationCap,
    title: 'GATE Core Mastery',
    duration: '12 weeks · 120+ hrs',
    outcomes: ['Concept mastery', '2000+ practice Qs', '5 mock tests'],
    tags: ['GATE', 'Core CS/IT', 'Mock Tests'],
  },
  {
    Icon: Code2,
    title: 'Placement Readiness',
    duration: '8 weeks · 80+ hrs',
    outcomes: ['DSA drills', 'Aptitude + Verbal', 'Interview prep'],
    tags: ['DSA', 'Aptitude', 'Interview'],
  },
  {
    Icon: Brain,
    title: 'AI & Data Foundations',
    duration: '6 weeks · 60+ hrs',
    outcomes: ['Python + ML basics', 'Mini projects', 'Model evaluation'],
    tags: ['AI/ML', 'Python', 'Projects'],
  },
  {
    Icon: MessageSquare,
    title: 'Soft Skills & Career',
    duration: '4 weeks · 30+ hrs',
    outcomes: ['Resume + ATS check', 'GD + PI practice', 'Career coaching'],
    tags: ['Communication', 'Resume', 'Interviews'],
  },
];

const LearningTracks = () => (
  <section className="learning-tracks section-padding" id="tracks">
    <Container fluid className="px-4 px-lg-5">
      <Row>
        <Col lg={12}>
          <h2 className="section-title">Learning Tracks</h2>
          <p className="section-subtitle">
            Outcome-focused pathways combining guided learning, practice, and assessments for students and job seekers.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {tracks.map((track) => (
          <Col lg={3} md={6} className="mb-4" key={track.title}>
            <Card className="card-custom track-card h-100">
              <Card.Body className="p-4 d-flex flex-column">
                <div className="track-icon-wrap">
                  <track.Icon size={22} strokeWidth={2} />
                </div>
                <h4 className="track-title">{track.title}</h4>
                <p className="track-duration">{track.duration}</p>
                <ul className="track-outcomes">
                  {track.outcomes.map((item) => (
                    <li key={item}>
                      <Check size={14} strokeWidth={2.5} className="track-check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="track-tags">
                  {track.tags.map((tag) => (
                    <Badge key={tag} bg="light" text="dark" className="track-badge">
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
