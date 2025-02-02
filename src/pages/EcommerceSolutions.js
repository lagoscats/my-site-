import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const EcommerceSolutions = () => {
  return (
    <div className="service-page">
      <h2>E-commerce Solutions</h2>
      <p>We develop secure and scalable e-commerce platforms to grow your business online.</p>
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default EcommerceSolutions;
