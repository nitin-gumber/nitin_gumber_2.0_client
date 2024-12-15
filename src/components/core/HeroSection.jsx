import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className=" md:py-40 pt-5" id="home">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-28 lg:mt-5 text-center">
          Hi! I'm Nitin Gumber
        </h1>
        <div className="mt-16 w-4/5 mx-auto text-base lg:text-lg text-gray-800 flex flex-col items-center gap-y-5 ">
          <p>
            I'm a Full Stack [MERN STACK] Web Developer building the Front-end
            of Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </section>
    </>
  );
};
