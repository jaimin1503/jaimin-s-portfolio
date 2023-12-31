import Navbar from "../../components/Navbar";
import Welcome from "../../components/homepage/Welcome";
import "../../components/Styles.css";

const HomePage = () => {
  const follower = document.getElementsByClassName("cursor");
  const followCursor = () => {
    
  };
  return (
    <div className=" bg-[#092635] h-screen w-screen">
      <Navbar />
      <div className="welcome">
        <Welcome />
      </div>
      <div
        onMouseMove={followCursor}
        className="cursor h-20 w-20 bg-white rounded-full"
      ></div>
    </div>
  );
};
export default HomePage;
