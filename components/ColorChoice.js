import { useContext } from "react";
import { animated } from "react-spring";
import { ColorContext } from "../pages";

const ColorChoice = ({
  onColorChosen,
  favWord,
  colWord,
  onNext,
  animateStyle,
}) => {
  const colorContext = useContext(ColorContext);

  return (
    <>
      <animated.div style={animateStyle}>
        <h1 className={`text-${colorContext.color}-200 h-full text-4xl`}>
          What is your {favWord?.toLowerCase()} {colWord?.toLowerCase()}?
        </h1>
      </animated.div>
      <animated.div className="flex m-5 flex-wrap" style={animateStyle}>
        <button
          onClick={() => onColorChosen("green")}
          className="focus:outline-none m-2 text-green-50 bg-green-600 rounded-full h-9 w-9 border-green-300 border-4 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("gray")}
          className="focus:outline-none m-2 text-gray-50 bg-gray-600 rounded-full h-9 w-9 border-gray-300 border-4 focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("red")}
          className="focus:outline-none m-2 text-red-50 bg-red-600 rounded-full h-9 w-9 border-red-300 border-4 focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("yellow")}
          className="focus:outline-none m-2 text-yellow-50 bg-yellow-600 rounded-full h-9 w-9 border-yellow-300 border-4 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("blue")}
          className="focus:outline-none m-2 text-blue-50 bg-blue-600 rounded-full h-9 w-9 border-blue-300 border-4 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("indigo")}
          className="focus:outline-none m-2 text-indigo-50 bg-indigo-600 rounded-full h-9 w-9 border-indigo-300 border-4 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("purple")}
          className="focus:outline-none m-2 text-purple-50 bg-purple-600 rounded-full h-9 w-9 border-purple-300 border-4 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
        ></button>
        <button
          onClick={() => onColorChosen("pink")}
          className="focus:outline-none m-2 text-pink-50 bg-pink-600 rounded-full h-9 w-9 border-pink-300 border-4 focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
        ></button>
      </animated.div>
      <animated.button
        onClick={() => onNext()}
        className={`font-mono text-${colorContext.color}-50 bg-${colorContext.color}-600 px-2 py-1 rounded-md text-xl`}
        style={animateStyle}
      >
        Continue
      </animated.button>
    </>
  );
};

export default ColorChoice;
