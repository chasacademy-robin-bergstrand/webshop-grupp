import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      colors: {
        mainColor: "#EEEDE7",
        darkGray: "#414754",
        lightGray: "#B9B7BD",
        btnMain: "#09476F",
        peach: "#F6B68A",
        btnRemove: "#88232B",
      },
      fontFamily: {
        poppins: ["font-family: 'Poppins', sans-serif;"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
