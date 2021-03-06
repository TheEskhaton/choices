import { useContext, useState } from "react";
import { animated } from "react-spring";
import { ColorContext } from "../pages";
import Song from "./Song";

const SongChoice = ({ onSongChosen, currentStep, animateStyle }) => {
  const colorContext = useContext(ColorContext);
  const [playingSongIndex, setPlayingSongIndex] = useState(0);

  return (
    <>
      <animated.div
        style={animateStyle}
        className={`${currentStep !== 3 ? "hidden" : ""}`}
      >
        <h1 className={`text-${colorContext.color}-200 h-full text-4xl`}>
          Which song do you like the best?
        </h1>
      </animated.div>
      <animated.div
        style={animateStyle}
        className={`flex ${currentStep !== 3 ? "hidden" : ""}`}
      >
        <Song
          index="1"
          isPlaying={playingSongIndex === 1}
          onPlay={() =>
            playingSongIndex === 1
              ? setPlayingSongIndex(0)
              : setPlayingSongIndex(1)
          }
          url={"https://freepd.com/music/Wakka%20Wakka.mp3"}
          onSongChosen={onSongChosen}
        ></Song>
        <Song
          index="2"
          isPlaying={playingSongIndex === 2}
          onPlay={() =>
            playingSongIndex === 2
              ? setPlayingSongIndex(0)
              : setPlayingSongIndex(2)
          }
          url={"https://freepd.com/music/Spring Chicken.mp3"}
          onSongChosen={onSongChosen}
        ></Song>
        <Song
          index="3"
          isPlaying={playingSongIndex === 3}
          onPlay={() =>
            playingSongIndex === 3
              ? setPlayingSongIndex(0)
              : setPlayingSongIndex(3)
          }
          url={" https://freepd.com/music/Study and Relax.mp3"}
          onSongChosen={onSongChosen}
        ></Song>

      </animated.div>
      
      <animated.button
          style={animateStyle}
          onClick={onSongChosen}
          className={`px-2 py-1 text-xl rounded-lg focus:outline-none m-2 text-${colorContext.color}-50 bg-${colorContext.color}-600 border-${colorContext.color}-300 border-4 focus:ring-4 focus:ring-${colorContext.color}-500 focus:ring-opacity-50 font-mono ${currentStep !== 3 ? "hidden" : ""}`}
        >
          That one
        </animated.button>
    </>
  );
};

export default SongChoice;
