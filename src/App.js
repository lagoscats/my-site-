import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './pages/Contact';
import Profile from './assets/images/profile.jpg';
import Register from './components/Register';
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import SEOOptimization from "./pages/SEOOptimization";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import Missing from './pages/Missing';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/seo-optimization" element={<SEOOptimization />} />
        <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
        <Route path="*" element={<Missing /> } />
      </Routes>
    </Router>
  );
}

export default App;