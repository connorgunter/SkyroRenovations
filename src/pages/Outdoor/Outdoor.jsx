import "../../components/Navbar/Navbar.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "../Kitchen/Kitchen.css"; // reuse consistent styling
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer.jsx";

import img1 from "../../assets/Outdoor/IMG_5558.jpg";
import img2 from "../../assets/Outdoor/IMG_5560.jpg";
import img3 from "../../assets/Outdoor/IMG_5561.jpg";
import img4 from "../../assets/Outdoor/IMG_5562.jpg";
import img5 from "../../assets/Outdoor/IMG_5570.jpg";
import img6 from "../../assets/Outdoor/IMG_5575.jpg";

export default function Outdoor() {
  const outdoorImages = [
    { src: img1, alt: "Outdoor enclosure project 1" },
    { src: img2, alt: "Outdoor enclosure project 2" },
    { src: img3, alt: "Outdoor enclosure project 3" },
    { src: img4, alt: "Outdoor enclosure project 4" },
    { src: img5, alt: "Outdoor enclosure project 5" },
    { src: img6, alt: "Outdoor enclosure project 6" },
  ];

  return (
    <>
      <Navbar />
      <section className="kitchen-page">
        <div className="kb-container">
          <div className="kb-hero-row">
            <header className="kb-hero-copy">
              <h1>Outdoor Enclosures &amp; Additions</h1>
              <p className="hero-subtitle">
                Screened lanais, patios, porch enclosures, and small additions — permitted, scheduled,
                and managed end-to-end with Skyro&apos;s general contracting oversight.
              </p>
              <Link to="/contact" className="kb-cta inline">
                Request a Quote
              </Link>
            </header>

            <div className="kb-hero-media">
              <div className="kb-carousel">
                <Carousel
                  images={outdoorImages}
                  ariaLabel="Outdoor enclosure and addition photos"
                  ratio="4/5"
                  fit="cover"
                  autoPlay
                  interval={4500}
                />
              </div>
              <p className="kb-caption">
                Built to handle Florida weather with low-maintenance materials.
              </p>
            </div>
          </div>
        </div>

        <div className="kb-container">
          <div className="kb-cards">
            <div className="kb-card">
              <h3>Screened Lanais &amp; Patios</h3>
              <p>
                Durable screened structures for shade and bug protection with low-maintenance materials.
              </p>
            </div>
            <div className="kb-card">
              <h3>Porch Enclosures</h3>
              <p>
                Convert existing porches into comfortable 3-season spaces with windows, doors, and trim.
              </p>
            </div>
            <div className="kb-card">
              <h3>Small Additions &amp; Permits</h3>
              <p>
                Foundations, framing, inspections, and coordination — managed under Skyro&apos;s GC oversight.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
