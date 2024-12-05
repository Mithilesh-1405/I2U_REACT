import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/Terms.scss';
import Footer from './Footer';

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {children}
    </NavLink>
  );
};

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="content-section">
        <h1 className="main-title">i2u.ai, Ideas to Unicorns through AI!
         Terms & Conditions</h1>
        <p>These Terms of Use ("Terms") govern your access to and use of the i2u.ai website and mobile application (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Platform.</p>

        <h2 className="section-title">1. Eligibility</h2>
        <p>You must be at least 18 years old and have the legal capacity to enter into contracts to use the Platform. By using the Platform, you represent and warrant that you meet all of the foregoing qualifications.</p>

        <h2 className="section-title">2. Description of Services</h2>
        <p>i2u.ai is a platform that connects global startups with experienced coaches and mentors for personalized coaching and mentoring services. We offer a tiered subscription approach, with each tier providing different levels of access and benefits.</p>

        <h2 className="section-title">3. Subscription Fees</h2>
        <p>Subscription fees for i2u.ai services are annual and vary depending on the chosen tier. The specific fees will be displayed on the Platform before you subscribe. All fees are exclusive of any applicable taxes or other government charges. i2u.ai uses its payment gateway provider/s. Such payment gateway provider/s' terms and conditions regarding payments will also apply. Our services are made available from September 1, 2024.</p>

        <h2 className="section-title">4. Content</h2>
        <p>The content on the Platform, including all text, graphics, videos, audio, and other materials (collectively, the "Content") is owned by i2u.ai or its licensors. You may not use the Content for any commercial purpose without our express written permission.</p>

        <h2 className="section-title">5. User Accounts</h2>
        <p>You may need to create an account to access certain features of the Platform. You are responsible for maintaining the confidentiality of your account information, including your password. You agree to accept responsibility for all activities that occur under your account.</p>

        <h2 className="section-title">6. User Conduct</h2>
        <p>You agree to use the Platform in a lawful and respectful manner. You will NOT:</p>
        <ul>
          <li>Use the Platform for any illegal or unauthorized purpose.</li>
          <li>Infringe on the intellectual property rights of others.</li>
          <li>Transmit any harmful, offensive, or defamatory content.</li>
          <li>Interfere with or disrupt the Platform or any other user's use of the Platform.</li>
          <li>Attempt to gain unauthorized access to the Platform or any other user's account.</li>
        </ul>

        <h2 className="section-title">7. Disclaimer</h2>
        <p>The Platform and the Content are provided "as is" and without warranties of any kind, express or implied. i2u.ai disclaims all warranties, including, but not limited to, warranties of merchantability, fitness for a particular purpose, and non-infringement. i2u.ai does not guarantee the accuracy, completeness, or reliability of any Content or information provided on the Platform.</p>

        <h2 className="section-title">8. Limitation of Liability</h2>
        <p>i2u.ai will not be liable for any damages arising out of or related to your use of the Platform, including, but not limited to, direct, indirect, incidental, consequential, or punitive damages.</p>

        <h2 className="section-title">9. Termination</h2>
        <p>i2u.ai may terminate your access to the Platform at any time, with or without cause. You may also terminate your account at any time.</p>

        <h2 className="section-title">10. Refund and Cancellation Policy</h2>
        <ul>
          <li>Subscription Cancellation: You can cancel your subscription at any time. However, no refunds will be provided for the current subscription period.</li>
          <li>Refund Policy: Refunds will generally not be provided unless there is a service disruption or error on our part. If you believe you are eligible for a refund, please contact our customer support.</li>
          <li>Specific Circumstances: In certain exceptional cases, such as technical issues preventing access to the Platform for an extended period, we may offer a partial refund or credit.</li>
        </ul>

        <h2 className="section-title">11. Privacy Policy</h2>
        <p>Our Privacy Policy, incorporated by reference into these Terms, explains how we collect, use, and disclose your personal information. You can find our Privacy Policy <CustomNavLink to="/privacy-policy">here</CustomNavLink>.</p>

        <h2 className="section-title">12. Intellectual Property</h2>
        <p>All content on the Platform, including text, graphics, logos, images, audio, video, software, and other materials (collectively, the "Content") is the intellectual property of i2u.ai or its licensors. You may not use, modify, reproduce, distribute, display, or create derivative works from the Content without our express written permission.</p>

        <h2 className="section-title">13. Dispute Resolution</h2>
        <p>We are committed to resolving disputes with users promptly and fairly through following means:</p>
        <ul>
          <li>Mediation: Any dispute arising out of or relating to these Terms will be first attempted to be resolved through mediation administered by a neutral mediator mutually agreed upon by you and i2u.ai. If the dispute cannot be resolved through mediation, the dispute shall then be subject to binding arbitration as described below.</li>
          <li>Arbitration: Any dispute arising out of or relating to these Terms will be settled by binding arbitration in accordance with the Arbitration Rules of the Indian Law. The arbitration shall be conducted in Bangalore, Karnataka and you and i2u.ai agree to submit to the jurisdiction of the courts located in Bangalore, Karnataka for all purposes of enforcing this arbitration agreement. This arbitration provision shall be severable from these Terms and may be enforced independently by either party.</li>
        </ul>

        <h2 className="section-title">14. Indemnification</h2>
        <p>You agree to indemnify and hold harmless i2u.ai, its officers, directors, employees, agents, and licensors from and against any and all claims, demands, losses, liabilities, costs, or expenses (including attorneys' fees) arising out of or relating to:</p>
        <ul>
          <li>Your use of the Platform.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any rights of another user or third party.</li>
        </ul>

        <h2 className="section-title">15. Force Majeure</h2>
        <p>i2u.ai will not be liable for any delay or failure to perform its obligations under these Terms due to any cause beyond its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, labor strikes, electrical outages, or internet outages.</p>

        <h2 className="section-title">16. Entire Agreement</h2>
        <p>These Terms constitute the entire agreement between you and i2u.ai regarding your use of the Platform.</p>

        <h2 className="section-title">17. Severability</h2>
        <p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</p>

        <h2 className="section-title">18. Amendment</h2>
        <p>i2u.ai may amend these Terms at any time by posting the amended terms on the Platform. You are responsible for checking these Terms periodically for updates. Your continued use of the Platform after the amended Terms are posted constitutes your acceptance of the amended Terms.</p>

        <h2 className="section-title">19. Governing Law</h2>
        <p>These Terms will be governed by and construed in accordance with the laws of India.</p>

        <h2 className="section-title">20. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at admin@i2u.ai</p>
        <p>Our contact information and full operational address:</p>
        <p>Girish B Hukkeri<br />
        64, 2nd Cross, 2nd Stage, BEML Layout<br />
        Basaveshwaranagar, Bangalore - 560079<br />
        Karnataka, India<br />
        Contact on: +91 7760937549 (Whatsapp Preferred)</p>

        <div className="disclaimer">
          <h2>Disclaimer</h2>
          <p>The content, reports and assessments have been generated using our AI-based platform, which leverages empirical data, information, knowledge, and wisdom gained from various AI platforms and sources within the startup ecosystem.</p>
          <p>Please note the following:</p>
          <ul>
            <li>Dynamic Nature of Startups and AI: The startup ecosystem and AI technology are in a constant state of evolution. Our assessments reflect the most current information available at the time of analysis, but may not capture very recent developments.</li>
            <li>Continuous Improvement: We are committed to ongoing refinement of our AI models and assessment methodologies. Our platform is regularly updated to incorporate new data, insights, and technological advancements.</li>
            <li>Not Financial Advice: The information provided in this report is for general informational purposes only and should not be construed as financial, legal, or professional advice. Always consult with qualified professionals before making any investment or business decisions.</li>
            <li>Limitations of AI: While our AI-based platform strives for accuracy and objectivity, it may have inherent biases or limitations. The analysis should be considered as one of many tools in your decision-making process.
            </li>
            <li>Feedback Welcome: We value your input in improving our platform. If you have any feedback, concerns, or notice any inaccuracies, please don't hesitate to contact us. Your insights help us enhance our service for the entire startup ecosystem.</li>
            <li>No Guarantee of Outcomes: Past performance and current assessments do not guarantee future results. The startup landscape is inherently unpredictable, and success depends on numerous factors beyond the scope of this analysis.</li>
            <li>Data Privacy: Our platform adheres to strict data privacy and security protocols. However, users should be aware of the potential risks associated with sharing sensitive information in any digital format.</li>

          </ul>
          <p>By using our AI-based platform and reviewing this report, you acknowledge and accept the terms of this disclaimer.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
