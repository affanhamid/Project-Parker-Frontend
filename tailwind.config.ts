import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#131313",
      gray: "#2e333d",
      purple: "#6bafd",
      white: "#ffffff",
      blueishGray: "#202329",
      transparent: "#00000000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
