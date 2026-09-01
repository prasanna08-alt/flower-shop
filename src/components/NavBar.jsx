import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand site-nav__brand">
          <span className="site-nav__mark"></span>
          <span className="site-nav__name">Malar Blooms</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link" onClick={() => setOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="tel:+919843012345" className="btn btn-nav-cta ms-lg-3">
                Call: +91 98430 12345
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
