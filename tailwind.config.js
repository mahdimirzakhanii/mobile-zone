/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        '50': '#f1f4fd',
        '100': '#dfe7fa',
        '200': '#c5d5f8',
        '300': '#9ebbf2',
        '400': '#7097ea',
        '500': '#4169e1',
        '600': '#3957d7',
        '700': '#3044c5',
        '800': '#2d39a0',
        '900': '#29347f',
        '950': '#1d224e',
      },
      'yellow': {
        '50': '#ffffea',
        '100': '#fffcc5',
        '200': '#fff985',
        '300': '#fff046',
        '400': '#ffe11b',
        '500': '#ffc200',
        '600': '#e29600',
        '700': '#bb6b02',
        '800': '#985208',
        '900': '#7c430b',
        '950': '#482300',
      },
      'red': {
        '50': '#fff1f0',
        '100': '#ffdedd',
        '200': '#ffc4c2',
        '300': '#ff9b97',
        '400': '#ff625b',
        '500': '#ff3128',
        '600': '#fa1208',
        '700': '#d30a02',
        '800': '#ae0d06',
        '900': '#6e0e0a',
        '950': '#4f0300',
      },
      'gray': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#919191',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
      },


      transparent: "#00000000",
      white: "#fff",
      black: "#000",
    },
    // colors: {
    //   "primary": "#003459",
    //   "secondary": "#40628b",
    //   "tertiary": "#dcf2ff",
    //   "gold": "#dda01e",
    //   "gray": "#cccccc",
    //   "gray1": "#919191",
    //   "error": "#c20114",
    //   "error1": "#de3c4b",
    //   "error2": "#bb142b",

    //   "transparent": "#00000000"
    // },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

