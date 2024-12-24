import Summary from "./Summary";
import TableListCartProduct from "./TableListCartProduct";

const MainCartProduct = ({ productsList }) => {
  return (
    <div className="flex px-3 items-center gap-5 mt-32 w-full">
      <div className="w-3/4">
        <TableListCartProduct productsList={productsList} />
      </div>

      <div className="w-1/4">
        <Summary />
      </div>
    </div>
  );
};

export default MainCartProduct;
