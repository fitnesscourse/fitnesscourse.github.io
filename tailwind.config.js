/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Inter", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
