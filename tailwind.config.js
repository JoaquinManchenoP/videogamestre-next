module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1e2633",
        "neon-orange": "#ff5811",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
