import React from 'react'
import Navdrower from './Navdrower'
import Bookings from './Bookings'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css'

const AdminPage = () => {
  return (
    <div className="app">
    <div className='wizard'>
      <Bookings/>
      </div>
  </div>
  )
}

export default AdminPage
