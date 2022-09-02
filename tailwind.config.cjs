/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".card .front": {
      transform: "rotateY(90deg)",
      transition: "all ease-in 0.2s",
      position: "absolute",
    },
    ".flipped .front": {
      transform: "rotateY(0deg)",
      transitionDelay: "0.2s",
    },
    ".card .back": {
      transition: "all ease-in 0.2s",
      transitionDelay: "0.2s",
    },
    ".flipped .back": {
      transform: "rotateY(90deg)",
      transitionDelay: "0s",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "860px",
      // => @media (min-width: 1024px) { ... }

      xl: "860px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "860px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [Myclass],
};
