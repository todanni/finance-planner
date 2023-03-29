/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'td-grn-0': '#D5F2E3',
        'td-grn-1': '#8DE8B7',
        'td-grn-2': '#44EE93',
        'td-grn-3': '#28C772',
        'td-grn-4': '#2B8F5A',
        'td-grn-5': '#2A6846',
        'td-grn-6': '#254C37',
        'td-grn-7': '#20382B',
        'td-grn-8': '#1B2A22',
        'td-gry-0': '#C0C1C2',

        'td-gry-1': '#9C9DA0',
        'td-gry-2': '#7E8085',
        'td-gry-3': '#66696E',
        'td-gry-4': '#53565B',
        'td-gry-5': '#43464C',
        'td-gry-6': '#36393F',
        'td-gry-7': '#2B2D30',
        'td-gry-8': '#222325',
      }
    },
  },
  plugins: [],
};

module.exports = config;
