module.exports = {
  purge: ["pages/**/*", "components/**/*"],
  theme: {
    boxShadow: {
      custom: "0px 4px 4px rgba(0, 0, 0, 0.16)",
    },
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
          900: "#0C0C0C",
        },
        purple: {
          700: "#504DD2",
        },
        teal: {
          400: "#5CFFF5",
        },
        lightblue: "#F5F8FF",
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
    backgroundOpacity: ["responsive", "hover", "focus", "dark"],
    columnCount: ["responsive"],
    display: ["responsive", "dark"],
    fill: ["responsive", "hover", "focus", "dark"],
    margin: ["responsive", "first", "last"],
    padding: ["responsive", "first", "last"],
    textColor: ["responsive", "dark"],
  },
  plugins: [
    // Divide contents of flex container into several columns
    require("tailwindcss-multi-column")(),
    // Add variants for darkmode
    require("@danestves/tailwindcss-darkmode")(),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
