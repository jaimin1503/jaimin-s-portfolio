import "../../components/Styles.css";
import Instagram from "./assets/instagram";
import jaimin from "./assets/jaimin.png";
import { Link } from "react-router-dom";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
import { motion } from "framer-motion";
import useCustomCursor from "../../components/useCustomCursor";

const AboutMe = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();

  return (
    <div className=" bg-[#9EC8B9]">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className=" flex flex-col">
        <div className="about-me py-10 flex-col-reverse flex items-center lg:flex-row lg:justify-center">
          <div className="info-text p-10 flex flex-col items-start">
            <h2 className=" sm:text-4xl text-3xl font-mono py-5 text-[#092635] font-bold">
              Hello, I am Jaimin Viramgama
            </h2>
            <h2 className=" sm:text-4xl text-3xl font-mono py-5 text-[#092635] font-medium">
              I do Front-end development.
            </h2>
            <p className=" lg:text-2xl text-xl font-poiret max-w-xl text-[#092635]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ipsum consequatur saepe omnis illum nostrum. In architecto, eos
              adipisci ducimus id natus delectus nisi fuga qui consectetur
              aperiam
              <br />
              dolorum beatae. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aspernatur, at alias temporibus eos architecto
              cupiditate ullam perferendis vitae id dolor minima? Molestias,
              consequatur saepe molestiae aut iure hic provident ipsa. Lorem
              ipsum dolor, sit
            </p>
            <div className=" flex flex-col mt-10">
              <div className=" links flex font-poiret my-5 font-extrabold">
                <button
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className=" py-2 px-5 bg-[#092635] rounded-xl text-white"
                >
                  Schedule a meet
                </button>
                <button
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className=" py-2 px-5 text-lg font-extrabold resume-link"
                >
                  Resume&#8594;
                </button>
              </div>

              <div className="social-links w-fit mt-5 p-3 rounded-2xl">
                <div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="flex relative"
                >
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
                      <Instagram />
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
              className="w-[50vw] sm:w-[40vw] md:w-[30vw] object-center lg:mb-40"
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
