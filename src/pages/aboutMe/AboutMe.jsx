import "../../components/Styles.css";
import jaimin from "./assets/jaimin.png";
const AboutMe = () => {
  return (
    <div className=" bg-[#9EC8B9] h-screen w-screen">
      <div className="about-me py-10 flex justify-center items-center">
        <div className="info-text p-10">
          <h2 className=" text-4xl font-poiret py-5 font-extrabold">
            Hello, I am Jaimin Viramgama
          </h2>
          <p className=" text-2xl font-poiret max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ipsum consequatur saepe omnis illum nostrum. In architecto, eos
            adipisci ducimus id natus delectus nisi fuga qui consectetur aperiam
            dolorum beatae. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Aspernatur, at alias temporibus eos architecto cupiditate
            ullam perferendis vitae id dolor minima? Molestias, consequatur
            saepe molestiae aut iure hic provident ipsa. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Necessitatibus doloribus quod
            fugit nostrum repellendus recusandae quia amet incidunt officia
            harum adipisci soluta earum corrupti excepturi cum, tenetur debitis
            exercitationem ipsa?
          </p>
        </div>
        <div className="my-image">
          <img className="w-[30vw] object-center" src={jaimin} alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
