// src/components/MenuPage.jsx
import React from "react";
import menuData from "../data/menuData";

const Price = ({ price }) => {
  if (price == null) return null;
  if (typeof price === "object") {
    return (
      <div className="price-multi">
        {Object.entries(price).map(([k, v]) => (
          <div key={k}>
            {k}: ${v.toFixed(2)}
          </div>
        ))}
      </div>
    );
  }
  return <span>${price.toFixed(2)}</span>;
};

const ItemRow = ({ item }) => (
  <article className="menu-item">
    <div className="item-left">
      <img
        className="item-photo"
        src="https://via.placeholder.com/160x100?text=Food"
        alt={`${item.name} placeholder`}
      />
    </div>
    <div className="item-right">
      <h4>{item.name}</h4>
      {item.description && <p>{item.description}</p>}
      <div className="item-meta">
        <Price price={item.price} />
        <span className="badges">
          {item.vegetarian && <small className="badge veg">Veg</small>}
          {item.vegan && <small className="badge vegan">Vegan</small>}
        </span>
      </div>
    </div>
  </article>
);

const SectionBlock = ({ section }) => (
  <section className="menu-section">
    <h2>{section.category}</h2>
    <div className="section-items">
      {section.items.map((item) => (
        <ItemRow key={item.name} item={item} />
      ))}
    </div>
  </section>
);

export default function MenuPage() {
  return (
    <main className="menu-page">
      <header className="menu-header">
        <h1>{menuData.storeName}</h1>
        <p>{menuData.note}</p>
      </header>
      <div className="menu-sections">
        {menuData.sections.map((sec) => (
          <SectionBlock key={sec.category} section={sec} />
        ))}
      </div>
      <footer className="menu-footer">
        <p>
          © {new Date().getFullYear()} {menuData.storeName}
        </p>
      </footer>
    </main>
  );
}
