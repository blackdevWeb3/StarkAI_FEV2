const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#0D0D0D",
        darkPrimary: "#202125",
        primaryColor: "#f2f3f5",
        deepPink: "#FF1493",
        fontPrimary: "#a7b2c1",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#2F3037",
      }),
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
