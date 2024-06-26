import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../public/navbar_logo.jpeg"
import { Link } from 'react-router-dom';
import GradientButton from './Buttons/GradientButton';
import './Buttons/GradientButton.css';
import gsap from "gsap/gsap-core";
import {  ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {

  useEffect(() => {
 
                  gsap.fromTo(
                    ".logo",
                    {
                      x: 500,
                      borderRadius: "0%",
                      yoyo: false,
                      rotation: 0,
                      opacity:0,
                    },
                    {
                      x: 0,
                      repeat: 0,
                      yoyo: false,
                      rotation: 0,
                      borderRadius: "100%",
                      duration: .7,
                      ease: "none",
                      stagger:0.5 ,
                      opacity:1,
                      scrollTrigger: {
                        trigger: '.logo',
                        toggleActions: 'restart none none none ',
                      },
                    }
                  );
               
                  gsap.fromTo(
                    "#kard",
                    {
                      y: 700,
                      borderRadius: "0%",
                      yoyo: false,
                      rotation: 0,
                      opacity:0,
                    },
                    {
                      x: 0,
                      y:0,
                      repeat: 0,
                      yoyo: false,
                      rotation: 0,
                      borderRadius: "100%",
                      duration: .7,
                      ease: "none",
                      stagger: .5,
                      opacity:1,
                      scrollTrigger: {
                        trigger: '.cards',
                        toggleActions: 'restart none none none ',
                      },
                    }
                  );
    
        }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-black ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/">
        <a  className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="w-20 rounded-xl logo " alt=" Logo" />
          <span className=" font-pacifico logo self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-400">Armani Motors</span>
        </a>
        </Link>
        <div className="flex md:order-2">
          <button 
            type="button" 
            data-collapse-toggle="navbar-search" 
            aria-controls="navbar-search" 
            aria-expanded={isMenuOpen} 
            onClick={toggleMenu} 
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
           <div className=" hidden md:block logo">
            <Link to="/searchbtn">
             <GradientButton   />
              </Link>
          </div> 
          <button 
            data-collapse-toggle="navbar-search" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-search" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <ul className={`items-center justify ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex 
        md:w-auto md:order-1 gap-3`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <div className='flex'>
            <input 
              type="text" 
              id="search-navbar" 
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search..."
            />
            <button>Search</button>
            </div>
          </div>
{/*           <li>
            <a href="#" className="block text-3xl  py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-200"><FaInstagram /></a>

          </li>
          <li>
            <a href="#" className="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-200"><FaYoutube /></a>
          </li>
          <li>
            <a href="#" className="block text-3xl py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-200"><FaTwitter /></a>
          </li>
          <li>
            <a href="#" className="block text-3xl py-2 pl-3 pr-4  text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-200"><FaFacebook /></a> 
          </li>*/}
          <li>
            <a href="#" className={` ${isMenuOpen ? 'hidden' : 'hidden'} text-2xl ml-96 py-2 pl-3 pr-4 text-gray-700 rounded
             md:bg-transparent md:text-gray-700 md:p-0 dark:text-gray-400 md:dark:text-gray-200 flex `}>
              <FaPhone /> +91 9999999999</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
