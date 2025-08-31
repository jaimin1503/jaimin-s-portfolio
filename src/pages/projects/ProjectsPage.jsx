import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import insta from "./assets/insta.png";
import insta_sm from "./assets/insta_sm.png";
import do_remote from "./assets/do_remote.png";
import do_remote_sm from "./assets/dr_sm.png";
import resume_hub from "./assets/resume_hub.png";
import resume_hub_sm from "./assets/resume_hub_sm.png";
import otw from "./assets/otw.png";
import otw_sm from "./assets/otw_sm.png";
import "../../fonts/Font.css";
import bash from "./assets/stack/Bash.svg";
import bootstrap from "./assets/stack/Bootstrap.svg";
import chartjs from "./assets/stack/ChartJs.svg";
import css from "./assets/stack/CSS.png";
import doker from "./assets/stack/Docker.svg";
import express from "./assets/stack/Express.png";
import git from "./assets/stack/Git.svg";
import github from "./assets/stack/Github.svg";
import html from "./assets/stack/HTML.png";
import javascript from "./assets/stack/Javascript.svg";
import materialui from "./assets/stack/MaterialUI.svg";
import next from "./assets/stack/Next.svg";
import react from "./assets/stack/React.png";
import redux from "./assets/stack/Redux.svg";
import tailwind from "./assets/stack/Tailwind.png";
import typescript from "./assets/stack/Typescript.svg";
import vercel from "./assets/stack/Vercel.svg";
import mongodb from "./assets/stack/MongoDB.svg";
import node from "./assets/stack/NodeJs.svg";

const projectsData = [
  {
    techstack: [
      tailwind,
      javascript,
      react,
      redux,
      node,
      express,
      mongodb,
      github,
    ],
    images: [insta, insta_sm],
    title: "Friends-Flock",
    code: "https://github.com/jaimin1503/rj-insta",
    live: "https://friends-flock.vercel.app",
    description:
      "In this project me and my friend made a fully working Instagram clone with all the features like posting new post and liking and commenting on post.",
  },
  {
    techstack: [tailwind, javascript, react, redux, node, express, mongodb],
    images: [do_remote, do_remote_sm],
    title: "Do-Remote",
    description:
      "A freelancer and client platform where you can create a profile as a client or as a freelancer. And you can post a job or apply for a job.",
    code: "https://github.com/jaimin1503/do-remote",
    live: "https://do-remote.vercel.app",
  },
  {
    techstack: [tailwind, javascript, react, redux, node, express, github],
    images: [resume_hub, resume_hub_sm],
    title: "Resume Hub",
    description:
      "A place to generate your professional resumes by just filling the details. Multiple free templates to choose amongs the professional designs.",
    code: "https://github.com/jaimin1503/zidio-resume-builder",
    live: "https://pro-resume-hub.vercel.app",
  },
  {
    techstack: [tailwind, javascript, react, node, express],
    images: [otw, otw_sm],
    title: "Open to work",
    description:
      "In this project I used react.js, Node.js and MongoDB. In this app you can create a different profile for different roles as a client or as a freelancer.",
    code: "https://github.com/jaimin1503/odoo-hackathon",
    live: "https://task-me-bay.vercel.app/log-in",
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
      <Project project={project} index={index} />
    </motion.div>
  );
};

export default ProjectsPage;
