import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resume from "../../assets/Resume/Resume.pdf";
import { SocialMedia } from "./SocialMedia";

export const Menubar = ({ setOpen, isOpen }) => {
  const menuItems = [
    { name: "HOME", link: "#home", target: "_self", rel: "" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects", target: "_self", rel: "" },
    { name: "CONTACT", link: "#contact" },
    { name: "MY BLOGS", link: "https://blogs.nitingumber.me/", target: "_self", rel: "" },
    { name: "RESUME", link: resume, target: "_", rel: "noopener noreferrer" },
  ];

  // Manage body scroll when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-linear md:hidden ${
          isOpen
            ? "bg-black bg-opacity-50 pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 bg-white w-full h-full shadow-lg z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
            isOpen ? "translate-x-1/3" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation */}
          <nav className="flex flex-col justify-between h-full py-8">
            {/* Menu Items */}
            <ul className="space-y-9 px-8 mt-24">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target={item.target}
                    rel={item.rel}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </a>
                  <div className="h-[0.8px] bg-gray-200 w-[60%] mt-2 "></div>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <SocialMedia className="text-2xl mt-8 justify-start gap-4 px-10" />
          </nav>
        </div>
      </div>
    </>
  );
};
