import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const SliderProduct = ({ imgProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgProduct?.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgProduct?.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative w-full md:w-fit flex items-center justify-center">
      <img className="w-full md:w-[300px] h-[400px] lg:max-w-[400px] lg:w-[400px] lg:max-h-[500px] lg:h-[500px] object-contain"
        src={imgProduct?.[currentIndex]} />
      <span
        onClick={goToNext}
        className="absolute bg-blue-700 text-white text-xl lg:text-3xl w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full cursor-pointer right-3 md:-right-8 lg:-right-14">
        <MdArrowForwardIos />
      </span>
      <span
        onClick={goToPrev}
        className="absolute bg-blue-700 text-white text-xl lg:text-3xl w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full cursor-pointer left-3 md:-left-8 lg:-left-14">
        <MdArrowBackIosNew />
      </span>
    </div>
  );
};

export default SliderProduct;
