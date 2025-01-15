import { PiXCircle } from "react-icons/pi";
import Modal from "../modal/Modal";

const ModalDeleteProduct = ({ idProduct, setShowModal, deleteProduct }) => {
  return (
    <Modal>
      <div className="w-1/4 bg-white border-b-4 border-b-error shadow-lg gap-5 py-3 rounded-lg flex flex-col items-center">
        <PiXCircle className="text-error text-5xl" />
        <h2 className="text-primary text-lg">Delete Product</h2>
        <span className=" text-gray1">Are you sure delete product?</span>
        <div className="flex items-center justify-center gap-5 w-1/2">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray text-black text-base py-1 rounded-full w-full"
          >
            cancel
          </button>
          <button
            onClick={() => deleteProduct(idProduct)}
            className="bg-error text-white text-base py-1 w-full rounded-full"
          >
            delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProduct;
