/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#535636",
        backgroundColor: "#c2a878",
        linkColor: "#f1f5f2",
        coral: "#ff8552",
        auburn: "#9e2a2b",
        chocolate: "#540b0e",
        eggplant: "#734b5e",
        oxford: "#001427",
      },
      fontFamily: {
        bagnard: ["BagnardSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
