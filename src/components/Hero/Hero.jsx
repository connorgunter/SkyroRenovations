import logo from "../../assets/headerlogo.png";
import "./Hero.css";

import slide1 from "../../assets/IMG_5557.jpg";
import slide2 from "../../assets/IMG_5558.jpg";
import slide3 from "../../assets/IMG_5564.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-nav">
        <div className="hero-logo-wrapper">
          <img src={logo} alt="Skyro Logo" className="hero-logo" />
        </div>
        <nav className="hero-links">
          <a href="/services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className="hero-window-gallery">
        <img src={slide1} alt="Highlight 1" />
        <img src={slide2} alt="Highlight 2" />
        <img src={slide3} alt="Highlight 3" />
      </div>

      <div className="hero-content">
        <h1>Skyro Renovations</h1>
        <p>Elevating Florida Homes with Craftsmanship & Class</p>
        <div className="hero-buttons">
          <a href="#gallery" className="hero-btn primary">
            View Our Work
          </a>
          <a href="/contact" className="hero-btn secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
