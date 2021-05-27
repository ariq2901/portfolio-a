module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      spacing: {
        "10px": "10px",
        "15px": "15px",
        "17px": "17px",
        "30px": "30px",
        "35": "35px",
        "38px": "38px",
        "60px": "60px",
        "69px": "69px",
        "70px": "70px",
        "230px": "230px",
        "270px": "270px",
        "300": "300px",
        "2.5-percent": "2.5%",
        "35-percent": "35%",
        "54-percent": "54%",
        "300-percent": "300%",
        "125-percent": "125%",
        "350": "350px",
        "2-px": "2px",
        "8-percent": "8%",
      },
      height: {
        showcase: "26rem",
        "90-percent": "90%",
        "85-percent": "85%",
        85: "22rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        "almost-13": "12.88px",
      },
      colors: {
        "base-font": "#333333",
        "long-font": "#666666",
        "sweetier-font": "#999999",
        "primary-color": "#54ca95",
        "secondary-color": "#6a5acd",
      },
      backgroundColor: {
        "glass": "#ffffff3c",
        "glass2": "rgba(255, 255, 255, 0.234)"
      },
      borderRadius: {
        "35": "35px",
      },
      gridTemplateColumns: {
        "skill": "0.1fr 1fr",
      },
      invert: {
        22: "22%",
      },
      sepia: {
        6: "6%",
      },
      saturate: {
        185: "185%",
      },
      contrast: {
        96: "96%",
      },
      fill: {
        none: "none",
        "fff": "#fff",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
      transform: ["hover", "focus"],
      backgroundColor: ["active"],
      boxShadow: ["active"],
    },
  },
  plugins: [],
};
