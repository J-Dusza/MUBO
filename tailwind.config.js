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
        primary: "#48BF84",
        secondary: "#C5D1Ev",
        background: "#C4B1AE",
        "toxic-100": "#61D095",
        "toxic-200": "#48BF84",
        "toxic-300": "#439775",
        "toxic-400": "#2A4747",
        highlight2: "#439775",
        customViolet: "#91A6FF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: false,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#000",
          accent: "#ffffff",
          "primary-focus": "#48BF84",
        },
      },
    ],
  },
};
