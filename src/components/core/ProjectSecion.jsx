import React from "react";
import { Btn } from "../common/Btn";
import StudyNotionImg from "../../assets/images/StudyNotionImg.webp";
import WeatherAppImg from "../../assets/images/WeatherAppImg.webp";
import TicTacToeGameImg from "../../assets/images/TicTacToeGameImg.webp";
import RozarPayCloneImg from "../../assets/images/RozarPayCloneImg.webp";

export const ProjectSecion = () => {
  const projectsData = [
    {
      id: 1,
      img: StudyNotionImg,
      title: "StudyNotion Etech PlateForm",
      description:
        "StudyNotion is an Ed-tech platform built on the MERN stack for creating, managing, and marketing IT courses. It offers secure payments, course reviews, and a responsive design, empowering instructors with powerful tools while delivering a seamless learning experience to students.",
      projectLiveLink: "https://studynotion-online.vercel.app/",
      githubLink: "https://github.com/Nitin-Gumber/study_notion_frontend",
    },
    {
      id: 2,
      img: WeatherAppImg,
      title: "SkyForecasts Weather App",
      description:
        "SkyForecasts is a location-based weather app that provides detailed weather information for any city in the world. Built using HTML, CSS, and JavaScript, it integrates a weather API to deliver accurate and real-time updates.",
      projectLiveLink: "https://skyforecasts.vercel.app/",
      githubLink: "https://github.com/Nitin-Gumber/Weather-App",
    },
    {
      id: 3,
      img: TicTacToeGameImg,
      title: "Tic Tac Toe Game",
      description:
        "Tic Tac Toe Game is a classic two-player game where players take turns marking spaces in a grid to form a line of three matching symbols and win. Simple yet engaging, it’s a timeless game for all ages.",
      projectLiveLink: "https://tictactoechallenge.vercel.app/",
      githubLink: "https://github.com/Nitin-Gumber/Tic-Tac-Toe-game",
    },
    {
      id: 4,
      img: RozarPayCloneImg,
      title: "Razorpay Payment Clone",

      description:
        "I developed a Razorpay Clone website using HTML, JavaScript, and TailwindCSS to create a sleek and responsive user interface. The project focuses on replicating the core functionality and design aesthetics of Razorpay, providing a smooth and interactive experience for users.",
      projectLiveLink: "https://razorpay-payment-clone.vercel.app/",
      githubLink: "https://github.com/Nitin-Gumber/RazorPay-Clone-Frontend-UI",
    },
  ];

  return (
    <>
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
          {projectsData.map((project) => {
            return (
              <div key={project.id} className="bg-white rounded-lg shadow-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-fit rounded-t-lg"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {project.description.length > 150
                      ? project.description.substring(0, 150) + "..."
                      : project.description}
                  </p>
                  <div className="flex justify-between items-center mt-5">
                    <Btn
                      text="View Project"
                      link={project.projectLiveLink}
                      type="primary"
                    />
                    <Btn text="GitHub" link={project.githubLink} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
