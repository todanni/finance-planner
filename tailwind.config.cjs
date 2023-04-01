/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
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

        td: {
          "green-1": "#E8FDF2",
          "green-2": "#D1FBE4",
          "green-3": "#A2F7C9",
          "green-4": "#44EE93",
          "green-5": "#3D9469",
          "green-6": "#3A6754",
          "green-7": "#38504A",

          "gray-1": "#E6E7E7",
          "gray-2": "#CDCECF",
          "gray-3": "#909295",
          "gray-4": "#36393F",
          "gray-5": "#303238",
          "gray-6": "#292B30",
          "gray-7": "#1B1D20",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
