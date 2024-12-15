import React from "react";
import TripCart from "./TripCart";
import one from "../../../public/assets/BannerTrip/one.png";
import two from "../../../public/assets/BannerTrip/two.png";
import three from "../../../public/assets/BannerTrip/three.png";

const Trip = () => {
  return (
    <div className="xl:container w-auto absolute left-1/2 -translate-x-1/2 md:-bottom-[160px] bg-white rounded-2xl flex items-center flex-col md:flex-row lg:justify-between lg:gap-x-6 p-6">
      <TripCart
        src={one}
        headingTitle="150+ Countries"
        content="Empowering women to explore destinations globally."
      />
      <TripCart
        src={two}
        headingTitle="150+ Countries"
        content="Empowering women to explore destinations globally."
      />
      <TripCart
        src={three}
        headingTitle="150+ Countries"
        content="Empowering women to explore destinations globally."
      />
    </div>
  );
};

export default Trip;
