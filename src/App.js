import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Navdrower from './components/admin/Navdrower';
import Login from './components/auth/LoginInfo';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import StylistPage from './components/StylistPage';
import LocationPage from './components/LocationPage';
import TestimoniesPage from './components/TestimoniesPage';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Book from './components/BookAppointment/Book';
import Signup from './components/auth/Signup';
import Users from './components/admin/Users';
import Servicesoffered from './components/admin/Servicesoffered';
import Bookings from './components/admin/Bookings';
import Employee from './components/admin/Employee';
function App() {


  const location = useLocation()

  const isAdmin = location.pathname === "/admin"
  const isLogin = location.pathname === "/" || location.pathname === "/login"
  

  return (
    <div className="App">
     { !isAdmin && !isLogin && <NavBar />}
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<MainContent/>}/>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Routes>
          <Route exact path="/services-page" element={<ServicesPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/stylist" element={<StylistPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/location" element={<LocationPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/testimony" element={<TestimoniesPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Signup/>}/>
        </Routes>
        <Routes >
          <Route exact path="/book" element={<Book/>}/>
        </Routes>
        <Routes>
          <Route exact path="/admin" element={<Navdrower/>}/>
        </Routes>
        <Routes>
          <Route exact path="/employee" element={<Book/>}/>
        </Routes>
        <Routes>
          <Route exact path="/users" element={<Users/>}/>
        </Routes>
        <Routes>
          <Route exact path="/services" element={<Servicesoffered/>}/>
        </Routes>
        <Routes>
          <Route exact path="/bookings" element={<Bookings/>}/>
        </Routes>
        <Routes>
          <Route exact path="/assistance" element={<Employee/>}/>
        </Routes>

      <div className='footer'>
      { !isAdmin && !isLogin && <Footer />}
      </div>
    </div>
  );
}
export default App;
