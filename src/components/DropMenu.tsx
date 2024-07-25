import { buttons } from "@/datas/buttons";
import React from "react";

type DropMenuPropsType = {
  active: string;
  setActive: (active: string) => void;
  setDropdownOpen: (dropdownOpen: boolean) => void;
};

const DropMenu: React.FC<DropMenuPropsType> = ({
  active,
  setActive,
  setDropdownOpen,
}) => {
  return (
    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
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
  );
};

export default DropMenu;
