import { useEffect, useState } from "react";
import Summary from "./Summary";
import TableListCartProduct from "./TableListCartProduct";
import axios from "axios";

const MainCartProduct = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, [loading]);

  return (
    <div className="flex px-3 items-center gap-5 mt-32 w-full">
      <div className="w-3/4">
        <TableListCartProduct productsList={productsList} />
      </div>
      <div className="w-1/4">
        <Summary />
      </div>
    </div>
  );
};

export default MainCartProduct;
