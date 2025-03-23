import { FiMinus, FiPlus } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { PiX } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleBasket } from "../redux/basketSlice";
import { GridLoader } from "react-spinners";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MainCartNavbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataBasket, loading } = useSelector((state) => state?.basket);

  useEffect(() => {
    dispatch(handleBasket());
  }, [dispatch]);

  // تابع برای آپدیت تعداد در سرور
  const updateCount = async (itemId, newCount) => {
    if (newCount < 0) return; // جلوگیری از تعداد منفی
    const item = dataBasket.find((i) => i.idMobile === itemId);
    if (!item) return;

    try {
      const formData = { count: newCount };
      const res = await axios.put(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${item.id}`,
        formData
      );
      console.log(res?.data);
      dispatch(handleBasket());
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
    const item = dataBasket.find((i) => i.idMobile === itemId);
    if (!item) return;

    const currentCount = Number(item.count) || 0;
    const newCount = currentCount + change;
    updateCount(itemId, newCount);
  };

  return (
    <div className="flex max-h-[300px] h-[300px] overflow-y-auto top-16 right-20 flex-col gap-3 absolute items-center rounded-lg shadow-lg w-1/5 bg-primary text-white p-3">
      <div className="w-full flex justify-end items-center cursor-pointer">
        <PiX
          onClick={() => setShowCart(false)}
          className="text-xl text-white"
        />
      </div>
      {loading ? (
        <GridLoader color="#dda01e" width={5} />
      ) : dataBasket?.length > 0 ? (
        dataBasket?.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between border-b-2 border-b-tertiary/10 pb-2 gap-3 w-full h-full"
          >
            <img src={item?.img_src[0]} width={80} height={80} alt="" />
            <div className="flex flex-col items-start gap-4 h-full w-full">
              <span className="text-sm">{item?.model}</span>
              <div className="flex items-center gap-5">
                <div className="w-full flex items-center gap-2 rounded-full p-1 border border-secondary">
                  <FiMinus
                    onClick={() => handleCountChange(item?.idMobile, -1)}
                    className="cursor-pointer text-sm"
                  />
                  <span className="font-bold text-xs">{item?.count}</span>
                  <FiPlus
                    onClick={() => handleCountChange(item?.idMobile, 1)}
                    className="cursor-pointer text-sm"
                  />
                </div>
                <span className="text-sm text-gray">${item?.price}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center gap-5 w-full">
          <FaShoppingCart className="text-2xl" />
          <span>Your shopping cart is empty.</span>
        </div>
      )}
      {dataBasket?.length > 0 && (
        <div className="flex items-center w-full justify-center">
          <button
            onClick={() => {
              navigate("/cart");
              setShowCart(false);
            }}
            className="w-28 py-1.5 bg-gold text-primary rounded-md shadow-lg"
          >
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default MainCartNavbar;
