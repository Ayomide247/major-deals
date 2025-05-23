import React from "react";
import { HomeInnovationData } from "@/lib/utils";

const HomeInnovationCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-5">
      {HomeInnovationData.map(({ id, title, subtitle, Icon }) => (
        <div key={id} className="flex items-start w-full gap-5 ">
          <Icon className="w-100 h-10 mt-2 text-slate-500" />
          <div className="">
            <h3 className="font-exo text-[1.5rem] text-pure font-bold">
              {title}
            </h3>
            <div className="w-full h-25 overflow-scroll">
              <p className="text-start text-[1rem] w-full ">{subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeInnovationCard;
