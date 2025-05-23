import React, { useEffect, useRef } from "react";
import { homeTeamData } from "@/lib/utils";

const HomeTeamCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;

        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide"
        style={{ width: "100%", whiteSpace: "nowrap" }}
      >
        {homeTeamData
          .concat(homeTeamData)
          .map(({ id, title, subtitle, bg }, i) => (
            <div
              key={`${id}-${i}`}
              className="min-w-[250px] flex-shrink-0 bg-white p-4 text-center"
            >
              <img src={bg} alt={title} className="w-full h-auto mb-4" />
              <h4 className="text-xl font-semibold text-pure font-exo">
                {title}
              </h4>
              <p className="text-sm text-gray-600">{subtitle}</p>
              <hr className="mt-3 border-t border-primary" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeTeamCard;
