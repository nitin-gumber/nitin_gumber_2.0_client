import React from "react";
import Marquee from "react-fast-marquee";
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

export const SkillSection = () => {

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
          title: "Development",
          icon: <MdOutlineComputer className="text-5xl text-blue-500" />,
          description:
            "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth.",
        },
        {
          id: 3,
          title: "SEO",
          icon: <FaCode className="text-5xl text-blue-500" />,
          description:
            "I can setup your project to use SEO principles which will push your project to the first page on search engines and save you ads money.",
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

  return(
    <>
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
            <Marquee gradient={false} speed={70}>
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
    </>
  )
};
