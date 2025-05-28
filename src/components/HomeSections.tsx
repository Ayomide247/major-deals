import { branding, worldmap } from "@/assets";
import HomeSectionCard from "./HomeSectionCard";
import { homeSectionData } from "@/lib/utils";
import { banner4 } from "@/assets";
import { motion } from "framer-motion";
import AboutInnovationCard from "./HomeInnovationCard";

import HomeMissionCard from "./HomeMissionCard";

import HomeSolutionsCard from "./HomeSolutionsCard";
import HomeOurProjectCard from "./HomeOurProjectCard";
import HomeTeamCard from "./HomeTeamCard";
import HomeGalleryCard from "./HomeGalleryCard";
import HomeTestimonia from "./HomeTestimonia";
import HomePartnerCard from "./HomePartnerCard";
import Footer from "./Footer";

const AboutSections = () => {
  return (
    <div>
      <section
        className="bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center text-white  md:bg-left lg:bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${worldmap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-secondary/95 md:h-screen md:w-screen flex flex-col items-center justify-center py-20 px-5">
          <div className="flex items-center gap-3">
            <p className="border-t-2 border-primary px-5 "></p>
            <h5 className="font-exo text-[1rem] text-primary font-bold">
              Directional Indicator Of Purely Oil & Gas Industry
            </h5>
          </div>
          <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-center text-pure md:w-[70%] font-exo">
            Conventional Oil & Gas Projects With Efficient & Sustainable
            Industry
          </h1>
          <div className="grid md:flex justify-between gap-30 md:gap-10 my-10 ">
            {homeSectionData.map((item) => (
              <HomeSectionCard
                key={item.id}
                id={item.id}
                title={item.title}
                bg={item.bg}
                icon={item.Icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="p-5 lg:p-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-20">
          <div className="flex items-center justify-center gap-10 w-full">
            <motion.img
              src={banner4}
              alt="branding"
              className=" object-contain w-full h-auto"
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 2.5 }}
              viewport={{ once: true, amount: 0.3 }}
            />
            <div className="hidden lg:flex h-150 border-l-3 border-primary "></div>
          </div>
          <motion.div
            className="flex flex-col items-center gap-5 lg:items-start w-[]"
            initial={{ opacity: 0.5, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center">
              <p className="border-t-2 border-primary px-5 "></p>
              <h5 className="font-exo text-[1rem] text-primary font-bold">
                The Industry Leaders In Oil & Gas Production
              </h5>
            </div>
            <div>
              <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-start text-pure  font-exo">
                Join The New Innovation With Technically Workforce
              </h1>
              <p className="text-start text-[1rem]">
                Major Deals is a leading Nigerian energy company in oil and gas,
                delivering sustainable solutions through innovation and
                technology. We prioritize performance, reliability, and
                environmental responsibility, with a culture focused on
                excellence and client success.
              </p>
              <div>
                <AboutInnovationCard />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-10 grid grid-cols-1 lg:grid-cols-4 lg:grid-row-4 gap-20 lg:gap-0  items-center justify-center w-full">
        <HomeMissionCard />
      </section>
      <section className=" p-5 lg:p-20">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 ">
          <div className="flex lg:w-1/2 gap-5 text-[1rem]">
            <div>
              <div className="flex items-center">
                <p className="border-t-2 border-primary px-5 "></p>
                <h5 className="font-exo text-[1rem] text-primary font-bold">
                  Production Of Oil & Gas By Major Deals
                </h5>
              </div>
              <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-start text-pure  font-exo">
                Know Our Solutions Efficient & Sustainable
              </h1>
            </div>
            <div className="hidden lg:flex h-40 border-l-3 border-primary "></div>
          </div>

          <div className="lg:w-1/2">
            <p className="text-start text-[1rem]">
              Working safely ensures Major Deal's long-term viability, allowing
              it to continue providing community support, outstanding employment
              opportunities, significant stakeholder value, and reliable and
              inexpensive transportation fuels that enable modern life in the
              safest manner possible.
            </p>
          </div>
        </div>
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   items-center justify-center w-full">
          <HomeSolutionsCard />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-slate-200  w-full py-10">
        <div className="flex flex-col items-center justify-center w-full my-5">
          <div className="flex items-center gap-3">
            <p className="border-t-2 border-primary px-5 "></p>
            <h5 className="font-exo text-[1rem] text-primary font-bold">
              The Case Studies Of Major Deals
            </h5>
          </div>
          <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-center text-pure md:w-[70%] font-exo">
            Recent Factory Projects
          </h1>
          <p className="text-center text-[1rem] lg:w-1/2">
            Right now Major Deal running some project that are very critical to
            handle but Major Deal doing it for the benefit of people around the
            world.
          </p>
        </div>
        <div className="lg:flex gap ">
          <HomeOurProjectCard />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full py-10">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center gap-3">
            <p className="border-t-2 border-primary px-5 "></p>
            <h5 className="font-exo text-[1rem] text-primary font-bold">
              Meet Our Expert Teams
            </h5>
          </div>
          <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-center text-pure md:w-[70%] font-exo">
            The Industry Leaders
          </h1>
          <p className="text-center text-[1rem] lg:w-1/2">
            They are our expert leaders who work hard night and day to grow our
            business worldwide and keep the Major Deal at the highest position
            in the world.
          </p>
        </div>
        <div className="">
          <HomeTeamCard />
        </div>
      </section>
      <motion.section className="px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-10">
          <motion.div
            className="flex flex-col items-center gap-1 lg:items-start "
            initial={{ opacity: 0.5, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center">
              <p className="border-t-2 border-primary px-5 "></p>
              <h5 className="font-exo text-[1rem] text-primary font-bold">
                Major Deals Industry At Its Peak
              </h5>
            </div>
            <div>
              <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-start text-pure  font-exo">
                Know our solutions efficient and sustainable
              </h1>
              <p className="text-start text-[1rem]">
                Working safely ensures Major Deals's long-term viability,
                allowing it to continue providing community support, outstanding
                employment opportunities, significant stakeholder value, and
                reliable and inexpensive transportation fuels that enable modern
                life in the safest manner possible.
              </p>
              <div className="flex flex-col  gap-5 lg:my-10 ">
                <div className="">
                  <div className="flex items-center justify-between py-2   w-full">
                    <div className="flex items-center gap-1 ">
                      <p className="text-[1rem] md:text-[1.125rem] font-semibold font-exo">
                        Upstream
                      </p>
                      <p className="text-[0.875rem] ">
                        (Oil & Gas Exploration Business)
                      </p>
                    </div>
                    <p className="text-[1rem] md:text-[1.125rem]  font-semibold font-exo">
                      85%
                    </p>
                  </div>
                  <div className="flex items-end">
                    <div className="h-1 bg-red-700 w-[85%] relative">
                      <div className="absolute right-0 -top-2 h-2 w-1 bg-red-700"></div>
                    </div>

                    <div className="h-1 w-[15%] bg-primary/20"></div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between py-2  w-full">
                    <div className="flex items-center gap-1 ">
                      <p className="text-[1rem] md:text-[1.125rem]  font-semibold font-exo">
                        Midstream
                      </p>
                      <p className="text-[0.875rem]">
                        (Oil & Gas Transportation & Storage)
                      </p>
                    </div>
                    <p className="text-[1rem] md:text-[1.125rem]  font-semibold font-exo">
                      92%
                    </p>
                  </div>
                  <div className="flex items-end">
                    <div className="h-1 bg-red-700 w-[100%] relative">
                      <div className="absolute right-0 -top-2 h-2 w-1 bg-primary"></div>
                    </div>

                    <div className="h-1 w-[8%] bg-primary/20"></div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between py-2 w-full">
                    <div className="flex items-center gap-1 ">
                      <p className="text-[1rem] md:text-[1.125rem]  font-semibold font-exo">
                        Downstream
                      </p>
                      <p className="text-[0.875rem]">(Oil & Gas Marketing)</p>
                    </div>
                    <p className="text-[1rem] md:text-[1.125rem] font-semibold font-exo">
                      76%
                    </p>
                  </div>
                  <div className="flex items-end">
                    <div className="h-1 bg-red-700 w-[76%] relative">
                      <div className="absolute right-0 -top-2 h-2 w-1 bg-red-700"></div>
                    </div>

                    <div className="h-1 w-[24%] bg-primary/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <HomeGalleryCard />
          </div>
        </div>
      </motion.section>
      <section
        className="bg-fixed bg-cover bg-no-repeat bg-center md:bg-left lg:bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${branding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-secondary/80 md:h-screen md:w-screen py-20 px-5">
          <HomeTestimonia />
          <HomePartnerCard />
        </div>
      </section>
      <footer className="overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutSections;
