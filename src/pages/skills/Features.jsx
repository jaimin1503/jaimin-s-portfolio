import "./skills.css";

const Features = ({ image, text, heading }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className=" h-[120px] w-[120px] rounded-full bg-[#9EC8B9] relative flex justify-center items-center mt-10 md:h-[140px] md:w-[140px] md:mt-20">
        <img className=" w-[70px] absolute" src={image} alt="faster" />
      </div>
      <h1 className="text-2xl md:text-3xl p-5 pb-2 text-center max-w-xl text-white">
        {heading}
      </h1>
      <p className=" text-gray-200 font-thin text-lg max-w-[200px] md:max-w-[250px] text-center">
        {text}
      </p>
    </div>
  );
};
export default Features;
