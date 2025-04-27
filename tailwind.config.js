/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm:'350px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1536px',
    },
    extend: {
      colors: {
        brown: "#53423e",
        lightbrown: "#645550",
        darkbrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightcyan: "#88e5f0",
        darkcyan: "#009fb3",
        orange: "#fb9718",
        lightorange: "#fac27b",
        darkorange: "#d28422",
        grey: "#626965",
        lightgrey: "#978580",
        darkgrey: "#3f4441",
      },
      boxShadow:{
        cyanShadow: '0px 0px 20px 0px rgba(94,206,220,0.5)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(94,206,220,0.5)',
        orangeMediumShadow:'10px 10px 200px 150px rgba(240,169,79,0.5)',
      },
      fontFamily: {
        body: ['Josefin Sans', 'sans-serif'],
        special: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
