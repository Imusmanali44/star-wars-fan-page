import React from "react";

import { Film } from "../../../types";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface PropTypes {
  children: React.ReactNode;
}

const SwiperSlider = React.memo(({ children }: PropTypes) => {
  return (
    <Swiper
      className="swiper-wrap"
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        200: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      navigation
    >
      {children}
    </Swiper>
  );
});

export default SwiperSlider;
