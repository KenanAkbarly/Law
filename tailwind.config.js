/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to bottom, #2F3640, #2F6486)',
      }
    },
  },
  plugins: [],
}