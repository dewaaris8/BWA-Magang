/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #E1D4ED, #E2E4F2)",
      },
    },
  },
  plugins: [],
};
