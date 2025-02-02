import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const SEOOptimization = () => {
  return (
    <div className="service-page">
      <h2>SEO Optimization</h2>
      <p>We optimize websites for better search engine ranking and visibility.</p>
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default SEOOptimization;
