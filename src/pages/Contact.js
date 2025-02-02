import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:chinedufidelis321@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
  };

  return (
    <div className="contact-container">
      {/* Left Section: Text */}
      <div className="contact-text">
        <h1>Let's Connect</h1>
        <p>Join us and be a part of our community.</p>
        <a href="/register" className="cta-button">Register Now</a>
      </div>

      {/* Right Section: Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required 
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea 
              name="message" 
              placeholder="Your message" 
              required 
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
