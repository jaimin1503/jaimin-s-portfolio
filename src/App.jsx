import AboutMe from "./pages/aboutMe/AboutMe";
import HomePage from "./pages/home/HomePage";
import "./pages/cursor.js";
// import "./pages/cursor.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      {/* <span
        id="cursorFollower"
        className="cursorFollower bg-gray-100 md:h-[10rem] md:w-[10rem] h-[7rem] w-[7rem] "
      ></span> */}
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <HomePage />
      <AboutMe />
    </>
  );
}

export default App;
