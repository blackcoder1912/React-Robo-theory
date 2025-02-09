import React from "react";


const OurMission = () => {
  return (
    <div className="container my-10">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-[#6495ED]">Mission</span>
        </h1>
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8">
        {/* img section  */}  
        <div className="w-full md:w-2/4">
          <img className="rounded-lg" src="https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761" alt="robotics mission" />
        </div>

        {/* content section  */}  
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className="font-bold text-[#6495ED] text-xl lg:text-3xl">
            Empowering the Future of Robotics and AI
          </h1>
          <h2 className="font-semibold text-lg lg:text-2xl">
            To inspire innovation, foster creativity, and equip learners with future-ready skills.
          </h2>
          <p className="text-sm lg:text-base">
            Our mission is to create an engaging and accessible platform where students and enthusiasts can explore robotics, automation, and artificial intelligence.
          </p>
          <p className="text-sm lg:text-base">
            By bridging the gap between theory and hands-on application, we empower learners to develop cutting-edge solutions that shape the future of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
