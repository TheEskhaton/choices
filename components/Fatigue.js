import { useContext } from "react";
import { animated, useSpring } from "react-spring";
import { ColorContext } from "../pages";

const Fatigue = () => {
  const colorContext = useContext(ColorContext);

  const textAnimationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 200, clamp: true, delay: 2000 },
  });

  return (
    <div className="flex flex-col space-y-5">
      <animated.h2
        style={textAnimationProps}
        className={`text-${colorContext.color}-200 text-4xl`}
      >
        Are those really choices you needed to make?
      </animated.h2>
      <animated.h3
        style={textAnimationProps}
        className={`text-${colorContext.color}-200 text-xl`}
      >
        Probably not.
      </animated.h3>
      <animated.span
        style={textAnimationProps}
        className={`flex flex-col space-x-3 text-2xl text-${colorContext.color}-200`}
      >
        <span className="text-left mb-4 p-4">
          <ul className="sm:list-disc list-none flex flex-col space-y-2">
            <li>Plan daily decisions the night before.</li>
            <li>Do the most important thing first.</li>
            <li>Stop making decisions. Start making commitments. </li>
            <li>Simplify.</li>
          </ul>
        </span>
        <span className="text-4xl">
          <a
            className={`underline`}
            target="_blank"
            href="https://www.healthline.com/health/decision-fatigue"
          >
            Avoid Decision Fatigue
          </a>
          .
        </span>
      </animated.span>
    </div>
  );
};

export default Fatigue;
