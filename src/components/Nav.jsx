import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 flex flex-col min-w-full px-3 py-1 shadow-lg z-100 bg-primary1 border-4  backdrop-blur-sm h-90">
      <div className="flex justify-between p-3 mx-1 my-2 w-full text-center  items-center gap-2 ">
        <img
          className="rounded-3xl  object-cover w-fill h-80 w-auto  object-center"
          src="/Images/logoDoll.png"
          alt="Carolina's Mex Kitchen hero image"
        />
        <Link
          to="/"
          className="text-9xl text-outline leading-tight font-cookie w-[80%]"
        >
          Carolinas Mexican Kitchen
        </Link>
        <button
          className="flex flex-col cursor-pointer w-20 h-15 items-center justify-evenly "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="w-10 h-2 bg-black rounded"></span>
          <span className="w-10 h-2 bg-black rounded"></span>
          <span className="w-10 h-2 bg-black rounded"></span>
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
