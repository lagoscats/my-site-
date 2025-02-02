import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/images/profile.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Add functionality to handle search results.
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" className="logo" />
        </div>

        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="navbar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="search-input" 
          />
          <button type="submit" className="search-button">🔍</button>
        </form>

        <div className="navbar-profile">
          <img src= { Profile} alt="pago" className="profile-image" />
        </div>

        <div className="navbar-hamburger" onClick={handleMenuToggle}>
          <span className="hamburger-icon">&#9776;</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
