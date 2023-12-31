import Navbar from "../../components/Navbar";
import Welcome from "../../components/homepage/Welcome";
import "../../components/Styles.css";
import "../../components/components.js";

const HomePage = () => {
  return (
    <div className=" bg-[#092635] h-screen w-screen">
      <Navbar />
      <div className="welcome flex md:flex-row justify-center items-center flex-col">
        <div className=" md:mb-10">
          <Welcome />
        </div>
        <div className="intro md:mt-20">
          <h1 className=" md:-ml-40 text-balance lg:text-8xl sm:text-7xl text-6xl max-w-xl text-[#B19470] font-poiret font-extrabold text-center md:mt-0 -mt-10">
            Web Designer &amp; Developer
          </h1>
        </div>
      </div>
      <div className="headline  lg:text-6xl sm:text-5xl text-4xl text-wrap text-[#F8FAE5] font-poiret font-extrabold text-center">
        <h1 className=" mt-10">
          "Innovative <span className=" text-[#43766C]">MERN</span> Solutions
          for Your Digital Success Story"
        </h1>
      </div>
      <span
        id="cursorFollower"
        className="cursorFollower bg-green-200 md:h-[10rem] md:w-[10rem] h-[7rem] w-[7rem] "
      ></span>
    </div>
  );
};
export default HomePage;
