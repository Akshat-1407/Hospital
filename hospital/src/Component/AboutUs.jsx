import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaStethoscope, FaHandsHelping } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#3B3486] text-white text-center py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
            About Maa Tulya Hospital
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed opacity-90">
            Maa Tulya Hospital, established in 2025, stands as a beacon of care,
            compassion, and medical excellence. We aim to bring modern healthcare
            within the reach of every family — guided by empathy, integrity, and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="mt-10 border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-[#3B3486] transition-all"
          >
            View NABH Certificate
          </motion.button>
        </motion.div>

        {/* Floating Glow Elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute bottom-0 left-10 w-48 h-48 bg-[#5C5792]/30 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Who We Are */}
      <section className="bg-[#F9F8FC] py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-semibold text-[#3B3486] mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed"
        >
          Maa Tulya Hospital is a multi-specialty healthcare institution dedicated to
          offering high-quality medical services in a patient-centered environment.
          We combine advanced medical technology with compassionate care to ensure
          a healing experience that respects both the science and the soul of medicine.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaHeartbeat className="text-[#3B3486] text-4xl mb-4" />,
              title: "Comprehensive Care",
              desc: "From preventive check-ups to complex surgeries, we ensure every patient receives personalized, continuous care across all departments.",
            },
            {
              icon: <FaStethoscope className="text-[#3B3486] text-4xl mb-4" />,
              title: "Expert Doctors",
              desc: "Our team consists of experienced specialists and surgeons trained in top institutions, united by the mission to heal with empathy.",
            },
            {
              icon: <FaHandsHelping className="text-[#3B3486] text-4xl mb-4" />,
              title: "Community Commitment",
              desc: "Beyond treatment, we focus on promoting preventive health awareness and wellness programs that uplift our local community.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#3B3486] mb-3">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#F7F0EB] py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#3B3486] mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            To emerge as a trusted name in quality healthcare by combining medical expertise,
            advanced technology, and compassion. Maa Tulya Hospital envisions a society
            where healthcare is accessible, affordable, and driven by empathy — 
            ensuring that every individual feels valued, heard, and healed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-4 gap-4"
        >
          {Array(12)
            .fill()
            .map((_, i) => (
              <motion.span
                key={i}
                className="w-3 h-3 bg-[#5D768C] rounded-full opacity-80"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.15,
                }}
              ></motion.span>
            ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#3B3486] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            “Maa” represents empathy, nurturing, and unconditional care — values
            deeply embedded in our mission. We are devoted to delivering
            compassionate, ethical, and patient-first healthcare through continuous
            innovation and education, ensuring every life we touch is transformed with love and respect.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#3B3486]">
            Our Core Values
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg">
            <li>Empathy and respect for every patient and family.</li>
            <li>Transparency and ethical medical practices.</li>
            <li>Innovation in clinical care and technology.</li>
            <li>Teamwork, accountability, and compassion at all levels.</li>
            <li>Commitment to learning and continuous improvement.</li>
            <li>Efficient and sustainable management for community welfare.</li>
          </ul>
        </motion.div>

        {/* Floating Glow */}
        <motion.div
          className="absolute -right-20 bottom-0 w-72 h-72 bg-[#3B3486]/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          viewport={{ once: true }}
        />
      </section>

      {/* ✅ Write To Us Section (unchanged) */}
      <section className="bg-[#3B3486] text-white text-center py-20 px-6">
        <h2 className="text-4xl font-serif font-semibold mb-4">Write To Us</h2>
        <p className="text-lg mb-8">Share your feedback</p>
        <button className="bg-white text-[#3B3486] rounded-full px-6 py-3 font-semibold hover:bg-[#E4E4E4] transition-all">
          Get In Touch
        </button>
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

export default AboutUs;
