// src/components/MenuPage.jsx
import React from "react";
import menuData from "../data/menuData";

const Price = ({ price }) => {
  if (price == null) return null;
  if (typeof price === "object") {
    return (
      <div className="flex flex-col gap-1">
        {Object.entries(price).map(([k, v]) => (
          <div key={k} className="text-sm">
            {k}: ${v.toFixed(2)}
          </div>
        ))}
      </div>
    );
  }
  return <span className="font-semibold">${price.toFixed(2)}</span>;
};

const ItemRow = ({ item }) => (
  <article className="grid grid-cols-[160px_1fr] gap-3 mb-3 p-2.5 bg-amber-500 rounded-lg">
    <div className="item-left">
      <img
        className="w-40 h-24 object-cover rounded-lg"
        src="https://via.placeholder.com/160x100?text=Food"
        alt={`${item.name} placeholder`}
      />
    </div>
    <div className="item-right">
      <h4 className="m-0 mb-1.5 font-semibold text-gray-800">{item.name}</h4>
      {item.description && (
        <p className="m-0 mx-1.5 mb-2.5 text-gray-700 text-sm">
          {item.description}
        </p>
      )}
      <div className="flex items-center justify-between">
        <Price price={item.price} />
        <span className="flex gap-1.5">
          {item.vegetarian && (
            <small className="px-2 py-0.5 rounded-full text-xs font-bold text-white bg-green-600">
              Veg
            </small>
          )}
          {item.vegan && (
            <small className="px-2 py-0.5 rounded-full text-xs font-bold text-white bg-teal-700">
              Vegan
            </small>
          )}
        </span>
      </div>
    </div>
  </article>
);

const SectionBlock = ({ section }) => (
  <section className="mt-7">
    <h2 className="border-b-2 border-white pb-2 mb-4 text-gray-500 text-lg font-semibold">
      {section.category}
    </h2>
    <div className="space-y-3">
      {section.items.map((item) => (
        <ItemRow key={item.name} item={item} />
      ))}
    </div>
  </section>
);

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-6 font-sans text-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl mb-1.5 font-bold">{menuData.storeName}</h1>
        <p className="text-gray-500 m-0">{menuData.note}</p>
      </header>
      <div className="space-y-7">
        {menuData.sections.map((sec) => (
          <SectionBlock key={sec.category} section={sec} />
        ))}
      </div>

      <footer className="text-center mt-9 text-gray-600">
        <p>
          © {new Date().getFullYear()} {menuData.storeName}
        </p>
      </footer>
    </main>
  );
}
