import {
  FaFacebookF,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo/majorDealsLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-[1rem]font-sans pt-12 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-5">
          <img
            src={logo}
            alt="Major Deal"
            className="w-50 h-10 cursor-pointer"
          />

          <p className="text-[1rem]">
            Major Deals Limited is committed to providing safe, reliable, and
            aﬀordable energy solutions that impact everyone—because energy is
            fundamental to life. From powering homes and busi- nesses to fueling
            industries and communities, Major Deals believes that access to
            sustainable energy should be universal.
          </p>
        </div>

        <div className="mt-3">
          <h4 className="text-lg font-bold border-l-4 border-primary pl-2 mb-4">
            Our Industry
          </h4>
          <ul className="space-y-2 ">
            <li>• Automation Industry</li>
            <li>• Power and Energy</li>
            <li>• Civil Engineering</li>
            <li>• Healthy & Safety</li>
            <li>• Plant Hire</li>
            <li>• Petroleum Industry</li>
          </ul>
        </div>

        <div className="mt-3">
          <h4 className="text-lg font-bold border-l-4 border-primary pl-2 mb-4">
            About Major Deals
          </h4>
          <ul className="space-y-2 ">
            <Link to="/">
              <li className="cursor-pointer">• Home</li>
            </Link>
            <Link to="about">
              <li className="cursor-pointer">• About Us</li>
            </Link>
            <Link to="contacts">
              <li className="cursor-pointer">• Contact</li>
            </Link>
          </ul>
        </div>

        <div className="mt-3">
          <h4 className="text-lg font-bold border-l-4 border-primary pl-2 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 ">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span>(934) 256 7850</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>
                Km 89, Uyo/Oron Road,
                <br />
                Oron LGA, Akwa Ibom State
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <span>majordeals.org</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>Monday to Fri: 9am to 6pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border- bg-pure text-secondary mt-10 pt-4 text-center  text-[1rem] flex flex-col items-center lg:flex-row md:justify-between max-w-7xl mx-auto p-7 px-4">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-primary">Major Deals</span>. All
          rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <h4 className="font-bold ">Connect With Us</h4>
          <div className="flex space-x-3">
            <FaFacebookF className="text-primary hover:text-blue-600 cursor-pointer" />
            <FaLinkedinIn className="text-primary hover:text-blue-700 cursor-pointer" />
            <FaSkype className="text-primary hover:text-sky-400 cursor-pointer" />
            <FaTwitter className="text-primary hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
