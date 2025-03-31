import { useState } from "react";

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
    <div className="relative">
      <img width={400} src={imgProduct?.[currentIndex]} />
      <span
        onClick={goToNext}
        className="absolute bg-blue-700 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full cursor-pointer -right-10"
      >{`>`}</span>
      <span
        onClick={goToPrev}
        className="absolute bg-blue-700 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full cursor-pointer -left-10"
      >{`<`}</span>
    </div>
  );
};

export default SliderProduct;
