import "../../components/Styles.css";
import Instagram from "./assets/instagram";
import jaimin from "./assets/jaimin.png";
import { Link } from "react-router-dom";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
const AboutMe = () => {
  return (
    <div className=" bg-[#9EC8B9] h-screen w-screen">
      <div className=" flex flex-col">
        <div className="about-me py-10 flex justify-center ">
          <div className="info-text p-10 flex flex-col items-start">
            <h2 className=" text-4xl font-poiret py-5 text-[#092635] font-extrabold">
              Hello, I am Jaimin Viramgama
            </h2>
            <h2 className=" text-4xl font-poiret py-5 text-[#092635] font-extrabold">
              I do Front-end development.
            </h2>
            <p className=" text-2xl font-poiret max-w-xl text-[#092635]">
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
                <button className=" py-2 px-5">Schedule a meet</button>
                <button className=" py-2 px-5">Resume {"->"}</button>
              </div>

              <div className="social-links w-fit p-3 rounded-2xl">
                <div className="flex relative opacity-100">
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
            <img className="w-[30vw] object-center" src={jaimin} alt="jaimin" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
