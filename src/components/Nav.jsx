import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <Link to="/" className="text-2xl font-bold text-amber-500">
          Carolina's Mex Kitchen
        </Link>
        <button
          className="flex flex-col cursor-pointer bg-transparent border-none p-0"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-amber-500 my-0.5 transition-all"></span>
          <span className="w-6 h-0.5 bg-amber-500 my-0.5 transition-all"></span>
          <span className="w-6 h-0.5 bg-amber-500 my-0.5 transition-all"></span>
        </button>
      </div>
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg flex-col ${isOpen ? "flex" : "hidden"}`}
      >
        <Link
          to="/"
          className="px-8 py-3 text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-500 transition-colors"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="px-8 py-3 text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-500 transition-colors"
          onClick={toggleMenu}
        >
          Menu
        </Link>
        <Link
          to="/reservations"
          className="px-8 py-3 text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-500 transition-colors"
          onClick={toggleMenu}
        >
          Reservations
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 text-gray-800 font-medium hover:bg-gray-100 hover:text-amber-500 transition-colors"
          onClick={toggleMenu}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
