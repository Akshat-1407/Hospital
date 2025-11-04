import { Link } from "react-router-dom";
export default function DrAbhishekAggarwal() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-bold mb-4">Dr. Abhishek Aggarwal</h1>
      <p className="text-gray-700 mb-4">
        Dr. Abhishek Aggarwal is a renowned Cardiologist with over 15 years of experience in treating heart-related ailments. He has been instrumental in performing complex cardiac surgeries and has a special interest in preventive cardiology.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Qualifications</h2>
      <ul className="list-disc list-inside mb-4">
        <li>MBBS from AIIMS, New Delhi</li>
        <li>MD in Cardiology from PGIMER, Chandigarh</li>
        <li>Fellowship in Interventional Cardiology from Cleveland Clinic, USA</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Specializations</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Interventional Cardiology</li>
          <li>Preventive Cardiology</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
        <ul className="list-disc list-inside mb-4"> 
            <li>Performed over 5000 successful cardiac interventions</li>
            <li>Recipient of the 'Best Cardiologist Award' by the Indian Medical Association in 2020</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="text-gray-700">Email: dr.abhishek@hospital.com</p>
        <p className="text-gray-700">Phone: +91-9876543210</p>
    </div>
  );
}   