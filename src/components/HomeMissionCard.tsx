import React from "react";
import { homeMisionData } from "@/lib/utils";
import { Plus } from "lucide-react";

type Props = {};

const HomeMissionCard: React.FC = () => {
  return (
    <>
      {homeMisionData.map(({ id, title, subtitle, Icon }) => (
        <div
          key={id}
          className="group relative flex flex-col items-center bg-slate-200 hover:bg-primary transition duration-1000 ease-linear"
        >
          <div className="absolute -top-20 w-30 h-30 flex items-center justify-center rounded-full m-5 bg-white">
            <div className="w-26 h-26 flex items-center justify-center rounded-full border-2 border-gray-200 text-pure bg-white group-hover:scale-125 transition duration-500 ease-linear">
              <Icon size={50} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 mt-30 p-5 group-hover:text-white">
            <h3 className="font-exo font-bold text-[2rem]">{title}</h3>
            <p className="text-center text-[1.125rem]">{subtitle}</p>
            <div className="bg-white group-hover:text-primary p-2">
              <Plus size={30} className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeMissionCard;
