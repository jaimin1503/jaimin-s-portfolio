import "../Styles.css";

const Welcome = () => {
  return (
    <div>
      <div className=" m-20 lg:h-[20vw] lg:w-[20vw] w-[30vw] h-[30vw] rounded-full  bg-[#9EC8B9] flex justify-center items-center welcome-circle flex-col bg-blend-multiply">
        <h1 className="lg:text-4xl text-3xl font-poiret font-bold">Welcome!</h1>
        <h2 className=" text-2xl lg:text-3xl font-poiret font-semibold">
          to Jaimin's
        </h2>
        <h2 className=" text-2xl lg:text-3xl font-poiret font-semibold">
          Portfolio
        </h2>
      </div>
    </div>
  );
};
export default Welcome;
