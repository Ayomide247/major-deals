import { banner4, branding, support } from "@/assets";
import { HomeTestimonia, Navbar, Footer } from "@/components";
import { ArrowRight } from "lucide-react";
import AboutCard from "@/components/AboutCard";
import LearnMoreBtn from "@/components/LearnMoreBtn";
import HomePartnerCard from "@/components/HomePartnerCard";
import { motion } from "framer-motion";
import Faq from "@/components/Faq";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        className="bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center text-white md:bg-left lg:bg-right overflow-hidden"
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0.5, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 2.5 }}
      >
        <div className="bg-gradient-to-r from-black/85 to-black/50 md:h-100 md:w-screen flex flex-col items-center justify-center py-20 px-5 h-screen w-screen">
          <div className="grid md:flex gap-10">
            <div>
              <motion.div
                className="bg-secondary py-1 px-8 rounded-full text-pure"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 2.5 }}
              >
                <h1 className="text-[2.2rem] lg:text-[3.75rem] font-exo lg:w-[70%] h-[60%] text-center lg:text-start font-bold ">
                  Innovation
                </h1>
              </motion.div>
            </div>
            <motion.div
              className="bg-primary py-1 px-8 rounded-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 2.5 }}
            >
              <h1 className="text-[2.2rem] lg:text-[3.75rem] font-exo lg:w-[70%] h-[60%] text-center lg:text-start font-bold ">
                Reliable
              </h1>
            </motion.div>
            <motion.div
              className="bg-pure py-1 px-8 rounded-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 2.5 }}
            >
              <motion.h1 className="text-[2.2rem] lg:text-[3.75rem] font-exo lg:w-[70%] h-[60%] text-center lg:text-start font-bold ">
                Inclusive
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <section className="p-5 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 ">
          <div className="flex lg:w-1/2 gap-5 text-[1rem]">
            <motion.div
              initial={{ opacity: 0.5, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 2.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center">
                <p className="border-t-2 border-primary px-5 "></p>
                <h5 className="font-exo text-[1rem] text-primary font-bold">
                  Major Deals is the industry leaders.
                </h5>
              </div>
              <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-start text-pure font-exo">
                Our Factory Produces Reliable, Efficient, Safe & Sustainable
                Products.
              </h1>
            </motion.div>
            <div className="hidden lg:flex h-40 border-l-3 border-primary "></div>
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0.5, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 2.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-start text-[1rem]">
              We strive to consistently exceed customer expectations and create
              innovative solutions to fit any need. Keeping up with new trends
              and market demands while combining our technical and artistic
              expertise.
            </p>
            <div className="flex flex-col gap-5 my-5">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-primary text-white font-bold">
                  <ArrowRight className="" />
                </div>
                <p className="font-bold font-exo">
                  Leading industrial solutions with best machinery
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-primary text-white font-bold">
                  <ArrowRight className="" />
                </div>
                <p className="font-bold font-exo">
                  Environment-friendly manufacturing
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-primary text-white font-bold">
                  <ArrowRight className="" />
                </div>
                <p className="font-bold font-exo">
                  We use raw materials and energy efficient equipments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <AboutCard />
      </section>
      <section className="p-5 lg:p-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-20">
          <div className="flex items-center justify-center gap-10 w-full">
            <motion.img
              src={support}
              alt="branding"
              className=" object-contain w-full h-auto shadow-pure shadow-sm"
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
                The Industry
              </h5>
            </div>
            <div>
              <h1 className="text-[1.8rem] md:text-[2.75rem] font-extrabold text-start text-pure  font-exo">
                Power you can trust, Energy you can count on--everyday,
                everywhere
              </h1>
              <p className="text-start text-[1rem] my-5">
                Major Deals Limited is dedicated to delivering safe, reliable,
                and affordable energy solutions that power homes, businesses,
                and industries. We believe access to sustainable energy is a
                right, not a privilege. With integrity, innovation, and a
                commitment to environmental and human needs, we provide
                transformative energy that drives economic growth and supports
                communities across Nigeria and beyond.
              </p>
              <div className="my-20">
                <LearnMoreBtn>Learn More...</LearnMoreBtn>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        <Faq />
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

export default AboutPage;
