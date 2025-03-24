import { useState } from "react";
import SingleListCartProduct from "./SingleListCartProduct";
import axios from "axios";
import ModalDeleteProduct from "./ModalDeleteProduct";

const TableListCartProduct = ({ dataBasket, setRefreshList }) => {
  const [showModal, setShowModal] = useState(false);
  const [idProduct, setIdProduct] = useState(null);

  // delete product
  const deleteProduct = async (id) => {
    if (!id) return;
    try {
      const res = await axios.delete(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${id}`
      );
      console.log(res?.data);
      setShowModal(false);
      setRefreshList(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-5 w-full px-10">
      <div className="flex flex-col items-start gap-10 w-full">
        <span className="text-3xl">Shoping Cart</span>
        <table className="w-full flex items-center flex-col gap-5">
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
          <tbody className="w-full flex-col flex items-center justify-center">
            {dataBasket?.length > 0 ? (
              dataBasket?.map((item, index) => (
                <SingleListCartProduct
                  setShowModal={setShowModal}
                  setIdProduct={setIdProduct}
                  key={index}
                  item={item}
                />
              ))
            ) : (
              <span className="text-xl text-blue-500 w-full text-center">
                Your shopping cart is empty.
              </span>
            )}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ModalDeleteProduct
          idProduct={idProduct}
          setShowModal={setShowModal}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
};

export default TableListCartProduct;
