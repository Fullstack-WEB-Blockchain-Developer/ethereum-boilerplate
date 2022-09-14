/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  important: '#__next',
  safelist: ['pl-24', 'pl-40', 'pl-56', 'pl-72', 'pl-80'],
  theme: {
    extend: {
      heading: ['Favorit'],
      favorit: ['Favorit'],
      favoritExtended: ['Favorit-Extended'],
      favoritMono: ['Favorit-Mono'],
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-dir')()],
};
