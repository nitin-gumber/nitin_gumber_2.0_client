import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import userImg from "../assets/images/image.webp";
import { Slant as Hamburger } from "hamburger-react";
import { Menubar } from "./Menubar";

export const Navbar = () => {
  const [color, setColor] = useState("transparent");

  const [isOpen, setOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 80) {
      // window.scrollY is the number of pixels that the document has already been scrolled vertically.
      setColor("gray");
    } else {
      setColor("transparent");
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out 
        ${color === "transparent" ? "bg-transparent" : "bg-blue-900 text-white"}
          shadow-md  
        `}
      >
        <div className="flex justify-between md:justify-around items-center h-full  mx-auto py-3 px-4">
          <div className="flex items-center gap-x-3">
            <img
              src={userImg}
              className="w-10 h-10 rounded-full aspect-square object-cover"
              alt=""
            />
            <span>Nitin Gumber</span>
          </div>

          <ul className=" hidden md:flex items-center gap-x-6">
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              Skills
            </li>
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              Projects
            </li>
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              Contact
            </li>
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              My Blogs
            </li>
            <li className="cursor-pointer hover:text-blue-500 font-[400] hover:transition-all hover:duration-300 hover:ease-in-out">
              Resume
            </li>
          </ul>

          <ul className="hidden  md:flex items-center gap-x-3 text-2xl">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div className="md:hidden">
            <Hamburger
              direction="right"
              size={30}
              color={color === "transparent" ? "black" : "white"}
              onToggle={() => setOpen(!isOpen)}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </div>
      <div className=" fixed">
        <Menubar setOpen={setOpen} isOpen={isOpen} color={color} />
      </div>
    </>
  );
};
