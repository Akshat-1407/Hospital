import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-serif text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#37327A] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Care With <br /> Compassion
          </h1>
          <p className="text-gray-200 text-lg">
            Bringing together technology and empathy to make a difference for
            every individual. Karuna Hospital strives to provide state-of-the-art
            medical care at accessible costs.
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#37327A] transition">
            NABH Certificate
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://karunahospital.in/wp-content/uploads/2024/03/kh-head.jpg"
            alt="hospital"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#37327A] text-white px-8 md:px-24 py-16 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-3">About Karuna Hospital</h2>
        <p className="text-gray-200 mb-6 max-w-3xl">
          Established in 2011, Karuna Hospital is known for its expertise in both
          outpatient and inpatient healthcare. The hospital employs a team of
          expert doctors who believe in compassionate and holistic care for all
          patients.
        </p>
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#37327A] transition">
          Read More
        </button>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="bg-[#FFF9F3] px-8 md:px-24 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Services</h2>

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
              As the founder of Karuna Hospital, I have always believed that
              empathy and compassion form the foundation of true medical
              excellence. Our mission is to combine advanced technology with
              human care to provide quality treatment accessible to everyone.
            </p>
            <p className="italic text-gray-300">– Dr. Rajeev Gupta</p>
          </div>
          <img
            src="https://karunahospital.in/wp-content/uploads/2024/03/director.jpg"
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
            <p>Our team of doctors brings decades of combined experience and expertise.</p>
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
            “Empathy lies at the core of our service values reflected in compassionate
            treatment and expert care.”
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative">
        <img
          src="https://karunahospital.in/wp-content/uploads/2024/03/lab.jpg"
          alt="lab"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Start Your Journey To Improved Health Today
          </h2>
          <button className="bg-white text-[#37327A] px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Book An Appointment
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#37327A] text-white px-8 md:px-24 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Write To Us</h2>
        <p className="text-gray-300 mb-6">Share your feedback</p>
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#37327A] transition">
          Get In Touch
        </button>
        <div className="mt-10 text-gray-300 text-sm">
          <p>© 2024. All Rights Reserved | Designed by MIA-HealthTech</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;