/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Services from "./pages/Services";
import Signin from "./components/Sign in/Signin";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
