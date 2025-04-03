import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleProductsList = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${item?.id}`)}
      className="flex border border-gray-blue-200 flex-col items-start rounded cursor-pointer duration-300 hover:shadow-lg p-3"
    >
      {/* <div className="flex items-center justify-center mx-auto w-full max-h-[220px] h-[220px] bg-gray-blue-100 ">
          <img className="max-w-[200] w-[200px] max-h-[180px] h-[180px] object-contain" src={item?.img_src[0]} alt="" />
        </div> */}

      <div className="flex items-center mx-auto max-h-[220px] h-[220px] justify-center w-full bg-gray-blue-100 ">
        <img className="max-h-[180px] h-[180px] object-contain" src={item?.img_src[0]} alt="" />
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
        {item?.color?.map((c, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full"
            style={{
              background: c,
              boxShadow: "0px 2px 2px gray",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SingleProductsList;
