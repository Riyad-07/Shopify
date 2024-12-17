import React from "react";
import flogo from "../../public/assets/flogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[88px] p-3 md:p-0">
      <div className="w-full mx-auto xl:w-[1212px]  ">
        <div className="items-center w-full md:flex xl:justify-between gap-x-10 border-b border-[#D0D5DD] pb-7">
          <div className="">
            <div>
              <a href="#">
                <img src={flogo} alt="footerlogo" />
              </a>
            </div>
            <p className="text-lg font-medium font-monts leading-[160%] tracking-[2%] text-[#475467] mt-7 lg:w-[588px] w-full">
              Scan a Turning Hearts Medallion to learn about and interact with
              those who have passed on. You can also begin documenting the
              legacy you wish to leave behind.
            </p>
            <p className="text-lg font-medium font-monts leading-[160%] tracking-[2%] text-[#1D2939] mt-7">
              Social Media:
            </p>
            <div className="flex items-center mt-4 gap-x-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#03A9F4] text-white">
                <FaTwitter />
              </div>
              <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-gradient-to-tr from-yellow-400 to-50% to-[#FE2181] from-30%">
                <FaInstagram />
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#007AB9] text-white">
                <FaLinkedinIn />
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1877F2] text-white">
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className="w-auto mt-5 md:mt-0">
            <h4 className="text-lg font-semibold font-monts leading-[160%] tracking-[2%] text-[#1D2939] mb-4 w-full md:w-[200px]">
              Quick Link
            </h4>
            <ul className="text-lg  font-monts leading-[160%]  text-[#344054] flex flex-col gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Country search</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-auto gap-4 mt-5 lg:mt-0">
            <p className="text-lg  font-monts leading-[120%]  text-[#344054]">
              (316) 555-0116
            </p>
            <p className="text-lg  font-monts leading-[120%]  text-[#344054]">
              deanna.curtis@example.com
            </p>
          </div>
        </div>
        <p className="text-base font-monts leading-[140%] tracking-[2%] text-[#475467] text-end my-6">© [2024] Ash and Fire. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
