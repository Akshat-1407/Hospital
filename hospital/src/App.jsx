import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from "./Component/Home"
import Speciality from "./Component/Speciality"
import FindDoctor from "./Component/FindDoctor"
import PageNotFound from "./Component/PageNotFound"
import ContactUS from"./Component/ContactUs"
import AboutUS from "./Component/AboutUs"
import BlogsandNews from "./Component/BlogsandNews"
import DrPrashantSharma from "./Component/Profile/DrPrashantSharma";
import DrSatyaPrakash from "./Component/Profile/DrSatyaPrakash";
import DrSethiGupta from "./Component/Profile/DrSethiGupta";
import DrSaloniSeth from "./Component/Profile/DrSaloniSeth";
import DrSachinKumar from "./Component/Profile/DrSachinKumar";
import DrAnvitunAggarwal from "./Component/Profile/DrAnvitunAggarwal";
import DrRajnishKashyap from "./Component/Profile/DrRajnishKashyap";
import DrRajanSareen from "./Component/Profile/DrRajanSareen";
import DrAbhishekAggarwal from "./Component/Profile/DrAbhishekAggarwal";
import DrRahulRamteke from "./Component/Profile/DrRahulRamteke";


function App() {
  return(
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/speciality" element={<Speciality></Speciality>}></Route>
        <Route path="/find_a_doctor" element={<FindDoctor></FindDoctor>}></Route>
        <Route path="/contactUs" element={<ContactUS></ContactUS>}></Route>
        <Route path="/about" element={<AboutUS></AboutUS>}></Route>
        <Route path="/Blogs_and_News" element={<BlogsandNews></BlogsandNews>}></Route>
        <Route path="/profile/dr-prashant-sharma" element={<DrPrashantSharma />} />
        <Route path="/profile/dr-satya-prakash" element={<DrSatyaPrakash />} />
        <Route path="/profile/dr-sethi-gupta" element={<DrSethiGupta />} />
        <Route path="/profile/dr-saloni-seth" element={<DrSaloniSeth />} />
        <Route path="/profile/dr-sachin-kumar" element={<DrSachinKumar />} />
        <Route path="/profile/dr-anvitun-aggarwal" element={<DrAnvitunAggarwal />} />
        <Route path="/profile/dr-rajnish-kashyap" element={<DrRajnishKashyap />} />
        <Route path="/profile/dr-rajan-sareen" element={<DrRajanSareen />} />
        <Route path="/profile/dr-abhishek-aggarwal" element={<DrAbhishekAggarwal />} />
        <Route path="/profile/dr-rahul-ramteke" element={<DrRahulRamteke />} />
      </Routes>
    </>
  )
}

export default App