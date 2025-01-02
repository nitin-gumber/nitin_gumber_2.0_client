import React from "react";
import { SocialMedia } from "./SocialMedia";

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
            {/* Social media */}
            <SocialMedia className={"mt-2 justify-center text-2xl gap-4"} />
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
