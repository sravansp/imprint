/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './home.html',
    "./slider.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px',
        // => @media (min-width: 500px) { ... }
      },
    },

  },
  plugins: [],
}