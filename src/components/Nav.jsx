import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 flex flex-col min-w-full px-3 py-1 shadow-lg z-100 bg-amber-500/80 border-4  backdrop-blur-sm">
      <div className="flex justify-around w-full text-center  items-center gap-2 ">
        <img
          className="  rounded-3xl border object-cover w-fill h-30  object-center"
          src="/Images/logoDoll.jpg"
          alt="Carolina's Mex Kitchen hero image"
        />
        <Link
          to="/"
          className="text-6xl text-outline leading-tight font-cookie"
        >
          Carolinas Mexican Kitchen
        </Link>
        <button
          className="flex flex-col gap-1.5 cursor-pointer border-2 bg-white p-2 rounded "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-1 bg-black block rounded"></span>
          <span className="w-6 h-1 bg-black block rounded"></span>
          <span className="w-6 h-1 bg-black block rounded"></span>
        </button>
      </div>
      {isOpen && (
        <div className=" bg-stone-500 flex flex-row justify-center items-center h-10 w-full border-black text-md p-5">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block px-6 py-3 text-gray-900 hover:bg-amber-50 hover:text-amber-600 transition-colors"
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
