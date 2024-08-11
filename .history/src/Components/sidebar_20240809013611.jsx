// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";
const sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      <div className="bg-[#121212] h-[50%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold ">HOME</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold ">Search</p>
        </div>
      </div>
      <div className="bg-[#121212 h-[85%] rounded">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img className="w-8 " src={assets.stack_icon} alt="" />
            <p className="font">Your library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4- "></div>
      </div>
    </div>
  );
};

export default sidebar;
