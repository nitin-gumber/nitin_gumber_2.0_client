import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import userImg from "../assets/images/image.webp";
import { Slant as Hamburger } from "hamburger-react";
import { Menubar } from "./Menubar";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white text-black");

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setBgColor("bg-blue-900 text-white");
      } else{
        setBgColor("bg-white text-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "My Blogs", link: "#blogs" },
    { name: "Resume", link: "#resume" },
  ];

  const socialLinks = [
    { icon: <FaXTwitter />, link: "https://twitter.com" },
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out shadow-md ${bgColor}`}
      >
        <div className="flex justify-between md:justify-around items-center mx-auto py-3 px-4">
          {/* Logo Section */}
          <div className="flex items-center gap-x-3">
            <img
              src={userImg}
              className="w-10 h-10 rounded-full object-cover"
              alt="Nitin Gumber"
            />
            <span className="font-lato-bold">Nitin Gumber</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-x-6">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="cursor-pointer hover:text-blue-500 hover:transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Links */}
          <ul className="hidden md:flex items-center gap-x-4 text-2xl">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:transition-colors"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Hamburger
              direction="right"
              size={30}
              color={bgColor === "bg-blue-900 text-white" ? "white" : "black"}
              toggle={setOpen}
              toggled={isOpen}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Menubar setOpen={setOpen} isOpen={isOpen} />
    </>
  );
};
