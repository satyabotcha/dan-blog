module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        title: ["Roboto", , "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#DB0042",
        secondary: "#808080",
        moreBtn: "#555555",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
