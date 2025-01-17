import { useEffect, useState } from "react";
// import { BestProductHome } from "../data/BestProductsHome";
import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BestProducts = () => {
  const navigate = useNavigate();

  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const res = await axios.get(
          `https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles`
        );
        setFullData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleProduct();
  }, []);

  const filter = fullData?.filter((item) =>
    item?.model?.toLowerCase().includes("pro")
  );

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-5 ">
        {filter?.map((item, index) => (
          <div
            className="flex flex-col items-start rounded cursor-pointer duration-500 hover:shadow-md p-3"
            onClick={() => navigate(`/products/${item?.id}`)}
            key={index}
          >
            <div className="flex items-center mx-auto  justify-center w-[90%] bg-gray/40 px-3 py-10">
              <img src={item?.img_src[0]} alt="" />
            </div>

            <div className="flex flex-col items-start pt-3">
              <span className="text-lg text-primary">{item?.model}</span>
              <span className="text-sm text-gray1">
                {item?.storage} / {item?.ram}
              </span>
            </div>

            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                size="small"
                name="half-rating-read"
                precision={0.5}
                value={item?.rate}
                readOnly
              />
            </Box>

            <div className="flex items-center gap-2">
              <span className="font-sans">${item?.price}</span>
              {item?.color?.map((color, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: color,
                    boxShadow: "0px 2px 2px gray",
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
