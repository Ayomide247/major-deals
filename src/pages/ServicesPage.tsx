import { banner4, branding } from "@/assets";
import {
  HomeTestimonia,
  Navbar,
  Footer,
  ServiceCard,
  HomePartnerCard,
} from "@/components";

import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <section
        className="bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center text-white md:bg-left lg:bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${branding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r from-black/85 to-black/50 md:h-150 md:w-screen flex flex-col items-center justify-center p-5 md:p-20 h-screen w-screen gap-10">
          <motion.h1
            className="text-[2.2rem] lg:text-[3.75rem] font-exo lg:w-[90%] text-center  font-bold font-exo "
            initial={{ opacity: 0.5, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Powerful Solutions, Tailored to Your Needs
          </motion.h1>
          <motion.p
            className="text-[1.2rem] md:text-[1.5rem] text-center "
            initial={{ opacity: 0.5, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover our top-tier services designed to drive growth, boost
            efficiency, and deliver unmatched value. Explore deals that make a
            difference.
          </motion.p>
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
                Service Overview
              </h1>
              <p className="text-start text-[1rem]">
                At Major Deals Limited, our service offerings are driven by a
                deep commitment to excellence, innovation, and sustainability in
                the energy sector. As a trusted name in the oil and gas
                industry, we deliver a broad range of solutions designed to meet
                the evolving needs of clients across Nigeria and beyond. From
                upstream exploration and production to downstream distribution
                and marketing, our services are strategically aligned with
                global standards and best practices. We also provide
                engineering, procurement, and construction services, ensuring
                end-to-end project delivery with a focus on safety, efficiency,
                and environmental responsibility. Our expertise extends to
                renewable energy integration, environmental consultancy, LPG
                distribution, and community-based energy access programs, all
                tailored to create long-term value. Each service we provide
                reflects our core mission—to power industries, uplift
                communities, and build a cleaner, more sustainable future.
                Whether you are a commercial entity, government agency, or
                community partner, Major Deals is your reliable partner for
                transformative energy solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="p-5 lg:p-20  pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   items-center justify-center w-full">
          <ServiceCard />
        </div>
      </section>

      <section
        className="bg-fixed bg-cover bg-no-repeat bg-center md:bg-left lg:bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${branding})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-secondary/80 md:h-scree md:w-screen py-2 px-5">
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

export default ServicesPage;
