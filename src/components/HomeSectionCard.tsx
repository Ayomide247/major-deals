import React from "react";

import type { LucideIcon } from "lucide-react";

type Props = {
  id: number;
  title: string;
  bg: string;
  icon: LucideIcon;
};

const HomeSectionCard: React.FC<Props> = ({ title, bg, icon: Icon }) => {
  return (
    <div className="group relative flex flex-col items-center w-full">
      <div className="w-full overflow-hidden ">
        <img
          src={bg}
          alt={title}
          className="w-100 h-100 group-hover:scale-125 group-hover:opacity-70 transition duration-500 ease-linear"
        />
      </div>
      <div className="absolute -bottom-15 flex items-center border-b border-primary w-[90%] bg-secondary ">
        <div className="bg-primary group-hover:bg-pure h-full py-8 px-5 transition duration-700  ease-linear">
          <Icon size={40} />
        </div>
        <div className="flex justify-center w-full text-[1.5rem] font-bold text-pure ">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
