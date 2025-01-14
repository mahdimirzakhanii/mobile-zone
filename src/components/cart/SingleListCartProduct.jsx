import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const SingleListCartProduct = ({
  setRefreshList,
  id,
  model,
  name,
  img,
  price,
  ram,
  decreamentQuantity,
  quantity,
  increamentQuantity,
}) => {
  const deleteProduct = async (id) => {
    if (!id) return;
    try {
      const res = await axios.delete(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${id}`
      );
      console.log(res?.data);
      setRefreshList(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="flex items-center justify-center w-full border-b border-b-tertiary pb-5">
      <td className="flex items-center gap-3 justify-start pl-5 w-[30%]">
        <img src={img} width={100} alt="" />
        <span className="text-secondary">
          {name} {model}{" "}
        </span>
      </td>
      <td className="flex justify-start pl-7 text-secondary w-[25%]">
        <div className="w-1/2 flex items-center justify-between rounded-full py-1 px-2  border border-secondary">
          <FiMinus onClick={quantity} className="cursor-pointer" />
          <span className="font-bold">{quantity}</span>
          <FiPlus onClick={quantity} className="cursor-pointer" />
        </div>
      </td>
      <td className="flex items-center justify-start pl-7 w-[25%]">
        <span className="text-secondary font-semibold">${price} </span>
      </td>
      <th className="w-[10%] flex justify-end">
        <FaTimes
          onClick={() => deleteProduct(id)}
          className="cursor-pointer text-gray1/60 text-lg"
        />
      </th>
    </tr>
  );
};

export default SingleListCartProduct;
