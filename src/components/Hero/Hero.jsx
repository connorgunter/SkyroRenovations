import "./Hero.css";

import Navbar from "../Navbar/Navbar.jsx";
import slide1 from "../../assets/KB/IMG_5557.jpg";
import slide2 from "../../assets/Outdoor/IMG_5558.jpg";
import slide3 from "../../assets/KB/IMG_5564.jpg";

function Hero() {
  return (
    <>
      {/* Solid gold navbar site-wide */}
      <Navbar />

      <section className="hero-section">
        {/* Removed the duplicate hero nav */}
        <div className="hero-window-gallery">
          <img src={slide1} alt="Highlight 1" />
          <img src={slide2} alt="Highlight 2" />
          <img src={slide3} alt="Highlight 3" />
        </div>

        <div className="hero-content">
          <h1>Skyro Renovations</h1>
          <p>Elevating Florida Homes with Craftsmanship & Class</p>
          <div className="hero-buttons">
            <a href="#gallery" className="hero-btn primary">View Our Work</a>
            <a href="/contact" className="hero-btn secondary">Get In Touch</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
