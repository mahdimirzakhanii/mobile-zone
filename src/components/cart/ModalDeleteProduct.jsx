import { PiXCircle } from "react-icons/pi";
import Modal from "../modal/Modal";

const ModalDeleteProduct = ({
  idProduct,
  setShowModal,
  deleteProduct,
}) => {
  return (
    <Modal>
      <div className="w-1/4 bg-white border-b-4 border-b-red-700 shadow-lg gap-5 py-3 rounded-lg flex flex-col items-center">
        <PiXCircle className="text-red-600 text-5xl" />
        <h2 className="text-red-700 text-lg">Delete Product</h2>
        <span className=" text-gray-blue-950">
          Are you sure delete product?
        </span>
        <div className="flex items-center justify-center gap-5 w-1/2">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-blue-200 text-gray-blue-950 text-base py-1.5 rounded-full w-full"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteProduct(idProduct)}
            className="bg-red-700 text-white text-base py-1.5 w-full rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProduct;
