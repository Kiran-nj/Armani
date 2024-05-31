import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Auto Best Emperio</h2>
          <p>C-4, 1st floor, Rajouri garden, Ring road, Next to BMW showroom, New Delhi 110027</p>
          <p className="flex items-center mt-4">
            <FaPhone className="mr-2" /> +91-8888588886
          </p>
          <p className="flex items-center mt-2">
            <FaEnvelope className="mr-2" /> info@autobest.co.in
          </p>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Information</h2>
          <ul>
            <li className="mb-2">Custom Requirement</li>
            <li className="mb-2">Get a Loan</li>
            <li className="mb-2">EMI Calculator</li>
            <li className="mb-2">Insurance</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms & Conditions</li>
          </ul>
        </div>

        {/* Brands Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Brands</h2>
          <ul className="columns-2">
            <li className="mb-1">Audi</li>
            <li className="mb-1">Bentley</li>
            <li className="mb-1">BMW</li>
            <li className="mb-1">Cadillac</li>
            <li className="mb-1">Chrysler</li>
            <li className="mb-1">DC Design</li>
            <li className="mb-1">Fiat</li>
            <li className="mb-1">Ford</li>
            <li className="mb-1">Hummer</li>
            <li className="mb-1">Jaguar</li>
            <li className="mb-1">Land Rover</li>
            <li className="mb-1">Lexus</li>
            <li className="mb-1">Mazda</li>
            <li className="mb-1">Mercedes-Benz</li>
            <li className="mb-1">Porsche</li>
          </ul>
        </div>

        {/* Search by Category and Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Search by Category</h2>
          <ul>
            <li className="mb-2">Search by City</li>
            <li className="mb-2">Search by Year</li>
            <li className="mb-2">Search by Color</li>
            <li className="mb-2">Search by Price</li>
          </ul>

         {/*  <h2 className="text-lg font-bold mb-4 mt-6">Newsletter</h2>
          <p className="mb-4">Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p> */}
          
          {/* Screen width issue */}
          {/* <div className="flex items-center bg-gray-800 rounded-md p-2">
            <input type="email" placeholder="Enter Email Address" className="bg-transparent border-none focus:outline-none text-white flex-grow" />
            <button className="text-white p-2">
              <FaEnvelope />
            </button>
          </div> */}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8 space-x-4">
        <FaFacebook className="w-6 h-6 cursor-pointer" />
        <FaTwitter className="w-6 h-6 cursor-pointer" />
        <FaInstagram className="w-6 h-6 cursor-pointer" />
        <FaYoutube className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Footer;
