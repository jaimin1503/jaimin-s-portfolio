import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import useCustomCursor from "./useCustomCursor";
import "./Styles.css";

const Navbar = () => {
  const { cursorVariant, variants } = useCustomCursor();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <nav>
        <div className="nav_items">
          <div className=" flex md:justify-center right-0 z-40 fixed md:relative ">
            <motion.ul
              className={`md:flex-row pr-10 font-poiret relative ${
                isOpen ? "v-resp" : "shows"
              } visible`}
            >
              {/* Use Link from react-scroll instead of 'a' */}
              <motion.li className="items text-lg my-4 mx-8 cursor-pointer cool-link">
                <Link to="home" smooth={true} duration={500}>
                  HOME
                </Link>
              </motion.li>
              <motion.li className="items text-lg my-4 mx-8 cursor-pointer cool-link">
                <Link to="about" smooth={true} duration={500}>
                  ABOUT ME
                </Link>
              </motion.li>
              <motion.li className="items text-lg my-4 mx-8 cursor-pointer cool-link">
                <Link to="projects" smooth={true} duration={500}>
                  PROJECTS
                </Link>
              </motion.li>
              <motion.li className="items text-lg my-4 mx-8 cursor-pointer cool-link">
                <Link to="contact" smooth={true} duration={500}>
                  CONTACT
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="menu-button right-3 top-0 py-2 md:hidden z-50 fixed">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
            className="hb"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            height="40px"
            width="40px"
            stroke="#eee"
            strokeWidth=".7"
            fill="rgba(0,0,0,0)"
            strokeLinecap="round"
          >
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
              <animate
                dur="0.2s"
                attributeName="d"
                values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                fill="freeze"
                begin="start.begin"
              />
              <animate
                dur="0.2s"
                attributeName="d"
                values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                fill="freeze"
                begin="reverse.begin"
              />
            </path>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="2s"
                id="reverse"
                attributeName="width"
                begin="click"
              />
            </rect>
            <rect width="10" height="10" stroke="none">
              <animate
                dur="0.001s"
                id="start"
                attributeName="width"
                values="10;0"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="width"
                values="0;10"
                fill="freeze"
                begin="reverse.begin"
              />
            </rect>
          </svg>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
