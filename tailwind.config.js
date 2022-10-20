const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.orange,
        contrast: colors.violet
      }
    },
  },
  plugins: [],
};
