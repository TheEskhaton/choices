import React, { useRef } from "react";
import Head from "next/head";
import { useState } from "react";
import ColorChoice from "../components/ColorChoice";
import SongChoice from "../components/SongChoice";
import TwoChoices from "../components/TwoChoices";
import Fatigue from "../components/Fatigue";
import { useChain, useSpring, animated, useTransition } from "react-spring";

export const ColorContext = React.createContext();

export default function Home() {
  const [heading, setHeading] = useState("Choices.");
  const [favWord, setFavWord] = useState("");
  const [colWord, setColWord] = useState("");
  const [color, setColor] = useState("green");
  const [currentStep, setCurrentStep] = useState(0);

  const transitions = useTransition(currentStep, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: { mass: 100, clamp: true },
    onDestroyed: () => console.log("destroyed"),
  });

  const advanceStep = (onAdvance) => {
    if (transitions[0].props.opacity.done) {
      onAdvance && onAdvance();
      setHeading((heading) =>
        heading === "Choices." ? "Decisions." : "Choices."
      );
      setCurrentStep((step) => step + 1);
    }
  };

  return (
    <div>
      <Head>
        <title>Choices</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Making decisions all day is hard."
        ></meta>
        <meta
          name="keywords"
          content="decision fatigue,decision,choice,decisions"
        ></meta>
        <meta name="og:title" content="Choices"></meta>
        <meta
          name="og:image"
          content="https://choices.codejuration.com/social_scr.png"
        ></meta>
      </Head>
      <ColorContext.Provider
        value={{
          color: color,
          setColor: setColor,
        }}
      >
        <div className="flex h-screen w-full flex-col justify-center relative">
          <a href="https://github.com/TheEskhaton/choices">
            <img
              alt="GitHub project"
              target="_blank"
              className="absolute top-0 right-0 mr-2 mt-2 w-8 h-8 opacity-40 hover:opacity-100"
              src="/GitHub-Mark-Light-32px.png"
            ></img>
          </a>
          <div
            className={`bg-${color}-900 text-center flex justify-center space-y-4 flex-col items-center h-full`}
          >
            <animated.div style={transitions[0].props}>
              <h1 className={`text-${color}-200 h-full sm:text-8xl text-6xl`}>
                {heading}
              </h1>
            </animated.div>
            {currentStep === 0 && (
              <TwoChoices
                animateStyle={transitions[0].props}
                question="Is it favorite or favourite"
                choiceOne="Favorite"
                choiceTwo="Favourite"
                onChoice={(choice) => advanceStep(() => setFavWord(choice))}
              ></TwoChoices>
            )}

            {currentStep === 1 && (
              <TwoChoices
                animateStyle={transitions[0].props}
                question="Is it color or colour?"
                choiceOne="Color"
                choiceTwo="Colour"
                onChoice={(choice) => advanceStep(() => setColWord(choice))}
              ></TwoChoices>
            )}

            {currentStep === 2 && (
              <ColorChoice
                animateStyle={transitions[0].props}
                favWord={favWord}
                colWord={colWord}
                onColorChosen={(color) => {
                  setColor(color);
                }}
                onNext={() => advanceStep()}
              ></ColorChoice>
            )}

            <SongChoice
              animateStyle={transitions[0].props}
              currentStep={currentStep}
              onSongChosen={() => advanceStep()}
            ></SongChoice>

            {currentStep === 4 && (
              <Fatigue animateStyle={transitions[0].props}></Fatigue>
            )}
          </div>
        </div>
        <button
          onClick={() => window.location.reload()}
          className={`bg-${color}-700 m-3 text-sm text-gray-100 rounded-full h-12 w-12 absolute bottom-0 left-0 focus:outline-none focus:ring-2 focus:ring-white-200`}
        >
          Reset
        </button>
        <div
          className={`text-sm text-${color}-300 mb-3 absolute bottom-0 sm:left-1/2 sm:-ml-36 right-1`}
        >
          Made with ❤️ by{" "}
          <a
            className="underline"
            target="_blank"
            href="https://twitter.com/TheEskhaton1"
          >
            this guy right here
          </a>
        </div>
      </ColorContext.Provider>
    </div>
  );
}
