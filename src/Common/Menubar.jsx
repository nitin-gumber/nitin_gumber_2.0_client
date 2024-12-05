import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Menubar = ({ setOpen, isOpen, color }) => {
  return (
    <>
      <div
        className={`fixed top-14 right-0 -z-50 h-screen w-screen transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-1/3" : "translate-x-full"
        }`}
      >
        <div
          className={`${
            color === "transparent"
              ? "bg-white text-black"
              : "bg-blue-800 text-white"
          }  h-screen w-screen md:hidden flex flex-col shadow-xl transition-all duration-500 ease-in-out`}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="text-white text-xl mt-10 "
          >
            <ul
              className={`${
                color === "transparent" ? "text-black" : "text-white"
              } flex items-start flex-col mt-8 gap-y-6 mx-10`}
            >
              <li
                onClick={() => setOpen(!isOpen)}
                className=" text-lg cursor-pointer hover:text-blue-500 font-[400]  hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                HOME
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
              <li
                onClick={() => setOpen(!isOpen)}
                className="text-lg cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                SKILLS
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
              <li
                onClick={() => setOpen(!isOpen)}
                className=" text-lg cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                PROJECTS
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
              <li
                onClick={() => setOpen(!isOpen)}
                className="text-lg cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                CONTACT
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
              <li
                onClick={() => setOpen(!isOpen)}
                className="text-lg cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                MY BLOGS
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
              <li
                onClick={() => setOpen(!isOpen)}
                className="text-lg cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out"
              >
                RESUME
              </li>
              <div className="h-[0.5px] w-60 bg-gray-300"></div>
            </ul>
            <ul>
              <li
                className={` ${
                  color === "transparent" ? "text-black" : "text-white"
                } flex items-center gap-x-3 mt-10 mx-10 text-3xl`}
              >
                <FaTwitter />
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menubar;
