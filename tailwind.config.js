/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#003459",
      "secondary": "#40628b",
      "tertiary": "#dcf2ff",
      "gold": "#dda01e",
      "white": "#fff",
      "gray": "#cccccc",
      "gray1": "#919191",
      "black": "#000",
      "error": "#c20114",
      "error1": "#de3c4b",
      "error2": "#bb142b",

      "transparent": "#00000000"
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

