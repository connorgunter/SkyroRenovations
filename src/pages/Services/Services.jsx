// src/pages/Services.jsx
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Services() {
  return (
    <div className="services-wrapper">
      <Navbar />
      <section className="services-section">
        <h2>Our Services</h2>
        <p className="services-subtitle">
          Premium renovations built with precision, care, and Florida
          craftsmanship.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Kitchen Remodeling</h3>
            <p>
              Transform outdated kitchens into functional, modern showpieces.
            </p>
          </div>
          <div className="service-card">
            <h3>Bathroom Renovations</h3>
            <p>
              Luxury bathroom upgrades that blend comfort, style, and
              durability.
            </p>
          </div>
          <div className="service-card">
            <h3>Flooring Installation</h3>
            <p>
              Hardwood, tile, or vinyl flooring installed with precision and
              quality.
            </p>
          </div>
          <div className="service-card">
            <h3>Interior Trim & Finish</h3>
            <p>
              Custom trim, baseboards, crown molding, and finishing details.
            </p>
          </div>
          <div className="service-card">
            <h3>Outdoor Enclosures</h3>
            <p>
              Screened-in patios and lanais built to withstand Florida weather.
            </p>
          </div>
          <div className="service-card">
            <h3>General Contracting</h3>
            <p>
              From concept to completion — managing every detail of your
              renovation.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
