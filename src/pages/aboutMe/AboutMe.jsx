import "../../components/Styles.css";
import insta from "./assets/Instagram.svg";
import jaimin from "./assets/jaimin.jpeg";
import { Link } from "react-router-dom";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
import { motion } from "framer-motion";
import useCustomCursor from "../../components/useCustomCursor";
import TypeWriter from "../../components/TypeWriter";

const AboutMe = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();

  return (
    <div id="about" className=" bg-[#092635]">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className=" flex flex-col">
        <div className="heading flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold p-5 text-center border-b-2 border-white max-w-xl text-white font-Montserrat">
            About <span className="text-purple-400">Me!</span>
          </h1>
        </div>
        <div className="about-me py-10 flex-col-reverse flex items-center lg:flex-row lg:justify-center">
          <div className="info-text p-10 flex flex-col items-start">
            <h2 className=" sm:text-5xl text-3xl font-poiret py-5 text-[#dce1e0] font-bold">
              Hello! 👋, People
            </h2>
            <div className=" sm:text-4xl text-3xl font-poiret py-5 text-[#dce1e0] font-bold flex">
              <h1 className=" pr-4">I do</h1>{" "}
              <div className=" text-purple-400">
                <TypeWriter />
              </div>
            </div>
            <p className=" lg:text-2xl text-xl font-poiret max-w-xl text-[#9EC8B9]">
              <span className="ml-10"></span>Hey there! I'm Jaimin, a web
              developer who loves creating awesome and good-looking apps. I'm
              all about making sure they not only work great but also look
              fantastic.
              <br />
              <span className="ml-10"></span>Right now, I'm on the lookout for a
              part-time gig as a frontend and backend engineer. I bring a mix of
              creativity and tech skills to the table, making me a perfect fit
              for any team.
              <br />
              <span className="ml-10"></span>If you want to team up or know more
              about what I do, let's set up a meeting! I'm all about turning
              cool ideas into real, working stuff.
              <br />
              Let's make things happen!
            </p>
            <div className=" flex flex-col mt-10">
              <div className=" links flex font-Montserrat my-5">
                <Link to="https://calendly.com/jaiminv153/30min">
                  <button className=" py-3 px-5 bg-[#9EC8B9] font-bold hover:scale-105 transition-all duration-300 ease-in-out rounded-xl text-[#092635]">
                    Schedule a meet
                  </button>
                </Link>
                <button
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className=" py-2 px-5 text-lg font-bold text-[#9EC8B9] resume-lin"
                >
                  Resume&#8594;
                </button>
              </div>

              <div className="social-links w-fit mt-5 p-3 rounded-2xl">
                <div className="flex relative">
                  <Link to="https://www.linkedin.com/in/jaimin-viramgama-487485233/">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={linkedin} alt="linkedin" />
                    </div>
                  </Link>
                  <Link to="https://github.com/jaimin1503">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={github} alt="github" />
                    </div>
                  </Link>
                  <Link to="https://www.instagram.com/jaimin_15.3/">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={insta} alt="insta" />
                    </div>
                  </Link>
                  <Link to="mailto:jaiminviramgama152@gmail.com">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={email} alt="email" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="my-image">
            <img
              className="w-[50vw] sm:w-[40vw] md:w-[30vw] object-center lg:mb-40 rounded-2xl"
              src={jaimin}
              alt="jaimin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
