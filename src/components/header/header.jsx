import { useState } from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="bg-[#0F172B] text-white shadow-md"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold uppercase" style={{ color: "#FEA116" }}>
        Luxe<span>Stay</span>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden space-x-6 md:flex">
          <a
            href="#"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Rooms
          </a>
          <a
            href="#"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden space-x-4 md:flex">
          <a
            href="#"
            className="text-[#FEA116] hover:text-[#fea116d3] transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-[#FEA116] hover:text-[#fea116d3] transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-[#FEA116] hover:text-[#fea116d3] transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-[#FEA116] hover:text-[#fea116d3] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-[#FEA116] hover:text-[#fea116d3] transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M3.75 5h16.5m-16.5 7h16.5m-16.5 7h16.5" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="bg-gray-800 md:hidden">
          <nav className="px-4 py-4 space-y-2">
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Home
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              About
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Services
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Rooms
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Contact
            </a>
          </nav>
          <div className="flex justify-center py-4 space-x-4">
            <a
              href="#"
              className="text-[#FEA116] hover:text-[#fea116d3]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-[#FEA116] hover:text-[#fea116d3]"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-[#FEA116] hover:text-[#fea116d3]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-[#FEA116] hover:text-[#fea116d3]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-[#FEA116] hover:text-[#fea116d3]"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
