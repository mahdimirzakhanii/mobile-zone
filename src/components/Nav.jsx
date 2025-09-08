import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { PiX } from "react-icons/pi";
import { RiMenu3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import MainCartNavbar from "./cart-navbar/MainCartNavbar";

const Nav = ({ setShowSearch, scroll, setScroll, setLoadingProduct }) => {
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [menuHamburger, setMenuHamburger] = useState(false)
  const { dataBasket } = useSelector((state) => state?.basket);

  useEffect(() => {
    const scrollNav = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, [scroll]);

  const handleMenu = () => {
    if (window.innerWidth < 768) {
      setMenuHamburger(true)
    } else {
      setMenuHamburger(false)
    }
  }
  useEffect(() => {
    if (menuHamburger) {
      window.addEventListener("resize", handleMenu)
      document.body.style.overflow = "hidden";
      return () => window.removeEventListener("resize", handleMenu)
    } else {
      document.body.style.overflow = "";

    }
  }, [menuHamburger])

  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuHamburger(false);
      setIsClosing(false);
    }, 700); 
  };

  return (
    <div
      className={`flex fixed z-50 !py-2 mt-1 items-center rounded-md px-5 justify-center w-[95%] md:w-[85%] duration-500 text-white  
         ${location?.pathname !== "/" && "bg-blue-950"}
          ${(scroll || showCart) && "bg-blue-950 shadow-md"}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center basis-1/5 ">
          <a href="https://mahdi-mirzakhani.vercel.app/" target="blanck">
            <img src="/assets/image/public/logo1.png" width={70} height={70} alt="" />
          </a>
        </div>

        <div className="flex items-center start pt-2 md:pt-0 basis-4/5 gap-5 md:gap-0 flex-row-reverse md:flex-row w-full">
          {!menuHamburger &&
            <RiMenu3Line
              className="flex md:hidden cursor-pointer text-2xl"
              onClick={() => setMenuHamburger(true)}
            />
          }
          <div
            className={`items-start md:items-center justify-start md:justify-center min-h-screen md:min-h-fit gap-10 md:gap-20 basis-4/5
            ${menuHamburger
                ? isClosing
                  ? "flex p-5 flex-col bg-gradient-to-b from-blue-950 to-gray-blue-900 w-full fixed inset-0 animate-slideOut"
                  : "flex p-5 flex-col bg-gradient-to-b from-blue-950 to-gray-blue-900 w-full fixed inset-0 animate-slideIn"
                : "hidden md:flex"}
  `}
          >

            <div
              onClick={ closeMenu}
              className={`cursor-pointer flex md:hidden flex-col items-center`}>
              <PiX className="text-2xl hover:text-blue-950 text-white border border-yellow-500 hover:bg-yellow-500 duration-300 rounded-full w-8 h-8 p-1" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-16">
              <div className="text-2xl md:text-base nav-item">
                <Link to="/" onClick={closeMenu}>Home</Link>
              </div>
              <div className="text-2xl md:text-base nav-item">
                <Link to="/products" onClick={closeMenu}>Products</Link>
              </div>
              <div className="text-2xl md:text-base nav-item">
                <Link to="/cart" onClick={closeMenu}>Basket</Link>
              </div>
              <div className="text-2xl md:text-base nav-item">
                <Link to="*" onClick={closeMenu}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7 justify-end basis-1/5">
            <LiaSearchSolid
              onClick={() => setShowSearch(true)}
              className="text-3xl cursor-pointer"
            />
            <div className="flex items-center justify-center relative">
              {dataBasket?.[0] &&
                <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                  <span>{dataBasket?.length}</span>
                </div>
              }
              <FaShoppingCart
                onClick={() => {
                  setShowCart(!showCart)
                  setLoadingProduct(true)
                }}
                className="text-2xl cursor-pointer"
              />
            </div>
            {/* <FaUser className="text-xl cursor-pointer" /> */}
          </div>
        </div>
      </div>
      {
        showCart &&
        <MainCartNavbar
          setLoadingProduct={setLoadingProduct}
          setShowCart={setShowCart}
        />
      }
    </div >
  );
};

export default Nav;
