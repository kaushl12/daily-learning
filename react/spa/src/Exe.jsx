import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Contactus from "./components/Contactus";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import './Exe.css'
import ErrorPage from "./components/ErrorPage";
import CustomHook from "./components/CustomHook";
import Debounce from "./components/Debounce";
import IsOnlineHook from "./components/IsOnlineHook";

function Exe() {
  return (
    <div>
      <BrowserRouter>
        {/* <ul className="nav">
          <li>
            <Link to={"/home"}>Home </Link>  
          </li>
          <li>
            <Link to={"/services"}>Services </Link> 
          </li>
          <li>
            <Link to={"/aboutus"}>About-Us </Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact-Us </Link> 
          </li>
          <li>
            <Link to={"/profile"}>Profile </Link> 
          </li>
        </ul> */}
        <Routes>
            <Route path="/" element={<Layout/>}> 
                <Route path="/" index  element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/customhook" element={<CustomHook />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/debounce" element={<Debounce />} />
                <Route path="/isonline" element={<IsOnlineHook />} />
                <Route path="*" element={<ErrorPage/>} />
            </Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default Exe;
