import React from "react";


const Vision = () => {
  return (
    <div className=" flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src="https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761" alt="img" />
      </div>

      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Vision</h1>

        <h2 className=" font-semibold text-lg lg:text-2xl">
        To revolutionize learning by making robotics and AI accessible to everyone, fostering a community of innovators and creators.
        </h2>
        <p className=" text-sm lg:text-base">
        At RoboTheory, our vision is to bridge the gap between theoretical education and practical application, enabling learners to transform their ideas into reality.
        </p>
        <p className=" text-sm lg:text-base">
        We aspire to nurture a new generation of tech enthusiasts who can solve real-world problems using cutting-edge technology, making a lasting impact on society and the environment.
        </p>
      </div>
    </div>
  );
};

export default Vision;