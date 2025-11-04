import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function FindDoctor() {
  const doctors = [
    {
      name: "Dr. Prashant Sharma",
      speciality: "Internal Medicine",
      img: "/images/doctors/rajeev-gupta.jpg",
    },
    {
      name: "Dr. Satya Prakash",
      speciality: "Obstetric and Gynaecology",
      img: "/images/doctors/archana-gupta.jpg",
    },
    {
      name: "Dr. Sethi Gupta",
      speciality: "Endocrinologist",
      img: "/images/doctors/sethi-gupta.jpg",
    },
    {
      name: "Dr. Saloni Seth",
      speciality: "Psychiatrist",
      img: "/images/doctors/saloni-seth.jpg",
    },
    {
      name: "Dr. Sachin Kumar",
      speciality: "Dermatologist",
      img: "/images/doctors/sachin-kumar.jpg",
    },
    {
      name: "Dr. Anvitun Aggarwal",
      speciality: "Infectious Diseases",
      img: "/images/doctors/anvitun-aggarwal.jpg",
    },
    {
      name: "Dr. Rajnish Kashyap",
      speciality: "Laparoscopic / General Surgeon",
      img: "/images/doctors/rajnish-kashyap.jpg",
    },
    {
      name: "Dr. Rajan Sareen",
      speciality: "Pediatrician",
      img: "/images/doctors/rajan-sareen.jpg",
    },
    {
      name: "Dr. Abhishek Aggarwal",
      speciality: "Neurologist",
      img: "/images/doctors/abhishek-aggarwal.jpg",
    },
    {
      name: "Dr. Rahul Ramteke",
      speciality: "Cardiologist",
      img: "/images/doctors/rahul-ramteke.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#3B3486] text-white text-center py-16 px-6"
      >
        <h1 className="text-5xl font-serif font-semibold mb-6">
          Find Your Doctor
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100">
          At Maa Tulya Hospital, we believe in the power of expertise and
          empathy. Our team of experienced doctors from various specialities
          ensures personalized care and advanced treatment for every patient.
        </p>
        <button className="mt-8 border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[#3B3486] transition-all">
          Book Appointment
        </button>
      </motion.section>

      {/* Doctors Section */}
      <section className="bg-[#F7F0EB] py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-semibold mb-4 text-[#3B3486]"
        >
          Meet Our Expert Doctors
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg mb-12">
          Each doctor at Maa Tulya Hospital brings years of clinical experience,
          compassionate patient interaction, and a commitment to excellence in
          healthcare. Discover our team of specialists who work together to
          provide holistic and integrated medical solutions.
        </p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-[#E4DAD2] rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col items-center"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-[#3B3486]/20"
              />
              <h3 className="text-[#3B3486] font-serif font-semibold text-lg md:text-xl mb-1">
                {doctor.name}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {doctor.speciality}
              </p>
              <button className="text-[#3B3486] border border-[#3B3486] px-4 py-1 rounded-full hover:bg-[#3B3486] hover:text-white transition-all duration-200">
                <a href="DrPrashantSharma.jsx">View Profile</a>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compassion Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-20 px-6 md:px-20 text-center"
      >
        <h2 className="text-4xl font-serif font-semibold text-[#3B3486] mb-6">
          Compassion Meets Expertise
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          Every consultation at Maa Tulya Hospital is a step toward better
          health, guided by trust and care. Our doctors combine the art of
          healing with modern medical science to ensure that you receive the
          best treatment possible.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#3B3486] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#2E277A] transition-all"
        >
          Consult Now
        </motion.button>
      </motion.section>

      {/* Write To Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#3B3486] to-[#5C55A5] text-white text-center py-20 px-6"
      >
        <h2 className="text-4xl font-serif font-semibold mb-4">
          Need Help Finding a Doctor?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
          Unsure which specialist to consult? Let us guide you. Share your
          symptoms or health concerns, and our medical team will connect you
          with the right doctor for your needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-[#3B3486] rounded-full px-8 py-3 font-semibold hover:bg-[#E4E4E4] transition-all"
        >
          Get Assistance
        </motion.button>
      </motion.section>

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

export default FindDoctor;
