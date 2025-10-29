import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='bg-yellow-200 flex flex-row justify-end gap-10 pr-15 leading-8 items-center'>
            <img src="https://karunahospital.in/wp-content/uploads/2024/03/logo.png" alt="logo" className='h-12 mr-auto ml-8 mt-2 mb-2'/>
            <Link to="/">Home</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/speciality">Specialities</Link>
            <Link to="/diagnosticServices">Diagnostic Services</Link>
            <Link to="/find_a_doctor">Find a Doctor</Link>
            <Link to="/contactUs">ContactUs</Link>
      </nav>
    </div>
  )
}

export default Navbar