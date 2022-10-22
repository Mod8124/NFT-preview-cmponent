/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-dk':'hsl(217, 54%, 11%)',
        'card-dk':'hsl(216, 50%, 16%)',
        'line':' hsl(215, 32%, 27%)',
        'soft-blue':'hsl(215, 51%, 70%)',
        'cyan-dk':'hsl(178, 100%, 50%)'
      },
      fontFamily:{
        body: ['Outfit'],
      },
      fontSize:{
        sm:"18px"
      }
    },
  },
  plugins: [],
}