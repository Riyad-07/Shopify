import React from "react";
import Input from "./layers/Input";
import { FaArrowRight } from "react-icons/fa";
import Trip from "./layers/Trip";

const Banner = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <div id="banner" className="relative">
      <div className="xl:container w-auto mx-auto md:flex items-center md:justify-between xl:gap-x-6 py-[208px]">
        <div className="w-auto left ">
          <h1 className="font-bold text-[25px] lg:text-[45px] xl:text-[56px] text-white xl:w-[618px] w-auto font-monts">
            The Premier <br /> Co-living Travel <br /> Network for Women
          </h1>
          <div className="flex mt-6 gap-x-4">
            <p className="w-10 h-[3px] bg-white mt-3 rounded-2xl"></p>
            <p className="font-bold font-monts text-white w-auto xl:w-[513px] text-sm lg:text-base xl:text-lg leading-[160%] ">
              Find your perfect housemate,
              <br /> move faster, stay longer, and travel with confidence.
            </p>
          </div>
        </div>
        <div className="w-auto  md:w-[562px] mt-3">
          <form
            onSubmit={() => handleSubmit(e)}
            className="w-full p-6 bg-[rgba(56,56,56,.30)] rounded-xl flex flex-col gap-1 md:gap-5"
          >
            <h3 className="font-monts font-bold text-base md:text-2xl text-white leading-[160%] text-center">
              Sign up with email
            </h3>

            <div className="items-center md:flex md:gap-x-3 xl:gap-x-6">
              <Input
                className="xl:w-[245px] w-full"
                labelText="First name"
                type="text"
                placeholder="Enter your first name"
              />
              <Input
                className="xl:w-[245px] w-full"
                labelText="Last name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <Input
              className="w-full"
              labelText="Email address"
              type="text"
              placeholder="Enter your email address"
            />
            <Input
              className="w-full"
              labelText="Password"
              type="text"
              placeholder="Enter your password"
            />
            <p className="font-monts font-medium text-lg text-white leading-[160%] text-center">
              You are already member{" "}
              <a href="#" className="font-bold">
                <u>log in</u>
              </a>
            </p>
            <button className="flex items-center justify-center py-3 gap-x-2 bg-[#0872BA] text-white rounded-xl font-monts font-medium text-base">
              Sign up
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <Trip />
    </div>
  );
};

export default Banner;
