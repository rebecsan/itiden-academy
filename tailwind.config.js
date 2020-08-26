module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        gray: {
          '100': '#F4F4F4',
          '200': '#EBEBEB',
          '250': '#E0E0E0',
          '300': '#D6D6D6',
          '350': '#C2C2C2',
          '400': '#808080',
          '500': '#505050',
          '600': '#2D2D2D',
          '700': '#242424',
          '800': '#181818',
          '900': '#121212',
        },
        purple: {
          '700': '#504DD2',
        },
        teal: {
          '400': '#5CFFF5'
        },
      }
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
