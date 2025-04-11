import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateItemCount } from "../redux/basketSlice";
import { handleBasket } from "../redux/basketSlice";
import { HashLoader } from "react-spinners";
import SliderProduct from "./SliderProduct";

const MainViewProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState([-1]);
  const [selectColor, setSelectColor] = useState(null);
  const [count, setCount] = useState(1);

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

  const { dataBasket, loading } = useSelector((state) => state?.basket);

  useEffect(() => {
    dispatch(handleBasket());
  }, []);

  // add to cart
  const foundDataMobile = dataBasket?.find(
    (item) => item?.idMobile === params?.id
  );

  console.log(dataProduct)
  console.log(dataBasket)
  console.log(foundDataMobile?.color)
  console.log(selectColor)

  useEffect(() => {
    setCount(Number(foundDataMobile?.count) || 1);
  }, [foundDataMobile]);

  const addBasket = async () => {
    if (foundDataMobile) return toast("This product is in your cart.");
    if (!selectColor) return toast("Please select color product!");
    let formData = {
      idMobile: params?.id,
      name: dataProduct?.name,
      model: dataProduct?.model,
      img_src: dataProduct?.img_src,
      rate: dataProduct?.rate,
      ram: dataProduct?.ram,
      storage: dataProduct?.storage,
      price: dataProduct?.price,
      color: selectColor,
      count: count,
    };
    try {
      const res = await axios.post(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/`,
        formData
      );
      console.log(res?.data);
      setCount(1);
      dispatch(handleBasket());
      toast("Product added to cart");
    } catch (error) {
      console.log(error);
    }
  };

  // patch count
  const addCount = async (newCount) => {
    if (!foundDataMobile) return;

    try {
      const res = await axios.put(
        `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${foundDataMobile?.id}`,
        { count: newCount },
      );
      console.log(res?.data);
      dispatch(updateItemCount({
        id: foundDataMobile.id,
        count: newCount,
        color: selectColor
      }));
    } catch (error) {
      console.log(error);
    }
  };
  //delete product
  useEffect(() => {
    const deleteProduct = async () => {
      if (!foundDataMobile?.id || count !== 0) return;
      try {
        const res = await axios.delete(
          `https://672d29e1fd897971564194df.mockapi.io/ap/v1/basket/${foundDataMobile?.id}`
        );
        console.log(res?.data);
        dispatch(handleBasket());
        toast("Product removed from cart");
      } catch (error) {
        console.log(error);
      }
    };
    deleteProduct();
  }, [count, foundDataMobile?.id, dispatch]);
  return (

    <div className="w-full flex items-center justify-center min-h-[50vh] gap-5 mt-32">
      {loading ? (
        <HashLoader color="#dda01e" cssOverride={{}} width={100} />
      ) : (
        <>
          <div className="flex flex-col items-center relative justify-center gap-5 w-20 basis-1/2">
            <SliderProduct imgProduct={dataProduct?.img_src} />
          </div>
          <div className="flex flex-col items-start gap-6 basis-1/2">
            <span className="text-4xl text-blue-600">{dataProduct?.model}</span>

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
                <span className="text-lg text-black/70">Colors:</span>
                <div className="flex items-center gap-4">
                  {dataProduct?.color?.map((color, c) => (
                    <div
                      key={c}
                      onClick={() => setSelectColor(color)}
                      className="w-7 h-7 shadow-md  relative flex items-center justify-center rounded-full cursor-pointer"
                      style={{ background: color }}>
                      <div
                        className="w-10 h-10 rounded-full absolute"
                        style={{
                          border: (!selectColor && foundDataMobile)
                            ? foundDataMobile?.color === color && "3px solid var(--gold)"
                            : selectColor === color && "3px solid var(--gold)"
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
                  <button
                    onClick={() => navigate("/cart")}
                    className="bg-blue-900 text-white hover:shadow duration-300 flex items-center justify-center gap-3 h-10 w-36"
                  >
                    Buy Now
                  </button>
                  {!foundDataMobile ? (
                    <button
                      onClick={addBasket}
                      className="border-2 border-blue-900 text-blue-900 flex items-center justify-center gap-2 h-10 w-36"
                    >
                      Add to basket
                      <FaShoppingCart />
                    </button>
                  ) : (
                    <td className="flex justify-start pl-7 text-secondary ">
                      <div className=" flex items-center justify-between rounded-full border border-blue-900">
                        <div className="flex cursor-pointer items-center justify-center h-full py-2 text-white w-10 bg-blue-900 rounded-l-full">
                          <FiMinus
                            onClick={() => {
                              setCount((prev) => {
                                const newCount = prev - 1;
                                addCount(newCount);
                                return newCount;
                              });
                            }}
                          />
                        </div>
                        <span className="text-lg px-6 text-blue-900">{count}</span>
                        <div className="flex cursor-pointer items-center justify-center w-10 h-full py-2 text-white bg-blue-900 rounded-r-full">
                          <FiPlus
                            onClick={() => {
                              setCount((prev) => {
                                const newCount = prev + 1;
                                addCount(newCount);
                                return newCount;
                              });
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  )}
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
        </>
      )}
    </div>
  )

};

export default MainViewProduct;
