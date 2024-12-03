import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  const [color, setColor] = useState("transparent");
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
        ${color === "transparent" ? "bg-transparent" : "bg-blue-800 text-white"}
          `}
      >
        <div className="flex justify-between md:justify-around items-center h-full  mx-auto py-2 px-4">
          <div>
            <img src="" alt="" />
            <span>Nitin Gumber</span>
          </div>

          <ul className=" hidden md:flex items-center gap-x-5">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>My Blogs</li>
            <li>Resume</li>
          </ul>

          <ul className="flex items-center gap-x-3 text-2xl">
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
        </div>
      </div>
    </>
  );
};
