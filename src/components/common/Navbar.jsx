import React, { useState, useEffect } from "react";
import userImg from "../../assets/images/image.webp";
import { Slant as Hamburger } from "hamburger-react";
import { Menubar } from "./Menubar";
import resume from "../../assets/Resume/Resume.pdf";
import { SocialMedia } from "./SocialMedia";

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
          <SocialMedia
            className="hidden md:flex justify-center gap-4 text-2xl"
            bgColor={bgColor}
          />

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
