module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        showcase: "26rem",
        "90-percent": "90%",
        "85-percent": "85%",
        85: "22rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
