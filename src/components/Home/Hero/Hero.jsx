import React from "react";
import img from "../../../assets/img/hero.webp";

const Hero = () => {
  return (
    <div className="bg-[#F5F9FF] text-[#1E3A8A]">
      <div className="h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Learn, Build, and Innovate with <span className="text-[#6495ED]">RoboTheory</span>
          </h1>
          <p className="text-sm lg:text-base">
            Explore the world of robotics, AI, and automation through interactive courses and hands-on projects. Join a community of innovators shaping the future.
          </p>

          <div className="flex gap-8">
            <button className="bg-[#6495ED] text-white py-2 px-6 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Get Started
            </button>
            <button className="border-2 border-[#6495ED] text-[#1E3A8A] py-2 px-6 rounded-md hover:bg-[#6495ED] hover:text-white transition duration-200 ease-linear">
              Explore Courses
            </button>
          </div>
        </div>

        {/* img section  */}
        <div className="w-full md:w-2/4 mt-4">
          <img src={img} alt="robotics learning" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
