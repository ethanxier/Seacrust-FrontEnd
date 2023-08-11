/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palleteBlue: '#3FABE8',
        palleteGrey: '#D9D9D9',
        palleteSubmit: '#1f618d',
        palleteSubmitHover: '#1a5276',
      },
      backgroundImage: {
        authBG: 'linear-gradient(to left, rgba(63, 171, 232, 1) , #ffffff 80%)'
      },
      fontFamily: {
        inter: 'Inter'
      },
      fontSize: {
        xxs: '7px',
        xxxs: '6px',
      },
    },
  },
  plugins: [],
}