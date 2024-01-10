import "./projects.css";
import { useEffect, useState } from "react";

const Project = (props) => {
  const images = props.images;
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
    if (windowWidth < 600) {
      setImageSrc(images[1]);
    } else if (windowWidth >= 600 && windowWidth < 1200) {
      setImageSrc(images[0]);
    } else {
      setImageSrc(images[0]);
    }
  }, [windowWidth]);
  return (
    <div>
      <div className="box h-[65vh] w-[70vw] lg:h-[60vh] lg:w-[60vw] project-bg rounded-xl ">
        <div className=" px-10 items-center info-bg w-full h-full info flex justify-start absolute rounded-xl">
          <h1 className=" text-4xl text-red-400">Apple Home-page</h1>
        </div>
        <img
          className=" h-full w-full object-cover rounded-xl object-top"
          src={imageSrc}
          alt="image"
        />
      </div>
    </div>
  );
};
export default Project;
