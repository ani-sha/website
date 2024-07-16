import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      "primary-light": "#FBFCFD",
      "primary-dark": "#111",
      "secondary-light": "#F2F4F7",
      "secondary-dark": "#202020",
      "text-light": "#111",
      "text-dark": "#E0E0E0",
      "text-secondary-light": "#687076",
      "text-secondary-dark": "#9ba1a6",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("@tailwindcss/typography")],
};
export default config;
