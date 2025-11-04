// src/pages/Services/Services.jsx
import "./Services.css";

function Services({ id = "services" }) {
  return (
    <section id={id} className="services-section">
        <h2>Our Services</h2>
        <p className="services-subtitle">
          Premium renovations built with precision, care, and Florida
          craftsmanship.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Kitchen & Bath Remodeling</h3>
            <p>Custom kitchens and spa-style bathrooms — layout updates, cabinetry, tile/stone, lighting, fixtures, and finishes built for everyday durability and resale value.</p>
            <a href="/kitchen" className="service-btn">Learn More</a>
          </div>

          <div className="service-card">
            <h3>Flooring, Trim & Interior Finishes</h3>
            <p>Precision installation of hardwood, tile, or luxury vinyl plus interior trim work (baseboards, crown, casing) and finishing details that pull rooms together.</p>
            <a href="/flooring" className="service-btn">Learn More</a>
          </div>

          <div className="service-card">
            <h3>Outdoor Enclosures & Additions (General Contracting)</h3>
            <p>Screened lanais, patios, porch enclosures, and small additions — permitted, scheduled, and managed end-to-end with Skyro's general contracting oversight.</p>
            <a href="/outdoor" className="service-btn">Learn More</a>
          </div>
          <div className="service-card">
            <h3>Commercial Construction</h3>
            <p>Restaurants, salons, academies, and custom commercial spaces—built to code, on schedule, and with the Skyro standard of quality.</p>
            <a href="/commercial-construction" className="service-btn">Learn More</a>
          </div>
        </div>
    </section>
  );
}

export default Services;
