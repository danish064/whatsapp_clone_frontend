/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E282A",
        primaryLight: "#7D7D7D",
        secondary: "#0B7A75",
      },
    },
  },
  plugins: [],
};
