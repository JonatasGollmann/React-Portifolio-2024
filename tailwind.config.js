/** @type {import('tailwindDss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Gantari': ['Gantari', 'sans-serif'],
      },
      colors: {
        'black-1':'#111920',
        'black-2':'#131B23',
        'green-1':'#1B453C',
        'green-2':'#1F5A48',
        'green-3':'#21654E',
        'light-green-1':'#A4D0AB',
        'light-green-2':'#C0DDC6',
        'white-1':'#F8F3FC',
        'white-2':'#FCF7FF',
        'white-3':'#FFFFFF'
      }
    },
    
  },
  plugins: [],
}