import React, { useEffect, useState } from "react";
import img1 from "../../public/side1.png";
import img2 from "../../public/side2.png";
import img3 from "../../public/sidecar3.png";
import img4 from "../../public/sidecar4.png";
import img5 from "../../public/sidecar5.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function GSAPslider() {
  const Imagearr = [img1, img2, img3, img4, img5];
  const Namearr = [
    "LAMBORGINI",
    "PORCHE",
    "LAMBORGINI URUS",
    "BENZ",
    "CHEVERLOTE",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Imagearr.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      `.car-${currentIndex}`,
      {
        x: 500,
        y: 400,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity: 0,
      },
      {
        x: -150,
        y: -100,
        repeat: 0,
        yoyo: false,
        rotation: 0,
        borderRadius: "0%",
        duration: 1.2,
        ease: "none",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: `.car-${currentIndex}`,
          toggleActions: "restart none none none ",
        },
      }
    );
    gsap.fromTo(
      `.name-${currentIndex}`,
      {
        y: 0,
        borderRadius: "0%",
        yoyo: false,
        rotation: 0,
        opacity: 0,
      },
      {
        y: 0,
        repeat: 0,
        yoyo: false,
        rotation: 0,
        borderRadius: "0%",
        duration: 1.2,
        ease: "none",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: `.car-${currentIndex}`,
          toggleActions: "restart none none none ",
        },
      }
    );
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen bg-custom-background bg-cover bg-center">
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Ensure children are above the overlay */}
      <div className="relative flex w-full h-full z-10">
        {Imagearr.map((image, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-1/2 flex justify-center items-center mb-40 name-${index} ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              <p className="text-white text-2xl font-extrabold name">
                {Namearr[index]}
              </p>
            </div>
            <div
              className={`w-1/2 flex justify-center items-center car-${index} ${
                currentIndex === index ? "block" : "hidden"
              }`}
            >
              <img className="w-[450px] car" src={image} alt={Namearr[index]} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GSAPslider;
