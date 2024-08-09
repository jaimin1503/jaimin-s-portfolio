import "./projects.css";
import { useEffect, useState } from "react";
import github from "./assets/github.svg";
import link from "./assets/link.svg";
import { Link } from "react-router-dom";
const Project = ({ project, index }) => {
  const stack = project.techstack;
  const images = project.images;
  const title = project.title;
  const description = project.description;
  const live = project.live;
  const code = project.code;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Define your logic here to choose images based on different screen widths
    if (windowWidth < 800) {
      setImageSrc(images[1]);
    } else if (windowWidth >= 800 && windowWidth < 1200) {
      setImageSrc(images[0]);
    } else {
      setImageSrc(images[0]);
    }
  }, [windowWidth]);
  return (
    <div className=" projectCard">
      <div className="projectNumber rightNumber text-9xl sm:text-[200px]">
        0{index + 1}
      </div>
      <div className=" box relative w-[70vw] lg:w-[60vw] project-bg rounded-xl overflow-hidden">
        <div className="px-10 justify-center info-bg w-full h-full info flex flex-col items-start absolute rounded-xl z-50">
          <h1 className=" md:projectHeading text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-lg py-5 leading-5 md:leading-8 font-light">
            {description}
          </p>

          <div className="flex relative pt-5">
            <Link to={code}>
              <div className="p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                <img className="h-6 md:h-8" src={github} alt="github" />
              </div>
            </Link>
            <Link to={live}>
              <div className="p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                <img className="h-6 md:h-8" src={link} alt="github" />
              </div>
            </Link>
          </div>
          <div className=" flex md:max-w-sm flex-wrap mt-10 max-w-sm">
            {stack?.map((item) => {
              return (
                <img
                  className="md:projectSkill w-[25px] md:w-[30px] xl:w-[40px] m-2 z-50"
                  src={item}
                  key={item}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              );
            })}
          </div>
        </div>
        <img
          className="h-full w-full object-contain rounded-xl object-top"
          src={imageSrc}
          alt="image"
        />
      </div>
    </div>
  );
};
export default Project;
