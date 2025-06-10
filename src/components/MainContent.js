import React from 'react'
import Home from './home/Home'
import Services from './Services';
import Stylist from './Stylist';
import Location from './Location';
import Testimonies from './Testiomonies';

const MainContent = () => {
  return (
    <div>
      <Home />
      <Services />
      <Stylist />
      <Location />
      <Testimonies />
    </div>
  )
}

export default MainContent
