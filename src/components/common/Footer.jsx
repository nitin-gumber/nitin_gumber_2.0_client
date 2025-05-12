import React from "react";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 bg-gray-100 ">
      <p className="mt-4 text-gray-900 text-xl">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-gray-950 font-semibold">Nitin Gumber</span>. All
        Rights Reserved.
      </p>
    </section>
  );
};
