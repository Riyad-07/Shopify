import React from "react";
import ExpertCart from "./layers/ExpertCart";
import e1 from "../../public/assets/ExpartCart/e1.png";
import logo from "../../public/assets/ExpartCart/Logo.png";

const Expert = () => {
  return (
    <div className="pt-[122px] xl:w-[1212px] w-auto mx-auto bg-[#F6F6F6] ">
      <div className="font-monts leading-[140%] bg-[rgba(8,114,186,.3)] w-[146px] mx-auto py-3 rounded-lg text-center -rotate-[15deg] mb-4">
        Why choose us?
      </div>
      <h2 className="text-center bold ">Why Choose Expat Global Girls</h2>
      <p className="text-xl font-medium font-monts leading-[140%] text-[#344054] text-center mt-5 mb-14">
        Empowering women to travel with confidence and ease worldwide
      </p>

      <div className="xl:relative">
        <div className="xl:-translate-y-1/2 xl:-translate-x-1/2 xl:absolute xl:top-1/2 xl:left-1/2">
          <img src={logo} alt="expertlogo" />
        </div>
        <div className="flex flex-wrap gap-5 xl:justify-between lg:gap-20">
          <ExpertCart
            className="xl:rounded-br-[50px]"
            src={e1}
            title="Affordable Housing"
            content="Save money and travel smarter by sharing accommodations with fellow members."
          />
          <ExpertCart
            className="xl:rounded-bl-[50px]"
            src={e1}
            title="Affordable Housing"
            content="Save money and travel smarter by sharing accommodations with fellow members."
          />
          <ExpertCart
            className="xl:rounded-tr-[50px]"
            src={e1}
            title="Affordable Housing"
            content="Save money and travel smarter by sharing accommodations with fellow members."
          />
          <ExpertCart
            className="xl:rounded-tl-[50px] "
            src={e1}
            title="Affordable Housing"
            content="Save money and travel smarter by sharing accommodations with fellow members."
          />
        </div>
      </div>
    </div>
  );
};

export default Expert;
