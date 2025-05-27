import { homePartnerData } from "@/lib/utils";

const HomePartnerCard = () => {
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
