import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";

const SingleListCartProduct = ({
  item,
  setShowModal,
  setIdProduct,
  handleCountChange,
}) => {
  return (
    <tr className="flex items-center justify-between gap-10 md:gap-0 px-3 w-full border-b border-b-gray-blue-400 py-5">
      <td className="flex md:items-center items-start gap-3 justify-start md:pl-5 w-[30%] md:w-[20%]">
        <img src={item?.img_src[0]} width={100} alt="" />
      </td>
      <td className="flex flex-col md:flex-row gap-6 md:gap-0 md:pl-7 text-blue-700 w-[70%] md:w-[80%]">
        <span className="text-blue-700 flex items-center justify-start w-full md:w-[50%]">
          {item?.name} {item?.model}{" "}
        </span>

        <div className="flex flex-col items-start md:items-start w-full md:w-[30%]">
          <div className="w-fit flex items-center gap-5 ">
            <FiMinus
              onClick={() => handleCountChange(item?.idMobile, -1)}
              className="cursor-pointer bg-yellow-600 rounded-full text-blue-950 text-2xl"
            />
            <span className="font-bold text-3xl">{item?.count}</span>
            <FiPlus
              onClick={() => handleCountChange(item?.idMobile, 1)}
              className="cursor-pointer bg-yellow-600 rounded-full text-blue-950 text-2xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-start md:pl-7 w-full md:w-[20%]">
          <span className="text-blue-700 font-semibold">Price: ${item?.price} </span>
        </div>
      </td>
      {/* <th className="w-[10%] flex justify-end">
          <FaTrash
            onClick={() => {
              setShowModal(true);
              setIdProduct(item?.id);
            }}
            className="cursor-pointer text-red-700 text-xl"
          />
        </th> */}
      {/* </td> */}
    </tr >
  );
};

export default SingleListCartProduct;
