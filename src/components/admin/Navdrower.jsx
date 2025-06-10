import React from 'react';
import { useState } from 'react';
import Bookings from './Bookings';
import Users from './Users';
import Employee from './Employee';
import Servicesoffered from './Servicesoffered';
import {FaUserAlt} from 'react-icons/fa'
import {MdMiscellaneousServices} from 'react-icons/md'
import {TbBrandBooking} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go';
const Navdrower = () => {

  const [currentPage, setCurrentPage] = useState("users")

  const menuItem = [
    {
      path: '/users',
      name: 'Users',
      icon: <FaUserAlt />
    },
    
    
    {
      path: '/bookings',
      name: 'Bookings',
      icon: <TbBrandBooking />
    },
    {
      path: '/assistance',
      name: 'Assisstance',
      icon: <FaUsers />
    },
    
    {
      path: '/services',
      name: 'Services',
      icon: <MdMiscellaneousServices />
    },
  ]

    return (
      <div  >
        <nav class="navbar navbar-expand-md navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Salon Gerente</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=> setCurrentPage("users")} href="#">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=> setCurrentPage("bookings")}>Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=> setCurrentPage("assisstance")}>Assisstance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" onClick={()=> setCurrentPage("services")} aria-disabled="true">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      
       <div className='container' >

      {currentPage === "users" && <Users />}
      {currentPage === "bookings" && <Bookings/>}
      {currentPage === "assisstance" && <Employee />}
      {currentPage === "services" && <Servicesoffered/>}

      </div> 


      </div>
    );
  }
  
export default Navdrower
