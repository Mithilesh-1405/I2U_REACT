import React from 'react';
import '../styling/FeaturesBenefits.scss';
import Countdown from './Countdown';

const MentorBenefits = ({price}) => {
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
        <h2 className="section-title">Mentors</h2>
        <div className="feature-content">
          <h3 style={{textAlign: 'center'}}>Empower the Next Generation of Innovators with i2u.ai</h3>
          <p>Welcome to i2u.ai, a platform where experience meets innovation and visionaries collaborate to create the future. At i2u.ai, we understand that mentorship is a cornerstone of entrepreneurial success. Your expertise and guidance can propel startups to new heights, helping them navigate the complexities of the business world and transform their ideas into industry-leading ventures.</p>

          <h3>Core Features</h3>
          <h4>Market Intelligence</h4>
          <p>As a mentor with i2u.ai, you gain access to state-of-the-art market intelligence tools that enable you to offer insightful guidance. Our platform provides comprehensive market insights and trend analyses, arming you with the data necessary to help startups identify and seize untapped opportunities. By offering your mentees this level of foresight, you can guide them to make strategic decisions that set their ideas apart.</p>

          <h4>AI Expertise</h4>
          <p>Artificial intelligence is at the heart of transformative innovation, and your experience in this space is vital. i2u.ai delves deep into AI, providing resources and support to enhance your mentorship. Whether your focus is on the nuances of AI application or development, our platform equips you with the knowledge and tools needed to guide startups as they harness AI's potential, driving innovation and growth.</p>

          <h4>Mentorship and Networking</h4>
          <p>Join a thriving community of fellow mentors, entrepreneurs, investors, and AI experts at i2u.ai. Our platform fosters meaningful connections and facilitates the sharing of expertise and inspiration. By integrating into this network, you have the opportunity to expand your influence, collaborate with other leaders, and contribute to a culture of innovation and success.</p>

          <h4>Demo Day Involvement</h4>
          <p>As a mentor, you play a pivotal role in preparing startups for our Demo Day Platform. This is where entrepreneurs present their innovations to a select audience of investors and industry leaders. Your mentorship can help refine their strategies, enhance their presentations, and improve their chances of capturing the attention and investment they need to thrive.</p>

          <h3>Key Advantages</h3>
          <h4>Influence Startups' Accelerated Growth</h4>
          <p>Empower startups to achieve rapid growth by sharing your insights and experience. With your support, they can leverage i2u.ai's resources to transform concepts into reality quickly and efficiently, benefitting from your guidance every step of the way.</p>

          <h4>Minimize Risk for Mentees</h4>
          <p>Help startups navigate the AI landscape's challenges with your expertise, reducing potential risks and obstacles. Your mentorship enables entrepreneurs to make informed decisions, fostering confidence and resilience in a competitive market.</p>

          <h4>Enhance Startup Investment Potential</h4>
          <p>Your mentorship can significantly boost a startup’s investment appeal. By guiding them to refine their business models and strategies, you enhance their readiness to engage with investors and capitalize on opportunities presented on our Demo Day Platform.</p>

          <h4>Access to an Active Network</h4>
          <p>Join a network of industry leaders and potential collaborators. Your involvement in i2u.ai not only broadens your professional contacts but also opens up strategic opportunities for collaboration, enabling you to contribute to cutting-edge projects and initiatives.</p>

          <h3>Benefits for Mentors</h3>
          <h4>Identify and Cultivate Potential</h4>
          <p>With i2u.ai's intelligence tools, you can identify promising startups and help them uncover hidden opportunities. Your mentorship is pivotal in guiding them to develop innovative solutions and navigate market gaps.</p>

          <h4>Contribute to a Stronger AI Ecosystem</h4>
          <p>Through your efforts, help build a stronger AI foundation within startups, ensuring they understand and effectively integrate AI into their operations. Your influence deepens the sector’s knowledge base and supports the creation of sustainable, AI-powered solutions.</p>

          <h4>Expand Your Professional Network</h4>
          <p>Engage with a diverse array of entrepreneurs and industry leaders. By contributing to our community, you strengthen your professional connections and gain access to new opportunities for collaboration and innovation.</p>

          <h4>Accelerate Innovations to Market</h4>
          <p>Play a key role in driving startups from development to market. Your mentorship accelerates their journey, utilizing your insights and the platform's resources to streamline processes, optimize timing, and enhance market readiness.</p>

          <h4>Strengthen the Startup Investment Pipeline</h4>
          <p>Help startups maximize their funding potential by preparing them for targeted investor audiences. Your guidance ensures they present compelling, well-rounded cases that attract the necessary investment to fuel their growth.</p>

          <h4>Maintain a Competitive Edge</h4>
          <p>Stay informed and engaged with the latest trends and innovations by remaining active within i2u.ai's ecosystem. This engagement not only keeps you at the forefront of industry advancements but also empowers your mentees to remain competitive.</p>

          <h3>Join Us at i2u.ai</h3>
          <p>Your expertise and dedication can be a transformative force for entrepreneurs poised to make significant impacts in their industries. Join i2u.ai and become part of a community that values mentorship, innovation, and growth. Together, we can inspire and equip the next generation of leaders, ensuring their journeys from ideas to unicorns are supported and successful. Embrace this unique opportunity to influence and shape the future of tech startups at i2u.ai. Share your knowledge, expand your horizons, and leave a lasting impact on emerging innovators. Join our dynamic and inspiring community today, where your mentorship fuels new possibilities.</p>
        </div>
      </div>
      {/* Price Information */}
      <div className="price-highlight" onClick={() => window.location.href = 'https://i2u.ai/registration.html'}>
        <h2>Our Inaugural Invitation Price of ₹20,000 for Mentors' Basic Annual Subscription</h2>
        <h3>is Going to be Raised to {price}!</h3>
        <p>Hurry! Our Inaugural Invitation Price Offer Closes on 1st January 2025 at 11:59 AM IST.</p>
        <h2 >Click Here to Subscribe!!</h2>
        <Countdown targetDate={targetDate} />
      </div>

    </div>
  );
};

export default MentorBenefits;
