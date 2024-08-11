import React from "react";
import { songsData } from "../assets/assets";

const Player = () => {
  return (
    <div>
      <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 ">
        <div className="hidden gap-4 lg:flex item-center ">
          <img src={songsData[0].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
