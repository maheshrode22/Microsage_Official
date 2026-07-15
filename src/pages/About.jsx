import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about-section pt-5 pb-4">
      <Container fluid className="px-4 px-lg-5">
        {/* Visionary Leader Hero Section */}
        <Row className="align-items-center mb-5 pb-4 border-bottom">
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
            <h5 className="text-warning fw-bold mb-3">About Us</h5>
            <h1 className="display-5 fw-bold mb-4 about-hero-title">
              Meet Our Visionary Leader &ndash; <br />
              <span className="highlight-text">Mallikarjun Borigidde, CEO of Microsage</span>
            </h1>
            <div className="about-hero-text text-muted">
              <p>
                At the heart of Microsage is Mallikarjun Borigidde, a dynamic leader driven by the belief that
                technology can redefine education for everyone. With a sharp entrepreneurial spirit and a
                passion for innovation, Mallikarjun envisioned GATEtutor as India's premier AI-powered learning and employability system&mdash;connecting students, academia, and industry in one seamless platform.
              </p>
              <p>
                Under his leadership, Microsage has grown from a bold idea into a trailblazing platform
                empowering education through technology.
              </p>
              <p>
                Mallikarjun's forward-thinking approach gave birth to GATEtutor, the revolutionary system that has
                transformed how institutions and students interact with career opportunities. His unwavering
                commitment to creativity, adaptability, and excellence ensures that Microsage never
                stops evolving&mdash;always staying ahead of the curve.
              </p>
              <p>
                Mallikarjun's mission is clear: to remove barriers, inspire innovation, and make top-notch edu-tech
                solutions accessible to everyone. His vision continues to steer Microsage toward
                becoming not just an educational tool, but a movement shaping the future of learning and employability in India.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="founder-hero-image-wrapper shadow-lg rounded-4 overflow-hidden">
              <img
                src={require('../assets/founder-photo.jpg')}
                alt="Mallikarjun Borigidde"
                className="w-100 h-100 object-fit-cover founder-hero-image"
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <div className="about-icon-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team Collaboration"
                  className="about-image"
                />


              </div>
              <h3 className="about-heading text-primary">Our Mission</h3>
              <p>
                Our mission is to democratize quality education and make employability intelligence
                accessible to every student across India, regardless of their background or geography.
                We believe in empowering the next generation of engineers and professionals with the
                tools they need to succeed in today's competitive world.
              </p>
              <p>
                At <strong>Microsage Private Limited</strong>, we combine innovation with purpose. Our flagship platform
                <strong> GATEtutor</strong> is India's first AI-powered learning and employability
                system designed to bridge the gap between academic preparation and real-world career readiness.
              </p>

              <h3 className="about-heading text-primary mt-5">Our Vision</h3>
              <p>
                We envision a future where every student has access to personalized, AI-driven
                learning experiences that prepare them not just for exams, but for real-world
                careers. Our vision is to build a common benchmark for employability that
                connects academia directly with industry requirements.
              </p>
            </div>
          </Col>
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <div className="about-icon-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop"
                  alt="Nation Building"
                  className="about-image"
                />
              </div>
              <h3 className="about-heading text-success">Building for the Nation</h3>
              <p>
                We are not just building software—we are building <strong>India's Employability Infrastructure</strong>.
                As a registered <strong>Startup India</strong> and <strong>MSME certified</strong> company,
                we are deeply committed to contributing to the nation's growth story.
              </p>
              <p>
                By addressing the massive skill gap in higher education, we are ensuring that India's youth
                are job-ready from day one. With a rapidly growing network of <strong>200+ institutions</strong> and
                <strong> 11+ lakh students</strong>, we are creating a systemic impact that elevates the standard of
                workforce intelligence nationwide.
              </p>
              <p>
                Our true success is measured not just in revenue, but in the millions of careers we shape,
                the institutions we empower, and the economic value we unlock for the nation.
              </p>
              <div className="about-badges mt-4">
                <span className="badge-custom">Startup India</span>
                <span className="badge-custom">MSME Certified</span>
                <span className="badge-custom">Nation First</span>
              </div>
            </div>
          </Col>
        </Row>
        {/* Removed redundant founder card */}
        <Row className="mt-4">
          <Col lg={12}>
            <div className="company-info">
              <Row>
                <Col md={4} className="mb-4">
                  <div className="info-card">
                    <h5>Company Details</h5>
                    <p><strong>CIN:</strong> U72200PN2022PTC213457</p>
                    <p><strong>Registration:</strong> 27 Dec 2022</p>
                    <p><strong>Status:</strong> Active</p>
                    <p><strong>Industry:</strong> Technology, Information and Internet</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="info-card">
                    <h5>Headquarters</h5>
                    <p>B-303, GARDENIA, TUPE NAGAR</p>
                    <p>SADE SATRA NALI PU</p>
                    <p>Hadapsar, Pune</p>
                    <p>Maharashtra, India - 411028</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="info-card">
                    <h5>Contact Information</h5>
                    <p><strong>Phone:</strong> <a href="tel:9960334040">9960334040</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@gatetutor.in">info@gatetutor.in</a></p>
                    <p><strong>Website:</strong> <a href="https://gatetutor.in" target="_blank" rel="noopener noreferrer">gatetutor.in</a></p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;


