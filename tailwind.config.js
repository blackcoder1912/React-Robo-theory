/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6495ED",
        secondary: "#FFE5B4",
        'custom-light-blue': '#e6f2ff',
        'custom-blue': '#f0f8ff'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
        }
      }
    },
  },
  plugins: [],
}
