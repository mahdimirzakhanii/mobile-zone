import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

const Summary = ({ dataBasket }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentBtn, setPaymentBtn] = useState(false);
  let price = dataBasket.map((item) => item?.price);

  return (
    <div className="flex flex-col items-center w-full gap-5 rounded-lg bg-blue-950 py-5 px-3">
      <span className="text-2xl text-white border-b border-b-gray-blue-200 w-full pb-3">
        Summary Cart
      </span>
      <div className="flex flex-col items-start w-full gap-5 pr-3 ">
        <div className="text-gray-blue-200 flex items-center justify-between w-full ">
          <span className="text-lg">Item: </span>
          <span>{dataBasket?.length}</span>
        </div>
        <div className="text-gray-blue-200 flex items-center justify-between w-full ">
          <span className="text-lg">Total Price: </span>
          <span>
            ${price.reduce((price, currentPrice) => price + currentPrice, 0)}
          </span>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <span className="text-lg text-gray-blue-200">Payment Method:</span>
          <div className="flex items-center gap-3 mx-auto w-full">
            <div
              className="flex text-blue-600 bg-transparent duration-300 items-center justify-center gap-3 w-1/2 rounded-full py-2 cursor-pointer border border-blue-600"
              onClick={() => setPaymentMethod("paypal")}
              onMouseEnter={(e) => (
                (e.currentTarget.style.border = "1px solid #c8daef"),
                (e.currentTarget.style.color = "#c8daef")
              )}
              onMouseLeave={(e) =>
                paymentMethod !== "paypal" &&
                ((e.currentTarget.style.border = "1px solid var(--secondary)"),
                (e.currentTarget.style.color = "var(--secondary)"))
              }
              style={{
                color: paymentMethod === "paypal" && "#c8daef",
                border:
                  paymentMethod === "paypal" && "1px solid #c8daef",
              }}
            >
              <span className="text-lg italic">PayPal</span>
              <FaPaypal />
            </div>
            <div
              className="flex text-blue-600 bg-transparent duration-300 items-center justify-center gap-3 w-1/2 rounded-full py-2 cursor-pointer border border-blue-600"
              onClick={() => setPaymentMethod("credit")}
              onMouseEnter={(e) => (
                (e.currentTarget.style.border = "1px solid #c8daef"),
                (e.currentTarget.style.color = "#c8daef")
              )}
              onMouseLeave={(e) =>
                paymentMethod !== "credit" &&
                ((e.currentTarget.style.border = "1px solid var(--secondary)"),
                (e.currentTarget.style.color = "var(--secondary)"))
              }
              style={{
                color: paymentMethod === "credit" && "#c8daef",
                border: paymentMethod === "credit" && "1px solid #c8daef",
              }}
            >
              <span className="text-lg italic">Credit Cart</span>
              <FaCreditCard />
            </div>
          </div>
        </div>
        <button
          onClick={() => setPaymentBtn(!paymentBtn)}
          onMouseEnter={(e) => (
            (e.currentTarget.style.background = "#c8daef"),
            (e.currentTarget.style.color = "var(--primary)")
          )}
          onMouseLeave={(e) =>
            !paymentBtn &&
            ((e.currentTarget.style.background = "rgba(255,255,255,0)"),
            (e.currentTarget.style.color = "var(--secondary)"))
          }
          style={{
            background: paymentBtn && "#c8daef",
            color: paymentBtn && "var(--primary)",
          }}
          className="w-full text-xl outline-none font-bold border text-blue-600 border-secondary duration-300 rounded-md  py-2"
          // onClick={}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
