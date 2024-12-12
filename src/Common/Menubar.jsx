import React, { useEffect } from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Menubar = ({ setOpen, isOpen }) => {
  const menuItems = [
    { name: "HOME", link: "#home" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
    { name: "MY BLOGS", link: "#blogs" },
    { name: "RESUME", link: "#resume" },
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
        className={`fixed inset-0 z-40 transition-all duration-500 ease-linear ${
          isOpen
            ? "bg-black bg-opacity-50 pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 bg-white w-full h-full shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
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
            <ul className="flex justify-start gap-4 text-2xl text-gray-600 mt-8 px-10">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menubar;
