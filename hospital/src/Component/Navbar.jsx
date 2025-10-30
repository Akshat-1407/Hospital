import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full z-50">
      {/* ---------- TOP INFO BAR ---------- */}
      <div className="bg-gradient-to-r from-blue-100 via-teal-50 to-blue-100 border-b border-blue-200 text-gray-700 text-sm animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-2 md:py-3 space-y-2 md:space-y-0">
          {/* Left Side: Contact Info */}
          <div className="flex flex-wrap items-center gap-6 text-[15px] font-medium">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <div className="bg-green-100 p-1.5 rounded-full shadow-sm">
                <FaPhoneAlt className="text-green-700 text-sm" />
              </div>
              <span className="text-gray-800">
                <span className="font-semibold text-green-700">Call Us:</span>{" "}
                011 4652 8024
              </span>
            </div>

            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <div className="bg-blue-100 p-1.5 rounded-full shadow-sm">
                <FaEnvelope className="text-blue-600 text-sm" />
              </div>
              <span className="text-gray-800">
                <span className="font-semibold text-blue-700">Email:</span>{" "}
                admin.maatulyahospital@gmail.com
              </span>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm"
            >
              <FaFacebookF className="text-green-700 text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm"
            >
              <FaSquareXTwitter className="text-green-700 text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm"
            >
              <FaLinkedinIn className="text-green-700 text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm"
            >
              <FaInstagram className="text-green-700 text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <nav
        className={`backdrop-blur-md transition-all duration-500 ${
          scrolled ? "bg-white/80 shadow-md" : "bg-white"
        } sticky top-0 z-40`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-slideDown">
            <img
              src="/hosp_logo.png"
              alt="logo"
              className="h-20 hover:scale-105 transition-transform"
            />
            <span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif">
                 Maa Tulya Hospital
              </h1>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium text-gray-800">
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              to="/speciality"
              className="hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Specialities
            </Link>
            <Link
              to="/find_a_doctor"
              className="hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Find a Doctor
            </Link>
            <Link
              to="/contactUs"
              className="hover:text-green-700 transition-colors duration-200 hover:underline underline-offset-4"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-green-700 hover:scale-110 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-start gap-3 px-6 py-4 border-t border-green-300 animate-slideDown">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/speciality" onClick={() => setMenuOpen(false)}>
              Specialities
            </Link>
            <Link to="/find_a_doctor" onClick={() => setMenuOpen(false)}>
              Find a Doctor
            </Link>
            <Link to="/contactUs" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
