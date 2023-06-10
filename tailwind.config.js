/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto": "auto-fit, minmax(75px, 1f1)",
      }
    },
  },
  plugins: [],
}

