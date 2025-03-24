import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const SingleListCartProduct = ({ item, setShowModal, setIdProduct }) => {
  return (
    <tr className="flex items-center justify-center w-full border-b border-b-gray-blue-400 pb-5">
      <td className="flex items-center gap-3 justify-start pl-5 w-[30%]">
        <img src={item?.img_src[0]} width={100} alt="" />
        <span className="text-blue-700">
          {item?.name} {item?.model}{" "}
        </span>
      </td>
      <td className="flex justify-start pl-7 text-blue-700 w-[25%]">
        <div className="w-1/2 flex items-center justify-between rounded-full py-1 px-2 border border-blue-500">
          <FiMinus onClick={item?.quantity} className="cursor-pointer" />
          <span className="font-bold">{item?.count}</span>
          <FiPlus onClick={item?.quantity} className="cursor-pointer" />
        </div>
      </td>
      <td className="flex items-center justify-start pl-7 w-[25%]">
        <span className="text-blue-700 font-semibold">${item?.price} </span>
      </td>
      <th className="w-[10%] flex justify-end">
        <FaTimes
          onClick={() => {
            setShowModal(true);
            setIdProduct(item?.id);
          }}
          className="cursor-pointer text-red-700 text-xl"
        />
      </th>
    </tr>
  );
};

export default SingleListCartProduct;
