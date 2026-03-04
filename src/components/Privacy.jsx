import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/components/LegalPages.css';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Container className="legal-container">
                <Row>
                    <Col>
                        <h1 className="legal-title text-center">Privacy Policy</h1>
                        <p className="legal-update-date text-center">Last Updated: March 2026</p>

                        <div className="legal-section">
                            <p>
                                Microsage Private Limited ("Microsage", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website and Services.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>1. Information We Collect</h3>
                            <p>
                                We may collect the following types of information:
                            </p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and professional details.</li>
                                <li><strong>Usage Information:</strong> Details of your interactions with our Services, including IP address, browser type, and pages visited.</li>
                                <li><strong>Cookies:</strong> Information collected through cookies and similar technologies for analytics and preference management.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>2. How We Use Your Information</h3>
                            <p>
                                We use the information we collect for several purposes, including:
                            </p>
                            <ul>
                                <li>To provide and maintain our Services.</li>
                                <li>To personalize your experience and improve user satisfaction.</li>
                                <li>To communicate with you regarding updates, promotions, and support.</li>
                                <li>To comply with legal obligations and enforce our terms.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>3. Data Sharing and Disclosure</h3>
                            <p>
                                We do not sell your personal information. We may share your data with:
                            </p>
                            <ul>
                                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our Services.</li>
                                <li><strong>Legal Requirements:</strong> Authorities if required by law or to protect our rights.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>4. Data Security</h3>
                            <p>
                                We take security seriously and implement industry-standard measures to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>5. Your Privacy Choices</h3>
                            <p>
                                You have the right to:
                            </p>
                            <ul>
                                <li>Update or correct your personal information through your account settings.</li>
                                <li>Opt-out of marketing communications.</li>
                                <li>Request the deletion of your account and associated data.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>6. Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated "Last Updated" date.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>7. Contact Us</h3>
                            <p>
                                If you have any questions or concerns about our Privacy Policy, please contact us at:
                                <br />
                                <strong>Email:</strong> info@gatetutor.in
                                <br />
                                <strong>Address:</strong> B-303, GARDENIA, TUPE NAGAR, Hadapsar, Pune - 411028
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Privacy;
