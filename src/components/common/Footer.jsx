import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <section className="bg-white max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-lato">
            Get in touch
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-y-3">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-medium text-gray-800">Email</span>
            <a
              href="mailto: nitingumberdev@gmail.com"
              className="text-lg font-medium text-blue-500 hover:underline transition-colors"
            >
              nitingumberdev@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center md:items-center ">
            <span className="text-lg font-medium text-gray-800">
              Social Media
            </span>
            <div className="flex justify-center md:justify-start items-center gap-4 text-2xl mt-2">
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FNitin601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://github.com/Nitin-Gumber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-gumber-web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/nitin.gumber_?igsh=ODA1NTc5OTg5Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-medium text-gray-800">Address</span>
            <span className="text-lg font-medium text-gray-500">
              Ganganagar Rajasthan, India
            </span>
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="text-lg font-medium text-gray-500">
            {`© ${new Date().getFullYear()} Nitin Gumber. All rights reserved.`}
          </span>
        </div>
      </section>
    </>
  );
};
