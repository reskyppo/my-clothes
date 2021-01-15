module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        pinky: "#F46188",
        blue: "#7779FF",
        grey: "#8C999A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
