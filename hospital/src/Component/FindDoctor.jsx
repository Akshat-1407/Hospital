import React from "react";

function FindDoctor() {
  const doctors = [
    {
      name: "Dr. Rajeev Gupta",
      speciality: "Internal Medicine",
      img: "/images/doctors/rajeev-gupta.jpg",
    },
    {
      name: "Dr. Archana Gupta",
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
      name: "Dr. LKG Sinha",
      speciality: "Internal Medicine",
      img: "/images/doctors/lkg-sinha.jpg",
    },
    {
      name: "Dr. Rajnish Kashyap",
      speciality: "Laparoscopic / General Surgeon",
      img: "/images/doctors/rajnish-kashyap.jpg",
    },
    {
      name: "Dr. Mamta Kumari",
      speciality: "Radiologist",
      img: "/images/doctors/mamta-kumari.jpg",
    },
    {
      name: "Dr. Rajan Sareen",
      speciality: "Pediatrician",
      img: "/images/doctors/rajan-sareen.jpg",
    },
    {
      name: "Dr. Praveen Garg",
      speciality: "General Surgery",
      img: "/images/doctors/praveen-garg.jpg",
    },
    {
      name: "Dr. Dnyaneshwar Shankarlal Chandak",
      speciality: "CMO",
      img: "/images/doctors/dnyaneshwar-chandak.jpg",
    },
    {
      name: "Dr. SK Jain",
      speciality: "Orthopaedic Surgeon",
      img: "/images/doctors/sk-jain.jpg",
    },
    {
      name: "Dr. Vyomesh Bansal",
      speciality: "ENT",
      img: "/images/doctors/vyomesh-bansal.jpg",
    },
    {
      name: "Dr. Vasudha Goel",
      speciality: "Gastroenterology",
      img: "/images/doctors/vasudha-goel.jpg",
    },
    {
      name: "Dr. Abhishek Aggarwal",
      speciality: "Neurologist",
      img: "/images/doctors/abhishek-aggarwal.jpg",
    },
    {
      name: "Dr. Amit Kansal",
      speciality: "Orthopaedic Surgeon",
      img: "/images/doctors/amit-kansal.jpg",
    },
    {
      name: "Dr. Pankaj Kumar Garg",
      speciality: "BHT Consultant",
      img: "/images/doctors/pankaj-garg.jpg",
    },
    {
      name: "Dr. Madhukar Prakash",
      speciality: "Orthopaedic Surgeon",
      img: "/images/doctors/madhukar-prakash.jpg",
    },
    {
      name: "Dr. Ashish Sachan",
      speciality: "Laparoscopic Gastrointestinal and Cancer Surgeon",
      img: "/images/doctors/ashish-sachan.jpg",
    },
    {
      name: "Dr. Kapil",
      speciality: "Gastro Surgeon",
      img: "/images/doctors/kapil.jpg",
    },
    {
      name: "Dr. Rahul Ramteke",
      speciality: "Cardiologist",
      img: "/images/doctors/rahul-ramteke.jpg",
    },
    {
      name: "Dr. Atul Kapila",
      speciality: "Pathologist",
      img: "/images/doctors/atul-kapila.jpg",
    },
    {
      name: "Dr. Jahnavi Meena",
      speciality: "Gynecologist, Obstetrician",
      img: "/images/doctors/jahnavi-meena.jpg",
    },
    {
      name: "Dr. Naveen Jain",
      speciality: "Gen Surgery",
      img: "/images/doctors/naveen-jain.jpg",
    },
    {
      name: "Dr. Abhinam Chauhan",
      speciality: "Pediatric",
      img: "/images/doctors/abhinam-chauhan.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#3B3486] text-white text-center py-16 px-6">
        <h1 className="text-5xl font-serif font-semibold mb-6">
          Find Your Doctor
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Established in 2011, Maa Tulya Hospital is known for its expertise in
          both outpatient and inpatient services. Empathy lies at the core of
          our services which reflects in compassionate treatment of our expert
          doctors and accessible cost structures.
        </p>
      </section>

      {/* Doctors Section */}
      <section className="bg-[#F7F0EB] py-16 px-6 text-center">
        <h2 className="text-4xl font-serif font-semibold mb-4 text-[#3B3486]">
          Our Doctors
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg mb-12">
          Experienced doctors with expertise across specialities are associated
          with Maa Tulya Hospital. This helps us in understanding our patients’
          problems better and provide complete care.
        </p>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col items-center p-5"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-[#3B3486] font-semibold text-lg md:text-xl">
                {doctor.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                {doctor.speciality}
              </p>
              <button className="text-[#3B3486] font-medium hover:underline">
                View Profile →
              </button>
            </div>
          ))}
        </div>
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
export default FindDoctor;
