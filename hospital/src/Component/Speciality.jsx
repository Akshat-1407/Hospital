import React from "react";

function Specialities() {
  const specialities = [
    {
      title: "Internal Medicine",
      text: "Trust our specialists for prevention, diagnosis, and treatment of adult diseases. From common ailments to life-threatening conditions, we’re here to help you stay healthy.",
    },
    {
      title: "Obst & Gynae",
      text: "Our experienced gynaecologists and obstetricians provide comprehensive women’s healthcare services. We offer complete maternal care during pregnancy, childbirth, and postpartum periods.",
    },
    {
      title: "Endocrinology",
      text: "We provide expert care for hormonal disorders, growth disorders, and other endocrine system–related issues.",
    },
    {
      title: "Infectious Disease",
      text: "At Maa Tulya Hospital specialists offer expert care for various infections and communicable diseases. We provide comprehensive diagnosis, treatment, and preventive care using advanced medical approaches.",
    },
    {
      title: "Surgery",
      text: "Experience excellence in surgery with our advanced facilities. From cancer surgery, bariatric surgery, hernia and gastro-intestinal surgery, to oncology and hepatobiliary surgery.",
    },
    {
      title: "Orthopaedics",
      text: "Get expert care for bone and joint issues, including fractures and arthritis. Our specialized machines and skilled surgeons ensure the best outcomes for you.",
    },
    {
      title: "Paediatrics",
      text: "Our dedicated paediatricians and specialised facilities ensure the best care for your little ones.",
    },
    {
      title: "Gastroenterology",
      text: "Our gastroenterology department offers comprehensive care for digestive system disorders, including liver and pancreas diseases.",
    },
    {
      title: "Cardiology",
      text: "Keep your heart healthy with regular checkups at our cardiology department. We offer advanced care for all age groups.",
    },
    {
      title: "Nephrology",
      text: "At Maa Tulya Hospital, we provide complete care for acute and chronic kidney conditions, including dialysis and kidney disease management.",
    },
    {
      title: "Neurology",
      text: "Experience comprehensive neurological care with our state-of-the-art facilities and expert team.",
    },
    {
      title: "Dermatology",
      text: "Our dermatology specialists offer advanced treatments for skin conditions and surgical techniques like hair transplant.",
    },
    {
      title: "Ear Nose Throat (ENT)",
      text: "Receive specialized treatment for ENT conditions, including surgical and medical interventions for your comfort.",
    },
    {
      title: "Psychiatry",
      text: "Find compassionate care for mental health disorders with our psychiatrists. We address a range of conditions to support your well-being.",
    },
    {
      title: "Faciomaxillary Surgery",
      text: "We provide expert maxillofacial care for facial trauma, jaw deformities, and complex facial reconstructions.",
    },
    {
      title: "Urology",
      text: "From incontinence to prostate disease, our urology department provides comprehensive care for urological conditions.",
    },
    {
      title: "Radiology",
      text: "Get accurate diagnoses with our 24-hour radiology services. Our skilled radiologists use advanced imaging technology to ensure precise results.",
    },
    {
      title: "Pathology",
      text: "Trust our 24/7 pathology lab for accurate diagnostics. Our expert pathologists work tirelessly to ensure timely results.",
    },
    {
      title: "Intensive Care",
      text: "Receive dedicated care in our intensive care unit. With round-the-clock consultants and trained nurses, we provide exceptional support for critical conditions.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#3B3486] text-white text-center py-16 px-6">
        <h1 className="text-5xl font-serif font-semibold mb-6">
          Our Specialities
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          At Maa Tulya Hospital, we strive to make your well-being our top priority and we
          ensure that by bringing together multiple medical experts under one
          roof. Various doctors in specialties encompassing Internal Medicine,
          Endocrinology, Paediatrics, and Gynecology work in close collaboration
          to make sure the patient leaves the hospital satisfied.
        </p>
        <button className="border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-[#3B3486] transition-all">
          Find Your Doctor
        </button>
      </section>

      {/* Services Title */}
      <section className="bg-[#F7F0EB] py-16 px-6 text-center">
        <h2 className="text-4xl font-serif font-semibold mb-4 text-black">
          Our Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg mb-12">
          Experienced doctors with expertise across specialities are associated
          with Maa Tulya Hospital. This helps us in understanding our patients’
          problems better and provide complete care.
        </p>

        {/* Specialities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4DAD2] rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
            >
              <h3 className="text-2xl font-serif font-semibold text-[#3B3486] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
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

export default Specialities;