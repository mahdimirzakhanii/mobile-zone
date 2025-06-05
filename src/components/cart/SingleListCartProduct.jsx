import { FiMinus, FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SingleListCartProduct = ({
  item,
  setShowModal,
  setIdProduct,
  handleCountChange,
}) => {
  const navigate = useNavigate()
  return (
    <tr className="flex items-center relative justify-between gap-5 md:gap-0 md:px-5 w-full border-b border-b-gray-blue-400 py-5">
      <td
        onClick={() => navigate(`/products/${item?.idMobile}`)}
        className="cursor-pointer flex md:items-center items-start gap-3 justify-start md:pl-5 w-[30%] md:w-[20%]">
        <img src={item?.img_src[0]} width={100} alt="" />
      </td>
      <td className="flex flex-col cursor-pointer md:flex-row gap-4 md:gap-0 md:pl-7  w-[70%] md:w-[80%]">
        <span
          onClick={() => navigate(`/products/${item?.idMobile}`)}
          className="text-blue-700 text-base md:text-xl flex items-center justify-start w-full md:w-[50%]">
          {item?.name} {item?.model}{" "}
        </span>

        <div className="flex flex-col items-start md:items-start w-full md:w-[30%]">
          <div className="w-fit flex items-center gap-5 ">
            <FiMinus
              onClick={() => handleCountChange(item?.idMobile, -1)}
              className="cursor-pointer bg-yellow-600 rounded-full text-white text-2xl"
            />
            <span className="font-bold text-2xl text-blue-700">{item?.count}</span>
            <FiPlus
              onClick={() => handleCountChange(item?.idMobile, 1)}
              className="cursor-pointer bg-yellow-600 rounded-full text-white text-2xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-start md:pl-7 w-full md:w-[20%]">
          <span className="text-blue-700 font-semibold">Price: ${item?.price} </span>
        </div>
      </td>
      <th className="w-[10%] bottom-8 right-10 absolute md:static flex justify-end">
        <FaTrash
          onClick={() => {
            setShowModal(true);
            setIdProduct(item?.id);
          }}
          className="cursor-pointer text-red-600 text-lg"
        />
      </th>
    </tr >
  );
};

export default SingleListCartProduct;
