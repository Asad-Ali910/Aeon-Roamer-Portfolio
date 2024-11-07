import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0a192f] border-b-2 border-[#48cae4] px-5 py-3 fixed w-[100vw] z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-semibold text-2xl text-[#48cae4]">Aeon</div>

        {/* Hamburger icon (visible on mobile) */}
        <button
          onClick={toggleMenu}
          className="text-[#48cae4] md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex md:items-center md:space-x-6 font-bold text-[#48cae4]">
          <li>
            <Link
              to="/"
              className="hover:text-[#ffb703] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#ffb703] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[#ffb703] transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#ffb703] transition duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      <ul
        className={`fixed top-0 right-0 h-full w-[50vw] bg-[#0a192f] z-20 flex flex-col space-y-3 text-[#48cae4] font-bold p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-[#48cae4] self-end focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
          <Link
            to="/"
            className="hover:text-[#ffb703] transition duration-300 p-1"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#ffb703] transition duration-300 p-1"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-[#ffb703] transition duration-300 p-1"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#ffb703] transition duration-300 p-1"
            onClick={toggleMenu}
          >
            Contact Me
          </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
