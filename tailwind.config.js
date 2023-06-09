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
        'xss': '374px',
        // => @media (min-width: 374px) { ... }
      },
    },

  },
  plugins: [],
}