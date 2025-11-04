import "../../components/Navbar/Navbar.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "../Kitchen/Kitchen.css"; // keeps styles consistent across services
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer.jsx";

// Interior / Flooring images
import img1 from "../../assets/Interior/IMG_5568.jpg";
import img2 from "../../assets/Interior/IMG_5569.jpg";
import img3 from "../../assets/Interior/IMG_5571.jpg";
import img4 from "../../assets/Interior/IMG_5572.jpg";
import img5 from "../../assets/Interior/IMG_5573.jpg";
import img6 from "../../assets/Interior/IMG_5577.jpg";

export default function Flooring() {
  const interiorImages = [
    { src: img1, alt: "Flooring and trim project 1" },
    { src: img2, alt: "Flooring and trim project 2" },
    { src: img3, alt: "Flooring and trim project 3" },
    { src: img4, alt: "Flooring and trim project 4" },
    { src: img5, alt: "Flooring and trim project 5" },
    { src: img6, alt: "Flooring and trim project 6" },
  ];

  return (
    <>
      <Navbar />
      <section className="kitchen-page">
        <div className="kb-container">
          <div className="kb-hero-row">
            <header className="kb-hero-copy">
              <h1>Flooring, Trim &amp; Interior Finishes</h1>
              <p className="hero-subtitle">
                Precision installation of hardwood, tile, or luxury vinyl plus interior trim work
                (baseboards, crown, casing) and finishing details that pull rooms together.
              </p>
              <Link to="/contact" className="kb-cta inline">
                Request a Quote
              </Link>
            </header>

            <div className="kb-hero-media">
              <div className="kb-carousel">
                <Carousel
                  images={interiorImages}
                  ariaLabel="Flooring and interior trim photos"
                  ratio="4/5"
                  fit="cover"
                  autoPlay
                  interval={4500}
                />
              </div>
              <p className="kb-caption">
                Flooring and trim refresh for a cohesive interior.
              </p>
            </div>
          </div>
        </div>

        <div className="kb-container">
          <div className="kb-cards">
            <div className="kb-card">
              <h3>Flooring Installation</h3>
              <p>
                Hardwood, tile, or LVP/LVT with proper subfloor prep, leveling, and clean transitions.
              </p>
            </div>
            <div className="kb-card">
              <h3>Trim &amp; Molding</h3>
              <p>
                Baseboards, crown, casing, wainscoting, and caulk for crisp lines and finished rooms.
              </p>
            </div>
            <div className="kb-card">
              <h3>Paint &amp; Finishes</h3>
              <p>
                Touch-ups, color matching, and detailing that ties the space together.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
