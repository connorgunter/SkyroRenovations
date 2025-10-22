import "./Navbar.css";
import logo from "../../assets/headerlogoalt.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ variant = "solid" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentActive = variant === "transparent" && !scrolled;

  return (
    <header
      className={`navbar ${transparentActive ? "navbar--transparent" : "navbar--solid"}`}
    >
      <div className="navbar-container">
      <div className="logo-container">
  <Link to="/" className="logo-link" aria-label="Skyro Renovations — Home">
    <img src={logo} alt="Skyro Renovations logo" className="logo-img" />
  </Link>
</div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#services">Services</Link>
          <Link to="/contact" className="nav-cta">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
