import Summary from "./Summary";
import TableListCartProduct from "./TableListCartProduct";
const MainCartProduct = () => {

  return (
    <div className="flex pl-3 md:px-3 items-start flex-col lg:flex-row justify-between mt-28 w-full">
      <div className="w-full lg:w-[70%] xl:w-[65%] gap-5 flex lg:pl-10 flex-col ">
        <span className="text-3xl">Shoping Cart</span>
        <div className="max-h-[500px] overflow-y-auto">
          <TableListCartProduct />
        </div>
      </div>
      <div className="w-full lg:w-[30%] xl:w-[35%] h-full">
        <Summary />
      </div>
    </div>
  );
};

export default MainCartProduct;
