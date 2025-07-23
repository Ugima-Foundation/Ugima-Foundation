/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: ['Montserrat', 'sans-serif'],  
      },
      colors: {
        'primary': '#acd03a',  
        'secondary': '#6fa245',
        'Complementary': '#d4af37'
      },
        perspective: {
        '1000': '1000px',
      },
      transformOrigin: { 
        'center': 'center',
      },
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  plugins: [],
}
