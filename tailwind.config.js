/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: "'Anton', serif",
        inter: "'Inter', serif",
      },
    },
  },
  plugins: [],
};
