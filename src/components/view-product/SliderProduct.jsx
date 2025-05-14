import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SliderProduct = ({ imgProduct }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-[400px] sm:w-[500px]">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-swiper"
      >
        {Array.isArray(imgProduct) && imgProduct.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img src={item} alt={`Slide ${index}`} className="w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-[80%] py-5 mx-auto flex items-center justify-center">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={Math.min(imgProduct?.length, 4)}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper"
        >
          {Array.isArray(imgProduct) && imgProduct.map((item, index) => (
            <SwiperSlide className="flex items-center justify-center" key={index}>
              <img src={item} alt={`Thumb ${index}`} style={{ width: '60px', height: '80px' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderProduct;