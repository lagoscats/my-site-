import React, { useState } from 'react';

function Register() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the form to slide in when the component mounts
  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`register-container ${isVisible ? 'slide-in' : ''}`}>
      <h1>Register</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='enter your email' required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
