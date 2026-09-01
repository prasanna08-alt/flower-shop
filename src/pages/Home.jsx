import React from "react";
import { Link } from "react-router-dom";
import Aurora from "../components/Aurora";

const featured = [
  {
    name: "Kanakambaram Basket",
    note: "Orange kanakambaram woven with jasmine buds",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Malligai Strands",
    note: "Fresh jasmine strands, made every morning",
    price: "₹149",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunrise Rose Bunch",
    note: "24 garden roses in a hand-tied wrap",
    price: "₹1,199",
    img: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Temple Garland Set",
    note: "Pair of garlands for pooja and celebrations",
    price: "₹499",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd624PRc3M9lgR3TdaDfF8Reo25V9ZSvCdTXTg-Os8pg&s=10",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero: Aurora graphic behind the headline */}
      <Aurora variant="hero">
        <div className="container">
          <div className="row align-items-center min-vh-hero">
            <div className="col-lg-7">
              <p className="eyebrow-plain">Coimbatore, Tamil Nadu</p>
              <h1 className="hero-title">
                Flowers cut this morning, <br />in your hands by evening.
              </h1>
              <p className="hero-lead">
                Malar Blooms is a small flower studio on Race Course Road. We
                grow, source and hand-tie every order ourselves — jasmine
                strands for the hair, garlands for the doorway, bouquets for
                the people you love.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/shop" className="btn btn-bloom-primary btn-lg">
                  Browse the shop
                </Link>
                <Link to="/contact" className="btn btn-bloom-outline btn-lg">
                  Find the studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Aurora>

      {/* Trust strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-6 col-md-3">
              <div className="trust-strip__num">7+</div>
              <div className="trust-strip__label">years in R.S. Puram</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-strip__num">120</div>
              <div className="trust-strip__label">bouquets a week, by hand</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-strip__num">45 min</div>
              <div className="trust-strip__label">average delivery, in city</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-strip__num">4.8★</div>
              <div className="trust-strip__label">from Coimbatore customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured flowers */}
      <section className="section">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-md-8">
              <h2 className="section-title">This week's picks</h2>
              <p className="section-sub">
                Sourced from Ooty and Sirumugai growers, arranged the same day.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <Link to="/shop" className="link-more">
                See the full shop →
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featured.map((item) => (
              <div className="col-6 col-lg-3" key={item.name}>
                <div className="flower-card">
                  <div className="flower-card__img-wrap">
                    <img src={item.img} alt={item.name} className="flower-card__img" />
                  </div>
                  <div className="flower-card__body">
                    <h3 className="flower-card__title">{item.name}</h3>
                    <p className="flower-card__note">{item.note}</p>
                    <span className="flower-card__price">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / why choose us, image + text */}
      <section className="section section--tinted">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh flowers being arranged at Malar Blooms studio"
                className="story-img"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Made on Race Course Road, not in a warehouse</h2>
              <p className="section-sub mb-4">
                No cold storage, no imported filler. Every stem in the shop
                today came from a grower within a few hours of Coimbatore, and
                every order is tied by hand at our counter — you can watch it
                happen.
              </p>
              <ul className="checklist">
                <li>Fresh sourcing from Ooty, Sirumugai and local growers</li>
                <li>Same-day arrangements, nothing held in cold storage</li>
                <li>Delivery across Coimbatore, pickup at the studio</li>
                <li>Custom garlands and mandap flowers for events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-5">What Coimbatore says</h2>
          <div className="row g-4">
            {[
              {
                quote: "Ordered kanakambaram for my daughter's seemantham — arrived fresher than what I'd have picked myself at the market.",
                name: "Priya R., Saibaba Colony",
              },
              {
                quote: "Their jasmine strands last two full days in this heat. I've stopped going anywhere else on Race Course Road.",
                name: "Meena K., R.S. Puram",
              },
              {
                quote: "Booked the mandap flowers for a wedding at two days' notice and they still pulled it off beautifully.",
                name: "Arun & Divya, Peelamedu",
              },
            ].map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className="quote-card">
                  <p className="quote-card__text">“{t.quote}”</p>
                  <p className="quote-card__name">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band with a thin aurora strip */}
      <Aurora variant="band">
        <div className="container text-center">
          <h2 className="cta-title">Need flowers for tomorrow morning?</h2>
          <p className="cta-sub">Call the studio before 7 PM for next-day delivery in Coimbatore.</p>
          <a href="tel:+919843012345" className="btn btn-bloom-primary btn-lg">
            Call +91 98430 12345
          </a>
        </div>
      </Aurora>
    </main>
  );
}
