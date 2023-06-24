/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#F9C06A',
        coffee: '#603809',
        card: '#FFF9F1',
      },
      fontFamily: {
        clicker: ['Clicker Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        header:
          "linear-gradient(89.82deg, #1e1e1e -6.88%, rgba(0, 0, 0, 0) 87.45%), url('../src/assets/coffee_image.png')",
        megatron:
          "linear-gradient(to bottom, #603809, rgba(103, 55, 1, 0.52)), url('../src/assets/glass_coffee.png')",
        subscription:
          "linear-gradient(to bottom, #603809, rgba(103, 55, 1, 0.52)), url('../src/assets/subscriptiom.png')",
      },
    },
  },

  plugins: [],
};
