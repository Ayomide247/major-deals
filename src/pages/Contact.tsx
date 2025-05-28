import { branding, worldmap } from "@/assets";
import { Footer, HomePartnerCard, HomeTestimonia, Navbar } from "@/components";
import Faq from "@/components/Faq";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <motion.section
        className="bg-fix bg-cover bg-no-repeat bg-center md:bg-left lg:bg-right overflow-hidde w-screen h-screen "
        style={{
          backgroundImage: `url(${worldmap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0.5, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 2.5 }}
      >
        <div className="flex flex-col items-center justify-center bg-secondary/90 h-screen w-screen p-5 lg:p-20 ">
          <div className="w-full mx-auto mt-60 md:mt-30 ">
            <div className="text-center mb-10">
              <motion.h1
                className="text-[2rem] font-bold text-primary font-exo "
                initial={{ opacity: 0.5, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 2.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                className="mt-2 text-[1.5rem]"
                initial={{ opacity: 0.5, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, duration: 2.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                We’re here to answer your questions and provide the support you
                need.
              </motion.p>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div className="grid items-center  space-y-6 shadow-primary shadow-sm gap-10 p-10 bg-pure/95  h-[50vh] text-secondary hover:scale-105 transition duration-700 ease-linear">
                {/* <div className="flex flex-col "> */}
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
                  <p className=" leading-relaxed">
                    <strong>Major Deals Limited</strong>
                    <br />
                    Km 89, Uyo/Oron Road,
                    <br />
                    Oron LGA, Akwa Ibom State
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Customer Support
                  </h2>
                  <p className="">
                    Phone:
                    <a
                      href="tel:9342567850"
                      className="text-secondary hover:underline"
                    >
                      (934) 256 7850
                    </a>
                  </p>
                  <p className="">
                    Email:
                    <a
                      href="mailto:support@domainname.com"
                      className="text-secondary hover:underline"
                    >
                      support@domainname.com
                    </a>
                  </p>
                </div>

                {/* </div> */}
              </div>

              {/* Google Map */}
              <div className="flex-1 w-full h-[50vh]">
                <iframe
                  title="Major Deals Location"
                  src="https://www.google.com/maps?q=4.807369,8.237705&output=embed"
                  className="w-full h-full  border-2 border-primary"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="">
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

export default Contact;
