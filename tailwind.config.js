/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'green':'#0d9488',
      'rose': '#ff585b',
      'gray': '#90808b',
      'white': '#ffffff',
      'black': '#000000',
      
     
    },
   
   
    extend: {
      screens:{
        sm: '480px',
        md: '875px',
      },
      
    },
  },
  plugins: [],
}

