import Banner from "./Banner";
import BestProducts from "./BestProducts";
import Header from "./Header";

const Home = () => {
  const category = [
    {
      name: "Apple",
      imgSrc: "/assets/image/public/aple-logo.png",
    },
    {
      name: "Huawei",
      imgSrc: "/assets/image/public/huawei-logo.png",
    },
    {
      name: "Samsung",
      imgSrc: "/assets/image/public/samsung-logo.png",
    },
    {
      name: "Xiaomi",
      imgSrc: "/assets/image/public/xiaomi-logo.png",
    },

  ];

  return (
    <div className="flex flex-col items-center gap-10 w-full h-full ">
      <div className="w-full h-full">
        <Header />
      </div>
      <div className="flex flex-col items-center px-10 w-full gap-10">
        <div className="flex flex-col items-start gap-4 w-full">
          <span className="text-2xl text-start pl-20">Browse By Category</span>
        </div>
        <div className="flex w-full items-center justify-around  pb-40">
          {category?.map((item, index) => (
            <div
              className="flex flex-col items-center gap-3 justify-center group  cursor-pointer "
              key={index}>
              <div className={`flex flex-col items-center justify-center w-32 h-32 rounded-full duration-300  group-hover:shadow-md 
                 ${(item?.name === "Xiaomi" || item?.name === "Huawei") ? "bg-red-100 group-hover:shadow-red-300" : "bg-blue-100 group-hover:shadow-blue-300"}
                  `}>
                <img
                  className="w-24 h-24 object-contain	"
                  src={item?.imgSrc}
                  alt={item?.name}
                />
              </div>
              <span className="text-xl text-blue-500">{item?.name}</span>
            </div>
          ))}
        </div>
        <Banner />
        <div className="flex flex-col items-center gap-4 w-full pl-20">
          <span className="text-2xl text-start w-full items-start ">
            Explore Our Products
          </span>
          <BestProducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
