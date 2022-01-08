// const colors = require("tailwindcss/colors");
// const { colors: defaultColors } = require("tailwindcss/defaultTheme");

// const colors = {
//   ...defaultColors,
//   ...{
//     "cs-orange": "#f26522",
//     "cs-yellow": "#f57b20",
//     "cs-gray": "#515153",
//   },
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: colors,
    extend: {
      colors: {
        "cs-orange": "#f26522",
        "cs-yellow": "#f57b20",
        "cs-gray": "#515153",
        "auspark-red":"#B7383B",
      },
      animation: {
        fadein: "fadein 1s ease-in-out",
      },
      keyframes: {
        fadein: {
          "0%": {
            transform: "scale(2)",
            opacity: 0,
          },
          "100%": {
            // transform: 'scale(1)',
            opacity: 100,
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
