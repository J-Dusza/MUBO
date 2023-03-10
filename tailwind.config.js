/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003844",
        secondary: "#CEB5A7",
        background: "#F5EFED",
        highlight1: "#A9714B",
        highlight2: "#006C67",
        customViolet: "#91A6FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
