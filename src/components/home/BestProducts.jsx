import { useEffect } from "react";
import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "../redux/slice";

const BestProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { listMobile } = useSelector((state) => state.listMobile);
  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);
  const filter = listMobile?.filter((item) =>
    item?.model?.toLowerCase().includes("pro")
  );

  return (
    <div className="w-full flex flex-col gap-4 justify-center">
      {filter?.[0] &&
        <span className="text-xl lg:text-2xl font-medium text-start w-full items-start ">
          Explore Our Products
        </span>
      }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-5">
        {filter?.map((item, index) => (
          <div
            className="flex border border-gray-blue-200 flex-col items-start justify-between rounded cursor-pointer duration-300 hover:shadow-lg p-3"
            onClick={() => navigate(`/products/${item?.id}`)}
            key={index}
          >
            <div className="flex items-center mx-auto max-h-[220px] h-[220px] justify-center w-full bg-blue-100 ">
              <img className="max-h-[180px] h-[180px] object-contain" src={item?.img_src[0]} alt="" />
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

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <span className="font-sans">${item?.price}</span>
              <div className="flex items-center justify-start gap-3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
