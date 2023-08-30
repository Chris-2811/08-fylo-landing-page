module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      heading: ["Raleway", "sans-serif"],
    },
    colors: {
      "dark-blue-intro": "hsl(217, 28%, 15%)",
      "dark-blue-main": "hsl(218, 28%, 13%)",
      "dark-blue-footer": "hsl(216, 53%, 9%)",
      "dark-blue-testimonials": "hsl(219, 30%, 18%)",
      cyan: "hsl(176, 68%, 64%)",
      blue: "hsl(198, 60%, 50%)",
      "light-red": "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
    backgroundImage: (theme) => ({
      "curvy-dark-mode": "url('../images/bg-curvy-desktop.svg')",
      "curvy-dark-mode-mobile": "url('../images/bg-curvy-mobile.svg')",
    }),
    extend: {},
  },
  plugins: [],
};
