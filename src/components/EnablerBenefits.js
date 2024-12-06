import React from 'react';
import '../styling/FeaturesBenefits.scss';

const EnablerBenefits = ({price = 20000}) => {
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
        <h2 className="section-title">Enablers</h2>
        <div className="feature-content">
          <h3 style={{textAlign: 'center'}}>Ignite Startup Success with i2u.ai</h3>
          <p>Welcome to i2u.ai, a pioneering platform where incubators, accelerators, and other enablers converge to drive the next wave of startup success. At i2u.ai, we recognize the crucial role that enablers play in nurturing startups by providing the foundational support and resources necessary for growth and innovation. By partnering with us, you have the opportunity to elevate your impact, expand your influence, and transform raw potential into groundbreaking success stories.</p>

          <h3>Core Features</h3>
          <h4>Comprehensive Market Intelligence</h4>
          <p>Position your startups at the forefront of their industries with access to our market intelligence tools. i2u.ai offers cutting-edge insights into market trends, consumer behavior, and emerging opportunities. By equipping startups with this invaluable data, you empower them to make strategic decisions that capitalize on untapped markets and achieve sustained growth.</p>

          <h4>Advanced AI Resources</h4>
          <p>Artificial intelligence is a key driver of modern innovation and startup success. At i2u.ai, we provide comprehensive AI resources that support enablers in guiding startups through AI application and development. Whether it’s enhancing operational efficiencies or creating new products, you can leverage our platform to ensure startups harness AI’s transformative potential effectively.</p>

          <h4>Dynamic Mentorship and Networking</h4>
          <p>Integrate your startups into a vibrant ecosystem of mentors, entrepreneurs, investors, and AI experts. Our platform promotes collaboration and the exchange of ideas, creating a supportive network that is essential for growth. By facilitating these connections, i2u.ai enhances your ability to provide startups with the expertise and partnerships they need to thrive.</p>

          <h4>Demo Day Integration</h4>
          <p>Participate in our Demo Day Platform to give your startups the spotlight they deserve. This stage offers a unique opportunity for startups to present their innovations to a carefully curated audience of investors and industry leaders. Your involvement in this process can enhance their presentations and increase their chances of securing the attention and investment they need.</p>

          <h3>Key Advantages</h3>
          <h4>Accelerate Startup Growth</h4>
          <p>Boost the growth trajectory of your startups with i2u.ai’s resources and support. By providing them with the knowledge and infrastructure needed to advance from concept to market, you help them achieve their goals faster and more efficiently.</p>

          <h4>Reduce Risk in Innovation</h4>
          <p>Minimize the inherent risks associated with startup growth and innovation. Our platform offers the tools and insights needed to navigate the complexities of AI and market challenges, allowing you to guide startups with confidence towards sustainable success.</p>

          <h4>Raise Investment Potential</h4>
          <p>Enhance your startups' appeal to investors through our comprehensive support. i2u.ai aids in refining business models and strategies, preparing them to attract funding and enabling you to strengthen the pipeline of startups ready for investment opportunities.</p>

          <h4>Expand Your Influence and Reach</h4>
          <p>Join a network of industry leaders and enablers. Your collaboration with i2u.ai not only broadens your professional network but also provides opportunities for strategic partnerships, expanding your impact and the reach of your initiatives.</p>

          <h3>Benefits for Enablers</h3>
          <h4>Discover and Develop Talent</h4>
          <p>Leverage i2u.ai’s tools to identify emerging talent and promising startups. By nurturing these ventures, you drive the development of innovative solutions and help close market gaps, supporting aspiring entrepreneurs to achieve their fullest potential.</p>

          <h4>Advance the AI Ecosystem</h4>
          <p>Contribute to the growth and sophistication of AI within your startups. With i2u.ai’s resources, you help them understand and integrate AI into their operations, thereby supporting the creation of sustainable, AI-driven solutions.</p>

          <h4>Build a Collaborative Community</h4>
          <p>Engage with a diverse and dynamic group of mentors, entrepreneurs, and industry leaders. By facilitating meaningful connections within our community, you bolster the entrepreneurial ecosystem and promote a culture of collaboration and innovation.</p>

          <h4>Enhance Market Readiness</h4>
          <p>Play a pivotal role in accelerating startups’ paths to market. By utilizing our resources and guidance, you help startups optimize their timing, streamline their processes, and present well-prepared, market-ready products or services.</p>

          <h4>Elevate Funding Opportunities</h4>
          <p>Prepare startups to maximize their funding opportunities. Through strategic guidance and exposure on our Demo Day Platform, you ensure they present compelling investment cases that attract essential resources for growth.</p>

          <h4>Stay Competitive and Informed</h4>
          <p>Remain at the forefront of industry trends and advancements by participating in i2u.ai’s ecosystem. This involvement not only keeps you informed but also empowers your startups to maintain a competitive edge.</p>

          <h3>Join Us at i2u.ai</h3>
          <p>Become a pivotal force in the journey from ideas to unicorns by partnering with i2u.ai. Together, we can empower the next generation of startups, ensuring their success through innovation, collaboration, and insight. Embrace the opportunity to expand your reach, magnify your impact, and help shape the future of entrepreneurship. Join our transformative community today, where your support and dedication cultivate new possibilities and drive the success of emerging innovators. Together, let's ignite the potential of startups with i2u.ai.</p>
        </div>
      </div>

      {/* Price Information */}
      <div className="cta-section"  onClick={() => window.location.href = 'https://i2u.ai/registration.html'}>
        <h2>Join Us Today</h2>
        <p>Unlock your startup's potential with i2u.ai's comprehensive support ecosystem. Subscribe now to take advantage of our launch offer. Let's transform ideas into unicorns through the power of AI!</p>
        <h2 >Click Here to Subscribe!!</h2>
      </div>

    </div>
  );
};

export default EnablerBenefits;
