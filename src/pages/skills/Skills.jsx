import Features from "./Features";
import faster from "./assets/faster.svg";
import responsive from "./assets/responsive.svg";
import bulb from "./assets/bulb.svg";
import rocket from "./assets/rocket.svg";

const Skills = () => {
  return (
    <div className=" h-screen w-screen bg-[#092635]">
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
    </div>
  );
};
export default Skills;
