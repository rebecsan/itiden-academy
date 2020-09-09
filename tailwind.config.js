module.exports = {
  purge: [],
  theme: {
    columnCount: [1, 2, 3],
    columnGap: {
      // will fallback to 'gap' || 'gridGap' values
      // sm: '1rem',
      // md: '1.5rem',
      // lg: '2rem',
    },
    columnWidth: {
      // sm: '120px',
      // md: '240px',
      // lg: '360px',
    },
    columnRuleColor: false, // will fallback to `borderColor` values
    columnRuleWidth: false, // will fallback to `borderWidth` values
    columnRuleStyle: [
      "none",
      "hidden",
      "dotted",
      "dashed",
      "solid",
      "double",
      "groove",
      "ridge",
      "inset",
      "outset",
    ],
    columnFill: ["auto", "balance", "balance-all"],
    columnSpan: ["none", "all"],
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
    columnCount: ["responsive"],
    columnGap: ["responsive"],
    columnWidth: ["responsive"],
    columnRuleColor: ["responsive"],
    columnRuleWidth: ["responsive"],
    columnRuleStyle: ["responsive"],
    columnFill: ["responsive"],
    columnSpan: ["responsive"],
    padding: ["first", "last"],
  },
  plugins: [require("tailwindcss-multi-column")()],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
