import { servicesCardData } from "@/lib/utils";

const ServiceCard = () => {
  return (
    <>
      {servicesCardData.map(({ id, title, subtitle, Icon }) => (
        <div
          key={id}
          className="group flex flex-col gap-10 bg-pure text-white border border-primary/10 p-5 shadow-primary/50 hover:shadow-sm hover:scale-105 transition duration-700 ease-linear h-80 hover:bg-inherit hover:text-pure"
        >
          <Icon
            size={50}
            className="text-primary group-hover:scale-125 transition duration-700 ease-linear"
          />
          <h3 className="text-[1.5rem] font-exo font-bold">{title}</h3>
          <p className="text-[1.1rem]  ">{subtitle}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
