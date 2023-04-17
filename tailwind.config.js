/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
  theme: {

    fontFamily: {
      'myfont1': ['Inter', 'sans-serif'],
      'myfont2': ['Merriweather', 'serif'],
      'myfont3': ['Mulish', 'sans-serif'],
    },


    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
  
}

