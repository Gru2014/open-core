import { contactLinks } from "@/datas/contactLinks";
import { footerButtons } from "@/datas/footerButtons";
import React from "react";

const Footer = () => {
  
  return (
    <div className="flex justify-center items-center py-[86px] w-full bg-[#294F74]">
      <div className="flex rounded-[36px] flex-col gap-12 items-center bg-white w-[90%]">
        <div className="flex flex-col w-[90%] justify-between gap-6 sm:gap-20 pt-8 sm:pt-[76px]">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between ">
            <div className="flex flex-col w-full text-center  sm:w-1/4 gap-6">
              <div className="flex flex-col gap-5 sm:gap-0">
                <p className="font-semibold sm:text-left text-xl leading-[30px]">
                  Say Hello!
                </p>
                <div className="flex items-center sm:items-start gap-4  font-normal text-xl leading-[30px] border-2 sm:border-0 sm:px-0 px-6 py-2 rounded-md">
                  <p>opencoregroup@gmail.com</p>
                  <img className="sm:hidden" src="svgs/link.svg" alt="Link" />
                </div>
              </div>
              <div className="flex justify-between border-b-2 border-[#D0D5DD50] pb-8 sm:border-b-0">
                {contactLinks.map((link) => (
                  <a href="#" key={link.name}>
                    <img src={link.url} alt={link.name} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex w-full sm:w-1/6 mt-5 sm:mt-0 border-b-2 border-[#D0D5DD50] pb-8 sm:border-b-0 flex-wrap justify-between gap-x-48 sm:gap-x-6 gap-6">
              {footerButtons.map((button, index) => (
                <a href="#" key={index}>
                  {button}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-between">
            <p>Toronto, ON Canada</p>
            <p>OpenCore. All Rights Reserved</p>
          </div>
        </div>
        <div className="-mb-4 sm:-mb-8">
          <img src="/svgs/logo.svg" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
