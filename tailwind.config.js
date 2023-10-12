/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15b7b7",
        secondary: "#b7fbfb",
        accent:"#00ffff",
        text: "#ffffff",
        bg:"#040b0b",
      },
      fontFamily:{
        harry:"HARRYP",
        libro:"LIBRO"
      }
    },
  },
  plugins: [],
};
