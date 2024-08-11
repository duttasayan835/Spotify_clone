import { createContext, useRef } from "react";
export const PlayerContext = createContext();
const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const SeekBg = useRef();
  const SeekBar = useRef();
  const contextValue = {
    audioRef,
    SeekBg,
    SeekBar,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
