import React, { useMemo, useState } from "react";
import Aurora from "../components/Aurora";

const CATALOG = [
  {
    name: "Sunrise Rose Bunch",
    category: "Bouquets",
    price: 1199,
    img: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80",
    note: "24 garden roses, hand-tied with eucalyptus.",
  },
  {
    name: "Kanakambaram Basket",
    category: "Baskets",
    price: 899,
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    note: "Orange kanakambaram woven with jasmine buds.",
  },
  {
    name: "Malligai Strands (3 ft)",
    category: "Jasmine",
    price: 149,
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
    note: "Fresh jasmine strands, made every morning.",
  },
  {
    name: "Temple Garland Set",
    category: "Garlands",
    price: 499,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd624PRc3M9lgR3TdaDfF8Reo25V9ZSvCdTXTg-Os8pg&s=10",
    note: "Pair of garlands for pooja and celebrations.",
  },
  {
    name: "Lily & Orchid Vase",
    category: "Arrangements",
    price: 1499,
    img: "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=800&q=80",
    note: "Asiatic lilies and orchids in a ceramic vase.",
  },
  {
    name: "Marigold Mandap Rope",
    category: "Events",
    price: 349,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTie-TwVN2Ung6ewn3SS6NvBo-EQku7-Y7gJS4h2UdL6w&s=10",
    note: "Priced per running foot, minimum 10 ft.",
  },
  {
    name: "Mixed Seasonal Bunch",
    category: "Bouquets",
    price: 699,
    img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80",
    note: "Whatever's freshest at the flower market today.",
  },
  {
    name: "Sadhankattai Basket",
    category: "Baskets",
    price: 799,
    img: "https://images.unsplash.com/photo-1595351298020-038700609878?auto=format&fit=crop&w=800&q=80",
    note: "Mixed local blooms in a cane basket, sturdy for gifting.",
  },
  {
    name: "Bridal Jasmine Gajra",
    category: "Jasmine",
    price: 249,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    note: "Thick double-strand gajra for weddings and functions.",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(CATALOG.map((p) => p.category)))];

export default function Shop() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? CATALOG : CATALOG.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main>
      <Aurora variant="band">
        <div className="container">
          <p className="eyebrow-plain">The shop</p>
          <h1 className="page-title">Order flowers for pickup or delivery</h1>
          <p className="page-lead">
            Everything below is arranged in-studio the day it's ordered.
            Delivery covers Coimbatore city; call ahead for events outside town.
          </p>
        </div>
      </Aurora>

      <section className="section">
        <div className="container">
          <div className="filter-row" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${active === cat ? "filter-chip--active" : ""}`}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-4 mt-1">
            {visible.map((item) => (
              <div className="col-6 col-lg-4" key={item.name}>
                <div className="flower-card flower-card--shop">
                  <div className="flower-card__img-wrap">
                    <img src={item.img} alt={item.name} className="flower-card__img" />
                    <span className="flower-card__tag">{item.category}</span>
                  </div>
                  <div className="flower-card__body">
                    <h3 className="flower-card__title">{item.name}</h3>
                    <p className="flower-card__note">{item.note}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="flower-card__price">₹{item.price.toLocaleString("en-IN")}</span>
                      <a href="tel:+919843012345" className="btn btn-bloom-outline btn-sm">
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="section-title">Ordering for a wedding or event?</h2>
              <p className="section-sub mb-4">
                Mandap flowers, entrance décor and bulk garlands are quoted
                separately based on venue and date. Bring a photo of the
                venue or send us your Pinterest board — we'll work from that.
              </p>
              <a href="tel:+919843012345" className="btn btn-bloom-primary">
                Talk to the studio
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80"
                alt="Marigold and rose mandap decoration"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
