import React, { useEffect, useRef, useState } from "react";
import Resource from "./Resource";
import { resources } from "@/datas/resources";
import { buttons } from "@/datas/buttons";
import DropMenu from "./DropMenu";

const Resources = () => {
  const [active, setActive] = useState<string>("All Resources");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredResources, setFilteredResources] = useState(resources);
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

  useEffect(() => {
    if (active === "All Resources") {
      setFilteredResources(resources);
    } else {
      const filtered = resources.filter(
        (resource) =>
          resource.link.filter((link) => link.title === active).length > 0
      );
      setFilteredResources(filtered);
    }
  },[active]);

  return (
    <div className="w-full bg-[#F9FAFB] mt-5 sm:py-8 flex justify-center">
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
              <DropMenu active={active} setActive={setActive} setDropdownOpen={setDropdownOpen} />
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
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <Resource resource={resource} key={index} />
            ))
          ) : (
            <p className="text-black text-4xl text-center">
              There is no {active} resource
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
