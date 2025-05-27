import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

import { titlesData } from "../lib/utils";
import LearnMoreBtn from "./LearnMoreBtn";
type Slide = {
  id: number;
  title: string;
  subtitle: string;
  bg: string;
};

const slides: Slide[] = titlesData as Slide[];

const variants = {
  initial: { opacity: 0.5 },
  animate: { opacity: 2 },
  exit: { opacity: 0.5 },
};

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const paginate = (direction: number) => {
    setCurrentSlide(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <motion.section
      className="bg-fixed lg:h-screen w-full bg-cover bg-no-repeat bg-center flex items-center justify-center text-white  md:bg-left lg:bg-right overflow-hidden"
      key={slides[currentSlide].id}
      style={{
        backgroundImage: `url(${slides[currentSlide].bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 2.5 }}
    >
      <AnimatePresence mode="wait">
        <div className=" bg-gradient-to-r from-black/75 to-black/50 h-screen w-screen">
          <div>
            <div
              className="flex flex-col items-start gap-5 mt-30  md:mt-50 lg:mt- px-5 lg:px-20 "
              key={slides[currentSlide].id}
            >
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2.5 }}
              >
                <p className="border-t border-primary px-5 "></p>
                <h3 className="text-[1.5rem] lg:text-[1.8rem] font-exo text-center">
                  Welcome to Major Deals
                </h3>
              </motion.div>
              <h1 className="text-[2.2rem] lg:text-[3.75rem] font-exo lg:w-[70%] text-center lg:text-start font-bold ">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 70,
                    strings: [`${slides[currentSlide].title}`],
                  }}
                />
              </h1>
              <motion.p
                className="text-[1.2rem] md:text-[1.5rem] text-center md:text-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                className="flex flex-row justify-center lg:justify-start w-full items-center gap-5 my-5 "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                <LearnMoreBtn />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.section>
  );
};

export default HeroSlider;
