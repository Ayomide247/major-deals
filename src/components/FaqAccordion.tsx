import { servicesAccordData } from "@/lib/utils";
import React, { useState } from "react";
servicesAccordData;

const ServicesAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto  space-y-5  ">
      {servicesAccordData.map((service, index) => (
        <div key={index} className="border border-gray-200 overflow-hidden ">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white  transition duration-700 ease-linear cursor-pointer"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-lg text-pure font-exo">
              {service.title}
            </span>
            <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-50 text-[1rem] text-pure transition duration-700 ease-linear">
              {service.subtitle}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesAccordion;
