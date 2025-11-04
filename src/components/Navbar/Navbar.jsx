import "./Navbar.css";
import logo from "../../assets/headerlogoalt.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ variant = "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentActive = variant === "transparent" && !scrolled;

  return (
    <header className={`navbar ${transparentActive ? "navbar--transparent" : "navbar--solid"}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" aria-label="Skyro Renovations — Home">
            <img src={logo} alt="Skyro Renovations logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger toggle (inline SVG, no dependency) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          type="button"
        >
          {menuOpen ? (
            // X icon
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Nav links */}
        <nav id="mobile-nav" className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
