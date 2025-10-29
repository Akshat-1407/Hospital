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
            <p className="text-lg font-medium">admin.karunahospital@gmail.com</p>
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

      {/* Footer */}
      <footer className="bg-[#3B3486] text-white py-12 px-6 md:px-20 text-sm">
        <div className="grid md:grid-cols-4 gap-10 border-t border-[#5C5792] pt-8">
          {/* Contacts */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Contacts</h3>
            <p>8588831732 9873754555</p>
            <p>011-40793535 79620024</p>
            <p>9873753999</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Email</h3>
            <p>admin.karunahospital@gmail.com</p>
            <div className="flex space-x-4 mt-3 text-white">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Home</h3>
            <ul className="space-y-1 opacity-90">
              <li>About Us</li>
              <li>NABH</li>
            </ul>
          </div>

          {/* Specialities Links */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Specialities</h3>
            <ul className="space-y-1 opacity-90">
              <li>Find a Doctor</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs mt-10 opacity-80">
          Copyright © 2025. All Rights Reserved | Designed by RNA HealthTech
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
