import React from 'react';

import { NavBar } from './components/NavBar';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Autorizari';
import Photos from './pages/Photos';
import './App.css';
  
function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/forgotpassword" element={<ForgotPasswordScreen/>}/>
        <Route path="/passwordreset/:resetToken" element={<ResetPasswordScreen/>}/> */}
      </Routes>
    </>
);
}
  
export default App;