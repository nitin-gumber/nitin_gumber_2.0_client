/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "lato-thin": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 100,
        fontStyle: "normal",
      },

      "lato-light": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 300,
        fontStyle: "normal",
      },

      "lato-regular": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
      },

      "lato-bold": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
      },

      "lato-black": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 900,
        fontStyle: "normal",
      },

      "lato-thin-italic": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 100,
        fontStyle: "italic",
      },

      "lato-light-italic": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 300,
        fontStyle: "italic",
      },

      "lato-regular-italic": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontStyle: "italic",
      },

      "lato-bold-italic": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 700,
        fontStyle: "italic",
      },

      "lato-black-italic": {
        fontFamily: "Lato, sans-serif",
        fontWeight: 900,
        fontStyle: "italic",
      },
      montserrat: {
        fontFamily: "Montserrat, sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: "<weight>",
        fontStyle: "normal",
      },
    },
    extend: {},
  },
  plugins: [],
};
