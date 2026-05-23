/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C8A951', light: '#e0c06a', dark: '#a08535' },
        rmgray: { DEFAULT: '#555', light: '#777', lighter: '#999' },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
