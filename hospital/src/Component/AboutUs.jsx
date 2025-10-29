import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#3B3486] text-white text-center py-16 px-6">
        <h1 className="text-5xl font-serif font-semibold mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Established in 2025, Maa Tulya Hospital is known for its expertise in both outpatient and inpatient services. Empathy lies at the core of our services which reflects in compassionate treatment of our expert doctors and accessible cost structure.
        </p>
        <button className="mt-8 border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[#3B3486] transition-all">
          NABH Certificate
        </button>
      </section>

      {/* Vision Section */}
      <section className="bg-[#F7F0EB] py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-serif font-semibold text-black mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Maa Tuya Hospital seeks excellence in all its endeavours, aspiring to provide state-of-the-art medical services to all strata of society at affordable prices, establishing and enduring doctor–patient relationships, and nurturing an environment where healthcare providers and staff can learn and thrive.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-3 mt-8 md:mt-0">
          {Array(12)
            .fill()
            .map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-[#5D768C] rounded-full opacity-80"
              ></span>
            ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="md:w-2/3 order-2 md:order-1">
          <h2 className="text-3xl font-serif font-semibold text-black mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
            Maa means empathy. Our name symbolizes our mission in its entirety — providing outstanding healthcare facilities to all with compassion and respect, promoting wellness and good health in the community through preventive education and services embedded with love and care.
          </p>
          <h3 className="text-xl font-semibold mb-4">
            Quality Values and Initiatives
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To provide exceptional care to patients and their families.</li>
            <li>To acknowledge the dignity and individuality of every patient and staff member.</li>
            <li>To respect patient’s privacy and confidentiality.</li>
            <li>To communicate openly and effectively with patients and staff.</li>
            <li>To maintain the highest standards of integrity and ethical conduct.</li>
            <li>To foster teamwork and accountability at all levels.</li>
            <li>To promote ongoing evaluation and performance improvement.</li>
            <li>To build upon efficient and prudent management practices to ensure financial well-being and responsibility.</li>
          </ul>
        </div>
      </section>

      {/* Write To Us Section */}
      <section className="bg-[#3B3486] text-white text-center py-20 px-6">
        <h2 className="text-4xl font-serif font-semibold mb-4">Write To Us</h2>
        <p className="text-lg mb-8">Share your feedback</p>
        <button className="bg-white text-[#3B3486] rounded-full px-6 py-3 font-semibold hover:bg-[#E4E4E4] transition-all">
          Get In Touch
        </button>
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
            <p>admin.maatulyahospital@gmail.com</p>
            <div className="flex space-x-4 mt-2">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Home</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>NABH</li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Specialities</h3>
            <ul className="space-y-1">
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

export default AboutUs;
