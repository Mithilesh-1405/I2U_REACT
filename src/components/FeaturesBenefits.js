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
        <h2 className="section-title">Startups</h2>
        <div className="feature-content">
          <h3 style={{textAlign: 'center'}}>Empower your ideas with AI at i2u.ai and turn them into Unicorns.</h3>
          <p>Welcome to i2u.ai – the ultimate destination for startups ready to elevate their ventures to new heights. Our platform combines the power of artificial intelligence with comprehensive support, designed specifically for forward-thinking entrepreneurs. Whether you're just starting out or looking to refine your strategy, i2u.ai offers unparalleled resources, guidance, and a community to help you succeed.</p>

          <h3>Core Features</h3>
          <h4>Market Intelligence</h4>
          <p>Navigating the business landscape requires keen insights and the ability to anticipate shifts. At i2u.ai, we provide access to cutting-edge market insights and trend analysis that empower startups to identify untapped opportunities. Our robust intelligence tools analyze industry patterns, consumer behavior, and emerging trends, giving your startup the information it needs to stay ahead.</p>

          <h4>AI Expertise</h4>
          <p>AI is transforming industries across the globe, and understanding its complexities is crucial for any tech-driven business. Our platform delves deep into the world of AI, offering practical guidance for application and development. From machine learning to natural language processing, we ensure you have the expertise to harness AI's full potential, driving innovation within your startup.</p>

          <h4>Mentorship and Networking</h4>
          <p>A supportive network is one of the most valuable assets a startup can have. i2u.ai connects you with a thriving community of entrepreneurs, investors, and AI experts. Our mentorship program pairs you with seasoned professionals ready to share their wisdom and guide you through challenges. Networking opportunities abound, creating paths for collaboration and partnerships that can propel your startup forward.</p>

          <h4>Demo Day Platform</h4>
          <p>Showcase your startup on our Demo Day Platform, where you can present your innovations to a curated audience of investors and industry leaders. This is your chance to shine, demonstrating your product's potential and capturing the attention of those who can make a significant impact on your business trajectory.</p>

          <h3>Key Advantages</h3>
          <h4>Accelerated Growth</h4>
          <p>Speed is of the essence in the competitive startup landscape. i2u.ai equips your business with the tools and insights needed to gain a competitive edge. With our resources, your growth is accelerated, taking your startup from concept to reality faster and more efficiently.</p>

          <h4>Reduced Risk</h4>
          <p>Venturing into the AI domain can be daunting, but with i2u.ai, you are not alone. We help mitigate the challenges and complexities of navigating this landscape. Our expert guidance and comprehensive resources reduce potential risks, allowing you to focus on building and scaling your business.</p>

          <h4>Increased Investment Potential</h4>
          <p>Securing investment is often a critical milestone for startups. With i2u.ai, enhance your startup's attractiveness to investors. From providing you with the right visibility on our Demo Day Platform to refining your business model, we ensure you are investor-ready and poised for success.</p>

          <h4>Access to a Proven Network</h4>
          <p>Our platform offers direct access to an influential network of industry leaders and potential partners. This access is invaluable, opening doors to opportunities and collaborations that can drive growth, innovation, and market presence for your startup.</p>

          <h3>Benefits for Subscribers</h3>
          <h4>Uncover Hidden Opportunities</h4>
          <p>At i2u.ai, we help you identify market gaps and develop innovative solutions. By staying informed and prepared, you can seize opportunities that others may overlook, placing your startup at the forefront of industry advancements.</p>

          <h4>Build a Stronger Foundation</h4>
          <p>A solid understanding of AI and its applications is essential for modern startups. Through our resources and workshops, you gain a foundational knowledge of AI, ensuring you can make informed decisions and integrate AI effectively into your business operations.</p>

          <h4>Expand Your Network</h4>
          <p>Entrepreneurship thrives on connections. Our platform facilitates networking with like-minded entrepreneurs and potential collaborators, paving the way for partnerships that enhance your startup's reach and capabilities.</p>

          <h4>Accelerate Your Time to Market</h4>
          <p>Getting your product to market swiftly can make all the difference. Leverage our expert guidance to streamline your processes and accelerate your launch. With i2u.ai, you can navigate the journey from development to market entry with confidence and support.</p>

          <h4>Increase Your Funding Chances</h4>
          <p>Present your startup to targeted audiences through our Demo Day Platform. By demonstrating your startup's potential to a select group of investors, you maximize your chances of securing the necessary funding to propel your business forward.</p>

          <h4>Gain a Competitive Edge</h4>
          <p>In the fast-paced startup world, knowledge and resources are powerful allies. Stay ahead of the curve with i2u.ai's exclusive insights and resources, equipping your startup to meet challenges head-on and outpace the competition.</p>

          <h3>Join Us at i2u.ai</h3>
          <p>Embark on a transformative journey with i2uai, where your startup's potential meets unparalleled opportunity. Our commitment is to support your entrepreneurial spirit, providing the tools, community, and guidance needed to turn your vision into reality. Whether you're breaking ground in AI, exploring innovative markets, or seeking a competitive advantage, i2u.ai is your partner in success. Join our dynamic community today and unlock the full potential of your startup with i2u.ai – where ideas evolve into unicorns.</p>
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
