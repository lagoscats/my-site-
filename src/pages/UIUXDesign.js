import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const UIUXDesign = () => {
  return (
    <div className="service-page">
      <h2>UI/UX Design</h2>
      <p>We create intuitive and beautiful user interfaces for web and mobile applications.</p>
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default UIUXDesign;
