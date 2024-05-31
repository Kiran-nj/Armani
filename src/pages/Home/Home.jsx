import React from "react";
import { SwipeCarousel } from "../../Components/Carousel";
import CarCards from "../../Components/CarCards";
import LocomotiveScroll from "locomotive-scroll";
import GSAPslider from "../../Components/GSAPslider";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="">
      <GSAPslider />
      <div className="flex-1 bg-white">
        <CarCards />
      </div>

      {/* <GradientButton /> */}
    </div>
  );
};

export default Home;
