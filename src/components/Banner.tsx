import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center py-[100px] text-white">
      <div className=" from-[#2F5478] to-[#22405C] bg-gradient-to-t rounded-3xl w-[90%] ">
        <img
          src="svgs/union.svg"
          alt="Union"
          className=" from-[#2F547800] to-[#3D6C99] opacity-10 bg-gradient-to-t rounded-t-3xl mb-8 sm:mb-0  sm:h-auto"
        />
        <div className="flex justify-center sm:items-center sm:flex-row flex-col gap-16 px-8 sm:px-16">
          <div className="flex w-full sm:w-1/2 flex-col text-[40px] gap-5 sm:text-[64px] leading-10 sm:leading-[76.8px]">
            <p className="font-normal">
              Transforming your{" "}
              <span className="font-semibold">Ideas into reality</span>
            </p>
            <p className="font-medium text-base sm:text-xl sm:leading-[30px] text-[#EAECF0]">
              Let&#39;s build something extraordinary together to captivate your
              audience.
            </p>
          </div>
          <div className="flex w-full sm:w-1/2 justify-center  sm:justify-end">
            <div className="flex justify-center items-center rounded-full text-2xl p-20 sm:mr-24 aspect-square text-center border-white border-2">
              <p>
                Let&#39;s Work
                <br /> Together!
              </p>
            </div>
          </div>
        </div>
        <img
          src="svgs/union.svg"
          alt="Union"
          className=" from-[#2F547800] rotate-180 opacity-10 to-[#3D6C99] rounded-t-3xl bg-gradient-to-t mt-8 sm:mt-0 sm:h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
