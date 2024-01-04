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
        <div className=" flex flex-col items-center">
          <Features image={faster} />
          <h1 className="text-2xl md:text-3xl p-5 pb-2 text-center max-w-xl text-white">
            Fast
          </h1>
          <p className=" text-gray-200 font-thin text-lg max-w-[200px] md:max-w-[250px] text-center">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <Features image={responsive} />
          <h1 className="text-2xl md:text-3xl p-5 pb-2 text-center max-w-xl text-white">
            Responsive
          </h1>
          <p className=" text-gray-200 font-thin text-lg max-w-[200px] md:max-w-[250px] text-center">
            My layouts will work on any device, big or small.
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <Features image={bulb} />
          <h1 className="text-2xl md:text-3xl p-5 pb-2 text-center max-w-xl text-white">
            Intuitive
          </h1>
          <p className=" text-gray-200 font-thin text-lg max-w-[200px] md:max-w-[250px] text-center">
            Strong preference for easy to use, intuitive UX/UI.
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <Features image={rocket} />
          <h1 className="text-2xl md:text-3xl p-5 pb-2 text-center max-w-xl text-white">
            Dynamic
          </h1>
          <p className=" text-gray-200 font-thin text-lg max-w-[200px] md:max-w-[250px] text-center">
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
