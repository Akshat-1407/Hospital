import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const EMERGENCY_NUMBER = "8445741993";

  // Scroll listener (sticky + progress)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrolled(scrollTop > 30);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover delay for dropdowns (wait before hiding)
  useEffect(() => {
    let timer;
    if (hoveredItem === null) {
      timer = setTimeout(() => setOpenDropdown(null), 420);
    }
    return () => clearTimeout(timer);
  }, [hoveredItem]);

  const navLinks = [
    { label: "Home", path: "/" },
    {
      label: "About Us",
      path: "/about",
      subLinks: [
        { label: "Our Vision", path: "/about#vision" },
        { label: "Our Team", path: "/about#team" },
        { label: "Certificates", path: "/about#certificates" },
      ],
    },
    {
      label: "Specialities",
      path: "/speciality",
      subLinks: [
        { label: "Cardiology", path: "/speciality#cardiology" },
        { label: "Neurology", path: "/speciality#neurology" },
        { label: "Orthopedics", path: "/speciality#orthopedics" },
        { label: "Gynecology", path: "/speciality#gynecology" },
      ],
    },
    {
      label: "Find a Doctor",
      path: "/find_a_doctor",
      subLinks: [
        { label: "By Department", path: "/find_a_doctor#department" },
        { label: "By Name", path: "/find_a_doctor#name" },
        { label: "By Experience", path: "/find_a_doctor#experience" },
      ],
    },
    { label: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="w-full  sticky top-0 left-0 z-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Maa Tulya Hospital – Multispeciality Hospital in Baghpat</title>
        <meta
          name="description"
          content="Maa Tulya Hospital provides advanced and compassionate healthcare services in Baghpat with expert doctors, modern facilities, and 24×7 emergency care."
        />
        <meta
          name="keywords"
          content="Maa Tulya Hospital, best hospital in Baghpat, multispeciality hospital, emergency hospital Baghpat, maternity hospital, cardiology, neurology, orthopedics, Maa Tulya Baghpat"
        />
        <link rel="canonical" href="https://maa-tulya-hospital.web.app/" />
        <meta
          property="og:title"
          content="Maa Tulya Hospital – Multispeciality Hospital in Baghpat"
        />
        <meta
          property="og:description"
          content="24×7 Emergency Care | Maa Tulya Hospital – advanced healthcare in Baghpat with expert doctors & modern facilities."
        />
        <meta property="og:url" content="https://maa-tulya-hospital.web.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hosp_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[4px] bg-green-600 z-[60] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* TOP INFO BAR */}
      <div className="bg-gradient-to-r from-blue-100 via-teal-50 to-blue-100 border-b border-blue-200 text-gray-700 text-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 py-3 gap-3">
          {/* Left: Contact */}
          <div className="flex items-center flex-wrap gap-4">
            <a
              href="tel:01146528024"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FaPhoneAlt className="text-green-700 text-sm" />
              <span className="text-gray-800 text-sm md:text-base">
                <span className="font-semibold text-green-700">Call Us:</span>{" "}
                011 4652 8024
              </span>
            </a>

            <a
              href="mailto:admin.maatulyahospital@gmail.com"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FaEnvelope className="text-blue-600 text-sm" />
              <span className="text-gray-800 text-sm md:text-base">
                <span className="font-semibold text-blue-700">Email:</span>{" "}
                admin.maatulyahospital@gmail.com
              </span>
            </a>
          </div>

          {/* Center optional (keeps layout balanced on wide screens) */}
          <div className="hidden lg:flex items-center justify-center flex-1" />

          {/* Right: Emergency (big) + Socials */}
          <div className="flex items-center gap-3 h-10px">
            {/* Large Emergency - desktop/tablet */}
            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              aria-label="Call Emergency"
              className="hidden md:flex items-center px-3 py-1.5 rounded-full text-white font-semibold text-lg shadow-2xl transform transition-all duration-300 animate-emergencyPulse"
              style={{
                // gradient-like background that still uses red/orange palette
                background:
                  "linear-gradient(90deg, #dc2626 0%, #f97316 50%, #ef4444 100%)",
              }}
            >
              <img
                src="https://www.pushpanjalihospitals.com/public/assets/fontend/img/icons/emergency.png"
                alt="Ambulance"
                className="h-8 w-8 mr-3 drop-shadow-md"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm opacity-80">Emergency</span>
                <span className="text-base font-bold tracking-wide">
                  {EMERGENCY_NUMBER}
                </span>
              </div>
            </a>

            {/* Social icons */}
            {[FaFacebookF, FaSquareXTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 bg-white hover:bg-green-100 border border-green-200 rounded-full transition-all transform hover:scale-110 shadow-sm"
                  aria-label={`Open social ${idx}`}
                >
                  <Icon className="text-green-700 text-sm" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`transition-all duration-500 ease-in-out w-full backdrop-blur-lg ${
          scrolled ? "bg-white/80 shadow-md border-b border-gray-200 py-2" : "bg-white/95 py-2"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 relative">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
            role="button"
            tabIndex={0}
          >
            <img
              src="/hosp_logo.png"
              alt="Maa Tulya Hospital logo"
              className={`transition-all duration-500 ${scrolled ? "h-14" : "h-20"} hover:scale-105`}
            />
            <h1
              className={`font-bold font-serif text-[#3B3486] transition-all duration-500 ${
                scrolled ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
              } hover:text-green-700`}
            >
              Maa Tulya Hospital
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-800">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => {
                  setHoveredItem(i);
                  if (item.subLinks) setOpenDropdown(i);
                }}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className="flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-green-700 relative after:absolute after:w-0 after:h-[2px] after:bg-green-600 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => {
                    if (!item.subLinks) setOpenDropdown(null);
                  }}
                >
                  <Link to={item.path}>{item.label}</Link>
                  {item.subLinks && (
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${openDropdown === i ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* Dropdown (desktop) */}
                {item.subLinks && openDropdown === i && (
                  <div className="absolute left-0 top-full mt-3 bg-gradient-to-b from-green-50 to-blue-50 shadow-lg rounded-xl border border-green-200 min-w-[220px] animate-dropdownFade z-50">
                    {item.subLinks.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        className="block px-5 py-2 hover:bg-green-100 text-gray-700 transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-green-700 hover:scale-110 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-start gap-3 px-6 py-4 border-t border-green-300 animate-slideDown">
            {navLinks.map((item, i) => (
              <div key={i} className="w-full">
                <div
                  onClick={() => {
                    if (item.subLinks) {
                      setOpenDropdown(openDropdown === i ? null : i);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="flex justify-between items-center w-full py-2 text-lg border-b border-green-100"
                >
                  <Link to={item.path}>{item.label}</Link>
                  {item.subLinks && (
                    <IoIosArrowDown className={`transition-transform duration-300 ${openDropdown === i ? "rotate-180" : ""}`} />
                  )}
                </div>

                {item.subLinks && openDropdown === i && (
                  <div className="pl-4 animate-fadeSlideDown">
                    {item.subLinks.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-gray-700 hover:text-green-700"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Emergency inside menu */}
            <div className="w-full mt-4">
              <a
                href={`tel:${EMERGENCY_NUMBER}`}
                aria-label="Call Emergency"
                className="flex items-center px-5 py-3 rounded-full text-white font-semibold text-lg shadow-2xl w-full justify-center animate-emergencyPulse"
                style={{
                  background: "linear-gradient(90deg, #dc2626 0%, #f97316 50%, #ef4444 100%)",
                }}
              >
                <img
                  src="https://www.pushpanjalihospitals.com/public/assets/fontend/img/icons/emergency.png"
                  alt="Ambulance"
                  className="h-6 w-6 mr-3"
                />
                <span>Emergency - {EMERGENCY_NUMBER}</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Emergency button for mobile */}
      <a
        href={`tel:${EMERGENCY_NUMBER}`}
        aria-label="Call Emergency"
        className="fixed bottom-5 right-4 z-60 md:hidden flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transform transition-all duration-300 animate-floatRing"
        style={{
          background: "linear-gradient(90deg, #dc2626 0%, #f97316 50%, #ef4444 100%)",
        }}
      >
        <img
          src="https://www.pushpanjalihospitals.com/public/assets/fontend/img/icons/emergency.png"
          alt="Ambulance"
          className="h-8 w-8 drop-shadow-md"
        />
      </a>

      {/* Animations & small helper styles */}
      <style>{`
        @keyframes dropdownFade {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-dropdownFade { animation: dropdownFade 0.28s ease forwards; }

        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideDown { animation: fadeSlideDown 0.38s ease forwards; }

        @keyframes emergencyPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0.35); }
          40% { transform: scale(1.06); box-shadow: 0 0 30px rgba(249,115,22,0.25); }
          70% { transform: scale(1.03); box-shadow: 0 0 18px rgba(185,28,28,0.35); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0.35); }
        }
        .animate-emergencyPulse { animation: emergencyPulse 2.2s infinite ease-in-out; }

        @keyframes floatRing {
          0% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
          50% { transform: translateY(-6px) scale(1.02); box-shadow: 0 10px 20px rgba(0,0,0,0.18); }
          100% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        }
        .animate-floatRing { animation: floatRing 3s infinite ease-in-out; }

        /* subtle dropdown show/hide smoothing */
        .animate-slideDown { animation: fadeSlideDown 0.35s ease forwards; }
      `}</style>
    </div>
  );
}

export default Navbar;
