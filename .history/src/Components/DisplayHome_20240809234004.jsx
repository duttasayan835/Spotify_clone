// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="my-5 text-2xl font-bold ">
        {albumsData.map((item, index) => (
          <AlbumItem />
        ))}
      </div>
    </>
  );
};

export default DisplayHome;
