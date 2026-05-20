/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ["agbalumo", "sans-serif"],
        cookie: ["cookie", "sans-serif"],
        molle: ["molle", "sans-serif"],
      },
    },
  },
  plugins: [],
};
