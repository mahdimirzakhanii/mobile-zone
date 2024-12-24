import { useState } from "react";
import SingleListCartProduct from "./SingleListCartProduct";

const TableListCartProduct = ({ productsList }) => {
  const [quantity, setQuantity] = useState(0);

  const increamentQuantity = () => {
    if (quantity < 0) return;
    setQuantity((prevQuantity) => (prevQuantity += 1));
  };

  const decreamentQuantity = () => {
    if (quantity <= 0) return;
    setQuantity((prevQuantity) => (prevQuantity -= 1));
  };

  return (
    <div className="flex items-center gap-5 w-full px-10">
      <div className="flex flex-col items-start gap-10 w-full">
        <span className="text-3xl">Shoping Cart</span>
        <table className="w-full flex items-center flex-col gap-5">
          <thead className="w-full border-b border-b-tertiary pb-2">
            <tr className="flex items-center justify-center w-full">
              <th className="text-primary flex items-center justify-start pl-5 text-lg w-[30%]">
                Product
              </th>
              <th className="text-primary flex items-center justify-start pl-5 text-lg w-[25%]">
                Quantity
              </th>
              <th className="text-primary flex items-center justify-start pl-5 text-lg w-[25%]">
                Total Price
              </th>
              <th className="w-[10%]"></th>
            </tr>
          </thead>
          <tbody className="w-full">
            <SingleListCartProduct
              productsList={productsList}
              increamentQuantity={increamentQuantity}
              decreamentQuantity={decreamentQuantity}
              quantity={quantity}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableListCartProduct;
