import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  { title: "Web Development", description: "Building scalable websites.", path: "/web-development" },
  { title: "UI/UX Design", description: "Designing user-friendly interfaces.", path: "/ui-ux-design" },
  { title: "SEO Optimization", description: "Improving search rankings.", path: "/seo-optimization" },
  { title: "E-commerce Solutions", description: "Building online stores.", path: "/ecommerce-solutions" },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <Link to={service.path} className="service-link">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
