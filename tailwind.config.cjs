/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004DB3",
        secondary: "#000F24",
        light: "#A1A1A1",
        dark: "#000F24",
        bg: "#F8F9FC",
      },
      maxWidth: {
        full: "1440px"
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        satoshi: ["'Satoshi'", "sans-serif"]
      }
    },
  },
  plugins: [],
};
