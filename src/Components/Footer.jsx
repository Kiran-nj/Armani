import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
      {
        x: 0,
        y: 100,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        repeat: 0,
        yoyo: false,
        rotation: 0,
        borderRadius: "0%",
        duration: 0.5,
        ease: "none",
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".footer",
          toggleActions: "restart none none none  ",
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white p-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Auto Best Emperio</h2>
          <p className="footer">
            C-4, 1st floor, Rajouri garden, Ring road, Next to BMW showroom, New
            Delhi 110027
          </p>
          <p className="flex items-center mt-4 footer">
            <FaPhone className="mr-2" /> +91-8888588886
          </p>
          <p className="flex items-center mt-2 footer">
            <FaEnvelope className="mr-2" /> info@autobest.co.in
          </p>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Information</h2>
          <ul>
            <li className="mb-2 footer">Custom Requirement</li>
            <li className="mb-2 footer">Get a Loan</li>
            <li className="mb-2 footer">EMI Calculator</li>
            <li className="mb-2 footer">Insurance</li>
            <li className="mb-2 footer">Contact Us</li>
            <li className="mb-2 footer">Privacy Policy</li>
            <li className="mb-2 footer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Brands Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer ml-14">Brands</h2>
          <ul className="columns-2 footer">
            <li className="mb-1 footer">Audi</li>
            <li className="mb-1 footer">Bentley</li>
            <li className="mb-1 footer">BMW</li>
            <li className="mb-1 footer">Cadillac</li>
            <li className="mb-1 footer">Chrysler</li>
            <li className="mb-1 footer">DC Design</li>
            <li className="mb-1 footer">Fiat</li>
            <li className="mb-1 footer">Ford</li>
            <li className="mb-1 footer">Hummer</li>
            <li className="mb-1 footer">Jaguar</li>
            <li className="mb-1 footer">Land Rover</li>
            <li className="mb-1 footer">Lexus</li>
            <li className="mb-1 footer">Mazda</li>
            <li className="mb-1 footer">Mercedes-Benz</li>
            <li className="mb-1 footer">Porsche</li>
          </ul>
        </div>

        {/* Search by Category and Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4 footer">Search by Category</h2>
          <ul>
            <li className="mb-2 footer">Search by City</li>
            <li className="mb-2 footer">Search by Year</li>
            <li className="mb-2 footer">Search by Color</li>
            <li className="mb-2 footer">Search by Price</li>
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
      <div className="flex justify-center mt-8 space-x-4 footer">
        <FaFacebook className="w-6 h-6 cursor-pointer footer" />
        <FaTwitter className="w-6 h-6 cursor-pointer footer" />
        <FaInstagram className="w-6 h-6 cursor-pointer footer" />
        <FaYoutube className="w-6 h-6 cursor-pointer footer" />
      </div>
    </div>
  );
}

export default Footer;
