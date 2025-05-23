import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { homePartnerData } from "@/lib/utils";
// import { title } from "process";

type Props = {};

const HomePartnerCard = (props: Props) => {
  return (
    <div className="hidden md:flex items-center justify-center w-full gap-5 ">
      {homePartnerData.map(({ id, bg }) => (
        <div key={id}>
          <div className="flex  ">
            <img src={bg} alt="" className="h-50 w-50" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomePartnerCard;
