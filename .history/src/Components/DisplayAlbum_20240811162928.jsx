// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);

  return (
    <>
      <Navbar />
    </>
  );
};

export default DisplayAlbum;
