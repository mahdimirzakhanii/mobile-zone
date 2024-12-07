import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { useState } from "react";
import MainProducts from "./components/products/MainProducts.jsx";
import Search from "./components/search/Search.jsx";
import Footer from "./components/Footer.jsx";
import MainViewProduct from "./components/view-product/MainViewProduct.jsx";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <BrowserRouter>
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
          <Route path="products" element={<MainProducts />} />
          <Route path="products/:id" element={<MainViewProduct />} />
        </Routes>
        <div className="w-full pt-20">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
