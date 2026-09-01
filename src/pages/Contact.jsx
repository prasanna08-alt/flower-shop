import React, { useState } from "react";
import Aurora from "../components/Aurora";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <Aurora variant="band">
        <div className="container">
          <p className="eyebrow-plain">Visit or write to us</p>
          <h1 className="page-title">Malar Blooms, R.S. Puram, Coimbatore</h1>
          <p className="page-lead">
            Drop by the studio, call ahead for same-day orders, or send a
            message below and we'll reply within the day.
          </p>
        </div>
      </Aurora>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="section-title mb-4">Studio details</h2>

              <div className="contact-block">
                <h6 className="contact-block__label">Address</h6>
                <address className="contact-block__value">
                  14/2 Race Course Road,<br />
                  near D.B. Road signal,<br />
                  R.S. Puram, Coimbatore,<br />
                  Tamil Nadu 641002, India
                </address>
              </div>

              <div className="contact-block">
                <h6 className="contact-block__label">Phone</h6>
                <p className="contact-block__value">
                  <a href="tel:+919843012345">+91 98430 12345</a>
                </p>
              </div>

              <div className="contact-block">
                <h6 className="contact-block__label">Email</h6>
                <p className="contact-block__value">
                  <a href="mailto:hello@malarblooms.in">hello@malarblooms.in</a>
                </p>
              </div>

              <div className="contact-block">
                <h6 className="contact-block__label">Hours</h6>
                <p className="contact-block__value mb-1">Tuesday – Sunday: 8:00 AM – 8:30 PM</p>
                <p className="contact-block__value">Monday: closed for sourcing</p>
              </div>

              <div className="contact-block">
                <h6 className="contact-block__label">Delivery area</h6>
                <p className="contact-block__value">
                  R.S. Puram, Saibaba Colony, Peelamedu, Gandhipuram and
                  central Coimbatore — usually within 45 minutes.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="map-frame mb-4">
                <iframe
                  title="Malar Blooms location in R.S. Puram, Coimbatore"
                  src="https://www.google.com/maps?q=R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="form-card">
                <h2 className="section-title mb-1">Send a message</h2>
                <p className="section-sub mb-4">For orders, call directly — this form is for events and general questions.</p>

                {sent ? (
                  <div className="form-success">
                    Thank you — your message has reached the studio. We'll
                    call you back shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="occasion" className="form-label">Occasion</label>
                        <select className="form-select" id="occasion" defaultValue="Bouquet">
                          <option>Bouquet</option>
                          <option>Wedding / mandap</option>
                          <option>Pooja / temple garlands</option>
                          <option>Other event</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" required />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-bloom-primary mt-4">
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
