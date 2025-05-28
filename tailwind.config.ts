import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        bounceTwice: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
          "75%": { transform: "translateY(-12%)" },
        },
      },
      animation: {
        bounceTwice: "bounceTwice 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};

export default config;
