module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM-Sans", "sans-serif"],
      },
      colors: { primary: "#053d2d", secondary: "#066931" },
    },
  },
  plugins: [],
};
