import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-14 bg-primary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        {/* About RoboTheory */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">RoboTheory</h1>
          <p className="mb-2 text-sm">
            Empowering the next generation of innovators with cutting-edge AI, robotics, and coding education. Learn, build, and innovate with us!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Quick Links</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/about" className="hover:translate-x-3 transition duration-200 ease-linear">
              About Us
            </Link>
            <Link to="/courses" className="hover:translate-x-3 transition duration-200 ease-linear">
              Courses
            </Link>
            <Link to="/projects" className="hover:translate-x-3 transition duration-200 ease-linear">
              Projects
            </Link>
            <Link to="/contact" className="hover:translate-x-3 transition duration-200 ease-linear">
              Contact
            </Link>
          </div>
        </div>

        {/* Popular Courses */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Popular Courses</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/courses/ai" className="hover:translate-x-3 transition duration-200 ease-linear">
              AI & Machine Learning
            </Link>
            <Link to="/courses/robotics" className="hover:translate-x-3 transition duration-200 ease-linear">
              Robotics & Automation
            </Link>
            <Link to="/courses/webdev" className="hover:translate-x-3 transition duration-200 ease-linear">
              Full-Stack Web Development
            </Link>
            <Link to="/courses/iot" className="hover:translate-x-3 transition duration-200 ease-linear">
              IoT & Embedded Systems
            </Link>
          </div>
        </div>

        {/* Learning Resources */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Learning Hub</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/resources/tutorials" className="hover:translate-x-3 transition duration-200 ease-linear">
              Tutorials & Guides
            </Link>
            <Link to="/resources/tools" className="hover:translate-x-3 transition duration-200 ease-linear">
              AI & Dev Tools
            </Link>
            <Link to="/blog" className="hover:translate-x-3 transition duration-200 ease-linear">
              Tech Blog
            </Link>
            <Link to="/community" className="hover:translate-x-3 transition duration-200 ease-linear">
              Join Our Community
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-center py-4">
          © {new Date().getFullYear()} Developed by 
          <span className="text-primary font-semibold mx-2">IMRobonix</span> | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
