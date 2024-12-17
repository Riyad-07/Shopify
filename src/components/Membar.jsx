import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import s1 from "../../public/assets/slider/s1.png";

const Membar = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} px-5 py-2 border w-14 rounded-xl border-[#D0D5DD] text-[#0872BA] absolute top-0 right-5 cursor-pointer`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} px-5 py-2 border w-14 rounded-xl border-[#D0D5DD] text-[#0872BA] absolute top-0 right-24 cursor-pointer z-20`}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  return (
    <div className="pt-[130px] w-full xl:w-[1212px] mx-auto">
      <div className="font-monts leading-[140%] bg-[rgba(8,114,186,.3)] w-[146px] mx-auto py-3 rounded-lg text-center -rotate-[15deg] mb-4">
        Testimonial
      </div>
      <h2 className="text-xl font-bold text-center sm:text-2xl md:text-3xl">
        What Our Members Say
      </h2>
      <p className="text-xl font-medium font-monts leading-[140%] text-[#344054] text-center mt-5 sm:text-lg md:text-xl xl:w-[1021px] mx-auto mb-[68px] md:w-[700px]">
        Hear from women who share your passion for exploring new cultures,
        experiencing life abroad, and making the most of every opportunity.
      </p>
      {/* Slider */}
      <Slider {...settings}>
        <div className="w-full xl:w-[500px]">
          <div className="flex items-center w-full xl:justify-between gap-x-10">
            <div className="xl:w-[444px] w-full bg-[#0872BA] rounded-2xl p-5 xl:p-10 xl:pr-20">
              <div className="flex items-center justify-between">
                <div className="w-[88px] h-[88px] rounded-full bg-white">
                  <img
                    className="object-contain w-full h-full rounded-full"
                    src={s1}
                    alt="Sarah"
                  />
                </div>
                <div className="flex items-center text-white gap-x-2">
                  <FaStar />
                  <p>5.0</p>
                </div>
              </div>
              <h3 className="my-3 text-2xl font-semibold text-white font-monts">
                Sarah Thompson
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-monts text-lg text-[#F9FAFB]">
                  Teacher • Non-smoker • Married
                </p>
                <p className="font-monts text-lg text-[#F9FAFB]">
                  Silom, Bangkok
                </p>
                <p className="font-monts text-lg text-[#F9FAFB]">Dec 3-8</p>
              </div>
            </div>
            <div className="w-auto">
              <p className="md:text-xl sm:text-[14px] xl:text-2xl font-medium font-monts leading-[164%] text-[#344054] xl:w-[597px] w-full">
                Our smart developers build innovative, efficient, and high-
                performance solutions. efficient, and high- performance
                solutions. efficient, and high- performance solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[500px]">
          <div className="flex items-center w-full xl:justify-between gap-x-10">
            <div className="xl:w-[444px] w-full bg-[#0872BA] rounded-2xl p-5 xl:p-10 xl:pr-20">
              <div className="flex items-center justify-between">
                <div className="w-[88px] h-[88px] rounded-full bg-white">
                  <img className="object-contain w-full h-full rounded-full" src={s1} alt="Sarah" />
                </div>
                <div className="flex items-center text-white gap-x-2">
                  <FaStar />
                  <p>5.0</p>
                </div>
              </div>
              <h3 className="my-3 text-2xl font-semibold text-white font-monts">
                Sarah Thompson
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-monts text-lg text-[#F9FAFB]">Teacher • Non-smoker • Married</p>
                <p className="font-monts text-lg text-[#F9FAFB]">Silom, Bangkok</p>
                <p className="font-monts text-lg text-[#F9FAFB]">Dec 3-8</p>
              </div>
            </div>
            <div className="w-auto">
              <p className="md:text-xl sm:text-[14px] xl:text-2xl font-medium font-monts leading-[164%] text-[#344054] xl:w-[597px] w-full">
              Our smart developers build innovative, efficient, and high- performance solutions. efficient, and high- performance solutions. efficient, and high- performance solutions.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Membar;
