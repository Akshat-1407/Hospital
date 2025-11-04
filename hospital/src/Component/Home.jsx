import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-serif text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#37327A] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-bold leading-snug">
            Care With Compassion
          </h1>
          <p className="text-gray-200 text-lg">
            Bringing together technology and empathy to make a difference for
            every individual. Maa Tulya Hospital strives to provide
            state-of-the-art medical care at accessible costs.
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#37327A] transition">
            NABH Certificate
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="./building.jpg"
            alt="hospital"
            className="rounded-xl shadow-lg w-full max-w-md "
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className=" hidden md:flex items-center gap-8 text-lg font-medium bg-[#37327A] text-white px-8 md:px-24 py-16 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-semibold mb-3">
            About Maa Tulya Hospital
          </h2>
          <p className="text-gray-200 mb-6 max-w-3xl">
            Established in 2011, Maa Tulya Hospital is known for its expertise
            in both outpatient and inpatient healthcare. The hospital employs a
            team of expert doctors who believe in compassionate and holistic
            care for all patients.
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#37327A] transition">
            Read More
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <h1> video</h1>
        </div>
      </section>

      {/* ================= Center Of Excellence ================= */}
      <section className="bg-[#FFF9F3] px-8 md:px-24 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">Center Of Excellence</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Internal Medicine",
              desc: "Treatment for diabetes, hypertension, infections, and chronic diseases by expert physicians.",
            },
            {
              title: "Obst & Gynae",
              desc: "Comprehensive maternity and gynecological care including prenatal, delivery, and fertility services.",
            },
            {
              title: "Endocrinology",
              desc: "Expert diagnosis and management of thyroid, diabetes, and hormone-related disorders.",
            },
            {
              title: "Infectious Disease",
              desc: "Specialized diagnosis and treatment of bacterial, viral, and parasitic infections.",
            },
            {
              title: "Surgery",
              desc: "General and laparoscopic surgeries with advanced facilities and experienced surgeons.",
            },
            {
              title: "Orthopaedics",
              desc: "Bone and joint care including fractures, arthritis, and sports injuries.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="border border-red-300 p-6 rounded-xl hover:shadow-lg bg-white transition"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-[#37327A] text-white px-6 py-2 rounded-full hover:bg-[#2b2763] transition">
          View More
        </button>
      </section>

      {/* ================= DIRECTOR'S MESSAGE ================= */}
      <section className="bg-[#37327A] text-white px-8 md:px-24 py-16 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-6">Director’s Message</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-200 mb-4 leading-relaxed">
              As the founder of Maa Tulya Hospital, I have always believed that
              empathy and compassion form the foundation of true medical
              excellence. Our mission is to combine advanced technology with
              human care to provide quality treatment accessible to everyone.
            </p>
            <p className="italic text-gray-300">– Dr. Prashant Sharma</p>
          </div>
          <img
            src="https://karunahospital.in/wp-content/uploads/2024/03/dr-rajeev-gupta.jpeg"
            alt="Director"
            className="md:w-1/3 rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#FFF9F3] px-8 md:px-24 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Clinical Excellence</h3>
            <p>
              Our team of doctors brings decades of combined experience and
              expertise.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Emergency Services</h3>
            <p>We provide 24/7 emergency services and critical care support.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Pharmacy</h3>
            <p>Get prescribed medicines easily from our in-house pharmacy.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#E8614C] text-white p-8 rounded-xl max-w-xl mx-auto italic">
            “Empathy lies at the core of our service values reflected in
            compassionate treatment and expert care.”
          </div>
        </div>
      </section>
      {/* 🌆 Enhanced Footer Section */}
      <footer className="bg-gradient-to-br from-[#3B3486] via-[#4A4299] to-[#6B63C7] text-white pt-16 pb-8 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/20 pb-10">
          {/* Hospital Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Maa Tulya Hospital</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Dedicated to providing compassionate and quality healthcare to
              every individual with trust and care.
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
              <li>
                <a href="/" className="hover:text-[#FFD700]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#FFD700]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/speciality" className="hover:text-[#FFD700]">
                  Specialities
                </a>
              </li>
              <li>
                <a href="/contactUs" className="hover:text-[#FFD700]">
                  Contact
                </a>
              </li>
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
          <p>
            © {new Date().getFullYear()} Maa Tulya Hospital. All Rights
            Reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Designed & Developed by{" "}
            <span className="font-semibold text-[#FFD700]">ADITYA SHARMA</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
