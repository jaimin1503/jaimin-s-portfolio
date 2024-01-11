import Project from "./Project";
import apple from "./assets/apple.png";
import apple_sm from "./assets/apple-sm.png";
import netflix from "./assets/netflix.png";
import netflix_sm from "./assets/netflix-sm.png";
import news from "./assets/news.png";
import news_sm from "./assets/news_sm.png";
import otw from "./assets/otw.png";
import otw_sm from "./assets/otw_sm.png";
const ProjectsPage = () => {
  const appleImages = [apple, apple_sm];
  const netflixImages = [netflix, netflix_sm];
  const newsImages = [news, news_sm];
  const otwImages = [otw, otw_sm];
  return (
    <div id="projects" className="bg-[#092635] flex justify-center p-5 ">
      <div className="container border-2 border-dashed  rounded-2xl">
        <div className="heading flex justify-center items-center">
          <h1 className=" text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white">
            My Projects
          </h1>
        </div>
        <div className="projects-container">
          <div className=" flex justify-center items-center lg:justify-start lg:p-10 py-5">
            <Project
              images={appleImages}
              title={"Apple Home-page"}
              live={"https://apple-clone-homepage-add03b.netlify.app"}
              code={"https://github.com/jaimin1503/Apple_clone"}
              description={
                "This i my first project from where my journey of web-development started. In this I have made official Apple website HomePage using HTML and CSS."
              }
            />
          </div>
          <div className=" flex justify-center items-center lg:justify-end lg:p-10 py-5">
            <Project
              images={netflixImages}
              title={"Netflix Clone"}
              description={
                "This is my first project with backend in this I tried to make netflix clone. I have used HTML,CSS,NodeJs and Express."
              }
              code={"https://github.com/jaimin1503/Netflix_Final"}
              live={"https://netflix-clone-homepage-851a7b.netlify.app"}
            />
          </div>
          <div className=" flex justify-center items-center lg:justify-start lg:p-10 py-5">
            <Project
              images={newsImages}
              title={"News App"}
              description={
                "This is my first project with React.js, In this I used news API for fetching current daily news using Axios. And used react-classbased components. "
              }
              code={"https://github.com/jaimin1503/newsapp-main"}
            />
          </div>
          <div className=" flex justify-center items-center lg:justify-end lg:p-10 py-5">
            <Project
              images={otwImages}
              title={"Open to work"}
              description={
                "This is my first project using react as frontend and Express, Node.js as backend and MongoDB for database. In this app you can creeat different profile for different role as a client or as a freeLancer."
              }
              code={"https://github.com/jaimin1503/opentowork"}
              live={"https://opentowork-jaimin.netlify.app"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
