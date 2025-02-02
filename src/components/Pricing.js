import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation

function Pricing() {
  const [fadeOut, setFadeOut] = useState(false);

  const handleFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      alert('Fade-out completed');
    }, 1000); // Delay for fade-out effect to complete before triggering alert
  };

  return (
    <div className={`pricing-container ${fadeOut ? 'fade-out' : ''}`}>
      <h1>Pricing Plans</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>$19/month</p>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>$49/month</p>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>$99/month</p>
        </div>
      </div>
      <button onClick={handleFadeOut}>Fade Out Pricing</button>

      {/* CTA Button for Registration */}
      <Link to="/register">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
}

export default Pricing;
