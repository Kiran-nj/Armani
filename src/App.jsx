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
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    )
  );


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
