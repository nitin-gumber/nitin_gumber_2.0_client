import React from "react";

export const Btn = ({ text, link, type }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <button
          className={`${
            type === "primary"
              ? "bg-[#818CF8] text-white"
              : "bg-white text-[#818CF8] border-2 border-[#818CF8]"
          } px-5 py-2 rounded-lg font-montserrat font-semibold transition-colors hover:bg-[#818CF8] hover:text-white`}
        >
          {text}
        </button>
      </a>
    </>
  );
};
