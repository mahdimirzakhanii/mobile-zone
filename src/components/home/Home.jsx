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
      name: "Samsung",
      imgSrc: "/assets/image/public/samsung-logo.png",
    },
    {
      name: "Xiaomi",
      imgSrc: "/assets/image/public/xiaomi-logo.png",
    },
    {
      name: "Huawei",
      imgSrc: "/assets/image/public/huawei-logo.png",
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
              className="flex flex-col gap-3 items-center justify-around w-full basis-1/6 p-2 cursor-pointer "
              key={index}
            >
              <div className="w-28 h-28 bg-gray-blue-200 hover:shadow-lg duration-300 rounded-full p-2 flex items-center justify-center ">

                <img
                  className="w-20 h-20 object-contain	"
                  src={item?.imgSrc}
                  alt={item?.name}
                />
              </div>
              <span className="text-xl text-blue-600">{item?.name}</span>
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
