import { useContext } from "react";
import { animated } from "react-spring";
import { ColorContext } from "../pages";

const TwoChoices = ({
  question,
  choiceOne,
  choiceTwo,
  onChoice,
  animateStyle,
}) => {
  const colorContext = useContext(ColorContext);

  return (
    <>
      <animated.div style={animateStyle}>
        <h1
          className={`text-${colorContext.color}-200 h-full sm:text-4xl text-3xl`}
        >
          {question}
        </h1>
      </animated.div>
      <animated.div style={animateStyle} className="flex space-x-5">
        <button
          onClick={() => onChoice(choiceOne)}
          className={`focus:outline-none text-xl text-${colorContext.color}-50 bg-${colorContext.color}-600 rounded-md px-2 py-1 focus:ring-4 focus:ring-${colorContext.color}-500 focus:ring-opacity-50`}
        >
          {choiceOne}
        </button>
        <button
          onClick={() => onChoice(choiceTwo)}
          className={`focus:outline-none text-xl text-${colorContext.color}-50 bg-${colorContext.color}-600 rounded-md px-2 py-1 focus:ring-4 focus:ring-${colorContext.color}-500 focus:ring-opacity-50`}
        >
          {choiceTwo}
        </button>
      </animated.div>
    </>
  );
};

export default TwoChoices;
