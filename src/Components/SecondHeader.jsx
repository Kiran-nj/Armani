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
        x: 0,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity:0,
      },
      {
        x: 0,
        repeat: 0,
        delay:0.9,
        yoyo: false,
        rotation: 0,
        borderRadius: "25%",
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
      className={`hidden fixed h-screen w-24 lg:flex flex-col justify-around bg-black gap-4 py-2 
      px-4 text-xl md:text-2xl`}
    >
        <Link to="/" >
      <div className='hover:text-indigo-600   text-gray-500 items-center gap-2 text-sm  p-2   comp' >
        < FaCar className='text-3xl ml-3 '/> Stockcars </div>
      </Link>
      <Link to="/sellcar" >
      <div className=' hover:text-indigo-600 text-gray-500 items-center gap-2 text-sm   p-2 comp  '>
        <FaCar className='text-3xl ml-3 '/> Sellcars  </div>
      </Link>
      <div className=' hover:text-indigo-600 text-gray-500 items-center gap-2 text-sm  p-2  comp '> 
      <FaShop className='text-3xl ml-3'/>Showroom  </div>
      <div className=' hover:text-indigo-600 text-gray-500 items-center gap-2 text-sm  p-2 comp  '>
         <FaImage className='text-3xl ml-3'/>Gallery  </div>
      <Link to="/insurance" >
      <div className=' hover:text-indigo-600 text-gray-500 items-center gap-2 text-sm  p-2 comp ' > 
      <FaHelmetSafety className='text-3xl ml-3'/> Insurance</div>
      </Link>
      <div className=' hover:text-indigo-600  text-gray-500 items-center gap-2 text-sm  p-2  comp '> 
      <FaCalculator className='text-3xl ml-3'/>  <p className='ml-4'>EMI</p> <p>Calculator</p></div>
  {/*     <div className=' text-gray-500 items-center gap-2 text-sm rounded-lg p-2  comp '> 
      <GiAutoRepair className='text-3xl '/> Servicing </div> */}
    </div>
    <div className=' lg:hidden md:flex'> 
        <div className='flex justify-around gap-9'>
        <Link to="/" >
      <div className='flex  items-center gap-2   comp ' >Stock Cars <FaCar/> </div>
      </Link>
      <Link to="/sellcar" >
      <div className='flex  items-center gap-2  comp'>Sell Cars <FaCar/> </div>
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