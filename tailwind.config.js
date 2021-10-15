module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        subtle: '0 0 1px 0 rgba(0,0,0,0.10), 0 2px 30px 0 rgba(0,0,0,0.10)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '997px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
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
          divider: '#2A3845',
        },
        divider: {
          dark: '#2A3845',
        },
        api: {
          green: '#690',
          blue: '#47afe8',
          purple: '#786ff1',
          orange: '#ff9900',
          methods: {
            post: '#690',
            get: '#47afe8',
            put: '#ff9900',
            delete: '#f06560',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
