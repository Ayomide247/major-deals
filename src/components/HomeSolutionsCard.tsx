import { homeSolutionsData } from "@/lib/utils";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const HomeSolutionsCard = () => {
  return (
    <>
      {homeSolutionsData.map(({ id, title, subtitle, bg }) => (
        <div
          key={id}
          className="group flex flex-col gap-5 border border-primary/10 p-5 shadow-primary/50 hover:shadow-sm hover:scale-105 transition duration-700 ease-linear"
        >
          <img
            src={bg}
            alt=""
            className="w-25 h-25 group-hover:scale-125 transition duration-700 ease-linear"
          />
          <h3 className="text-[1.5rem] font-exo font-bold">{title}</h3>
          <p className="text-[1.1rem]  ">{subtitle}</p>
          <Link to="/about" className="flex gap-4">
            <LogIn size={25} />
            <p className="text-[1rem] text-primary font-semibold">READ MORE</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HomeSolutionsCard;
