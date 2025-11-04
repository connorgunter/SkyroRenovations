import "./Navbar.css";
import logo from "../../assets/headerlogoalt.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons; remove if not using lucide-react

function Navbar({ variant = "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentActive = variant === "transparent" && !scrolled;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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

        {/* Hamburger toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
