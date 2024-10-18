import React from 'react';

const MainSection = () => {
  return (
    <div className="main-section">
      <section id="home" className="section home-section">
        <h1>Welcome to My Colorful Website</h1>
        <p>Explore the vivid sections and learn more about what we offer!</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>We bring colors and creativity to life through our vibrant designs.</p>
      </section>

      <section id="services" className="section services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building colorful, interactive websites that stand out.</p>
          </div>
          <div className="service-card">
            <h3>Graphic Design</h3>
            <p>Creating stunning graphics that capture attention.</p>
          </div>
          <div className="service-card">
            <h3>Branding</h3>
            <p>Helping brands express themselves with vibrant colors.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us to bring your ideas to life!</p>
        <button className="cta-button">Contact Now</button>
      </section>
    </div>
  );
};

export default MainSection;
