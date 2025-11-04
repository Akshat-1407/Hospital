import React from "react";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { doctorName } = useParams();

  // Convert param to lowercase and remove dots just in case
  const paramName = doctorName.toLowerCase().replace(/\./g, "");

  const doctors = [
    {
      id: "dr-prashant-sharma",
      name: "Dr. Prashant Sharma",
      speciality: "Internal Medicine",
      img: "/images/doctors/rajeev-gupta.jpg",
      bio: "Expert in Internal Medicine with years of experience in managing chronic diseases and preventive care."
    },
    {
      id: "dr-satya-prakash",
      name: "Dr. Satya Prakash",
      speciality: "Obstetric and Gynaecology",
      img: "/images/doctors/archana-gupta.jpg",
      bio: "Renowned gynecologist specializing in women’s health, maternity care, and reproductive medicine."
    },
    {
      id: "dr-sethi-gupta",
      name: "Dr. Sethi Gupta",
      speciality: "Endocrinologist",
      img: "/images/doctors/sethi-gupta.jpg",
      bio: "Specialist in hormonal and metabolic disorders, diabetes, and thyroid management."
    },
    {
      id: "dr-saloni-seth",
      name: "Dr. Saloni Seth",
      speciality: "Psychiatrist",
      img: "/images/doctors/saloni-seth.jpg",
      bio: "Expert psychiatrist with experience in treating depression, anxiety, and mental health concerns."
    },
    {
      id: "dr-sachin-kumar",
      name: "Dr. Sachin Kumar",
      speciality: "Dermatologist",
      img: "/images/doctors/sachin-kumar.jpg",
      bio: "Specialist in skin, hair, and cosmetic dermatology with advanced laser treatment expertise."
    },
    {
      id: "dr-anvitun-aggarwal",
      name: "Dr. Anvitun Aggarwal",
      speciality: "Infectious Diseases",
      img: "/images/doctors/anvitun-aggarwal.jpg",
      bio: "Specialist in infectious diseases, with a focus on public health and clinical infection control."
    },
    {
      id: "dr-rajnish-kashyap",
      name: "Dr. Rajnish Kashyap",
      speciality: "Laparoscopic / General Surgeon",
      img: "/images/doctors/rajnish-kashyap.jpg",
      bio: "Expert surgeon specializing in minimally invasive laparoscopic procedures and general surgery."
    },
    {
      id: "dr-rajan-sareen",
      name: "Dr. Rajan Sareen",
      speciality: "Pediatrician",
      img: "/images/doctors/rajan-sareen.jpg",
      bio: "Caring pediatrician dedicated to children’s health, growth, and development."
    },
    {
      id: "dr-abhishek-aggarwal",
      name: "Dr. Abhishek Aggarwal",
      speciality: "Neurologist",
      img: "/images/doctors/abhishek-aggarwal.jpg",
      bio: "Specialist in neurological disorders, brain health, and neuro-rehabilitation."
    },
    {
      id: "dr-rahul-ramteke",
      name: "Dr. Rahul Ramteke",
      speciality: "Cardiologist",
      img: "/images/doctors/rahul-ramteke.jpg",
      bio: "Renowned cardiologist specializing in heart health, preventive care, and cardiac interventions."
    }
  ];

  const doctor = doctors.find(d => d.id === paramName);

  if (!doctor) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Doctor Not Found</h1>
        <p className="text-gray-600">We couldn’t find a doctor profile for “{doctorName}”.</p>
        <a href="/finddoctor" className="mt-6 text-[#3B3486] underline">
          Back to Find Doctor
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F0EB] flex flex-col items-center py-20 px-6">
      <img
        src={doctor.img}
        alt={doctor.name}
        className="w-48 h-48 rounded-full border-4 border-[#3B3486]/40 mb-6 object-cover shadow-lg"
      />
      <h1 className="text-3xl font-serif font-semibold text-[#3B3486] mb-2">
        {doctor.name}
      </h1>
      <h2 className="text-lg text-gray-700 mb-4">{doctor.speciality}</h2>
      <p className="text-gray-600 max-w-2xl text-center leading-relaxed mb-8">{doctor.bio}</p>
      <a
        href="/finddoctor"
        className="bg-[#3B3486] text-white px-6 py-2 rounded-full hover:bg-[#2E277A] transition-all"
      >
        Back to All Doctors
      </a>
    </div>
  );
};

export default DoctorProfile;
