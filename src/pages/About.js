import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Left Section: About Text */}
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          We are a leading company dedicated to providing the best services for our clients.
          Our team is committed to innovation and excellence.
        </p>
        <a href="/register" className="cta-button">Join Us</a>
      </div>

      {/* Right Section: Contact Form */}
      <div className="about-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default About;
