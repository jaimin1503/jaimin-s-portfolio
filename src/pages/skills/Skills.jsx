import Features from "./Features";
import faster from "./assets/faster.svg";
import responsive from "./assets/responsive.svg";
import bulb from "./assets/bulb.svg";
import rocket from "./assets/rocket.svg";
import css from "./assets/CSS.png";
import HTML from "./assets/HTML.png";
import Javascript from "./assets/Javascript.svg";
import MongoDB from "./assets/MongoDB.svg";
import Github from "./assets/Github.svg";
import Git from "./assets/Git.svg";
import Figma from "./assets/Figma.png";
import React from "./assets/React.png";
import Tailwind from "./assets/Tailwind.png";
import Bootstrap from "./assets/Bootstrap.svg";
import NodeJs from "./assets/NodeJs.svg";
import Docker from "./assets/Docker.svg";
import TechStack from "./TechStack";

const Skills = () => {
  return (
    <div className=" bg-[#092635]">
      <div className="heading flex justify-center items-center">
        <h1 className=" text-4xl md:text-5xl font-bold p-5 pt-10 text-center border-b-2 border-white max-w-xl text-white">
          My teck stack
        </h1>
      </div>
      <div className="features flex flex-wrap md:flex-nowrap justify-around mt-5 ">
        <Features
          image={faster}
          heading={"Fast"}
          text={
            "Fast load times and lag free interaction, my highest priority."
          }
        />
        <Features
          image={responsive}
          heading={"Responsive"}
          text={"My layouts will work on any device, big or small."}
        />
        <Features
          image={bulb}
          heading={"Intuitive"}
          text={"Strong preference for easy to use, intuitive UX/UI."}
        />

        <Features
          image={rocket}
          heading={"Dynamic"}
          text={
            "Websites don't have to be static, I love making pages come to life."
          }
        />
      </div>

      <div className="techStack flex max-w-[85vw] md:max-w-[65vw] lg:max-w-[60vw] flex-wrap items-center justify-center pt-20 py-10 mx-auto">
        <TechStack image={HTML} />
        <TechStack image={css} />
        <TechStack image={Javascript} />
        <TechStack image={Bootstrap} />
        <TechStack image={Tailwind} />
        <TechStack image={React} />
        <TechStack image={NodeJs} />
        <TechStack image={MongoDB} />
        <TechStack image={Git} />
        <TechStack image={Github} />
        <TechStack image={Docker} />
        <TechStack image={Figma} />
      </div>
    </div>
  );
};
export default Skills;
