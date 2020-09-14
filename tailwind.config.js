module.exports = {
  purge: [],
  theme: {
    columnCount: [1, 2, 3],
    extend: {
      colors: {
        gray: {
          100: "#F4F4F4",
          200: "#EBEBEB",
          250: "#E0E0E0",
          300: "#D6D6D6",
          350: "#C2C2C2",
          400: "#808080",
          500: "#505050",
          600: "#2D2D2D",
          700: "#242424",
          800: "#181818",
          900: "#121212",
        },
        purple: {
          700: "#504DD2",
        },
        teal: {
          400: "#5CFFF5",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      document: ["Open Sans", "sans-serif"],
    },
    height: {
      "1px": "1px",
    },
  },
  variants: {
    backgroundColor: ["responsive", "dark"],
    textColor: ["responsive", "dark"],
    columnCount: ["responsive"],
    padding: ["first", "last"],
  },
  plugins: [
    // Divide contents of flex container into several columns
    require("tailwindcss-multi-column")(),
    // Add variants for darkmode
    require("tailwindcss-dark-mode")(),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
