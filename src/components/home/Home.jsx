import Banner from "./Banner";
import BestProducts from "./BestProducts";
import Header from "./Header";
import Models from "./Models";

const Home = () => {

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="w-full h-full">
        <Header />
      </div>
      <div className="flex flex-col items-center w-full gap-20 lg:gap-44">
        <Models />
        <Banner />
        <div className="flex flex-col items-center w-[85%]">
          <BestProducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
