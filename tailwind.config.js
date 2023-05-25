/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0E0E",
        dark: "#292929",
        dark2: "#2F2F2F",
        light: "#F8F8F8",
        label: "#908E9B",
        disabled: "#E1DFE9",
      },
    },
  },
  plugins: [],
};
