import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className="text-2xl font-bold text-white hover:text-indigo-400 transition">
            Muhammad Azaz
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <a
            href="#about"
            className="hover:text-indigo-400 transition text-gray-300 px-4 py-2 md:py-0"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition text-gray-300 px-4 py-2 md:py-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-400 transition text-gray-300 px-4 py-2 md:py-0"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-400 transition text-gray-300 px-4 py-2 md:py-0"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
