import { Navbar, HeroSlider } from "@/components/index";
import AboutSections from "@/components/HomeSections";

const HomePage = () => {
  return (
    <div className=" ">
      <Navbar />
      <HeroSlider />
      <AboutSections />
    </div>
  );
};

export default HomePage;
