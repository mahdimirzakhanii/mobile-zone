import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Rating } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { addMobile } from "../redux/slice";
import { useDispatch } from "react-redux";

const MainViewProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [dataProduct, setDataProduct] = useState([]);
  const [selectColor, setSelectColor] = useState(null);
  const [dataBasket, setDataBasket] = useState([]);
  useEffect(() => {
    const handleProduct = async () => {
      try {
        const res = await axios.get(
          `https://672d29e1fd897971564194df.mockapi.io/ap/v1/mobiles/${params?.id}`
        );
        console.log(res?.data);
        setDataProduct(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleProduct();
  }, [params?.id]);

  useEffect(() => {
    const hanelDataBasket = async () => {
      try {
        const res = await axios.get(
          `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/`
        );
        console.log(res?.data);
        setDataBasket(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    hanelDataBasket();
  }, []);

  // add to basket
  const addBasket = async () => {
    let mobileId = dataBasket?.some((item) => item?.idMobile === params?.id);
    if (mobileId) return toast("This product is in your cart.");

    let formData = {
      idMobile: params?.id,
      name: dataProduct?.name,
      model: dataProduct?.model,
      img_src: dataProduct?.img_src,
      rate: dataProduct?.rate,
      ram: dataProduct?.ram,
      storage: dataProduct?.storage,
      price: dataProduct?.price,
      color: dataProduct?.color,
    };
    try {
      const res = await axios.post(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/`,
        formData
      );
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectColors = (color) => {
    setSelectColor(color);
  };
  const handleAddToCart = () => {
    addBasket();
    dispatch(addMobile(dataProduct));
    // if (selectColor !== null) {
    //   navigate(`/products/${params?.id}/cart`);
    // } else {
    // toast("Please select color product!");
    //   notify;
  };
  return (
    <div className="w-full flex items-center gap-5 mt-32">
      <div className="flex flex-col items-center relative justify-center gap-5 w-20 basis-1/2">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#000",
          }}
          spaceBetween={0}
          navigation={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 w-[80%] h-full flex items-center justify-center"
        >
          {dataProduct?.img_src?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full flex items-center justify-center"
            >
              <img
                className="w-[400px] h-[400px] flex items-center justify-center"
                src={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-2/3"
        >
          {dataProduct?.img_src?.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`w-full flex items-center justify-center`}
            >
              <img
                className="w-[130px]  flex items-center justify-center"
                src={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-start gap-6 basis-1/2">
        <span className="text-4xl text-primary">{dataProduct?.model}</span>

        <div className="w-full flex flex-col items-start gap-2">
          <span className="text-black/70">
            {dataProduct?.ram} / {dataProduct?.storage}
          </span>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              size="medium"
              name="half-rating-read"
              precision={0.5}
              value={dataProduct?.rate || 0}
              readOnly
            />
          </Box>
        </div>

        <div className="w-full flex flex-col items-start gap-10">
          <div className="flex items-start flex-col gap-2">
            <span className="text-lg">Colors:</span>
            <div className="flex items-center gap-4">
              {dataProduct?.color?.map((color, idx) => (
                <div
                  key={idx}
                  onClick={() => selectColors(color)}
                  className="w-8 h-8 relative flex items-center justify-center rounded-full hover:shadow cursor-pointer"
                  style={{ background: color }}
                >
                  <div
                    className="w-10 h-10 rounded-full absolute"
                    style={{
                      border: selectColor === color && "2px solid var(--gold)",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between gap-20">
            <div className="flex flex-col items-start gap-2">
              <span className="text-lg">Price: </span>
              <span className="text-error1 text-3xl">
                ${dataProduct?.price}
              </span>
            </div>
            <div className="w-full flex items-center gap-5">
              <button className="bg-primary text-white hover:shadow duration-300 flex items-center justify-center gap-3 h-10 w-36">
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="border-2 border-primary text-primary flex items-center justify-center gap-2 h-10 w-36"
              >
                Add to basket <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        limit={1}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover={false}
        rtl={false}
        closeOnClick
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
};

export default MainViewProduct;
