import React, { useEffect } from 'react';
import '../styling/Terms.scss';
import Footer from './Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <div className="content-section">
        <h1 className="main-title">Privacy Policy</h1>
        <p className="effective-date">Effective Date: 10th August 2024</p>
        <p>i2u.ai ("we" or "us") is committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website and mobile application (collectively, the "Platform").</p>

        <h2 className="section-title">1. Information We Collect</h2>
        <p>We collect several types of information from and about users of the Platform:</p>

        <h3 className="subsection-title">Information You Provide</h3>
        <p>When you create an account or use certain features of the Platform, you may provide us with certain personal information, such as:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Billing information (if you subscribe to a paid tier)</li>
          <li>Company name and role (optional)</li>
          <li>Communication preferences</li>
          <li>Information about your startup (optional)</li>
        </ul>

        <h3 className="subsection-title">Information Collected Automatically</h3>
        <p>When you use the Platform, we may collect certain information automatically, such as:</p>
        <ul>
          <li>Device information (e.g., device type, operating system, IP address)</li>
          <li>Usage data (e.g., pages visited, features used, search queries)</li>
          <li>Location data (with your consent)</li>
        </ul>

        <h2 className="section-title">2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and operate the Platform and its features</li>
          <li>To process your subscription and manage your account</li>
          <li>To personalize your experience on the Platform</li>
          <li>To communicate with you about the Platform, including sending you marketing communications (with your consent)</li>
          <li>To improve the Platform and develop new features</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="section-title">3. Sharing Your Information</h2>
        <p>We may share your information with third-party service providers who help us operate the Platform, such as payment processors, data hosting providers, and customer support services. These service providers are contractually obligated to keep your information confidential and secure and to use it only for the purposes we have specified.</p>
        <p>We may also share your information with third parties if we are required to do so by law or if we believe in good faith that such disclosure is necessary to protect our rights or the safety of others.</p>

        <h2 className="section-title">4. Your Choices</h2>
        <p>You have choices regarding your information:</p>
        <ul>
          <li>Accessing and Updating Your Information: You can access and update your account information at any time through your account settings.</li>
          <li>Marketing Communications: You can unsubscribe from our marketing communications by clicking the unsubscribe link in any email we send you.</li>
          <li>Location Data: You can control whether to share your location data with us by adjusting your device settings.</li>
        </ul>

        <h2 className="section-title">5. Data Retention</h2>
        <p>We will retain your information for as long as your account is active or as needed to provide you with services. We may also retain your information for a longer period if required by law or to comply with our legal obligations.</p>

        <h2 className="section-title">6. Security</h2>
        <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is 100% secure.</p>

        <h2 className="section-title">7. Children's Privacy</h2>
        <p>Our Platform is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us.</p>

        <h2 className="section-title">8. International Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than your own country.</p>

        <h2 className="section-title">9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Platform.</p>

        <h2 className="section-title">10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at admin@i2u.ai</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
