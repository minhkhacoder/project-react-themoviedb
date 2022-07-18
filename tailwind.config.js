/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        textHeading: ["Squada One", "cursive"],
        text: ["Yantramanav", "sans-serif"],
      },
      colors: {
        primary: "#BE123C",
      },
      dropShadow: {
        primary: "rgba(7, 65, 210, 0.1) 0px 9px 30px",
      },
    },
  },
  plugins: [],
};
