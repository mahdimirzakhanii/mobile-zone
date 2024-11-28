import { useState } from "react";
import { BestProductHome } from "../data/BestProductsHome";
import { Box, Rating } from "@mui/material";

const BestProducts = () => {
  const [fullData, setFullData] = useState(BestProductHome);

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-5 gap-10">
        {fullData?.map((item, index) => (
          <div className="flex flex-col items-start rounded gap-4" key={index}>
            <div className="flex items-center justify-center w-[90%] bg-gray/40 px-5 py-10">
              <img src={item?.img_src} alt="" />
            </div>

            <div className="flex flex-col items-start">
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
