import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleProductsList = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-1/6">
      <div
        onClick={() => navigate(`/products/${item?.id}`)}
        className="flex flex-col items-start rounded cursor-pointer duration-500 hover:shadow-md p-3"
      >
        <div className="flex items-center justify-center mx-auto  w-[90%] bg-gray/40 px-5 py-10">
          <img src={item?.img_src[0]} alt="" />
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
    </div>
  );
};

export default SingleProductsList;
