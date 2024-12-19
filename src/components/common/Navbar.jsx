import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import userImg from "../../assets/images/image.webp";
import { Slant as Hamburger } from "hamburger-react";
import { Menubar } from "./Menubar";
import resume from "../../assets/Resume/Resume.pdf";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white text-black");

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setBgColor("bg-[#065A86] text-white");
      } else {
        setBgColor("bg-white text-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", link: "#home", target: "_self", rel: "" },
    { name: "Skills", link: "#skills", target: "_self", rel: "" },
    { name: "Projects", link: "#projects", target: "_self", rel: "" },
    { name: "Contact", link: "#contact", target: "_self", rel: "" },
    { name: "My Blogs", link: "#blogs", target: "_self", rel: "" },
    { name: "Resume", link: resume, target: "_", rel: "noopener noreferrer" },
  ];

  const socialLinks = [
    {
      icon: <FaXTwitter />,
      link: "https://x.com/i/flow/login?redirect_after_login=%2FNitin601",
    },
    { icon: <FaGithub />, link: "https://github.com/nitin-gumber" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/nitin-gumber-web-dev",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/nitin.gumber_",
    },
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
                  target={item.target}
                  rel={item.rel}
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
              color={bgColor === "bg-[#065A86] text-white" ? "white" : "black"}
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
