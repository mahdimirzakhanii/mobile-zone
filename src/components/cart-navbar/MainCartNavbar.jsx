import { FiMinus, FiPlus } from "react-icons/fi";
import { PiX } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MainCartNavbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  const dataCart = useSelector((state) => state?.dataMobile?.mobile);
  console.log(dataCart);
  return (
    <div className="flex top-16 right-20 flex-col gap-3 absolute items-center rounded-lg shadow-lg w-1/5 bg-primary text-white p-3">
      <div className="w-full flex justify-end  items-center cursor-pointer ">
        <PiX
          onClick={() => setShowCart(false)}
          className="text-xl text-white"
        />
      </div>
      {dataCart?.length > 0 ? (
        dataCart?.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between border-b-2 border-b-tertiary/10 pb-2 gap-3 w-full h-full"
          >
            <img src={item?.img_src[0]} width={100} height={100} alt="" />
            <div className="flex flex-col items-start gap-4 h-full w-full">
              <span className="text-sm">{item?.model}</span>
              <div className="flex items-center gap-5">
                <div className="w-full flex items-center gap-2 rounded-full p-1  border border-secondary">
                  <FiMinus className="cursor-pointer text-sm" />
                  <span className="font-bold text-xs">5</span>
                  <FiPlus className="cursor-pointer text-sm" />
                </div>
                <span className="text-sm text-gray">${item?.price}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <span> Your shopping cart is empty.</span>
      )}
      {dataCart?.length > 0 && (
        <div className="flex items-center w-full justify-center">
          <button
            onClick={() => {
              navigate("/cart");
              setShowCart(false);
            }}
            className="w-28 py-1.5 bg-gold text-primary rounded-md  shadow-lg"
          >
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default MainCartNavbar;
