// src/components/Navbar.jsx
import "./Navbar.css";
import logo from "../../assets/headerlogoalt.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Skyro Renovations Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>{" "}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
