import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import MainProducts from "./components/products/MainProducts.jsx";
import Search from "./components/search/Search.jsx";
import Footer from "./components/Footer.jsx";
import MainViewProduct from "./components/view-product/MainViewProduct.jsx";
import axios from "axios";
import MainCartProduct from "./components/cart/MainCartProduct.jsx";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [serachParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  function handleSearch(key, value) {
    setSearchParams((prevParams) => {
      if (value === null || value === "") {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  useEffect(() => {
    const handleProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles"
        );
        console.log(res?.data);
        setProductsList(res?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleProducts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* open search-bar  */}
      {showSearch && (
        <div className="fixed left-0 top-0 z-[1000] w-full h-full">
          <Search setShowSearch={setShowSearch} />
        </div>
      )}
      <div className="w-full">
        <Nav setShowSearch={setShowSearch} showSearch={showSearch} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<MainProducts productsList={productsList} />}
        />
        <Route path="/products/:id" element={<MainViewProduct />} />
        <Route
          path="/cart"
          element={<MainCartProduct productsList={productsList} />}
        />
      </Routes>

      <div className="w-full pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
