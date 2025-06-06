import { useEffect, useState } from "react";
import SingleListCartProduct from "./SingleListCartProduct";
import axios from "axios";
import ModalDeleteProduct from "./ModalDeleteProduct";
import { useDispatch, useSelector } from "react-redux";
import { handleBasket } from "../redux/basketSlice";
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";


const TableListCartProduct = () => {
  const dispatch = useDispatch();
  const { dataBasket } = useSelector((state) => state?.basket);
  const [idProduct, setIdProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(handleBasket());
  }, []);

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

  // delete product
  const deleteProduct = async (id) => {
    if (!id) return;
    try {
      const res = await axios.delete(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${id}`
      );
      console.log(res?.data);
      dispatch(handleBasket())
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-5 w-full" >
      <div className="flex flex-col items-start  gap-10 w-full ">
        <table className="w-full min-h-[200px] lg:justify-between flex items-center flex-col gap-5">
          <thead className="w-full border-b border-b-gray-blue-400 pb-2">
            <tr className="flex items-center justify-center w-full">
              <th className="text-blue-900 flex items-center justify-start pl-5 text-lg w-[30%]">
                Product
              </th>
              <th className="text-blue-900 flex items-center justify-start pl-5 text-lg w-[25%]">
                Quantity
              </th>
              <th className="text-blue-900 flex items-center justify-start pl-5 text-lg w-[25%]">
                Price
              </th>
              <th className="w-[10%]"></th>
            </tr>
          </thead>
          <tbody className="w-full flex-col flex items-center  justify-center">
            {dataBasket?.length > 0 ? (
              dataBasket?.map((item, index) => (
                <SingleListCartProduct
                  setShowModal={setShowModal}
                  setIdProduct={setIdProduct}
                  key={index}
                  item={item}
                  handleCountChange={handleCountChange}

                />
              ))
            ) : (
              <tr className=" flex flex-col items-center justify-center gap-3 w-full ">
                <AiOutlineShoppingCart className="text-4xl lg:text-5xl text-blue-800" />
                <span className="text-lg lg:text-2xl text-blue-500 text-center">Your Basket is empty</span>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModal &&
        <ModalDeleteProduct
          idProduct={idProduct}
          setShowModal={setShowModal}
          deleteProduct={deleteProduct}
        />
      }
    </div>
  )
};
export default TableListCartProduct;
