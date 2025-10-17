/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "bgPrimary": "#2A6F97",
      },
      fontFamily:{
        "urbanist": "@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');",
      },
    },
  },
  plugins: [],
};
