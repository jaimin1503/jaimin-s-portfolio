const TechStack = ({ image }) => {
  return (
    <div>
      <img
        className=" h-[60px] md:h-[80px] lg:h-[90px] m-3 mx-5 my-5 lg:mx-8"
        src={image}
        alt="tech"
      />
    </div>
  );
};
export default TechStack;
