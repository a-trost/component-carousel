const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  important: false,
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  theme: {
    fontFamily: {
      display: ["Recoleta-Bold", "Cooper Black", "serif"],
      displayMedium: ["Recoleta-Medium", "Cooper Black", "serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
        "-5": "-5",
        "-10": "-10",
      },
      flex: {
        50: "1 1 50%",
        45: "1 1 45%",
        55: "1 1 55%",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
        105: "1.05",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "2xs": "11px",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      colors: {
        gray: colors.warmGray,
        eggplant: "#522D5B",
        pom: "#D7385E",
        peach: "#FB7B6B",
        cream: "#F6EEDF",
        creamBorder: "#E0D2B8",
        offWhite: "#FEFBF5",
        jockey: "#FBABBA",
        peppermint: "#F8574E",
        "peppermint-saturated": "#FF4237",
        "peppermint-dark": "#E24239",
        lucky: "#F9CB25",
        trailblazer: "#164993",
        lipizzan: "#DEDBE1",
        "lipizzan-dark": "#D2CCD8",
        trough: "#2BC1AE",
        offBlack: "#3F3A44",
        textBlack: "#534D4C",
        "cc-blue": "#283074",
        "cc-green": "#02BE83",
        "cc-pink": "#F05D79",
      },
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      "3xs": "12rem",
      "2xs": "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      ...breakpoints(theme("screens")),
    }),
  },
};
