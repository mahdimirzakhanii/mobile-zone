import imgBanner from "../../../public/assets/image/apple/iphone-16-pro-max.png";

const Banner = () => {
  return (
    <div className="flex relative flex-col items-center lg:pl-20 gap-5 rounded-lg h-[400px] sm:h-[500px] lg:h-[400px] w-[90%] bg-gray-blue-700/60">
      <div className="flex items-center flex-col-reverse pb-5 lg:pb-0 lg:flex-row justify-start w-full h-full">
        <div className="flex flex-col items-center lg:items-start w-full gap-5">
          <h2 className="text-3xl"> Iphon 16 ProMax </h2>
          <div className="flex items-center wf justify-center gap-5">
            <span className="text-sm lg:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 lg:w-16 lg:h-16 ">
              $1200
            </span>
            <span className="text-sm lg:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 lg:w-16 lg:h-16 ">
              1TB
            </span>
            <span className="text-sm lg:text-xl text-red-400 flex items-center justify-center shadow-md bg-gray-blue-200 rounded-full w-12 h-12 lg:w-16 lg:h-16 ">
              8GB
            </span>
          </div>
          <button className="text-white bg-blue-950 text-base rounded px-8 py-2">
            buy
          </button>
        </div>
        <img
          className="absolute -top-16 lg:-right-[0%] xl:right-[10%] w-[450px] lg:w-[600px] "
          src={imgBanner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
