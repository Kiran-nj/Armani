import { useState } from 'react'
import React from 'react';
import Navbar from './Components/Navbar';
import { SwipeCarousel } from './Components/Carousel';
import SecondHeader from './Components/SecondHeader';
import FilterSearch from './Components/FilterSearch';
import CarCards from './Components/CarCards';
import Footer from './Components/Footer';
import GradientButton from './Components/Buttons/GradientButton';
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Navbar />
    <SecondHeader/>
    <SwipeCarousel />
 {/*   <FilterSearch /> */}
    <CarCards/>
    <Footer />

    {/* <GradientButton /> */}

    </>
  )
}

export default App
