import React from "react";


const Approch = () => {
    return (
        <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
            {/* content section */}
            <div className="w-full md:w-2/4 space-y-4">
                <h1 className="text-4xl font-bold">Our Approach</h1>

                <h2 className="font-semibold text-lg lg:text-2xl">
                    Empowering Minds with Comprehensive Robotics Education
                </h2>
                <p className="text-sm lg:text-base">
                    At RoboTheory, we strive to bridge the gap between theoretical concepts and real-world applications in robotics. Our courses are designed to nurture curiosity and foster innovation.
                </p>
                <p className="text-sm lg:text-base">
                    By offering interactive simulations, hands-on projects, and expert mentorship, we ensure students are equipped with the skills to thrive in the fast-evolving fields of robotics, AI, and automation.
                </p>
            </div>

            {/* img section */}
            <div className="w-full md:w-2/5">
                <img className="rounded-lg" src="https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761" alt="RoboTheory Robotics Education Approach" />
            </div>
        </div>
    );
};

export default Approch;
