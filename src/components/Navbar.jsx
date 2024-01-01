import "./Styles.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav_items">
          <ul className=" flex justify-center items-center font-poiret">
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
