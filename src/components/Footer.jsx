import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="site-nav__brand mb-3">
              <span className="site-nav__mark"></span>
              <span className="site-nav__name">Malar Blooms</span>
            </div>
            <p className="site-footer__muted">
              Hand-tied bouquets and fresh arrangements, cut and made to order
              every morning in Coimbatore.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="site-footer__heading">Visit the studio</h6>
            <address className="site-footer__muted mb-0">
              14/2 Race Course Road,<br />
              near D.B. Road signal,<br />
              R.S. Puram, Coimbatore,<br />
              Tamil Nadu 641002
            </address>
          </div>

          <div className="col-md-4">
            <h6 className="site-footer__heading">Explore</h6>
            <ul className="list-unstyled site-footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <hr className="site-footer__rule" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span className="site-footer__muted small">
            © {new Date().getFullYear()} Malar Blooms, Coimbatore. All rights reserved.
          </span>
          <span className="site-footer__muted small">Open Tue–Sun · 8:00 AM – 8:30 PM</span>
        </div>
      </div>
    </footer>
  );
}
