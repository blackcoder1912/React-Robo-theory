import React, { useState } from "react";
import { AiOutlineAccountBook, AiOutlineClose } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="fixed w-full z-10 bg-[#6495ED] text-white py-4"> {/* Changed to Cornflower Blue */}
      {/*desktop navigation section */}
      <nav className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRobot size={35} className="text-[#F5F5F5]" />
          <Link to="/" className="font-bold text-2xl">
            RoboTheory
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-8 font-medium text-lg">
          <Link
            to="/"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </Link>
          <Link
            to="/cars"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Courses
          </Link>
          <Link
            to="/services"
            className="hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </Link>

          <Link
            to="/sign-in"
            className="hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear"
          >
            Sign In
          </Link>
        </div>
        <div className=" md:hidden flex items-center ">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
      {/*Responsive section */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#6495ED] text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`} 
      > {/* Changed background color to Cornflower Blue */}
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link
          to="/cars"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Our Courses
        </Link>
        <Link
          to="/services"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </Link>

        <div>
          <button className="border-2 border-primary py-1 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
