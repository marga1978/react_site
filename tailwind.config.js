/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      },
      colors:{
        "primary":"#010851",
        "secondary":"#9a7af1",
        "tartiary":"#707070",
        "pink":"#ee9ae5",
      }
    },
  },
  plugins: [],
};
