import "../Styles.css";

const Welcome = () => {
  return (
    <div>
      <div className=" my-5 md:m-10 lg:h-[25vw] lg:w-[25vw] xl:w-[20vw] xl:h-[20vw] sm:w-[30vw] sm:h-[30vw] rounded-full  bg-[#9EC8B9] flex justify-center items-center welcome-circle flex-col bg-blend-multiply h-[40vw] w-[40vw]">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-poiret font-bold">
          Welcome!
        </h1>
        <h2 className=" text-2xl md:text-4xl lg:text-3xl font-poiret font-semibold">
          to Jaimin's
        </h2>
        <h2 className=" text-2xl md:text-4xl lg:text-3xl font-poiret font-semibold">
          Portfolio
        </h2>
      </div>
    </div>
  );
};
export default Welcome;
