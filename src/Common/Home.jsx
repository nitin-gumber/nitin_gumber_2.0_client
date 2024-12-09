import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";

function Home() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section
          className="flex flex-col items-center justify-center w-full min-h-screen"
          id="home"
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-28 lg:mt-5 text-center">
            Hi! I'm Nitin Gumber
          </h1>
          <div className="mt-14 w-4/5 mx-auto text-base lg:text-lg text-gray-800 flex flex-col items-center gap-y-5 ">
            <p>
              I'm a Full Stack [MERN STACK] Web Developer building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the Projects
              section.
            </p>
            <p className="">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="flex flex-col items-center justify-center w-full mt-20 md:mt-0"
          id="skills"
        >
          <h2 className="text-4xl font-semibold text-gray-800">
            Skills Sections
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-12">
            <div className="border-2 border-gray-200 rounded-lg p-5 m-7">
              <div className="flex flex-col items-center gap-5 mt-5">
                <IoDiamondOutline className="text-5xl text-blue-500" />
                <span className="text-2xl font-semibold text-gray-800">
                  Design
                </span>
                <p className="text-gray-800 text-start ">
                  I can code my own designs or even use the customer's design as
                  base. My focus is to generate clean code that's well
                  structured for reliability.
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-5 m-7">
              <div className="flex flex-col items-center gap-5 mt-5">
                <FaCode className="text-5xl text-blue-500" />
                <span className="text-2xl font-semibold text-gray-800">
                  Design
                </span>
                <p className="text-start text-gray-800 ">
                  I can setup your project to use SEO principles which will push
                  your project to the first page on search engines and save you
                  ads money.
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-5 m-7">
              <div className="flex flex-col items-center gap-5 mt-5">
                <MdOutlineComputer className="text-5xl text-blue-500" />
                <span className="text-2xl font-semibold text-gray-800">
                  Design
                </span>
                <p className="text-start text-gray-800 ">
                  Successful online projects start with good design. It
                  establishes a solid foundation for future development and
                  allows for long term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
      </div>
    </>
  );
}

export default Home;
