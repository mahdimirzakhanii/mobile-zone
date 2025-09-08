import imgBanner from "../../../public/assets/image/apple/iphone-16-pro-max.png";

const Banner = () => {
  return (
    <div className="flex relative flex-col items-center lg:pl-20 mt-20 gap-5 h-[550px] md:h-[400px] w-full bg-gray-blue-700/60">
      <div className="flex items-center flex-col pb-5 md:pb-0 md:flex-row justify-start w-[90%] h-full">
        <div className="flex flex-col items-center md:items-start w-full gap-5 my-10">
          <h2 className="text-3xl"> Iphon 16 ProMax </h2>
          <div className="flex items-center wf justify-center gap-5">
            <span className="text-sm md:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 md:w-16 md:h-16 ">
              $1200
            </span>
            <span className="text-sm md:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 md:w-16 md:h-16 ">
              1TB
            </span>
            <span className="text-sm md:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 md:w-16 lg:h-16 ">
              8GB
            </span>
          </div>
          <button className="text-white bg-blue-950 text-base rounded px-8 py-2">
            buy
          </button>
        </div>
        <img
          className="absolute -bottom-0 md:-top-10 lg:-top-20 md:-right-[0%] xl:right-[10%] w-[480px] md:w-[600px] lg:w-[650px] "
          src={imgBanner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
