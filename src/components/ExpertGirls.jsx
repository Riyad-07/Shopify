import React from "react";
import { FaArrowRight } from "react-icons/fa";
import expert from '../../public/assets/Expert.jpg'

const ExpertGirls = () => {
  return (
    <div className="xl:container w-auto mx-auto mt-[550px] md:mt-[282px]  md:flex items-center md:gap-x-2 xl:gap-x-8">
      <div className="h-[547px] xl:w-[561px]  lg:mx-[30px] xl:mx-[58px] w-auto">
        <img className="object-contain w-full h-full " src={expert} alt="expert girl" />
      </div>
      <div className="md:w-[622px]  w-auto">
        <div className="w-[57px] h-2 bg-[#0872BA] rounded-2xl mb-2"></div>
        <h2 className="font-monts font-semibold lg:text-5xl text-2xl text-[#1D2939] leading-[133%] md:text-[35px]">Your Community for Women Ready to Go Abroad</h2>
        <p className="xl:text-xl md:text-[15px]  font-medium leading-8 font-monts text-[#344054] mb-8 mt-7">We’re thrilled you found us! At Expat Global Girls, we empower women to pursue their dreams abroad. Our platform connects women seeking housemates for international moves and trips, offering a safe, supportive community and a searchable directory to help you find the perfect living companion. Join us to make your move abroad affordable, achievable, and filled with support!</p>
        <button className="flex items-center text-white gap-x-2 bg-[#0872BA] rounded-xl px-6 py-4">
          Become a Member
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ExpertGirls;
