/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : {
          100 : "#DEEBEC",
          200 : "#BED9DD",
          500 : "#B19149",
          900 : "#005354"
        }
      }
    },
  },
  plugins: [],
}