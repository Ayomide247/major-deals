import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { homeTestimoniaData } from "@/lib/utils";

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 px-10">
      <h2 className="text-[2rem] font-exo font-bold text-center mb-6 text-pure hover:animate-bounceTwice">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        speed={2000}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {homeTestimoniaData.map(({ id, title, subtitle, bg }) => (
          <SwiperSlide key={id}>
            <div className="bg-white p-6 shadow-lg text-center h-60 flex flex-col items-center justify-between ease-in-out">
              <img src={bg} alt={title} className="w-20 h-20 rounded-full " />
              <p className=" text-pure font-exo font-bold">“{title}”</p>
              <p className=" text-pure italic font-exo">— {subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
