import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import apple from "./assets/apple.png";
import apple_sm from "./assets/apple-sm.png";
import netflix from "./assets/netflix.png";
import netflix_sm from "./assets/netflix-sm.png";
import news from "./assets/news.png";
import news_sm from "./assets/news_sm.png";
import otw from "./assets/otw.png";
import otw_sm from "./assets/otw_sm.png";
import "../../fonts/Font.css";

const projectsData = [
  {
    images: [apple, apple_sm],
    title: "Apple Home-page",
    live: "https://apple-clone-homepage-add03b.netlify.app",
    code: "https://github.com/jaimin1503/Apple_clone",
    description:
      "This is my first project from where my journey of web-development started. In this, I have made the official Apple website HomePage using HTML and CSS.",
  },
  {
    images: [netflix, netflix_sm],
    title: "Netflix Clone",
    description:
      "This is my first project with backend in this I tried to make a netflix clone. I have used HTML, CSS, NodeJs, and Express.",
    code: "https://github.com/jaimin1503/Netflix_Final",
    live: "https://netflix-clone-homepage-851a7b.netlify.app",
  },
  {
    images: [news, news_sm],
    title: "News App",
    description:
      "This is my first project with React.js, In this, I used the news API for fetching current daily news using Axios. And used react-classbased components.",
    code: "https://github.com/jaimin1503/newsapp-main",
  },
  {
    images: [otw, otw_sm],
    title: "Open to work",
    description:
      "In this project I used react.js, Express.js, Node.js and MongoDB for database. In this app you can create a different profile for different roles as a client or as a freelancer.",
    code: "https://github.com/jaimin1503/opentowork",
    live: "https://opentowork-jaimin.netlify.app",
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects" className="bg-[#092635] flex justify-center p-5 ">
      <div className="container border-2 border-dashed rounded-2xl">
        <div className="heading flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white font-Montserrat">
            My <span className="text-purple-400">Projects</span>
          </h1>
        </div>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <AnimateProject key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimateProject = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isLeft ? -200 : 200 });
    }
  }, [controls, inView, isLeft]);

  const variants = {
    hidden: { opacity: 0, x: isLeft ? -200 : 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`flex justify-center items-center lg:p-10 py-5 ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <Project {...project} />
    </motion.div>
  );
};

export default ProjectsPage;
