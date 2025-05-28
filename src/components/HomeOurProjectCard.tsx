import { homeOurProjectsData } from "@/lib/utils";
import React from "react";

const HomeOurProjectCard: React.FC = () => {
  return (
    <>
      {homeOurProjectsData.map(({ id, title, subtitle, bg, Icon }) => (
        <div
          key={id}
          className="group bg-no-repeat md:bg-left lg:bg-right transition duration-1000 ease-linear mb-24 mx-5"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-col items-center justify-center w-80 sm:w-130 lg:w-100 h-130 gap- bg-pure/90 group-hover:bg-pure/30 p-10 cursor-pointer transition duration-700 ease-linear">
            <div className="absolute top-10 py-20 text-secondary scale-150 group-hover:scale-0 transition duration-700 ease-linear">
              {Icon && <Icon size={40} className="" />}
            </div>
            <div className="absolute -bottom-10 -right-10 group-hover:bottom-0 group-hover:right-5 flex flex-col items-start justify-center w-[90%] gap-3  p-10 bg-secondary group-hover:bg-pure group-hover:text-secondary transition-all duration-700 ease-linear">
              <h5 className="text- font-bold font-exo text-[0.875rem]">
                Our Project
              </h5>
              <h1 className="text-[1.5rem] font-exo font-bold">{title}</h1>
              <p>{subtitle}</p>
              {/* <p className="border-t border-primary px-5 w-full "></p>
              <div className="flex items-center justify-between w-full gap-5">
                <div className="flex gap-2 font-bold">
                  <ArrowRightCircle size={25} />
                  <p>READ MORE</p>
                </div>
                <div className="bg-secondary group-hover:bg-primary group-hover:text-secondary p-2 text-primary font-bold transition duration-700 ease-linear">
                  <Plus size={35} className="scale-0 group-hover:scale-100" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeOurProjectCard;
