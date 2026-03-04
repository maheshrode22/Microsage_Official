import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/components/LegalPages.css';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Container className="legal-container">
                <Row>
                    <Col>
                        <h1 className="legal-title text-center">Terms & Conditions</h1>
                        <p className="legal-update-date text-center">Last Updated: March 2026</p>

                        <div className="legal-section">
                            <p>
                                Welcome to Microsage Private Limited ("Microsage", "we", "us", or "our"). By accessing or using our website, services, and software, including but not limited to GATEtutor LMS and Corporate Recruitment System (collectively, the "Services"), you agree to be bound by these Terms & Conditions.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By creating an account or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these terms, please do not use our Services.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>2. Services Provided</h3>
                            <p>
                                <strong>Microsage Private Limited</strong> provides EdTech and recruitment solutions. We reserve the right to modify, suspend, or discontinue any part of the Services at any time without prior notice.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>3. User Accounts</h3>
                            <p>
                                To access certain features, you must create an account. You are responsible for:
                            </p>
                            <ul>
                                <li>Maintaining the confidentiality of your account credentials.</li>
                                <li>All activities that occur under your account.</li>
                                <li>Providing accurate and complete information.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>4. Intellectual Property</h3>
                            <p>
                                All content, trademarks, logos, and software provided as part of the Services are the intellectual property of Microsage Private Limited or its licensors. You may not reproduce, distribute, or modify any content without our express written permission.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>5. Prohibited Conduct</h3>
                            <p>
                                You agree not to:
                            </p>
                            <ul>
                                <li>Use the Services for any unlawful purpose.</li>
                                <li>Attempt to gain unauthorized access to our systems.</li>
                                <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3>6. Limitation of Liability</h3>
                            <p>
                                To the maximum extent permitted by law, <strong>Microsage Private Limited</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3>7. Contact Us</h3>
                            <p>
                                If you have any questions about these Terms, please contact us at:
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

export default Terms;
