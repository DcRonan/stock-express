module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgrey: '#222429',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
