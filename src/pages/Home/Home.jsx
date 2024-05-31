import React from "react";
import { SwipeCarousel } from "../../Components/Carousel";
import FilterSearch from "../../Components/FilterSearch";
import CarCards from "../../Components/CarCards";
import Footer from "../../Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import GSAPslider from "../../Components/GSAPslider";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="">
      {/*   <SwipeCarousel /> */}
      <GSAPslider />
      <div className="flex-1 bg-white">
        <CarCards />
      </div>

      {/* <GradientButton /> */}
    </div>
  );
};

export default Home;
