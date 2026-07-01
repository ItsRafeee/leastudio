import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#d8e0e0",
        "sage-dark": "#c4d0d0",
        blush: "#e8c9b0",
        "blush-dark": "#d4b49c",
        charcoal: "#2c2c2c",
        "warm-grey": "#6b6b6b",
        "light-grey": "#f4f4f2",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
