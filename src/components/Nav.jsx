import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 flex min-w-full shadow-md z-100 items-center m-1">
      <div className="flex justify-between w-[99%] items-center p-2 gap-4  bg-amber-500">
        <img
          className="border-red-500 border-2 object-cover w-15 h-sm object-center"
          src="/images/kiss-5.jpg "
          alt="Carolina's Mex Kitchen hero image"
        />
        <Link
          to="/"
          className="text-2xl font-bold text-amber-900 font-cookie p-2 rounded"
        >
          Carolinas Mexican Kitchen
        </Link>
        <button
          className="flex flex-col gap-1.5 cursor-pointer border-none bg-amber-900 p-3 rounded "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-1 bg-green-900 block rounded"></span>
          <span className="w-6 h-0.5 bg-white block rounded"></span>
          <span className="w-6 h-0.5 bg-red-700 block rounded"></span>
        </button>
      </div>
      {isOpen && (
        <div className="bg-white border-t border-gray-200">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/reservations"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Reservations
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-800 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
