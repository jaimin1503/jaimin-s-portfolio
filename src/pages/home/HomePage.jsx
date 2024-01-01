import Navbar from "../../components/Navbar";
import Welcome from "../../components/homepage/Welcome";
import "../../components/Styles.css";
import "./cursor.js";
import developer from "../assets/developer.png";

const HomePage = () => {
  return (
    <div className=" bg-[#092635]">
      <Navbar />
      <div className=" flex justify-center flex-col items-center lg:flex-row">
        <div className="developer ml-10 pointer-events-none">
          <img
            className=" object-cover h-[40vh] md:h-[60vh] developer-img "
            src={developer}
            alt="dev"
          />
        </div>
        <div className="welcome flex md:flex-row justify-center items-center flex-col">
          <div className=" md:mb-10">
            <Welcome />
          </div>
          <div className="intro_home md:mt-20">
            <h1 className=" md:-ml-40 text-balance lg:text-7xl sm:text-6xl text-6xl max-w-xl text-[#F8FAE5] font-poiret font-extrabold text-center md:mt-0 -mt-10 text-shadow">
              Web Designer &amp; Developer
            </h1>
          </div>
        </div>
      </div>
      <div className="headline  lg:text-5xl sm:text-5xl text-4xl text-wrap text-[#F8FAE5] font-poiret font-extrabold text-center py-10">
        <h1 className="py-5 lg:py-10">
          "Innovative <span className=" text-[#43766C]">MERN</span> Solutions
          for Your Digital Success Story"
        </h1>
        <h1 className="py-5 lg:py-10">"Innovate, Develop, Deliver"</h1>
      </div>
      <span
        id="cursorFollower"
        className="cursorFollower bg-green-200 md:h-[10rem] md:w-[10rem] h-[7rem] w-[7rem] "
      ></span>
    </div>
  );
};
export default HomePage;
