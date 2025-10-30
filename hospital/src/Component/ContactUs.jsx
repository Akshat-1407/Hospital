import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#3B3486] text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-snug">
          Get in Touch or Book an Appointment
        </h1>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-10">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-4xl mb-4 text-white" />
            <p className="text-lg font-medium">8588831732 &nbsp; 9873753999</p>
            <p className="text-lg font-medium">011-40793535 &nbsp; 011-79620024</p>
            <p className="text-lg font-medium">9873754555</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl mb-4 text-white" />
            <p className="text-lg font-medium">admin.maatulyahospital@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#F7F0EB] py-16 px-6 md:px-20 flex justify-center">
        <form className="bg-transparent border border-gray-300 rounded-lg p-6 md:p-10 w-full max-w-3xl shadow-sm">
          {/* Name */}
          <div className="mb-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B3486]"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B3486]"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-5">
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B3486]"
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B3486]"
            ></textarea>
          </div>

          {/* Captcha + Submit */}
          <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">6 + 1 =</label>
              <input
                type="text"
                className="w-12 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#3B3486]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#3B3486] hover:bg-[#2E2872] text-white font-semibold py-2 px-8 rounded-full transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* 🌆 Enhanced Footer Section */}
      <footer className="bg-gradient-to-br from-[#3B3486] via-[#4A4299] to-[#6B63C7] text-white pt-16 pb-8 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/20 pb-10">
          {/* Hospital Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Maa Tulya Hospital</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Dedicated to providing compassionate and quality healthcare
              to every individual with trust and care.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <i className="fab fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>📍 Plot No. 12, Sector 9, Dwarka, New Delhi</li>
              <li>📞 8588831732 / 9873754555</li>
              <li>☎️ 011-40793535 / 011-79620024</li>
              <li>✉️ admin.maatulyahospital@gmail.com</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><a href="/" className="hover:text-[#FFD700]">Home</a></li>
              <li><a href="/about" className="hover:text-[#FFD700]">About Us</a></li>
              <li><a href="/specialities" className="hover:text-[#FFD700]">Specialities</a></li>
              <li><a href="/contact" className="hover:text-[#FFD700]">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>✔️ Emergency & Trauma Care</li>
              <li>✔️ Multi-Speciality OPD</li>
              <li>✔️ Diagnostic & Lab Services</li>
              <li>✔️ Maternity & Child Care</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-300 text-xs border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} Maa Tulya Hospital. All Rights Reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed & Developed by{" "}
            <span className="font-semibold text-[#FFD700]">ADITYA SHARMA</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
