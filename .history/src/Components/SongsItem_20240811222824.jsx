/* eslint-disable no-unused-vars */
import React from "react";
import { PlayerContext } from "../Context/PlayerContext";

// eslint-disable-next-line react/prop-types
const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="mt-2 mb-1 font-bold">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
};

export default SongItem;
