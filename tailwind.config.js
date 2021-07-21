module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'xp-grey': {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
        },
        'xp-primary': {
          100: '#FFFAE6',
          200: '#FFEB99',
          300: '#FFE066',
          400: '#FFD633',
          500: '#FFCC00',
          600: '#B38F00',
          700: '#997A00',
          800: '#665200',
          900: '#332900',
        },
        'xp-secondary': {
          100: '#FAD5C9',
          200: '#F5AC94',
          300: '#F49E82',
          400: '#F1825E',
          500: '#EF744C',
          600: '#BF5D3D',
          700: '#A75135',
          800: '#783A26',
          900: '#602E1E',
        },
        'xp-tertiaries': {
          'primary-ciel': '#63C2C7',
          'primary-rouge': '#C22B02',
          'secondary-blue': '#006D8C',
          'secondary-blue-dark': '#349BB8',
          'secondary-grey': '#D8DDE7',
          'secondary-marine': '#003850',
        },
        status: {
          caution: '#EC9136',
          danger: '#DA4646',
          neutral: '#D8DDE7',
          tip: '#B6D553',
        },
        darkmode: {
          background: '#121E24',
          divider: '#455464',
        },
        divider: {
          dark: '#455464',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
