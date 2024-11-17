/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(111, 76, 255, <alpha-value>)',
        textColor: 'rgba(256, 256, 256, <alpha-value>)',
      },
    },
  },
  plugins: [],
};