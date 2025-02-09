import React from "react";
import WhyUsCard from "./WhyUsCard";
import { FaRobot, FaBrain, FaLaptopCode } from "react-icons/fa";

const WhyUs = () => {
  const icon1 = <FaRobot className="text-[#6495ED] mx-auto" size={48} />;
  const icon2 = <FaBrain className="text-[#6495ED] mx-auto" size={48} />;
  const icon3 = <FaLaptopCode className="text-[#6495ED] mx-auto" size={48} />;

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center">
        Why choose <span className="text-[#6495ED]">RoboTheory</span>?
      </h1>

      <p className="text-center text-gray-600">
        Empowering minds through AI-driven learning and robotics innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <WhyUsCard icon={icon1} title="Hands-on Robotics Training" />
        <WhyUsCard icon={icon2} title="AI-Powered Learning" />
        <WhyUsCard icon={icon3} title="Project-Based Coding Experience" />
      </div>
    </div>
  );
};

export default WhyUs;
