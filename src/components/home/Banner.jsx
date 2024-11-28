import imgBanner from "../../../public/image/apple/iphone-16-pro-max.png";

const Banner = () => {
  return (
    <div className="flex relative flex-col items-center pl-20 gap-5 rounded-lg h-[400px] w-[90%] bg-tertiary">
      <div className="flex items-center justify-start w-full h-full">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl ">Apple Iphon 16 ProMax </h2>
          <div className="flex items-center justify-center gap-5">
            <span className="text-xl text-primary flex items-center justify-center shadow-md bg-white rounded-full w-16 h-16 ">
              $1200
            </span>
            <span className="text-xl text-primary flex items-center justify-center shadow-md bg-white rounded-full w-16 h-16 ">
              1TB
            </span>
            <span className="text-xl text-primary flex items-center justify-center shadow-md bg-white rounded-full w-16 h-16 ">
              8GB
            </span>
          </div>
          <button className="text-white bg-primary text-base rounded px-8 py-2">
            buy
          </button>
        </div>
        <img
          className="absolute -top-16 right-[10%]"
          src={imgBanner}
          width={600}
          height={600}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
