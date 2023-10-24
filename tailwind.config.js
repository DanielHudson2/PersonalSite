/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#33CC99',
      secondary: '#0A2239',
      grey: '#AEAEAE',
      white: '#EDEDED',
      black: '#0E0E0E',
      blue: '#00d4ff',
    },
    extend: {},
  },
  plugins: [],
}

