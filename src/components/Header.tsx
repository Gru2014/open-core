import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <img
        src="svgs/union.svg"
        alt="Unicon"
        className="w-screen from-[#DADADA00] to-[#D6D6D600]   bg-gradient-to-t"
      />
      <div className="flex  sm:-mt-20 scale-50 sm:scale-100 z-10">
        <div className="rounded-l-full p-5 border-2 border-[#D0D5DD]">
          <img src="svgs/icon.svg" alt="Icon" />
        </div>
        <div className="rounded-r-full p-5 border-2 border-[#D0D5DD]">
          <img src="svgs/burger.svg" alt="Icon" />
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 w-full mt-20 sm:my-20 text-center sm:gap-5">
        <p className="font-semibold text-5xl sm:text-[64px] sm:leading-[76px] text-[#294F74] ">
          Tour Ultivate Resource Hun for Digital Success
        </p>
        <p className="font-medium sm:leading-9 sm:text-2xl text-base my-5 text-[#667085]">
          Explore our comprehensive library of tools and templates for
          developers, designers, marketers, and branding experts.
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Header;
