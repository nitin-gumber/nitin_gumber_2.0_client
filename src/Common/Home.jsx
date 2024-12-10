import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiExpress,
  SiMongoose,
  SiMongodb,
} from "react-icons/si";

import Marquee from "react-fast-marquee";

function Home() {
  const skillsdata = [
    {
      id: 1,
      title: "Design",
      icon: <IoDiamondOutline className="text-5xl text-blue-500" />,
      description:
        "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability.",
    },
    {
      id: 2,
      title: "SEO",
      icon: <FaCode className="text-5xl text-blue-500" />,
      description:
        "I can setup your project to use SEO principles which will push your project to the first page on search engines and save you ads money.",
    },
    {
      id: 3,
      title: "Development",
      icon: <MdOutlineComputer className="text-5xl text-blue-500" />,
      description:
        "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth.",
    },
  ];

  const languages = [
    {
      id: 1,
      icon: <FaHtml5 className="text-6xl text-[#E34F26]" />,
      title: "HTML5",
    },
    {
      id: 2,
      icon: <FaCss3 className="text-6xl text-[#1572B6]" />,
      title: "CSS3",
    },
    {
      id: 3,
      icon: <IoLogoJavascript className="text-6xl text-[#F7DF1E]" />,
      title: "JavaScript",
    },
    {
      id: 4,
      icon: <RiTailwindCssFill className="text-6xl text-[#38B2AC]" />,
      title: "Tailwind CSS",
    },
    {
      id: 5,
      icon: <FaReact className="text-6xl text-[#61DAFB]" />,
      title: "React",
    },
    {
      id: 6,
      icon: <SiRedux className="text-6xl text-[#764ABC]" />,
      title: "Redux",
    },
    {
      id: 7,
      icon: <SiReactrouter className="text-6xl text-[#CA4245]" />,
      title: "React Router",
    },
    {
      id: 8,
      icon: <SiReactquery className="text-6xl text-[#FF4154]" />,
      title: "React Query",
    },
    {
      id: 9,
      icon: <FaNodeJs className="text-6xl text-[#0f890f]" />,
      title: "Node.js",
    },
    {
      id: 10,
      icon: <SiExpress className="text-6xl text-[#000000]" />,
      title: "Express",
    },
    {
      id: 11,
      icon: <SiMongoose className="text-6xl text-[#880000]" />,
      title: "Mongoose",
    },
    {
      id: 12,
      icon: <SiMongodb className="text-6xl text-[#47A248]" />,
      title: "MongoDB",
    },
    {
      id: 13,
      icon: <FaGitAlt className="text-6xl text-[#F05032]" />,
      title: "Git",
    },
    {
      id: 14,
      icon: <FaGithub className="text-6xl text-[#181717]" />,
      title: "GitHub",
    },
  ];

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className=" md:py-40 pt-5" id="home">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-28 lg:mt-5 text-center">
            Hi! I'm Nitin Gumber
          </h1>
          <div className="mt-16 w-4/5 mx-auto text-base lg:text-lg text-gray-800 flex flex-col items-center gap-y-5 ">
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
        <section className="py-20" id="skills">
          <h2 className="text-4xl font-semibold text-gray-800 text-center">
            Skills Sections
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-12">
            {skillsdata.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="border-2 border-gray-200 rounded-lg p-5 m-7"
                >
                  <div className="flex flex-col items-center gap-5 mt-5">
                    {skill.icon}
                    <span className="text-2xl font-semibold text-gray-800">
                      {skill.title}
                    </span>
                    <p className="text-gray-800 text-start ">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages and Frameworks */}
          <h2 className="text-4xl font-semibold text-gray-800 text-center mt-20">
            Languages and Frameworks
          </h2>
          <div className=" mt-10">
            <Marquee gradient={false} speed={70} pauseOnHover={true}>
              {languages.map((language) => {
                return (
                  <div key={language.id} className="rounded-lg p-5 m-7">
                    <div className="flex flex-col items-center gap-5 mt-5">
                      {language.icon}
                      <span className="text-2xl font-semibold text-gray-900">
                        {language.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects">
          <h2
            className="text-4xl font-semibold text-gray-800 text-center "
            id="projects"
          >
            Projects
          </h2>
          <div className="w-10 h-2 bg-[#818CF8] mx-auto mt-5 rounded-full"></div>
          <p className="text-center text-gray-800 text-lg my-10 w-10/12 md:w-1/2 mx-auto">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 1
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                    View Project
                  </button>
                  <button className="bg-gray-500 text-white px-4 py-2 mt-5 rounded-lg ml-5">
                    GitHub Repo
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://media.istockphoto.com/id/1679733776/photo/closeup-image-of-judge-gavel-and-text-product-liability.jpg?s=1024x1024&w=is&k=20&c=0XLOR1T9ZUrTXWdSgbwFJHctranbQ4sLpZhkfg9Y8mk="
                alt="project"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Project 2
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptates.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20" id="contact">
          <h2 className="text-4xl font-semibold text-gray-800 text-center">
            Contact Us
          </h2>

          <div
          className="min-h-screen"
          >
            
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
