import { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import MainCartNavbar from "./cart-navbar/MainCartNavbar";

const Nav = ({ setShowSearch, scroll, setScroll }) => {
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const scrollNav = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, [scroll]);

  return (
    <div
      className={`flex fixed z-50 !py-2 mt-1 items-center rounded-md px-5 justify-center w-[80%] duration-500 text-white  
         ${location?.pathname !== "/" && "bg-blue-950"}
          ${(scroll || showCart) && "bg-blue-950 shadow-md"}
          `}
    >
      <div className="flex items-center justify-between relative w-full">
        <div className="flex items-center basis-1/5 ">
          <a href="https://resume-topaz-ten.vercel.app/" target="blanck">
            <img src="/image/public/logo1.png" width={70} height={70} alt="" />
          </a>
        </div>

        <div className="flex items-center justify-end gap-20 basis-2/5">
          <div className="text-base nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="text-base nav-item">
            <Link to="/products">Products</Link>
          </div>
          <div className="text-base nav-item">
            <Link to="/">About</Link>
          </div>
          <div className="text-base nav-item">
            <Link to="/">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-5 justify-end basis-1/5">
          <LiaSearchSolid
            onClick={() => setShowSearch(true)}
            className="text-2xl cursor-pointer"
          />
          <FaShoppingCart
            onClick={() => setShowCart(!showCart)}
            className="text-xl cursor-pointer"
          />
          {/* <FaUser className="text-xl cursor-pointer" /> */}
        </div>
      </div>
      {showCart && <MainCartNavbar setShowCart={setShowCart} />}
    </div>
  );
};

export default Nav;
