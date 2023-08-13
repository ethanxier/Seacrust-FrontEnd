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
        palleteSubmit: '#1f618d',
        palleteSubmitHover: '#1a5276',
        palleteGrey: '#D9D9D9'
      },
      backgroundImage: {
        BGtoLeft: 'linear-gradient(to left, rgba(63, 171, 232, 1) , #ffffff 80%)',
        BGtoBottomProfile: 'linear-gradient(to bottom, rgba(63, 171, 232, 1) , #ffffff 100%)',
        BGtoTop: 'linear-gradient(to top, rgba(63, 171, 232, 1) , #ffffff 100%)',
        BGtoBottom: 'linear-gradient(to bottom, rgba(63, 171, 232, 1) , #ffffff 100%)',
      },
      backgroundColor: {
        'BGGrey': '#F3F2F2',
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