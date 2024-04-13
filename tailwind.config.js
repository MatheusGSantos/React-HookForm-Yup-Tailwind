/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        page: "#081229",
        pink: {
          primary: "#ec5990",
          secondary: "#ff7eb6",
        },
        gray: {
          dark: "#0f111b",
        },
      },
    },
  },
  plugins: [],
};
