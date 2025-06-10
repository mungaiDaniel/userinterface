import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Navdrower from './components/admin/Navdrower';
import Login from './components/auth/LoginInfo';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
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
  

  return (
    <div className="App">
     { !isAdmin && <NavBar />}
        <Routes>
          <Route exact path="/" element={<MainContent/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
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
      { !isAdmin && <Footer />}
      </div>
    </div>
  );
}
export default App;
