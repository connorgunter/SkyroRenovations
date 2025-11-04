import "../../components/Navbar/Navbar.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Construction.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer.jsx";

// Commercial / Construction images
import c1 from "../../assets/COMM/IMG_5585.webp";
import c2 from "../../assets/COMM/IMG_7319.webp";
import c3 from "../../assets/COMM/IMG_0950.webp";
import c4 from "../../assets/COMM/IMG_7457.webp";
import c5 from "../../assets/COMM/20200401_120228.webp";
import c6 from "../../assets/COMM/IMG_7464.webp";

export default function Construction() {
  const constructionImages = [
    { src: c1, alt: "Sushi restaurant buildout 1" },
    { src: c2, alt: "Sushi restaurant buildout 2" },
    { src: c3, alt: "Hair salon renovation 1" },
    { src: c4, alt: "Hair salon renovation 2" },
    { src: c5, alt: "Salon academy build 1" },
    { src: c6, alt: "Salon academy build 2" },
  ];

  return (
    <>
      <Navbar />
      <section className="construction-page">
        <div className="cc-container">
          <div className="cc-hero-row">
            <header className="cc-hero-copy">
              <h1>Commercial Construction</h1>
              <p className="hero-subtitle">
                Restaurants, salons, academies, and custom commercial spaces — permit-ready
                buildouts, fast-turn renovations, and premium finishes that stand up to daily use.
              </p>
              <Link to="/contact" className="cc-cta inline">
                Request a Quote
              </Link>
            </header>

            <div className="cc-hero-media">
              <div className="cc-carousel">
                <Carousel
                  images={constructionImages}
                  ariaLabel="Commercial construction project photos"
                  ratio="4/5"
                  fit="cover"
                  autoPlay
                  interval={4500}
                />
              </div>
              <p className="cc-caption">
                Code-compliant buildouts with durable materials and a clean, professional finish.
              </p>
            </div>
          </div>
        </div>

        <div className="cc-container">
          <div className="cc-cards">
            <div className="cc-card">
              <h3>Restaurant Buildouts</h3>
              <p>Dining rooms, prep lines, durable surfaces, and health/ADA requirements handled.</p>
            </div>
            <div className="cc-card">
              <h3>Salons & Academies</h3>
              <p>Stations, lighting, plumbing/electrical coordination, and easy-clean finishes.</p>
            </div>
            <div className="cc-card">
              <h3>Selective Demo & Refit</h3>
              <p>Phased work to minimize downtime and keep your business operating smoothly.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
