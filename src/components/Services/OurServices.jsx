import React from "react";
import { FaRobot, FaBrain, FaLaptopCode, FaTools, FaMicrochip, FaNetworkWired } from "react-icons/fa";
import ServiceCards from "./ServiceCards";

const OurServices = () => {
  const icon1 = <FaRobot className="text-[#6495ED] mx-auto" size={48} />;
  const icon2 = <FaBrain className="text-[#6495ED] mx-auto" size={48} />;
  const icon3 = <FaLaptopCode className="text-[#6495ED] mx-auto" size={48} />;
  const icon4 = <FaTools className="text-[#6495ED] mx-auto" size={48} />;
  const icon5 = <FaMicrochip className="text-[#6495ED] mx-auto" size={48} />;
  const icon6 = <FaNetworkWired className="text-[#6495ED] mx-auto" size={48} />;

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-[#6495ED]">Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServiceCards icon={icon1} title="Robotics Development" />
        <ServiceCards icon={icon2} title="AI & Machine Learning" />
        <ServiceCards icon={icon3} title="Full-Stack Web Development" />
        <ServiceCards icon={icon4} title="Hardware Prototyping" />
        <ServiceCards icon={icon5} title="Embedded Systems" />
        <ServiceCards icon={icon6} title="IoT & Automation" />
      </div>
    </div>
  );
};

export default OurServices;
