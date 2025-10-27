import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Component/Home"
import Speciality from "./Component/Speciality"
import FindDoctor from "./Component/FindDoctor"
import DiagnosticServices from "./Component/DiagnosticServices"
import ContactUS from "./Component/ContactUs"
import AboutUS from "./Component/AboutUs"


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/speciality" element={<Speciality></Speciality>}></Route>
        <Route path="/find_a_doctor" element={<FindDoctor></FindDoctor>}></Route>
        <Route path="/diagnosticServices" element={<DiagnosticServices></DiagnosticServices>}></Route>
        <Route path="/contactUs" element={<ContactUS></ContactUS>}></Route>
        <Route path="/about" element={<AboutUS></AboutUS>}></Route>
      </Routes>
    </>
  )
}

export default App
