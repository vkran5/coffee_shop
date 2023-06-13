/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F9C06A",
        coffee: "#603809",
        card: "#FFF9F1",
      },
      fontFamily: {
        clicker: ["Clicker Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        landingPage: "url('../assets/coffee_image.png')",
      },
    },
  },

  plugins: [],
};
