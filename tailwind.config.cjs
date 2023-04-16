/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tailwind-datepicker-react/dist/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

module.exports = config;
