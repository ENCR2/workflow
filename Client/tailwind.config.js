/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NanumGothic: ["Nanum Gothic"],
      },
      boxShadow: {
        input: "0 0 0 1px rgb(0, 0, 0, 70%)",
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out forwards",
        fadeOut: "fadeOut 0.2s ease-out forwards",
        fadeInMove: "fadeInMove 0.2s ease-out forwards",
        fadeOutMove: "fadeOutMove 0.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInMove: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutMove: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
