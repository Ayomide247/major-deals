import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { homeGalleryData } from "@/lib/utils";

const Testimonials: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      speed={2000}
      breakpoints={{
        640: { slidesPerView: 1 },
      }}
    >
      {homeGalleryData.map(({ id, bg }) => (
        <SwiperSlide key={id}>
          <img
            src={bg}
            alt="branding"
            className="hidden lg:flex object-contain w-300 h-150"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
