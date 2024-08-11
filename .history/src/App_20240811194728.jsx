//<<<<<<< ⌬ Tabnine Instruct <<<<<<<
// eslint-disable-next-line no-unused-vars
import React from "react";
//>>>>>>> ⌬ Tabnine Instruct >>>>>>>
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Display from "./Components/Display";
const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio preload="auto"></audio>
    </div>
  );
};

export default App;
