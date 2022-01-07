const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 1s ease-in-out',
      },
      keyframes: {
        fadein: {
          '0%': {
            transform: 'scale(2)',
            opacity: 0
          },
          '100%': {
            // transform: 'scale(1)',
            opacity: 100
          }
        },
      },
    },
  },
  variants: {},
  plugins: [],

}
