import React from 'react';
import '../styling/FeaturesBenefits.scss';
import Countdown from '../components/Countdown';

const Facilitators = () => {
  // const targetDate = '2025-01-01T11:59:00+05:30';
  // price = price.toLocaleString('en-IN', {
  //   style: 'currency',
  //   currency: 'INR',
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0
  // });
  return (
    <div className="features-container">

      <div className="feature-section">
        <h2 className="section-title">Facilitators</h2>
        <div className="feature-content">
          <h3 style={{textAlign: 'center'}}>Empower Startups and Elevate Your Offerings with i2u.ai</h3>
          <p>Welcome to i2u.ai, where product and service providers play a crucial role in enhancing the startup ecosystem. As facilitators, you have the opportunity to collaborate with innovative startups, driving their success while expanding your own influence and capabilities. At i2u.ai, we recognize the pivotal role your expertise and resources play in shaping the future of technology and business.</p>

          <h3>Core Features</h3>
          <h4>Unmatched Market Intelligence</h4>
          <p>Equip yourself with i2u.ai’s advanced market intelligence tools to stay informed about emerging trends and industry shifts. Our platform offers valuable data and insights that can refine your offerings and strategies, ensuring you align with startup needs and market opportunities. By understanding industry dynamics, you position yourself to deliver solutions that propel startups forward.</p>

          <h4>AI-Driven Collaboration</h4>
          <p>Artificial intelligence is revolutionizing industries, and your products and services can be at the heart of this transformation. i2u.ai connects you with startups that are pioneering AI solutions, allowing you to provide the necessary support, whether through technology, services, or expertise, to accelerate their innovation journey and enhance mutual growth.</p>

          <h4>Engaged Mentorship and Networking</h4>
          <p>Join our thriving community of mentors, entrepreneurs, investors, and other industry experts. i2u.ai facilitates connections and collaborations that amplify your impact and extend your reach within the ecosystem. By engaging with this network, you can share valuable insights and participate in high-impact partnerships.</p>

          <h4>Integral Role in Demo Day Events</h4>
          <p>Participate actively in our Demo Day Platform, where startups present to investors and industry leaders. Your involvement can enhance their presentations and strategies, ensuring their innovations gain the recognition and support needed from the investment community.</p>

          <h3>Key Advantages</h3>
          <h4>Enhance Startup Collaboration</h4>
          <p>Engage with a pipeline of innovative startups eager to collaborate with experienced product and service providers. i2u.ai connects you with ventures that can benefit from your offerings, creating opportunities for impactful partnerships and mutual growth.</p>

          <h4>Reduce Market Entry Risks</h4>
          <p>Leverage i2u.ai’s resources and community expertise to minimize risks associated with introducing products and services to new markets. Our platform prepares startups for collaboration, ensuring they are resilient and well-supported in the competitive landscape.</p>

          <h4>Diversify Your Client Base</h4>
          <p>Broaden your reach by engaging with a diverse array of startups innovating across various sectors. i2u.ai provides access to ventures leveraging AI and cutting-edge technologies, enhancing your portfolio and broadening your potential client base.</p>

          <h4>Amplify Impact Through Collaborative Innovation</h4>
          <p>Position your products and services as enablers of transformative change. At i2u.ai, join forces with startups creating sustainable, AI-driven solutions that revolutionize industries, ensuring your contributions have significant and lasting impacts.</p>

          <h3>Benefits for Facilitators</h3>
          <h4>Leverage Strategic Insights</h4>
          <p>Utilize i2u.ai's insights to align your offerings with market needs. Our data-driven approach ensures you deliver solutions that resonate with startups’ strategic goals, maximizing the value and impact of your collaboration.</p>

          <h4>Directly Influence Technological Growth</h4>
          <p>Play a key role in the growth of future technologies by collaborating with innovative startups. Your products and services become integral to the development of AI applications and solutions, shaping the future of industries.</p>

          <h4>Expand Your Professional Network</h4>
          <p>Engage with a global community of forward-thinking entrepreneurs, investors, and mentors. By participating in i2u.ai, you expand your professional connections, unlock collaboration opportunities, and enhance your influence within the startup ecosystem.</p>

          <h4>Capitalize on AI-Enabled Expansion</h4>
          <p>Align with startups that leverage AI for growth and innovation. i2u.ai focuses on ventures that utilize AI to boost efficiencies and market reach, ensuring your collaborations are at the forefront of technological advancement.</p>

          <h4>Support Sustainable and Impactful Enterprises</h4>
          <p>Collaborate with startups committed to sustainability and impact. By providing the tools and services they need, you contribute to a future where technology is a positive force for communities and businesses alike.</p>

          <h4>Stay Adaptive to Industry Trends</h4>
          <p>Stay ahead of emerging trends and shifts in the technological landscape by being part of the i2u.ai network. Continuous engagement with our platform ensures you adapt quickly to new ideas and opportunities in the market.</p>

          <h3>Join Us at i2u.ai</h3>
          <p>Contribute to the development of tomorrow's industry leaders by joining i2u.ai. Partner with startups to provide the products and services essential for their success while expanding your own reach and influence in the market. Together, we can drive the evolution of innovative ideas into industry-defining solutions. Embrace this unique opportunity to impact the world of entrepreneurship and technology. Partner with i2u.ai today, where your expertise and offerings empower the next generation of innovators and deliver exceptional growth and potential.</p>
        </div>
      </div>

      {/* Price Information */}
      {/* <div className="price-highlight" onClick={() => window.location.href = 'https://i2u.ai/registration.html'}>
        <h2>Our Inaugural Invitation Price of ₹20,000 for Startups' Basic Annual Subscription</h2>
        <h3>is Going to be Raised to {price}!</h3>
        <p>Hurry! Our Inaugural Invitation Price Offer Closes on 1st January 2025 at 11:59 AM IST.</p>
        <h2 >Click Here to Subscribe!!</h2>
        <Countdown targetDate={targetDate} />
      </div> */}

    </div>
  );
};

export default Facilitators;
