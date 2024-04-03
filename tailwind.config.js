/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#40bc63", secondary: "#8911c2" ,dark:'#000000',danger:'#dd1013'},
      fontFamily: {},
    },
  },
  plugins: [],
};
