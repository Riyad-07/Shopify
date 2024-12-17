import React from "react";
import p1 from "../../public/assets/Plan/p1.png";

const Plan = () => {
  return (
    <div className="xl:w-[1212px] mx-auto w-auto  pt-[182px] ">
      <h2 className="mt-10 mb-5 text-center bold">How It Works</h2>
      <p className="text-xl font-medium font-monts text-[#344054] text-center mb-14">
        Search and find other travelers heading to the same destination.
      </p>
      <div className="flex flex-wrap items-center w-auto gap-5 xl:justify-between xl:gap-10">
        <div className="flex flex-col w-full gap-7 md:w-[400px] px-3 lg:p-0">
          <div >
            <h4 className="text-2xl font-semibold font-monts text-[#1D2939] mb-3">
              Plan Your Trip
            </h4>
            <p className="font-monts text-lg text-[#475467] leading-[164%] ">
              Start by setting your travel dates, destinations, and preferences.
              This helps you tailor your search for housemates who align with
              your journey.
            </p>
            <div className="h-[200px] w-[200px] mx-auto">
              <img className="object-contain w-full h-full" src={p1} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold font-monts text-[#1D2939] mb-3">
              Plan Your Trip
            </h4>
            <p className="font-monts text-lg text-[#475467] leading-[164%]">
              Start by setting your travel dates, destinations, and preferences.
              This helps you tailor your search for housemates who align with
              your journey.
            </p>
            <div className="h-[200px] w-[200px] mx-auto">
              <img className="object-contain w-full h-full" src={p1} alt="" />
            </div>
          </div>
        </div>
        <div className="md:flex flex-col justify-between h-auto gap-[112px] hidden">
            <div className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-[rgba(8,114,186,.76)] font-monts font-bold text-2xl">1</div>
            <div className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-[rgba(8,114,186,.76)] font-monts font-bold text-2xl">2</div>
            <div className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-[rgba(8,114,186,.76)] font-monts font-bold text-2xl">3</div>
            <div className="h-[70px] w-[70px] rounded-full flex items-center justify-center border border-[rgba(8,114,186,.76)] font-monts font-bold text-2xl">4</div>
        </div>

        <div className="flex flex-col w-full gap-7 md:w-[400px] px-3 lg:p-0">
          <div>
            <div className="h-[200px] w-[200px] mx-auto">
              <img className="object-contain w-full h-full" src={p1} alt="" />
            </div>
            <h4 className="text-2xl font-semibold font-monts text-[#1D2939] mb-3">
              Plan Your Trip
            </h4>
            <p className="font-monts text-lg text-[#475467] leading-[164%]">
              Start by setting your travel dates, destinations, and preferences.
              This helps you tailor your search for housemates who align with
              your journey.
            </p>
          </div>
          <div>
            <div className="h-[200px] w-[200px] mx-auto">
              <img className="object-contain w-full h-full" src={p1} alt="" />
            </div>
            <h4 className="text-2xl font-semibold font-monts text-[#1D2939] mb-3">
              Plan Your Trip
            </h4>
            <p className="font-monts text-lg text-[#475467] leading-[164%]">
              Start by setting your travel dates, destinations, and preferences.
              This helps you tailor your search for housemates who align with
              your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
