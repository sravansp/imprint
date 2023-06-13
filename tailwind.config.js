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
        'tab': {'min': '768px', 'max': '1023px', 'orientation' : 'portrait'},
      // => @media (min-width: 768px and max-width: 1023px and orientation : portrait) { ... }
      },
    },

  },
  plugins: [],
}