import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import insta from "./assets/insta.png";
import insta_sm from "./assets/insta_sm.png";
import do_remote from "./assets/do_remote.png";
import do_remote_sm from "./assets/dr_sm.png";
import news from "./assets/news.png";
import news_sm from "./assets/news_sm.png";
import otw from "./assets/otw.png";
import otw_sm from "./assets/otw_sm.png";
import "../../fonts/Font.css";

const projectsData = [
  {
    images: [insta, insta_sm],
    title: "Friends-Flock",
    code: "https://github.com/jaimin1503/rj-insta",
    live: "https://friends-flock.vercel.app",
    description:
      "In this project me and my friend made a fully working Instagram clone with all the features like posting new post and liking and commenting on post.",
  },
  {
    images: [do_remote, do_remote_sm],
    title: "Do-Remote",
    description:
      "A freelancer and client platform where you can create a profile as a client or as a freelancer. And you can post a job or apply for a job.",
    code: "https://github.com/jaimin1503/do-remote",
    live: "https://do-remote.vercel.app",
  },
  {
    images: [news, news_sm],
    title: "News App",
    description:
      "This is my first project with React.js, In this, I used the news API for fetching current daily news using Axios. And used react-classbased components.",
    code: "https://github.com/jaimin1503/newsapp-main",
    live: "https://hunt-news.netlify.app",
  },
  {
    images: [otw, otw_sm],
    title: "Open to work",
    description:
      "In this project I used react.js, Node.js and MongoDB. In this app you can create a different profile for different roles as a client or as a freelancer.",
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
      controls.start({ opacity: 0, x: isLeft ? "-100%" : "-100%" });
    }
  }, [controls, inView, isLeft]);

  const variants = {
    hidden: { opacity: 0, x: isLeft ? "-100%" : "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`flex justify-center items-center lg:flex-grow lg:flex-shrink-0 lg:p-10 py-5 ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <Project {...project} />
    </motion.div>
  );
};

export default ProjectsPage;
