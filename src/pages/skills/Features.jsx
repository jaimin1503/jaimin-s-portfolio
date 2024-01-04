import "./skills.css";

const Features = ({ image }) => {
  return (
    <div>
      <div className=" h-[120px] w-[120px] rounded-full bg-[#9EC8B9] relative flex justify-center items-center mt-10 md:h-[140px] md:w-[140px] md:mt-20">
        <img className=" w-[70px] absolute" src={image} alt="faster" />
      </div>
    </div>
  );
};
export default Features;
