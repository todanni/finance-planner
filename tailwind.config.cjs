/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        grn: {
          100: "#dafce9",
          200: "#b4f8d4",
          300: "#8ff5be",
          400: "#69f1a9",
          500: "#44ee93",
          600: "#36be76",
          700: "#298f58",
          800: "#1b5f3b",
          900: "#0e301d",
        },

        gry: {
          100: "#d1d1d2",
          200: "#a3a3a5",
          300: "#757677",
          400: "#47484a",
          500: "#191a1d",
          600: "#141517",
          700: "#0f1011",
          800: "#0a0a0c",
          900: "#050506",
        },

        gray: {
          100: "#d1d1d2",
          200: "#a3a3a5",
          300: "#757677",
          400: "#47484a",
          500: "#191a1d",
          600: "#141517",
          700: "#0f1011",
          800: "#0a0a0c",
          900: "#050506",
        },

        "td-grn-0": "#D5F2E3",
        "td-grn-1": "#8DE8B7",
        "td-grn-2": "#44EE93",
        "td-grn-3": "#28C772",
        "td-grn-4": "#2B8F5A",
        "td-grn-5": "#2A6846",
        "td-grn-6": "#254C37",
        "td-grn-7": "#20382B",
        "td-grn-8": "#1B2A22",
        "td-gry-0": "#C0C1C2",

        "td-gry-1": "#9C9DA0",
        "td-gry-2": "#7E8085",
        "td-gry-3": "#66696E",
        "td-gry-4": "#53565B",
        "td-gry-5": "#43464C",
        "td-gry-6": "#36393F",
        "td-gry-7": "#2B2D30",
        "td-gry-8": "#222325",
      },
    },
  },
  plugins: [],
};

module.exports = config;
