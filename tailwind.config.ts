import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      md: "425px",
      tablet: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      pink: "#C65DC6",
      bluishPurple: "#8058B8",
      metallic: "#262626",
      black: "#131313",
      gray: "#2e333d",
      purple: "#6bafd",
      white: "#ffffff",
      blueishGray: "#202329",
      transparent: "#00000000",
    },
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/mobile-background.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
