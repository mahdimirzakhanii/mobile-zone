import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

const Summary = ({ dataBasket }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentBtn, setPaymentBtn] = useState(false);
  let price = dataBasket?.map((item) => item?.price);

  return (
    <div className="flex flex-col items-center w-full gap-5 rounded-lg bg-primary py-5 px-3">
      <span className="text-2xl text-white border-b border-b-white/30 w-full pb-3">
        Summary Cart
      </span>
      <div className="flex flex-col items-start w-full gap-5 pr-3 ">
        <div className="text-white/80 flex items-center justify-between w-full ">
          <span className="text-lg">Item: </span>
          <span>{dataBasket?.length}</span>
        </div>
        <div className="text-white/80 flex items-center justify-between w-full ">
          <span className="text-lg">Total Price: </span>
          <span>
            ${price.reduce((price, currentPrice) => price + currentPrice, 0)}
          </span>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <span className="text-lg text-white/80">Payment Method:</span>
          <div className="flex items-center gap-3 mx-auto w-full">
            <div
              className="flex text-secondary duration-300 items-center justify-center gap-3 w-1/2 rounded-full py-2 cursor-pointer border border-white/30"
              onClick={() => setPaymentMethod("paypal")}
              onMouseEnter={(e) => (
                (e.currentTarget.style.border = "1px solid #fff"),
                (e.currentTarget.style.color = "#fff")
              )}
              onMouseLeave={(e) =>
                paymentMethod !== "paypal" &&
                ((e.currentTarget.style.border = "1px solid var(--secondary)"),
                (e.currentTarget.style.color = "var(--secondary)"))
              }
              style={{
                color: paymentMethod === "paypal" && "#fff",
                border: paymentMethod === "paypal" && "1px solid #fff",
              }}
            >
              <span className="text-lg italic">PayPal</span>
              <FaPaypal />
            </div>
            <div
              className="flex text-secondary duration-300 items-center justify-center gap-3 w-1/2 rounded-full py-2 cursor-pointer border border-white/30"
              onClick={() => setPaymentMethod("credit")}
              onMouseEnter={(e) => (
                (e.currentTarget.style.border = "1px solid #fff"),
                (e.currentTarget.style.color = "#fff")
              )}
              onMouseLeave={(e) =>
                paymentMethod !== "credit" &&
                ((e.currentTarget.style.border = "1px solid var(--secondary)"),
                (e.currentTarget.style.color = "var(--secondary)"))
              }
              style={{
                color: paymentMethod === "credit" && "#fff",
                border: paymentMethod === "credit" && "1px solid #fff",
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
            (e.currentTarget.style.background = "var(--secondary)"),
            (e.currentTarget.style.color = "#fff")
          )}
          onMouseLeave={(e) =>
            !paymentBtn &&
            ((e.currentTarget.style.background = "rgba(255,255,255,0)"),
            (e.currentTarget.style.color = "var(--secondary)"))
          }
          style={{
            background: paymentBtn && "var(--secondary)",
            color: paymentBtn && "#fff ",
          }}
          className="w-full text-xl outline-none font-bold border text-secondary border-secondary duration-300 rounded-md  py-2"
          // onClick={}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
