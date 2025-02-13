import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import About from "./About";
import Pricing from "../components/Pricing";
import Contact from "./Contact";
import Profile from "../assets/images/003.jpg";


const Home = () => {
  return (
    <div className="home-container">
      <img className="top-right-image" src= { Profile } alt="Top Right" />
      <div className="content">
        <h1>Welcome to Our Home Page!</h1>
        <p>This is an example of a homepage with a background image and an image on the top right corner.</p>
        <Link to="/register">
          <button className="cta-button">Register Now</button>
        </Link>
      </div>
      <About />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;


