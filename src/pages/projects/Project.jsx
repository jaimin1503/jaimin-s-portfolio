import "./projects.css";
import { useEffect, useState } from "react";
import github from "./assets/github.svg";
import link from "./assets/link.svg";
import { Link } from "react-router-dom";
const Project = (props) => {
  const images = props.images;
  const title = props.title;
  const description = props.description;
  const live = props.live;
  const code = props.code;
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
    <div>
      <div className="box w-[70vw] lg:w-[60vw] project-bg rounded-xl">
        <div className=" px-10 justify-center info-bg w-full h-full info flex flex-col items-start absolute rounded-xl">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold">
            {title}
          </h1>
          <p className=" text-white text-lg md:text-xl max-w-sm py-5 leading-5 md:leading-8 font-light">
            {description}
          </p>
          <div className="flex relative pt-5">
            <Link to={code}>
              <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                <img className="h-6 md:h-8" src={github} alt="github" />
              </div>
            </Link>
            <Link to={live}>
              <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                <img className="h-6 md:h-8" src={link} alt="github" />
              </div>
            </Link>
          </div>
        </div>
        <img
          className=" h-full w-full object-contain rounded-xl object-top"
          src={imageSrc}
          alt="image"
        />
      </div>
    </div>
  );
};
export default Project;
