import Project from "./Project";
import apple from "./assets/apple.png";
import apple_sm from "./assets/apple-sm.png";
import netflix from "./assets/netflix.png";
import netflix_sm from "./assets/netflix-sm.png";
const ProjectsPage = () => {
  const appleImages = [apple, apple_sm];
  const netflixImages = [netflix, netflix_sm];
  return (
    <div className="bg-[#092635] flex justify-center p-5 ">
      <div className="container border-2 border-dashed  rounded-2xl">
        <div className="heading flex justify-center items-center">
          <h1 className=" text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white">
            My Projects
          </h1>
        </div>
        <div className="projects-container">
          <div className=" flex justify-center items-center lg:justify-start lg:p-10 py-5">
            <Project images={appleImages} />
          </div>
          <div className=" flex justify-center items-center lg:justify-end lg:p-10 py-5">
		  <Project images={netflixImages} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
