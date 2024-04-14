/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary500: "#C694AF",
        secondary500: "#8A7EA4",
        fontHeader: "#593D7C",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "16px",
          md: "24px",
          lg: "24px",
        },
      },
    },
  },
  plugins: [],
};
