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
      </div>
    </>
  );
};

export default Navbar;
