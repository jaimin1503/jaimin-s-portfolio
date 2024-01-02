import "./Styles.css";
import useCustomCursor from "./useCustomCursor";
import { motion } from "framer-motion";

const Navbar = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();

  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <nav>
        <div className="nav_items">
          <ul
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className=" flex justify-center items-center font-poiret"
          >
            <li className={`items text-lg my-4 mx-8 cursor-pointer cool-link`}>
              HOME
            </li>
            <li className={`items text-lg my-4 mx-8 cursor-pointer cool-link`}>
              ABOUT ME
            </li>
            <li className={`items text-lg my-4 mx-8 cursor-pointer cool-link`}>
              SKILLS
            </li>
            <li className={`items text-lg my-4 mx-8 cursor-pointer cool-link`}>
              CONTACT
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
