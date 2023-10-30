import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#EEEDE7",
        darkGray: "#414754",
        lightGray: "#B9B7BD",
        btnMain: "#09476F",
        peach: "#F6B68A",
        btnRemove: "#88232B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        menuModal: "0px 24px 48px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
