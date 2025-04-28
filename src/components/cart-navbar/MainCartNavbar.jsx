import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiX } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { handleBasket, updateItemCount } from "../redux/basketSlice";
import { GridLoader } from "react-spinners";
import { toast } from "react-toastify";

const MainCartNavbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataBasket, loading } = useSelector((state) => state?.basket);

  useEffect(() => {
    dispatch(handleBasket());
  }, []);

  const updateCount = async (itemId, newCount) => {
    if (newCount < 0) return;
    const item = dataBasket.find((i) => i.idMobile === itemId);
    if (!item) return;

    try {
      const res = await axios.put(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${item.id}`,
        { count: newCount }
      );
      console.log(res?.data);
      dispatch(updateItemCount({
        id: item?.id,
        count: newCount
      }));
      if (newCount === 0) {
        await axios.delete(
          `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${item.id}`
        );
        toast("Product removed from cart");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // تابع برای افزایش یا کاهش تعداد
  const handleCountChange = (itemId, change) => {
    const item = dataBasket.find((i) => i?.idMobile === itemId);
    if (!item) return;
    const currentCount = Number(item?.count) || 0;
    const newCount = currentCount + change;
    updateCount(itemId, newCount);
  };

  return (
    <div className="flex top-[72px] gap-2 right-0 flex-col absolute items-center rounded-lg shadow-xl w-full lg:w-[450px] bg-blue-950 text-white px-2 py-3">
      <div className="flex w-full items-center justify-end">
        <PiX
          onClick={() => setShowCart(false)}
          className="text-xl top-3 cursor-pointer text-white"
        />
      </div>
      <div className="flex flex-col min-h-[200px] rounded-md max-h-[400px] h-[400px] overflow-y-auto items-center justify-start gap-1 w-full">
        {loading ? (
          <GridLoader color="#dda01e" width={5} />
        ) : dataBasket?.length > 0 ? (
          dataBasket?.map((item, index) => (
            <div
              key={index}
              className="flex  bg-gray-blue-50/10 w-full rounded-md p-2 items-start justify-between pb-2 gap-3 ">
              <img src={item?.img_src[0]} className="basis-[10%] w-[60px] object-contain h-[80px]" alt="" />
              <div className="flex flex-row items-center basis-[90%] h-full w-full">
                <span className="text-sm lg:text-base text-wrap basis-[60%]">{item?.model}</span>
                <div className="flex justify-between items-center basis-[40%] w-full">
                  <div className="w-fit flex items-center gap-2  p-1.5">
                    <FiMinus
                      onClick={() => handleCountChange(item?.idMobile, -1)}
                      className="cursor-pointer bg-yellow-600 rounded-full text-blue-950 text-xl"
                    />
                    <span className="font-bold ">{item?.count}</span>
                    <FiPlus
                      onClick={() => handleCountChange(item?.idMobile, 1)}
                      className="cursor-pointer bg-yellow-600 rounded-full text-blue-950 text-xl"
                    />
                  </div>
                  <span className="text-base text-gray">${item?.price}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-5 w-full">
            <FaShoppingCart className="text-5xl" />
            <span>Your shopping cart is empty.</span>
          </div>
        )}
      </div>
      {dataBasket?.length > 0 && (
        <div className="flex items-center w-full justify-center">
          <button
            onClick={() => {
              navigate("/cart");
              setShowCart(false);
            }}
            className="w-28 py-1.5 bg-gray-blue-400 text-blue-950 rounded-md shadow-lg"
          >
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default MainCartNavbar;
