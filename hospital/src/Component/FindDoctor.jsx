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

      {/* Footer */}
      <footer className="bg-[#3B3486] text-white py-12 px-6 md:px-20 text-sm">
        <div className="grid md:grid-cols-4 gap-10 border-t border-[#5C5792] pt-8">
          <div>
            <h3 className="font-semibold mb-2 text-lg">Contacts</h3>
            <p>8588831732 9873754555</p>
            <p>011-40793535 79620024</p>
            <p>9873753999</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Email</h3>
            <p>admin.maatulyahospital@gmail.com</p>
            <div className="flex space-x-4 mt-2">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Home</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>NABH</li>
            </ul>
          </div>
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

export default FindDoctor;
