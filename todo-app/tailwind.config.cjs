/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-darker' : 'rgb(55, 27, 88)',
        'theme-dark' : 'rgb(76, 53, 117)',
        'theme-default' : 'rgb(91, 75, 138)',
        'theme-light': 'rgb(120, 88, 166)'
      }
      
    },
  },
  plugins: [],
}