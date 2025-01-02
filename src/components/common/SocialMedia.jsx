import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialMedia = ({ className, bgColor }) => {
  return (
    <>
      <div className={`flex items-center  ${className}`}>
        <a
          href="https://x.com/i/flow/login?redirect_after_login=%2FNitin601"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter
            className={`text-black ${bgColor} transition-all duration-500 ease-in-out`}
          />
        </a>
        <a
          href="https://github.com/nitin-gumber"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-black ${bgColor} transition-all duration-500 ease-in-out`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nitin-gumber-web-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-700 ${bgColor} transition-all duration-500 ease-in-out`}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/nitin.gumber_"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-pink-500 ${bgColor} transition-all duration-500 ease-in-out`}
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};
