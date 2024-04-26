import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-light": "#FFF",
      "primary-dark": "#111",
      "secondary-light": "#F7F7F7",
      "secondary-dark": "#181818",
      "text-light": "#111",
      "text-dark": "#E0E0E0",
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
