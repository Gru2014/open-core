import React, { useEffect, useRef, useState } from "react";
import Resource from "./Resource";
import { resources } from "@/datas/resources";
import { buttons } from "@/datas/buttons";

const Resources = () => {
  const [active, setActive] = useState<string>("All Resources");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="w-full bg-[#F9FAFB] mt-5 flex justify-center">
      <div className="flex flex-col gap-8 w-[90%]">
        <div className="flex justify-between">
          <div className="relative sm:hidden" ref={dropdownRef}>
            <button
              className="border-[#EDF2F5] border-2 active:bg-[#EDF2F5] px-4 py-[10px] rounded-lg gap-6 justify-center flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <p>{active}</p>
              <img src="svgs/drop.svg" alt="" />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                        active === button ? "bg-gray-100" : ""
                      }`}
                      onClick={() => {
                        setActive(button);
                        setDropdownOpen(false);
                      }}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="hidden  sm:flex gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`border-[#EDF2F5] border-2 active:bg-[#EDF2F5] px-4 py-[10px] rounded-lg ${
                  active === button && "bg-[#EDF2F5]"
                }`}
                onClick={() => setActive(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <button className="flex items-center border-[#EDF2F5] active:bg-[#EDF2F5] focus:bg-[#EDF2F5] px-4 py-[10px] rounded-lg">
            <img src="svgs/filter.svg" />
            Filters
          </button>
        </div>
        <div className="flex gap-12 flex-wrap  justify-center sm:justify-between mb-10 sm:mb-0">
          {resources.map((resource, index) => (
            <Resource resource={resource} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
