module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: "500px",
        xs: "630px",
        "lg-md": "850px",
      },
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
