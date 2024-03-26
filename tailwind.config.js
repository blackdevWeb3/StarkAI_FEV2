const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: {
          min: "0px",
          max: "767px",
        },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: {
          min: "767px",
          max: "1023px",
        },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: {
          min: "1024px",
          max: "1200px",
        },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: {
          min: "1201px",
          max: "1400px",
        },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": {
          min: "1401px",
          max: "1600px",
        },
        // => @media (min-width: 1536px) { ... }
        "3xl": {
          min: "1601px",
        },
      },
      colors: {
        primaryBackground: "#1C1B1B",
        darkBackground: "#0D0D0D",
        darkPrimary: "#202125",
        primaryColor: "#f2f3f5",
        deepPink: "#FF1493",
        fontPrimary: "#a7b2c1",
        fontSecondary: "#9094a6",
        modalBackground: "#171717",
        black_dark: "#1a1a1a",
        black_light: "#363636",
        black_medium: "#252525",
        gray_default: "#a4a4a4",
        discord_indigo: "#7289da",
        mainPink: "#DD00AC",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#2F3037",
      }),
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      aspectRatio: {
        "custom-768-1152": "768/1152",
        "custom-16-10": "16/10",
      },
    },
  },
  plugins: [],
};
