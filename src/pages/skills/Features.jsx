import "./skills.css";

const Features = ({ image }) => {
  return (
    <div>
      <div className=" h-[140px] w-[140px] rounded-full bg-[#9EC8B9] relative flex justify-center items-center mt-20">
        <img className=" w-[70px] absolute" src={image} alt="faster" />
      </div>
    </div>
  );
};
export default Features;
