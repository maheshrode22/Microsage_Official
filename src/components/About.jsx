import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <Container fluid className="px-4 px-lg-5">
        <Row>
          <Col lg={12}>
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              A forward-thinking technology company committed to transforming the landscape
              of education and talent development in India. We combine innovation with purpose
              to deliver impactful digital solutions that empower students, institutions, and corporates
              across the nation.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <div className="about-icon-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team Collaboration"
                  className="about-image"
                />


              </div>
              <h3 className="about-heading">Our Story</h3>
              <p>
                Microsage Private Limited is a forward-thinking technology company committed
                to transforming the landscape of education and talent development in India.
                Established in <strong>2022</strong> and headquartered in <strong>Pune, Maharashtra</strong>,
                we are a registered <strong>Startup India</strong> and <strong>MSME certified</strong>
                company dedicated to building impactful digital solutions for students, institutions, and corporates.
              </p>
              <p>
                At <strong>Microsage Private Limited</strong>, we combine innovation with purpose. Our flagship platform
                <strong> GATEtutor</strong> is India's first AI-powered learning and employability
                system designed to bridge the gap between academic preparation and real-world career readiness.
              </p>
              <p>
                Our mission is to democratize quality education and make employability intelligence
                accessible to every student, regardless of their background. We believe in empowering
                the next generation of engineers and professionals with the tools they need to succeed
                in today's competitive world.
              </p>
            </div>
          </Col>
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <div className="about-icon-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                  alt="Technology Innovation"
                  className="about-image"
                />
              </div>
              <h3 className="about-heading">Our Vision</h3>
              <p>
                With a rapidly growing network of <strong>150+ institutions</strong> and
                <strong> 11+ lakh students</strong>, <strong>Microsage Private Limited</strong> is setting a new benchmark in
                India's ed-tech and HR-tech ecosystem.
              </p>
              <p>
                Our vision is to make employability intelligence and personalized learning
                accessible to every student, no matter their background. We are not just
                building software—we are shaping futures.
              </p>
              <p>
                We envision a future where every student has access to personalized, AI-driven
                learning experiences that prepare them not just for exams, but for real-world
                careers. Our platform bridges the gap between academic excellence and industry
                requirements, ensuring that graduates are job-ready from day one.
              </p>
              <div className="about-badges mt-4">
                <span className="badge-custom">Startup India</span>
                <span className="badge-custom">MSME Certified</span>
                <span className="badge-custom">Active Company</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col lg={8}>
            <div className="company-info text-center">
              <h3 className="about-heading">Founder & CEO</h3>
              <div className="info-card founder-card mx-auto" style={{ maxWidth: '600px', borderTop: '4px solid var(--primary-color)' }}>
                <div className="founder-photo-wrapper mb-3">
                  <img
                    src={require('../assets/founder photo.png')}
                    alt="Mallikarjun Borigidde"
                    className="founder-photo"
                  />
                </div>
                <h5>Mallikarjun Borigidde</h5>
                <p><strong>Role:</strong> Founder & CEO</p>
                <p><strong>Focus:</strong> Product strategy, partnerships, and growth.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
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

