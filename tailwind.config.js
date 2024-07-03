/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          100: "#ececec",
          200: "#e3e3e3",
          300: "#cdcdcd",
          400: "#b4b4b4",
          500: "#9b9b9b",
          600: "#676767",
          700: "#424242",
          750: "#2f2f2f",
          800: "#212121",
          900: "#171717",
          950: "#0d0d0d",
        },
        red: {
          500: "#ef4444",
          700: "#b91c1c",
        },
        "brand-purple": { 50: "#ab68ff" },
      },
    },
  },
  plugins: [],
};
