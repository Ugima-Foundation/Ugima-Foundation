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
        'primary': '#2E6F40',  
        'secondary': ' #88e788',
        'Complementary': '#FFD700'
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
