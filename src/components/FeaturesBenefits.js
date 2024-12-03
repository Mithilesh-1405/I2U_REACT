import React from 'react';
import '../styling/FeaturesBenefits.scss';
import Countdown from './Countdown';

const FeaturesBenefits = ({price}) => {
  const targetDate = '2025-01-01T11:59:00+05:30';
  price = price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return (
    <div className="features-container">

      <div className="feature-section">
        <h2 className="section-title">Core Features</h2>
        <div className="feature-content">
          <h3>Market Intelligence</h3>
          <p>Access to cutting-edge market insights and trend analysis to identify untapped opportunities.</p>

          <h3>AI Expertise</h3>
          <p>Deep dive into the complexities of AI, with practical guidance on application and development.</p>

          <h3>Mentorship and Networking</h3>
          <p>Connect with a thriving community of entrepreneurs, investors, and AI experts.</p>

          <h3>Demo Day Platform</h3>
          <p>Showcase your startup to a curated audience of investors and industry leaders.</p>
        </div>
      </div>

      <div className="feature-section">
        <h2 className="section-title">Key Advantages</h2>
        <div className="feature-content">
          <h3>Accelerated Growth</h3>
          <p>Gain a competitive edge by leveraging our insights and resources.</p>

          <h3>Reduced Risk</h3>
          <p>Mitigate the challenges of navigating the complex AI landscape.</p>

          <h3>Increased Investment Potential</h3>
          <p>Enhance your startup's attractiveness to investors.</p>

          <h3>Access to a Proven Network</h3>
          <p>Connect with industry leaders and potential partners.</p>
        </div>
      </div>

      <div className="feature-section">
        <h2 className="section-title">Benefits for Subscribers</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <p>Uncover Hidden Opportunities: Identify market gaps and develop innovative solutions.</p>
          </div>
          <div className="benefit-item">
            <p>Build a Stronger Foundation: Develop a solid understanding of AI and its applications.</p>
          </div>
          <div className="benefit-item">
            <p>Expand Your Network: Connect with like-minded entrepreneurs and potential collaborators.</p>
          </div>
          <div className="benefit-item">
            <p>Accelerate Your Time to Market: Get your product or service to market faster with expert guidance.</p>
          </div>
          <div className="benefit-item">
            <p>Increase Your Funding Chances: Showcase your startup to a targeted audience of investors.</p>
          </div>
          <div className="benefit-item">
            <p>Gain a Competitive Edge: Stay ahead of the curve with exclusive insights and resources.</p>
          </div>
        </div>
      </div>

      {/* Price Information */}
      <div className="price-highlight" onClick={() => window.location.href = 'https://i2u.ai/registration.html'}>
        <h2>Our Inaugural Invitation Price of ₹20,000 for Startups' Basic Annual Subscription</h2>
        <h3>is Going to be Raised to {price}!</h3>
        <p>Hurry! Our Inaugural Invitation Price Offer Closes on 1st January 2025 at 11:59 AM IST.</p>
        <h2 >Click Here to Subscribe!!</h2>
        <Countdown targetDate={targetDate} />
      </div>
    </div>
  );
};

export default FeaturesBenefits;
