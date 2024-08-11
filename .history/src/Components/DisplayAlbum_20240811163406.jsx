// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const albumData = albumsData[id];
  console.log(albumsData);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 mt-10 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DisplayAlbum;
