/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './home.html',
    "./slider.html"
  ],
  theme: {
    extend: {
      screens: {
        'xss': '374px',
        // // => @media (min-width: 374px) { ... }
        'xs': '500px',
        // // => @media (min-width: 500px) { ... }
        // 'tab': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px and orientation : portrait) { ... }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 9))' },
        },
      },
    },

  },
  plugins: [],
}