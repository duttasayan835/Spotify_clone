// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold ">Featured Charts</h1>
        <div className="flex overflow-auto"></div>
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayHome;
