/** @type {import('tailwindcss').Config} */

const generateColor =
  (variable) =>
  ({opacityValue}) =>
    opacityValue
      ? `rgba(var(${variable}), ${opacityValue})`
      : `rgb(var(${variable}))`;

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/wrappers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E9942",
        secondary: "#f5f5f5",
        success: "#4BDE97",
        error: "#F7374E",
        pink: "#EE1C74",
        lightText: "#8a8a8a",
        black: "#121212",
      },

      boxShadow: {
        btn: "0px 10px 50px rgba(45,44,44,0.4)",
      },

      screens: {
        xs: "510px",
        mdx2: "890px",
        "2xl": "1500px",
      },

      fontFamily: {
        mono: "DM Mono, monospace",
        roboto: "Roboto, sans-serif",
      },

      keyframes: {
        pulse: {
          "0%, 100%": {transform: "scale(1)", opacity: 1},
          "50%": {transform: "scale(1.1)", opacity: 0.7},
        },
      },

      animation: {
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [],
};
