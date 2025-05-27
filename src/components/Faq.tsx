import { motion } from "framer-motion";
import { FaqAccordion } from ".";
import { eco } from "@/assets";

const Faq = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-10 mt-30 md:mt-0 p-5 lg:p-10"
      initial={{ opacity: 0.5, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0, duration: 2.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-[1.5rem] font-bold font-exo">FAQ</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full h-120">
          <FaqAccordion />
        </div>

        <motion.div
          className="flex items-center justify-center w-full -z-30 mt-2"
          initial={{ opacity: 0.5, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 2.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={eco} alt="" className="object-contain w-150 h-120" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Faq;
