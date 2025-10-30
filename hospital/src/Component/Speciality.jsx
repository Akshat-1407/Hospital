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

function Specialities() {
  const specialities = [
    {
      title: "Internal Medicine",
      text: "Our internal medicine department provides preventive, diagnostic, and therapeutic services for adult diseases. We specialize in managing complex medical conditions with personalized attention.",
    },
    {
      title: "Obstetrics & Gynaecology",
      text: "From routine checkups to high-risk pregnancies, our experienced gynaecologists and obstetricians ensure comprehensive care for every woman at every stage of life.",
    },
    {
      title: "Paediatrics & Neonatology",
      text: "Our pediatric specialists focus on your child’s complete health journey — from newborn care and vaccinations to treatment of childhood diseases with compassion and expertise.",
    },
    {
      title: "Orthopaedics & Joint Replacement",
      text: "We provide specialized care for fractures, arthritis, and sports injuries. Our advanced orthopaedic team ensures quick recovery with minimal discomfort.",
    },
    {
      title: "Cardiology",
      text: "Offering advanced cardiac diagnostics and treatment, we help patients manage and recover from heart conditions with precision and care.",
    },
    {
      title: "Neurology & Neurosurgery",
      text: "Comprehensive care for disorders of the brain, spine, and nervous system using state-of-the-art neuroimaging and surgical expertise.",
    },
    {
      title: "Gastroenterology",
      text: "We specialize in the prevention, diagnosis, and treatment of digestive and liver diseases using endoscopic and minimally invasive procedures.",
    },
    {
      title: "Urology & Nephrology",
      text: "Expert management of kidney diseases, urinary tract disorders, and dialysis with compassionate and advanced medical care.",
    },
    {
      title: "Dermatology & Cosmetology",
      text: "Providing expert skincare and cosmetic treatments for all ages using the latest dermatological advancements.",
    },
    {
      title: "ENT (Ear, Nose & Throat)",
      text: "Specialized treatment for hearing loss, sinus issues, throat infections, and other ENT conditions using advanced diagnostic technology.",
    },
    {
      title: "Radiology & Imaging",
      text: "Our 24×7 radiology department uses cutting-edge imaging tools such as CT, MRI, and ultrasound for precise and timely diagnosis.",
    },
    {
      title: "Pathology & Lab Services",
      text: "Accurate and quick test results from our NABL-standard labs ensure prompt diagnosis and treatment decisions.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#3B3486] text-white text-center py-16 px-6"
      >
        <h1 className="text-5xl font-serif font-semibold mb-6">
          Our Specialities
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100">
          Maa Tulya Hospital houses multiple departments working in synergy to
          provide holistic healthcare. Our team of specialists, equipped with
          modern technology, ensures accurate diagnosis, effective treatment,
          and compassionate care — all under one roof.
        </p>
        <button className="mt-8 border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[#3B3486] transition-all">
          Book Appointment
        </button>
      </motion.section>

      {/* Departments Section */}
      <section className="bg-[#F7F0EB] py-16 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif font-semibold text-[#3B3486] mb-4"
        >
          Centres of Excellence
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg mb-12">
          At Maa Tulya Hospital, we have created dedicated departments that
          deliver excellence across specialities. Each department combines
          expert doctors, advanced technology, and patient-centered service to
          achieve the highest standard of care.
        </p>

        {/* Grid of Specialities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-[#E4DAD2] rounded-2xl p-8 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-semibold text-[#3B3486] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Patient-Centric Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 px-6 md:px-20 text-center"
      >
        <h2 className="text-4xl font-serif font-semibold text-[#3B3486] mb-6">
          Patient-Centric Approach
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          Every department at Maa Tulya Hospital operates with one guiding
          principle — patient first. From preventive health checkups to
          emergency care, we ensure safety, empathy, and quality at every step.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#3B3486] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#2E277A] transition-all"
        >
          View Health Packages
        </motion.button>
      </motion.section>

      {/* Write To Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#3B3486] to-[#5C55A5] text-white text-center py-20 px-6"
      >
        <h2 className="text-4xl font-serif font-semibold mb-4">
          Write To Us
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
          Have a question or need an appointment? We’d love to hear from you.
          Reach out for consultations, health advice, or any feedback — our team
          will respond promptly.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-[#3B3486] rounded-full px-8 py-3 font-semibold hover:bg-[#E4E4E4] transition-all"
        >
          Get In Touch
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

export default Specialities;