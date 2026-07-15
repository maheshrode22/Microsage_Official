import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OurEcosystem from '../components/about/OurEcosystem';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="about-section pt-5 pb-4">
      <Container fluid className="about-container px-3 px-md-4 px-lg-5">
        {/* Visionary Leader Hero Section */}
        <div className="leadership-hero mb-5 pb-4 border-bottom">
          <div className="founder-hero-image-wrapper">
            <img
              src={require('../assets/founder-photo.jpg')}
              alt="Mallikarjun Borigidde"
              className="w-100 h-100 object-fit-cover founder-hero-image"
            />
          </div>
          <h5 className="leadership-label">Leadership</h5>
          <h1 className="about-hero-title">
            <span className="highlight-text">Mallikarjun Borigidde</span>
          </h1>
          <p className="leadership-role">Founder &amp; Chief Executive Officer</p>
          <p className="leadership-company">Microsage Private Limited</p>
          <p className="leadership-tagline">
            Leading Microsage&apos;s vision of AI, Digital Education Platforms like GATEtutor.
          </p>
          <div className="about-hero-text">
            <p>
              At Microsage Private Limited, leadership is driven by a commitment to innovation, purpose, and long-term impact. Under the guidance of Mallikarjun Borigidde, the company has evolved into a technology-driven organization dedicated to transforming education, employability, and digital innovation through intelligent solutions.
            </p>
            <p>
              With a strong entrepreneurial mindset and deep understanding of emerging technologies, Mallikarjun believes that technology should simplify complex challenges and create opportunities for everyone. His vision has shaped Microsage into a company that develops scalable platforms, AI-powered products, enterprise solutions, and digital ecosystems that empower students, educational institutions, businesses, and professionals.
            </p>
            <p>
              One of the company&apos;s flagship initiatives, GATEtutor, reflects this vision by bringing together learning, assessment, skill development, and career opportunities within a single intelligent platform. It represents Microsage&apos;s commitment to building technology that delivers measurable value to users while supporting the evolving needs of education and industry.
            </p>
            <p>
              Beyond products, Mallikarjun has cultivated a culture of continuous learning, innovation, collaboration, and customer-centric thinking. His leadership encourages the team to embrace new ideas, solve real-world problems, and develop solutions that create meaningful impact across multiple domains.
            </p>
            <p>
              Today, Microsage continues to expand its portfolio with advanced technology solutions, AI-driven platforms, enterprise applications, and digital transformation services. Guided by Mallikarjun&apos;s vision, the company remains focused on building a future where innovation drives growth, empowers organizations, and creates lasting value for society.
            </p>
          </div>
        </div>
        <div className="about-triad mt-4">
          <div className="about-content">
            <div className="about-icon-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team Collaboration"
                className="about-image"
              />
            </div>
            <div className="about-content-body">
              <h3 className="about-heading text-primary">Our Mission</h3>
              <p>
                At Microsage Private Limited, our mission is to accelerate digital transformation in education and enterprise by developing innovative, AI-powered technology solutions that create meaningful and measurable impact. We are committed to empowering students, educational institutions, businesses, and professionals through intelligent digital platforms that enhance learning, strengthen employability, and drive sustainable growth.
              </p>
              <p>
                By leveraging Artificial Intelligence, advanced analytics, and emerging technologies, we build scalable solutions that bridge the gap between academic excellence and industry expectations. Through our flagship digital education platform, GATEtutor, we deliver personalized learning, intelligent assessments, skill development, and career opportunities within a unified ecosystem designed for the future of education.
              </p>
              <p>
                Innovation at Microsage is driven by purpose. Our goal is to make quality education, technology, and employability solutions more accessible, enabling individuals and organizations to adapt, grow, and thrive in an increasingly digital world. We envision a future where technology empowers every learner, institution, and enterprise to achieve their full potential through continuous innovation and excellence.
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="about-icon-wrapper">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Our Vision"
                className="about-image"
              />
            </div>
            <div className="about-content-body">
              <h3 className="about-heading text-primary">Our Vision</h3>
              <p>
                At Microsage Private Limited, our vision is to become a global leader in AI-powered technology and digital innovation by building intelligent platforms that redefine the future of education, employability, and enterprise transformation. We envision a connected ecosystem where learning, skill development, workforce readiness, and industry collaborate seamlessly through technology.
              </p>
              <p>
                Through our flagship digital education platform, GATEtutor, and our proprietary AI ecosystem, we aspire to create a unified digital infrastructure that bridges the gap between academia and industry, empowers institutions with intelligent insights, and prepares learners for the careers of tomorrow.
              </p>
              <p>
                Our long-term vision is to establish a trusted, technology-driven benchmark for learning, productivity, and employability, enabling every learner, institution, and organization to unlock their full potential and thrive in an increasingly digital world.
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="about-icon-wrapper">
              <img
                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop"
                alt="Nation Building"
                className="about-image"
              />
            </div>
            <div className="about-content-body">
              <h3 className="about-heading text-success">Building for the Nation</h3>
              <p>
                At Microsage Private Limited, we believe technology should create opportunities that extend far beyond software. We are committed to building India&apos;s AI-powered Employability Infrastructure—an intelligent ecosystem that connects education, industry, and innovation to strengthen the nation&apos;s future workforce.
              </p>
              <p>
                By empowering students with personalized learning, enabling institutions with data-driven decision-making, and helping employers discover future-ready talent, we are creating a common digital foundation that benefits every stakeholder. Through GATEtutor, PragyaAI, and our AI-powered technologies, we are transforming learning outcomes into measurable employability and driving meaningful impact across the education ecosystem.
              </p>
              <p>
                Our vision extends beyond business growth. We are dedicated to fostering innovation, supporting educational excellence, strengthening industry collaboration, and contributing to India&apos;s journey toward becoming a globally competitive, knowledge-driven economy. Every platform we build, every solution we create, and every innovation we introduce is designed with one purpose—to empower people, accelerate progress, and build a smarter, stronger nation.
              </p>
              <div className="about-badges mt-4">
                <span className="badge-custom">Startup India</span>
                <span className="badge-custom">MSME Certified</span>
                <span className="badge-custom">Nation First</span>
              </div>
            </div>
          </div>
        </div>

        <OurEcosystem />

        <Row className="mt-4">
          <Col lg={12}>
            <div className="company-info">
              <Row className="g-4">
                <Col xs={12} md={6} lg={4} className="mb-0">
                  <div className="info-card">
                    <h5>Company Details</h5>
                    <p><strong>CIN:</strong> U72200PN2022PTC213457</p>
                    <p><strong>Registration:</strong> 27 Dec 2022</p>
                    <p><strong>Status:</strong> Active</p>
                    <p><strong>Industry:</strong> Technology, Information and Internet</p>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-0">
                  <div className="info-card">
                    <h5>Headquarters</h5>
                    <p>B-303, GARDENIA, TUPE NAGAR</p>
                    <p>SADE SATRA NALI PU</p>
                    <p>Hadapsar, Pune</p>
                    <p>Maharashtra, India - 411028</p>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-0">
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


