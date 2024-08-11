// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px]">
            Install App
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
