import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const WebDevelopment = () => {
  return (
    <div className="service-page">
      <h2>Web Development</h2>
      <p>We provide high-quality web development services.</p>
      <ul>
            <li>Front-End Development</li>
            <li>Custom Web Application Development</li>
            <li>Single Page Application</li>
            <li>Integration with API</li>
            <li>CMS Integration</li>
        </ul>
        <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default WebDevelopment;

