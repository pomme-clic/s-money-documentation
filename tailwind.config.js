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
