module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },

        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8",
      },

      fontFamily: {
        headline: "Quicksand, sans-serif", //font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroudColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
};
