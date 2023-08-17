import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xxs": "160px",
      "xs": "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // PRIMARY GREEN
        "primary-green": "#014903",
        "primary-green/50": "#72B673",
        "primary-green/100": "#2C802E",

        // PRIMARY RED
        "primary-red": "#8D0101",
        "primary-red/50": "#CE5E5E",
        "primary-red/100": "#6D1515",

        // PRIMARY YELLOW
        "primary-yellow": "#FFFB06",
        "primary-yellow/50": "#FFFD6D",
        "primary-yellow/100": "#E1DE00",

        // SECONDARY COLORS
        success: "#00B998",
        info: "#004CE8",
        warning: "#EF4C00",
        error: "#FF3333",
        disabled: "#D8D8D8",

        // GRAYSCALE
        grayscale: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        black: "#212121",
        "black/50": "#9E9E9E",
        "black/100": "rgb(107 114 128)",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
