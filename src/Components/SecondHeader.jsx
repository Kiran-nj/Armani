import React, { useEffect, useState } from 'react';
import { FaCalculator, FaCar, FaImage } from 'react-icons/fa';
import { FaHelmetSafety, FaShop } from 'react-icons/fa6';
import { GiAutoRepair } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import gsap from "gsap/gsap-core";
import {  ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

function SecondHeader() {

  useEffect(() => {
 
    gsap.fromTo(
      ".comp",
      {
        x: 1000,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity:0,
      },
      {
        x: 0,
        repeat: 0,
        delay:1.5,
        yoyo: false,
        rotation: 0,
        borderRadius: "100%",
        duration: .7,
        ease: "none",
        stagger:0.3 ,
        opacity:1,
        scrollTrigger: {
          trigger: '.comp',
          toggleActions: 'restart none none none ',
        },
      }
    );
  }, [])

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div >
    <div
      className={`hidden lg:flex justify-around bg-black gap-4 py-2 px-4 text-xl md:text-2xl ${
        isSticky ? 'fixed top-0 left-0 w-full z-50' : ''
      }`}
    >
        <Link to="/" >
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2  gradient-button comp' >Stock Cars <FaCar/> </div>
      </Link>
      <Link to="/sellcar" >
      <div className='flex text-gray-500 items-center gap-2 text-xl  rounded-lg p-2 comp  gradient-button'>Sell Cars <FaCar/> </div>
      </Link>
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2  comp gradient-button'>Showroom <FaShop/> </div>
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2 comp  gradient-button'>Gallery <FaImage/> </div>
      <Link to="/insurance" >
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2 comp gradient-button' >Insurance <FaHelmetSafety/> </div>
      </Link>
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2  comp gradient-button'>EMI-Calculator <FaCalculator/> </div>
      <div className='flex text-gray-500 items-center gap-2 text-xl rounded-lg p-2  comp gradient-button'>Servicing <GiAutoRepair/> </div>
    </div>
    <div className=' lg:hidden md:flex'> 
        <div className='flex justify-around gap-9'>
        <Link to="/" >
      <div className='flex  items-center gap-2  gradient-button comp ' >Stock Cars <FaCar/> </div>
      </Link>
      <Link to="/sellcar" >
      <div className='flex  items-center gap-2 gradient-button comp'>Sell Cars <FaCar/> </div>
      </Link>
      <div className='flex items-center gap-2  gradient-button comp'>Servicing <GiAutoRepair/> </div>
      </div>
      <div  className='flex justify-between gap-4' >
      <div className='flex items-center gap-2  gradient-button comp '>Showroom <FaShop/> </div>
      <div className='flex items-center gap-2  gradient-button comp'>Gallery <FaImage/> </div>
      <Link to="/insurance" >
      <div className='flex items-center gap-2  gradient-button comp'>Insurance <FaHelmetSafety/> </div>
      </Link>
      <div className='flex items-center gap-2  gradient-button comp'>EMICalculator <FaCalculator/> </div>
     
      </div>
   
      </div>
    </div>
  );
}

export default SecondHeader;