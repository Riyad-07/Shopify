import React from "react";

const Input = ({ labelText, type, placeholder, className }) => {
  return (
    <div>
      <label
        className="font-monts font-bold leading-[160%] text-sm md:text-base text-white mb-3 block "
        htmlFor=""
      >
        {labelText}
      </label>
      <input
        className={`border border-white rounded-xl text-[#EAECF0] placeholder:text-[#EAECF0] font-monts text-base p-[10px] outline-none bg-transparent xl:pr-[76px] ${className}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
