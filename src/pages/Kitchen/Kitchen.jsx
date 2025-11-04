import "../../components/Navbar/Navbar.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Kitchen.css";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer.jsx";

// KB images
import img1 from "../../assets/KB/IMG_5557.jpg";
import img2 from "../../assets/KB/IMG_5559.jpg";
import img3 from "../../assets/KB/IMG_5564.jpg";
import img4 from "../../assets/KB/IMG_5567.jpg";
import img5 from "../../assets/KB/IMG_5576.jpg";
import img6 from "../../assets/KB/IMG_5578.jpg";
import img7 from "../../assets/KB/IMG_0327.jpg";
import img8 from "../../assets/KB/IMG_0330.jpg";
import img9 from "../../assets/KB/IMG_0339.jpg";
import img10 from "../../assets/KB/IMG_6483.jpg";

export default function Kitchen() {
  const kitchenImages = [
    { src: img1, alt: "Kitchen renovation project 1" },
    { src: img2, alt: "Kitchen renovation project 2" },
    { src: img3, alt: "Kitchen renovation project 3" },
    { src: img4, alt: "Kitchen renovation project 4" },
    { src: img5, alt: "Kitchen renovation project 5" },
    { src: img6, alt: "Kitchen renovation project 6" },
    { src: img7, alt: "Kitchen renovation project 7" },
    { src: img8, alt: "Kitchen renovation project 8" },
    { src: img9, alt: "Kitchen renovation project 9" },
    { src: img10, alt: "Kitchen renovation project 10" },
  ];

  return (
    <>
      <Navbar />
      <section className="kitchen-page">
        <div className="kb-container">
          <div className="kb-hero-row">
            <header className="kb-hero-copy">
              <h1>Kitchen &amp; Bath Remodeling</h1>
              <p className="hero-subtitle">
                Custom kitchens and spa-style bathrooms — layout updates, cabinetry, tile/stone,
                lighting, fixtures, and finishes built for everyday durability and resale value.
              </p>
              <Link to="/contact" className="kb-cta inline">Request a Quote</Link>
            </header>

            <div className="kb-hero-media">
              <div className="kb-carousel">
                <Carousel
                  images={kitchenImages}
                  ariaLabel="Kitchen and bathroom renovation photos"
                  ratio="4/5"
                  fit="cover"
                  autoPlay
                  interval={4500}
                />
              </div>
              <p className="kb-caption">
                Detailed remodel with upgraded layout, durable finishes, and clean lines.
              </p>
            </div>
          </div>
        </div>

        <div className="kb-container">
          <div className="kb-cards">
            <div className="kb-card">
              <h3>Custom Kitchens</h3>
              <p>Cabinetry, countertops, backsplash, lighting, and smart storage for easy entertaining.</p>
            </div>
            <div className="kb-card">
              <h3>Spa-Style Bathrooms</h3>
              <p>Tile &amp; waterproofing, vanities, fixtures, and lighting for low-maintenance comfort.</p>
            </div>
            <div className="kb-card">
              <h3>Layout &amp; Finishes</h3>
              <p>Flow improvements plus trim, paint, and finish work that pull the room together.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
