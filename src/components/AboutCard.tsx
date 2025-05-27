import LearnMoreBtn from "./LearnMoreBtn";
import { aboutCardData } from "@/lib/utils";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <motion.div
      className=" w-full my-5"
      initial={{ opacity: 0.5, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0, duration: 2.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
        {aboutCardData.map(({ id, title, subtitle, Icon }) => (
          <div
            key={id}
            className="group flex flex-col items-start justify-between h-100 text-start p-5 bg-pure text-white min-w-[18rem] hover:rounded-l-2xl py-12 p-9 cursor-pointer border-l-[6px] hover:border-l-[6px] hover:translate-y-6 hover:border-primary hover:-skew-x-1 transition-all duration-500 ease-in"
          >
            <div className="flex items-center gap-10">
              <Icon size={60} className="text-white" />
              <h2 className="font-bold font-exo text-[1.5rem] animate-bounceTwice">
                {title}
              </h2>
            </div>
            <p className="text-start text-[1rem]">{subtitle}</p>
            <LearnMoreBtn className="!p-3  text-[0.8rem] bg-none group-hover:bg-white group-hover:text-primary ">
              LEARN MORE...
            </LearnMoreBtn>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutCard;
