//<<<<<<< ⌬ Tabnine Instruct <<<<<<<
// eslint-disable-next-line no-unused-vars
import React from "react";
//>>>>>>> ⌬ Tabnine Instruct >>>>>>>
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import DisplayHome from "./Components/DisplayHome";
const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <DisplayHome
      </div>
      <Player />
    </div>
  );
};

export default App;
