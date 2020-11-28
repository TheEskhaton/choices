import { useContext, useEffect, useRef } from "react";
import { ColorContext } from "../pages";

const Song = ({ url, index, onPlay, isPlaying = false, onSongChosen }) => {
  const colorContext = useContext(ColorContext);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying]);

  return (
    <div className="flex flex-col items-center m-4 w-24">
      <audio loop ref={audioRef} src={url}></audio>
      <button
        onClick={() => (onPlay ? onPlay() : "")}
        className={`text-xl focus:outline-none m-2 text-${colorContext.color}-50 bg-${colorContext.color}-600 rounded-full h-9 w-9 border-${colorContext.color}-300 border-4 focus:ring-4 focus:ring-${colorContext.color}-500 focus:ring-opacity-50 font-mono`}
      >
        {index}
      </button>
      <button
        onClick={() => (onPlay ? onPlay() : "")}
        className={`text-2xl relative focus:outline-none text-${colorContext.color}-50 bg-${colorContext.color}-600 rounded-md px-2 border-${colorContext.color}-300 border-4 focus:ring-4 focus:ring-${colorContext.color}-500 focus:ring-opacity-50 font-mono`}
      >
        <span
          className={`${
            isPlaying ? "animate-ping inline-flex" : "hidden"
          } absolute top-0 left-0 h-full w-full rounded-full bg-${
            colorContext.color
          }-300 opacity-25`}
        ></span>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Song;
