import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Carolina's Mex Kitchen
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/menu" className="nav-link" onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/reservations" className="nav-link" onClick={toggleMenu}>
          Reservations
        </Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>
          About
        </Link>
      </div>
    </nav>
  );
}