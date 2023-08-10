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
      fontFamily: {
        inter: 'Inter'
      },
    },
  },
  plugins: [],
}