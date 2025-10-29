import {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50 ">
        <div className="flex items-center justify-between px-6 md:px-16 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/public/logo_hosp.jpg"
              alt="logo"
              className="h-12"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-lg">
            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-700">
              AboutUs
            </Link>
            <Link to="/speciality" className="hover:text-blue-700">
              Specialities
            </Link>
            <Link to="/diagnosticServices" className="hover:text-blue-700">
              Diagnostic Services
            </Link>
            <Link to="/find_a_doctor" className="hover:text-blue-700">
              Find a Doctor
            </Link>
            <Link to="/contactUs" className="hover:text-blue-700">
              ContactUs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-yellow-100 flex flex-col items-start gap-3 px-6 py-4 border-t border-yellow-300">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              AboutUs
            </Link>
            <Link to="/speciality" onClick={() => setMenuOpen(false)}>
              Specialities
            </Link>
            <Link to="/diagnosticServices" onClick={() => setMenuOpen(false)}>
              Diagnostic Services
            </Link>
            <Link to="/find_a_doctor" onClick={() => setMenuOpen(false)}>
              Find a Doctor
            </Link>
            <Link to="/contactUs" onClick={() => setMenuOpen(false)}>
              ContactUs
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar